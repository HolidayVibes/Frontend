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
  <div class="flex gap-2 sm:gap-5 text-center items-center max-sm:flex-col">
    <ClockToNYNumber :new-year-number="days" number-name="дней" />
    <div class="text-gray-400/50 text-3xl mb-[38px] max-sm:hidden">:</div>
    <ClockToNYNumber :new-year-number="hours" number-name="часов" />
    <div class="text-gray-400/50 text-3xl mb-[38px] max-sm:hidden">:</div>
    <ClockToNYNumber :new-year-number="minutes" number-name="минут" />
    <div class="text-gray-400/50 text-3xl mb-[38px] max-sm:hidden">:</div>
    <ClockToNYNumber :new-year-number="seconds" number-name="секунд" />
  </div>
</template>
