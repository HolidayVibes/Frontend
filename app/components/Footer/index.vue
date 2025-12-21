<script setup lang="ts">
import { now } from "@/composables/useTimeUntilNewYear";
</script>

<template>
  <div class="py-12 container mx-auto">
    <div
      class="flex max-sm:flex-col max-sm:items-center max-sm:gap-7 sm:flex-row justify-between"
    >
      <div><MyLogo /></div>
      <div class="flex gap-5 items-center">
        <div class="text-gray-400">О нас</div>
        <div class="text-gray-400">Правила</div>
        <div class="text-gray-400">Помощь</div>
      </div>
      <div class="flex gap-3 items-center">
        <a
          class="p-2 bg-surface rounded-full flex items-center justify-center cursor-pointer"
        >
          <IconsTelegram class="text-primary" />
        </a>
        <a
          class="p-2 bg-surface rounded-full flex items-center justify-center cursor-pointer"
        >
          <IconsDiscord class="fill-primary" />
        </a>
        <a
          class="p-2 bg-surface rounded-full flex items-center justify-center cursor-pointer"
        >
          <IconsVk class="fill-primary" />
        </a>
      </div>
    </div>

    <div
      class="border-b-2 border-neutral-400/20 max-sm:w-[95%] max-sm:mx-auto my-6"
    ></div>

    <div class="text-gray-400/50 text-center text-sm py-2 w-full">
      © {{ now.getFullYear() }} Happy New Year Project. All rights reserved.
      Created with magic
    </div>
  </div>
</template>
