<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

const props = withDefaults(
  defineProps<{
    avatar: string;
    avatarColor: string;
    isEdit?: boolean;
    class?: string;
  }>(),
  {
    class: "",
  },
);

const emit = defineEmits<{
  "update:avatar": [file: File];
}>();

const fileInputRef = ref<HTMLInputElement | null>(null);
const previewUrl = ref<string | null>(null);

const onAvatarClick = () => {
  if (props.isEdit) {
    fileInputRef.value?.click();
  }
};

const onFileChange = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
  }

  previewUrl.value = URL.createObjectURL(file);
  emit("update:avatar", file);
};

onUnmounted(() => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
  }
});
</script>

<template>
  <div :class="cn('relative w-fit size-8', props.class)">
    <Avatar
      :class="[
        'cursor-pointer transition-opacity size-full',
        isEdit && 'hover:opacity-60',
      ]"
      @click="onAvatarClick"
    >
      <AvatarImage :src="previewUrl ?? avatar" />
      <AvatarFallback
        :style="{ backgroundColor: avatarColor }"
        class="flex items-center justify-center"
      >
        <span class="text-center text-lg font-semibold">
          {{ avatar }}
        </span>
      </AvatarFallback>
    </Avatar>

    <div
      v-if="isEdit"
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/30"
    >
      <MyIcon icon-name="PencilIcon" class="h-4 w-4 text-white" />
    </div>

    <input
      ref="fileInputRef"
      type="file"
      accept="image/jpeg,image/png,image/webp"
      class="hidden"
      @change="onFileChange"
    />
  </div>
</template>
