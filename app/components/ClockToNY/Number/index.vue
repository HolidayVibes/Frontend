<script setup lang="ts">
defineProps<{
  newYearNumber: number;
  //TODO Сделать склонения
  numberName: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div
      class="text-5xl rounded-2xl border border-gray-400/30 bg-surface w-24 h-24 flex justify-center items-center font-bold"
      >{{ newYearNumber }}
    </div>
    <div class="secondary-text">{{ numberName }}</div>
  </div>
</template>
