import type { UserModels, type IUser, UserConst } from "..";

import { FetchError } from "ofetch";

export async function me() {
  const userStore = useUserStore();

  userStore.isUserLoading = true;

  try {
    const userData = await useRequest<IUser>({
      url: UserConst.BASE_URL + "/me",
    });

    userStore.user = userData;
    userStore.isUserAuthorised = true;

    return userData;
  } catch {
    userStore.user = null;
    userStore.isUserAuthorised = false;

    return null;
  } finally {
    userStore.isUserLoading = false;
  }
}

export async function edit(values: UserModels.edit) {
  const userStore = useUserStore();

  const formData = Object.entries(values).reduce((acc, [key, value]) => {
    if (value instanceof File) {
      acc.append(key, value);
    } else if (value !== undefined && value !== null && value !== "") {
      acc.append(key, String(value));
    }
    return acc;
  }, new FormData());

  try {
    const userData = await useRequest<IUser>({
      url: UserConst.BASE_URL,
      method: "PUT",
      body: formData,
    });

    userStore.user = userData;

    return userData;
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      throw error;
    }

    throw new FetchError("Ошибка редактирования пользователя");
  }
}
