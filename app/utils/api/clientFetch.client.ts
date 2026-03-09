import type { IRequest } from "~/composables/useRequest";

export async function clientFetch<TResponse>(
  request: IRequest,
): Promise<TResponse> {
  const { $api } = useNuxtApp();

  return await $api<TResponse>(request.url, {
    method: request.method ?? "GET",
    query: request.params,
    body: request.body,
    headers: request.headers,
    responseType: request.type ?? "json",
  });
}
