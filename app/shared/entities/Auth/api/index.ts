import { AuthConst, type AuthModel } from "..";
import { FetchError } from "ofetch";

export async function login(
  payload: AuthModel.LoginPayload,
): Promise<{ error: FetchError | null }> {
  try {
    await useRequest({
      url: AuthConst.BASE_URL + "/login",
      method: "POST",
      body: payload,
    });

    return { error: null };
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      return { error };
    }

    return {
      error: new FetchError("Ошибка входа"),
    };
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
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      return { error };
    }

    return {
      error: new FetchError("Ошибка регистрации"),
    };
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
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      return { error };
    }

    return {
      error: new FetchError("Ошибка регистрации"),
    };
  }
}

export async function logout() {
  try {
    await useRequest({
      url: AuthConst.BASE_URL + "/logout",
      method: "POST",
    });
  } catch (error: unknown) {
    if (error instanceof FetchError) {
      return { error };
    }

    return {
      error: new FetchError("Ошибка выхода"),
    };
  }

  clearNuxtData("user-me");

  useUserStore().logout();

  await navigateTo("/", { replace: true });

  return { error: null };
}
