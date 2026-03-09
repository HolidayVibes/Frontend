import type { H3Event } from "h3";
import { appendHeader, getRequestHeaders } from "h3";
import { FetchError } from "ofetch";

export default defineEventHandler(async (event) => {
  try {
    return await fetchUser(event);
  } catch (error) {
    if (isUnauthorizedError(error)) {
      await refreshTokens(event);
      return await fetchUser(event);
    }
    throw error;
  }
});

async function fetchUser(event: H3Event) {
  const config = useRuntimeConfig();
  const { cookie } = getRequestHeaders(event);

  return await $fetch(`${config.public.url}/api/v1/user/me`, {
    headers: { cookie: cookie ?? "" },
  });
}

async function refreshTokens(event: H3Event): Promise<void> {
  const config = useRuntimeConfig();
  const { cookie } = getRequestHeaders(event);

  const response = await $fetch.raw(
    `${config.public.url}/api/v1/auth/refresh`,
    {
      method: "POST",
      headers: { cookie: cookie ?? "" },
    },
  );

  const setCookies = response.headers.getSetCookie?.() ?? [];

  for (const c of setCookies) {
    appendHeader(event, "set-cookie", c);
  }

  const newCookies = setCookies.map((c) => c.split(";")[0]).join("; ");
  event.node.req.headers.cookie = `${cookie ?? ""}; ${newCookies}`;
}

function isUnauthorizedError(error: unknown): error is FetchError {
  return error instanceof FetchError && error.response?.status === 401;
}
