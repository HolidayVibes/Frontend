<script lang="ts" setup>
import type { IUser } from "#shared/entities/User/interfaces/IUser";
import { AuthModalEnum } from "#shared/enums/authModal.enum";

const userStore = useUserStore();
const route = useRoute();

if (userStore.isUserLoading) {
  const { data } = await useFetch<IUser>("/api/me", {
    credentials: "include",
  });

  if (data.value) {
    userStore.user = data.value;
    userStore.isUserAuthorised = true;
  }

  userStore.isUserLoading = false;
}

const router = useRouter();

const modalType = computed<AuthModalEnum | null>({
  get: () => {
    const modal = route.query.modal;

    if (
      typeof modal === "string" &&
      Object.values(AuthModalEnum).includes(modal as AuthModalEnum)
    ) {
      return modal as AuthModalEnum;
    }

    return null;
  },

  set: (value: AuthModalEnum | null) => {
    const query = { ...route.query };

    if (value) {
      query.modal = value;
    } else {
      delete query.modal;
    }

    router.replace({ query });
  },
});

const isOpen = computed<boolean>({
  get: () => !!modalType.value,
  set: (val: boolean) => {
    if (!val) modalType.value = null;
  },
});

const switchMode = (mode: AuthModalEnum) => {
  modalType.value = mode;
};
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <div class="max-lg:hidden">
      <Header />
    </div>
    <HeaderSidebar class="lg:hidden" />
    <div class="main-content flex-grow">
      <slot></slot>
    </div>
    <span class="border-b-2 border-neutral-400/20" />
    <Footer />
    <ModalsAuth
      v-model:is-modal-open="isOpen"
      :modal-type="modalType ?? AuthModalEnum.LOGIN"
      @switchMode="switchMode"
    />
  </div>
</template>

<style scoped lang="scss">
.main-content {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
}
</style>
