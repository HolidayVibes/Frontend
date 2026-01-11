<script setup lang="ts">
import type { IEntertainment } from "#shared/entities/Entertainment";

const { entertainment } = defineProps<{
  entertainment: IEntertainment;
}>();
</script>

<template>
  <div
    class="group flex flex-col gap-4 rounded-2xl border border-gray-400/30 bg-surface p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
  >
    <div class="h-[300px] overflow-hidden rounded-xl">
      <slot name="img" />
    </div>
    <div class="grid gap-3">
      <div class="flex justify-between">
        <div class="">
          {{ entertainment.name }}
        </div>
        <MyIcon :icon-name="entertainment.icon" class="text-gray-500" />
      </div>
      <div class="text-gray-400 text-sm">
        {{ entertainment.description }}
      </div>
    </div>
  </div>
</template>
