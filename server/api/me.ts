import {
  appendHeader,
  createError,
  defineEventHandler,
  getCookie,
  getRequestHeaders,
} from "h3";
import { useRuntimeConfig } from "#imports";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const headers = getRequestHeaders(event);

  const refreshToken = getCookie(event, "refreshToken");

  if (!refreshToken) {
    throw createError({
      statusCode: 401,
      statusMessage: "No refresh token",
    });
  }

  const refreshResponse = await $fetch.raw(
    `${config.public.url}/auth/refresh`,
    {
      headers: {
        cookie: headers.cookie || "",
      },
      method: "POST",
    },
  );

  const newCookies = refreshResponse.headers.get("set-cookie");

  if (newCookies) {
    appendHeader(event, "set-cookie", newCookies);
  }

  const meResponse = await $fetch(`${config.public.url}/user/me`, {
    headers: {
      cookie: newCookies || headers.cookie || "",
    },
  });

  return meResponse;
});
