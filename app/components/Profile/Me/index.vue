<script setup lang="ts">
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { UserApi, type UserModels } from "@/shared/entities/User";
import { toast } from "vue-sonner";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const isEdit = computed(() => !!route.query["is-edit"]);

const buttonText = computed(() =>
  isEdit.value ? "Сохранить изменения" : "Редактировать",
);

const buttonVariant = computed(() => (isEdit.value ? "default" : "outline"));
const { avatar, avatarColor } = useUserAvatar();

const schema = z.object({
  avatar: z
    .instanceof(File)
    .refine((f) => f.size <= 5 * 1024 * 1024, "Максимальный размер 5MB")
    .refine(
      (f) => ["image/jpeg", "image/png", "image/webp"].includes(f.type),
      "Только JPEG, PNG, WebP",
    )
    .optional(),
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
});

const { handleSubmit, setFieldValue, handleReset } = useForm<UserModels.edit>({
  validationSchema: toTypedSchema(schema),
  initialValues: {
    firstName: userStore.user?.firstName,
    lastName: userStore.user?.lastName,
  },
});

const onSubmit = handleSubmit((values) => {
  UserApi.edit(values)
    .then((res) => {
      toast.success("Пользователь успешно изменён");
      return res;
    })
    .then((res) => {
      userStore.user = res;
      stopEdit();

      return res;
    })
    .catch((error) => {
      toast.error(error.message);
      return;
    });
});

const submitForm = () => {
  if (!isEdit.value) {
    router.push({
      query: {
        ...route.query,
        "is-edit": "true",
      },
    });

    return;
  }

  onSubmit();
};
const stopEdit = (reset = false) => {
  router.push({
    query: {
      ...route.query,
      "is-edit": undefined,
    },
  });

  if (reset) handleReset();
};
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <MyIcon icon-name="UserCog" />
      <div class="text-lg">Личная информация</div>
    </div>
    <form>
      <MyAvatar
        :avatar="avatar"
        :avatar-color="avatarColor"
        :is-edit="isEdit"
        class="mx-auto mb-5 size-20"
        @update:avatar="(file) => setFieldValue('avatar', file)"
      />
      <div class="grid grid-cols-2 gap-4">
        <FormField v-slot="{ componentField }" name="firstName">
          <FormItem>
            <FormLabel>Имя</FormLabel>
            <FormControl>
              <Input
                v-bind="componentField"
                placeholder="John"
                :disabled="!isEdit"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="lastName">
          <FormItem>
            <FormLabel>Фамилия</FormLabel>
            <FormControl>
              <Input
                v-bind="componentField"
                placeholder="Doe"
                :disabled="!isEdit"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
    </form>
    <div class="flex gap-3">
      <Button :variant="buttonVariant" @click="submitForm">
        {{ buttonText }}
      </Button>
      <Button v-if="isEdit" variant="outline" @click="stopEdit(true)">
        Отмена
      </Button>
    </div>
  </div>
</template>
