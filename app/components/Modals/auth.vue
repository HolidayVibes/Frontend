<script setup lang="ts">
// TODO: Сделать нормальное отображение ошибок через тост
// TODO: При рефреш запросе обратно ставить accessCookie
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AuthModalEnum,
  AuthModalEnumMap,
  AuthSubmitButton,
} from "#shared/enums/authModal.enum";
import { AuthApi, type AuthModel } from "#shared/entities/Auth";
import { UserApi } from "#shared/entities/User";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";
import {
  PinInput,
  PinInputGroup,
  PinInputSlot,
} from "@/components/ui/pin-input";

const { modalType } = defineProps<{
  modalType: AuthModalEnum;
}>();
const emits = defineEmits<{
  (name: "switchMode", e: AuthModalEnum): void;
}>();

const verifyEmailCode = ref<string[]>([]);

const isModalOpen = defineModel<boolean>("isModalOpen", {
  required: true,
});

const validationSchema = computed(() =>
  modalType === AuthModalEnum.LOGIN ? loginFormSchema : registerFormSchema,
);

const loginFormSchema = toTypedSchema(
  z.object({
    email: z.string().email().max(30),
    password: z.string().min(8).max(30),
  }),
);

const registerFormSchema = toTypedSchema(
  z.object({
    firstName: z.string().max(30),
    lastName: z.string().max(30),
    email: z.string().email().max(30),
    passwordHash: z.string().min(8).max(30),
    birthDate: z.string(),
  }),
);

const form = useForm({
  validationSchema,
});

const login = async (values: AuthModel.LoginPayload) => {
  const { error } = await AuthApi.login(values);

  if (error) return;

  await UserApi.me();
  isModalOpen.value = false;
};

const register = async (values: AuthModel.RegisterPayload) => {
  const { error } = await AuthApi.register(values);

  if (error) return;

  emits("switchMode", AuthModalEnum.EMAIL_VERIFICATION);
};

const verifyEmail = async () => {
  const { error } = await AuthApi.verifyEmail({
    code: verifyEmailCode.value.join(""),
  });

  if (error) return;

  await UserApi.me();

  isModalOpen.value = false;
};

const handleSubmit = form.handleSubmit(async (values) => {
  const actions = {
    [AuthModalEnum.LOGIN]: () => login(values),
    [AuthModalEnum.REGISTER]: () => register(values),
    [AuthModalEnum.EMAIL_VERIFICATION]: () => verifyEmail(),
  };

  await actions[modalType]?.();
});
</script>

<template>
  <Dialog v-model:open="isModalOpen">
    <DialogContent class="max-w-[825px]">
      <form @submit="handleSubmit">
        <DialogHeader>
          <DialogTitle>
            {{ AuthModalEnumMap[modalType] }}
          </DialogTitle>
        </DialogHeader>

        <AuthLoginForm v-if="modalType === AuthModalEnum.LOGIN" />
        <AuthRegisterForm v-else-if="modalType === AuthModalEnum.REGISTER" />
        <div
          v-else-if="modalType === AuthModalEnum.EMAIL_VERIFICATION"
          class="flex flex-col gap-5 items-center my-10"
        >
          <div class="text-center">
            <div>Введите код</div>
            <DialogDescription
              v-if="modalType === AuthModalEnum.EMAIL_VERIFICATION"
            >
              На вашу почту отправлено письмо с кодом подтверждения.
            </DialogDescription>
          </div>
          <PinInput
            id="pin-input"
            v-model="verifyEmailCode"
            @complete="verifyEmail"
          >
            <PinInputGroup class="gap-3">
              <template v-for="(id, index) in 6" :key="id">
                <PinInputSlot class="rounded-md border h-12" :index="index" />
              </template>
            </PinInputGroup>
          </PinInput>
        </div>
        <DialogFooter>
          <div class="flex gap-3 justify-end mt-5">
            <DialogClose as-child>
              <Button variant="outline">Отмена</Button>
            </DialogClose>
            <Button type="submit">
              {{ AuthSubmitButton[modalType] }}
            </Button>
          </div>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
