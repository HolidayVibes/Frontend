<script setup lang="ts">
import { Clapperboard, Play, Star } from "lucide-vue-next";
import mediaImage from "@/assets/img/media.png";

definePageMeta({
  name: "media",
});

useHead({ title: "Музыка и фильмы - Snow Vibe" });
</script>

<template>
  <div class="container mx-auto max-sm:p-5">
    <section class="w-full py-6 md:py-8">
      <div
        class="relative w-full rounded-2xl overflow-hidden min-h-[480px] flex flex-col justify-center items-center text-center p-8 md:p-16 group"
      >
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          :style="{ backgroundImage: `url(${mediaImage})` }"
        >
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-transparent"
        />
        <div
          class="relative z-10 flex flex-col gap-6 max-w-2xl animate-fade-in"
        >
          <div
            class="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/30 backdrop-blur-md border border-primary/20 w-fit mx-auto"
          >
            <Star class="text-amber-400" :size="20" />
            <span class="text-xs font-bold text-white uppercase tracking-wider">
              Праздничная коллекция
            </span>
          </div>
          <h1
            class="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-xl"
          >
            Новогоднее <br />
            Настроение
          </h1>
          <p
            class="text-gray-200 text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto drop-shadow-md"
          >
            Погрузитесь в атмосферу праздника с нашей подборкой лучших
            рождественских фильмов и уютных зимних плейлистов.
          </p>
          <div class="flex flex-wrap gap-4 justify-center mt-4">
            <Button
              class="flex items-center gap-2 h-12 px-6 bg-primary hover:bg-red-600 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_4px_20px_rgba(244,37,37,0.4)]"
            >
              <Play />
              <span>Слушать плейлист</span>
            </Button>
            <Button
              class="flex items-center gap-2 h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/10 rounded-xl font-bold transition-all"
            >
              <Clapperboard />
              <span>Смотреть подборку</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
    <div class="flex flex-col gap-5">
      <h2>Праздничные хиты</h2>
      <MediaMusic />
    </div>
    <div class=""></div>
  </div>
</template>

<style scoped lang="scss"></style>
