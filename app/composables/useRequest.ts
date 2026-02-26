import axios, {
  type AxiosHeaders,
  type AxiosResponse,
  type Method,
  type ResponseType,
} from "axios";

interface IRequest<TParams = unknown, TBody = unknown> {
  url: string;
  method?: Method;
  params?: TParams;
  body?: TBody;
  headers?: AxiosHeaders;
  type?: ResponseType;
}

export const useRequest = async <TResponse, TParams = unknown, TBody = unknown>(
  request: IRequest<TParams, TBody>,
): Promise<AxiosResponse<TResponse>> => {
  const config = useRuntimeConfig();

  return axios.request<TResponse>({
    url: request.url,
    method: request.method ?? "get",
    baseURL: config.public.url as string,
    params: request.params,
    data: request.body,
    responseType: request.type ?? "json",
    headers: request.headers,
    withCredentials: true,
  });
};
