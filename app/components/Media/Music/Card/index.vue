<script setup lang="ts">
import { type IMusic } from "#shared/entities/Music";
import { Play } from "lucide-vue-next";

const { music } = defineProps<{
  music: IMusic;
}>();

const bgImage = useProxyImage(music.img);
</script>

<template>
  <a
    class="group relative flex flex-col gap-3 p-3 rounded-xl hover:bg-card-dark transition-colors cursor-pointer"
    :href="music.linkToYm"
    target="_blank"
  >
    <div class="aspect-square rounded-lg overflow-hidden relative">
      <div
        class="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
        :style="{
          backgroundImage: `url(${bgImage})`,
        }"
      ></div>
      <div
        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
      >
        <Play />
      </div>
    </div>
    <div>
      <p class="text-white font-semibold truncate">{{ music.name }}</p>
      <p class="text-text-secondary text-sm truncate">{{ music.author }}</p>
    </div>
  </a>
</template>
