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

export async function register(payload: AuthModel.RegisterPayload) {
  try {
    await useRequest({
      url: AuthConst.BASE_URL + "/register",
      method: "POST",
      body: payload,
    });

    return { error: null };
  } catch (error) {
    return { error };
  }
}

export async function verifyEmail(payload: AuthModel.VerifyEmailPayload) {
  try {
    await useRequest({
      url: AuthConst.BASE_URL + "/verify-email",
      method: "POST",
      body: payload,
    });

    return { error: null };
  } catch (error) {
    return { error };
  }
}
