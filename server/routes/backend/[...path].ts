import { proxyRequest } from "h3";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const path = getRouterParam(event, "path");

  return proxyRequest(event, `${config.public.url}/${path}`);
});
