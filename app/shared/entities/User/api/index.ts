import { type IUser, UserConst } from "..";

export async function me() {
  const userStore = useUserStore();

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
