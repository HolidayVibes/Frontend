import { AuthConst, type AuthModel } from "..";

export async function login(
  payload: AuthModel.LoginPayload,
): Promise<{ error: unknown | null }> {
  try {
    await useRequest({
      url: AuthConst.BASE_URL + "/login",
      method: "POST",
      body: payload,
    });

    return { error: null };
  } catch (error) {
    return { error };
  }
}
