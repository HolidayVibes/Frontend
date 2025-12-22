<script setup lang="ts">
const { isOpen } = defineProps<{
  isOpen: boolean;
}>();

watch(
  () => isOpen,
  (open) => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },
);
</script>

<template>
  <div class="gap-3 p-5">
    <header class="z-20">
      <slot name="header"></slot>
    </header>
    <div
      v-if="isOpen"
      class="fixed flex flex-col w-full h-screen backdrop-blur-md inset-0 z-20 mt-21 overflow-hidden px-5 pt-5"
    >
      <slot></slot>
    </div>
  </div>
</template>
