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

const isEdit = computed(() => !!route.query["is-edit"]);

const buttonText = computed(() =>
  isEdit.value ? "Сохранить изменения" : "Редактировать",
);

const buttonVariant = computed(() => (isEdit.value ? "default" : "outline"));

const schema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
});

const form = useForm<UserModels.edit>({
  validationSchema: toTypedSchema(schema),
});

const onSubmit = form.handleSubmit((values) => {
  UserApi.edit(values)
    .then((res) => {
      toast.success("Пользователь успешно изменён");

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
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <MyIcon icon-name="UserCog" />
      <div class="text-lg">Личная информация</div>
    </div>
    <form class="grid grid-cols-2 gap-4">
      <FormField v-slot="{ componentField }" name="firstName">
        <FormItem>
          <FormLabel>Имя</FormLabel>
          <FormControl>
            <Input v-bind="componentField" placeholder="John" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="lastName">
        <FormItem>
          <FormLabel>Фамилия</FormLabel>
          <FormControl>
            <Input v-bind="componentField" placeholder="Doe" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </form>
    <div>
      <Button :variant="buttonVariant" @click="submitForm">
        {{ buttonText }}
      </Button>
    </div>
  </div>
</template>
