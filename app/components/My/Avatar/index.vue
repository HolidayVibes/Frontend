<script setup lang="ts">
const { isEdit = false } = defineProps<{
  avatar: string;
  avatarColor: string;
  isEdit?: boolean;
}>();

const inputFile = () => {
  if (!isEdit) return;
};
</script>

<template>
  <Avatar class="cursor-pointer" @click="inputFile">
    <AvatarImage :src="avatar" />
    <AvatarFallback
      :style="{ backgroundColor: avatarColor }"
      class="flex justify-center items-center"
    >
      <div class="text-center font-semibold text-lg">
        {{ avatar }}
      </div>
    </AvatarFallback>
  </Avatar>
</template>
