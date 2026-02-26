import { type IUser, UserConst } from "..";

export async function me() {
  const userData = await useRequest<IUser>({
    url: UserConst.BASE_URL + "/me",
  });

  useUserStore().user = userData.data;

  return userData;
}
