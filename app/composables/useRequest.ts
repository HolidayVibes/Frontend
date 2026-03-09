/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FetchOptions } from "ofetch";

export interface IRequest<
  TParams extends Record<string, any> = Record<string, any>,
  TBody extends Record<string, any> = Record<string, any>,
> {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  params?: TParams;
  body?: TBody;
  headers?: HeadersInit;
  type?: FetchOptions["responseType"];
}

export const useRequest = async <
  TResponse,
  TParams extends Record<string, any> = Record<string, any>,
  TBody extends Record<string, any> = Record<string, any>,
>(
  request: IRequest<TParams, TBody>,
): Promise<TResponse> => {
  const { $api } = useNuxtApp();

  return await $api<TResponse>(request.url, {
    method: request.method ?? "GET",
    query: request.params,
    body: request.body,
    headers: request.headers,
    responseType: request.type ?? "json",
  });
};
