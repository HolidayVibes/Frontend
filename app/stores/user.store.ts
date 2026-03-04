import { defineStore } from "pinia";
import type { IUser } from "#shared/entities/User/interfaces/IUser";

export const useUserStore = defineStore("userStore", () => {
  const user = ref<IUser | null>(null);
  const isUserAuthorised = ref<boolean>(false);
  const isUserLoading = ref<boolean>(true);

  const logout = () => {
    user.value = null;
    isUserAuthorised.value = false;
  };

  return {
    user,
    isUserAuthorised,
    isUserLoading,
    logout,
  };
});
