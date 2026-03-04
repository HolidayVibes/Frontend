import type { H3Event } from "h3";
import { FetchError } from "ofetch";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const headers = getRequestHeaders(event);

  try {
    return await $fetch(`${config.public.url}/user/me`, {
      headers: {
        cookie: headers.cookie || "",
      },
    });
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      if (error.response?.status === 401) {
        const newCookieHeader = await refreshTokens(event);

        return await $fetch(`${config.public.url}/user/me`, {
          headers: {
            cookie: newCookieHeader,
          },
        });
      }
    }
    throw error;
  }
});

async function refreshTokens(event: H3Event) {
  const config = useRuntimeConfig();
  const headers = getRequestHeaders(event);

  const response = await $fetch.raw(`${config.public.url}/auth/refresh`, {
    method: "POST",
    headers: {
      cookie: headers.cookie || "",
    },
  });

  const setCookies = response.headers.getSetCookie?.();

  if (!setCookies) return headers.cookie || "";

  for (const cookie of setCookies) {
    appendHeader(event, "set-cookie", cookie);
  }

  const updatedCookies = [...setCookies].map((c) => c.split(";")[0]).join("; ");

  return updatedCookies;
}
