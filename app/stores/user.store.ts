import { defineStore } from "pinia";
import type { IUser } from "#shared/interfaces/IUser";

export const useUserStore = defineStore("userStore", () => {
  const user = ref<IUser | null>(null);
  const isUserAuthorised = ref<boolean>(false);
  const isUserLoading = ref<boolean>(true);

  return {
    user,
    isUserAuthorised,
    isUserLoading,
  };
});
