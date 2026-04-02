import { type MusicModels, type IMusic, MusicConsts } from "..";

import type {
  IPagination,
  IPaginationPayload,
} from "#shared/interfaces/IPagination";
import { useRequest } from "@/composables/useRequest";

export async function getAll(
  payload: IPaginationPayload,
): Promise<IPagination<IMusic>> {
  return await useRequest<IPagination<IMusic>, IPaginationPayload, never>({
    url: MusicConsts.BASE_URL,
    params: payload,
  });
}

export async function getOne({
  id,
}: MusicModels.IPayloadGetOne): Promise<IMusic> {
  return await useRequest<IMusic, never, never>({
    url: MusicConsts.BASE_URL + "/" + id,
  });
}

export async function create(
  payload: MusicModels.IPayloadCreate,
): Promise<IMusic> {
  return await useRequest<IMusic, never, MusicModels.IPayloadCreate>({
    url: MusicConsts.BASE_URL,
    method: "POST",
    body: payload,
  });
}

export async function update({
  id,
  ...body
}: MusicModels.IPayloadUpdate): Promise<IMusic> {
  return await useRequest<
    IMusic,
    never,
    Omit<MusicModels.IPayloadUpdate, "id">
  >({
    url: MusicConsts.BASE_URL + "/" + id,
    method: "POST",
    body,
  });
}

export async function remove({
  id,
}: MusicModels.IPayloadDelete): Promise<IMusic> {
  return await useRequest<IMusic, never, never>({
    url: MusicConsts.BASE_URL + "/" + id,
    method: "DELETE",
  });
}
