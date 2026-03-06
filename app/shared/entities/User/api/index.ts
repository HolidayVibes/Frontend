import { type IUser, UserConst, UserModels } from "..";
import { FetchError } from "ofetch";

const userStore = useUserStore();

export async function me() {
  userStore.isUserLoading = true;

  try {
    const userData = await useRequest<IUser>({
      url: UserConst.BASE_URL + "/me",
    });

    userStore.user = userData.data;
    userStore.isUserAuthorised = true;

    return userData;
  } catch (error) {
    userStore.user = null;
    userStore.isUserAuthorised = false;

    throw error;
  } finally {
    userStore.isUserLoading = false;
  }
}

export async function edit(values: UserModels.edit) {
  try {
    const userData = await useRequest<IUser, never, UserModels.edit>({
      url: UserConst.BASE_URL,
      method: "PUT",
      body: values,
    });

    userStore.user = userData.data;

    return userData;
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      return { error };
    }

    return new FetchError("Ошибка редактирования пользователя");
  }
}
