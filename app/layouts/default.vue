<script lang="ts" setup>
import { AuthModalEnum } from "#shared/enums/authModal.enum";
import "vue-sonner/style.css";
import type { IUser } from "#shared/entities/User";

const router = useRouter();
const route = useRoute();

const userStore = useUserStore();

const { data } = await useAsyncData("user-me", async () => {
  const headers = useRequestHeaders(["cookie"]);

  return $fetch<IUser>("/api/me", {
    headers,
    credentials: "include",
  });
});

if (data.value) {
  userStore.user = data.value;
  userStore.isUserAuthorised = true;
  sessionStorage.removeItem("modal-closed");
}

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
    if (!val) {
      sessionStorage.setItem("modal-closed", "true");
      modalType.value = null;
    }
  },
});

const switchMode = (mode: AuthModalEnum) => {
  modalType.value = mode;
};
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <Toaster position="top-right" theme="dark" rich-colors />
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
