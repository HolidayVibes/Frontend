<script setup lang="ts">
import { now, useTimeUntilNewYear } from "@/composables/useTimeUntilNewYear";

let interval: NodeJS.Timeout;

const days = computed(() =>
  Math.floor(useTimeUntilNewYear() / (1000 * 60 * 60 * 24)),
);
const hours = computed(() =>
  Math.floor((useTimeUntilNewYear() / (1000 * 60 * 60)) % 24),
);
const minutes = computed(() =>
  Math.floor((useTimeUntilNewYear() / (1000 * 60)) % 60),
);
const seconds = computed(() => Math.floor((useTimeUntilNewYear() / 1000) % 60));

onMounted(() => {
  interval = setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="flex gap-5 text-center items-center">
    <ClockToNYNumber :NYNumber="days" NumberName="дней" />
    <div class="text-gray-400/50 text-3xl mb-[38px]">:</div>
    <ClockToNYNumber :NYNumber="hours" NumberName="часов" />
    <div class="text-gray-400/50 text-3xl mb-[38px]">:</div>
    <ClockToNYNumber :NYNumber="minutes" NumberName="минут" />
    <div class="text-gray-400/50 text-3xl mb-[38px]">:</div>
    <ClockToNYNumber :NYNumber="seconds" NumberName="секунд" />
  </div>
</template>
