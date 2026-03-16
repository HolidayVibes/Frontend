<script setup lang="ts">
const { isEdit, avatar } = defineProps<{
  avatar: string;
  avatarColor: string;
  isEdit?: boolean;
}>();

const emit = defineEmits<{
  "update:avatar": [file: File];
}>();

const fileInputRef = ref<HTMLInputElement | null>(null);
const previewUrl = ref<string | null>(null);

const onAvatarClick = () => {
  if (isEdit) {
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
  <div class="relative w-fit">
    <Avatar
      :class="[
        'cursor-pointer',
        isEdit && 'opacity-80 hover:opacity-60 transition-opacity',
      ]"
      @click="onAvatarClick"
    >
      <AvatarImage :src="previewUrl ?? avatar" />
      <AvatarFallback
        :style="{ backgroundColor: avatarColor }"
        class="flex justify-center items-center"
      >
        <div class="text-center font-semibold text-lg">
          {{ avatar }}
        </div>
      </AvatarFallback>
    </Avatar>

    <div
      v-if="isEdit"
      class="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full"
    >
      <MyIcon
        icon-name="PencilIcon"
        class="h-4 w-4 text-white drop-shadow text-primary"
      />
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
