export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const headers = getRequestHeaders(event);

  const refreshToken = getCookie(event, "refreshToken");

  console.log(refreshToken);

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
    },
  );

  console.log(refreshResponse);

  const setCookie = refreshResponse.headers.get("set-cookie");
  if (setCookie) {
    appendHeader(event, "set-cookie", setCookie);
  }

  const meResponse = await $fetch(`${config.public.url}/user/me`, {
    headers: {
      cookie: headers.cookie || "",
    },
  });

  console.log(meResponse);

  return meResponse;
});
