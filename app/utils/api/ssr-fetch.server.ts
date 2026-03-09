import { FetchError } from "ofetch";
import { getRequestHeaders } from "h3";
import { applySsrRefreshedCookies } from "@/utils/api/ssr-cookies.server";
import type { IRequest } from "@/composables/useRequest";
import type { H3Event } from "h3";

interface SsrFetchContext {
  baseURL: string;
  ssrHeaders: Record<string, string>;
  event: H3Event;
}

export async function ssrFetch<TResponse>(
  request: IRequest,
  context: SsrFetchContext,
  isRetry = false,
): Promise<TResponse> {
  const { baseURL, ssrHeaders, event } = context;

  try {
    return await $fetch<TResponse>(request.url, {
      baseURL,
      method: request.method ?? "GET",
      query: request.params,
      body: request.body,
      responseType: request.type ?? "json",
      headers: {
        ...ssrHeaders,
        ...request.headers,
      },
    });
  } catch (error: unknown) {
    const is401 = error instanceof FetchError && error.response?.status === 401;

    if (is401 && !isRetry) {
      await ssrRefreshTokens(baseURL, event);
      return await ssrFetch<TResponse>(request, context, true);
    }

    throw error;
  }
}

async function ssrRefreshTokens(
  baseURL: string,
  event: H3Event,
): Promise<void> {
  const requestHeaders = getRequestHeaders(event);

  const response = await $fetch.raw(`${baseURL}/auth/refresh`, {
    method: "POST",
    headers: {
      cookie: requestHeaders.cookie ?? "",
    },
  });

  const setCookies = response.headers.getSetCookie?.() ?? [];

  if (setCookies.length === 0) {
    throw new FetchError("Refresh failed: no Set-Cookie in response");
  }

  await applySsrRefreshedCookies(event, setCookies);
}
