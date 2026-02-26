<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { authModalType } from "#shared/interfaces/IAuthModal";
import { AuthModalEnum } from "#shared/enums/authModal.enum";
import { AuthApi, type AuthModel } from "#shared/entities/Auth";
import { UserApi } from "#shared/entities/User";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";

const { modalType } = defineProps<{
  modalType: authModalType;
}>();

const isModalOpen = defineModel<boolean>("isModalOpen", {
  required: true,
});

const isLoginType = computed<boolean>(() => modalType === "login");
const validationSchema = computed(() =>
  isLoginType.value ? loginFormSchema : registerFormSchema,
);

const loginFormSchema = toTypedSchema(
  z.object({
    email: z.string().email().max(30),
    password: z.string().min(8).max(30),
  }),
);

const registerFormSchema = toTypedSchema(
  z.object({
    email: z.string().email().max(30),
    password: z.string().min(8).max(30),
  }),
);

const form = useForm({
  validationSchema,
});

const login = async (values: AuthModel.LoginPayload) => {
  const { error } = await AuthApi.login(values);

  if (error) return;
  await UserApi.me();
};

const register = async (values) => {};

const handleSubmit = form.handleSubmit(async (values) => {
  if (isLoginType.value) {
    await login(values);
  } else {
    await register(values);
  }
});
</script>

<template>
  <Dialog v-model:open="isModalOpen">
    <DialogContent class="max-w-[825px]">
      <form @submit="handleSubmit">
        <DialogHeader>
          <DialogTitle>
            {{ AuthModalEnum[modalType] }}
          </DialogTitle>
        </DialogHeader>
        <Tabs :model-value="modalType">
          <TabsContent value="login">
            <AuthLoginForm />
          </TabsContent>
          <TabsContent value="register"> liziii</TabsContent>
        </Tabs>
        <DialogFooter>
          <div class="flex gap-3 justify-end mt-5">
            <DialogClose as-child>
              <Button variant="outline">Отмена</Button>
            </DialogClose>
            <Button type="submit">
              {{ isLoginType ? "Войти" : "Зарегестрироватся" }}
            </Button>
          </div>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
