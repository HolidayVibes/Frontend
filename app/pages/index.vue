<script setup lang="ts">
import mainImg from "@/assets/img/main.png";
import { Mail, PartyPopper } from "lucide-vue-next";
import type { IEntertainment } from "#shared/entities/Entertainment";
import { Entertainments } from "#shared/constants/Entertainments/Entertainments";

definePageMeta({
  name: "index",
});
useHead({
  title: "Главная - Holiday Vibe",
});

ref<IEntertainment[]>(Entertainments);
</script>

<template>
  <main class="container mx-auto flex flex-col pt-20 gap-20 max-sm:p-3">
    <section
      class="h-[600px] flex flex-col justify-center bg-cover bg-center items-center rounded-picture gap-6 text-center max-sm:p-5"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${mainImg})`,
      }"
    >
      <div
        class="flex gap-2 text-primary p-2 border-primary/50 border bg-primary/15 backdrop-blur-sm w-max rounded-full text-xs"
      >
        <PartyPopper :size="16" />
        <span>2026 is coming</span>
      </div>
      <h1 class="sm:text-7xl text-4xl drop-shadow-sm font-extrabold grid">
        <span>Пусть начинается</span>
        <span class="text-primary">Волшебство</span>
      </h1>
      <div
        class="text-lg text-gray-200 leading-relaxed mx-auto max-w-xl sm:text-xl"
      >
        Погрузитесь в праздничную атмосферу, найдите свое новогоднее настроение
        и поделитесь теплом с близкими.
      </div>
      <div class="flex gap-3 max-sm:flex-col">
        <Button
          class="flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white transition-all hover:bg-red-600 shadow-lg shadow-primary/25 cursor-pointer"
        >
          Получить предсказание
        </Button>
        <Button
          class="flex h-12 items-center justify-center rounded-xl bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 border border-white/10 cursor-pointer"
        >
          Узнать больше
        </Button>
      </div>
    </section>

    <section class="flex flex-col items-center gap-10">
      <div class="text-center text-3xl font-semibold">
        До нового года осталось
      </div>
      <div>
        <ClockToNY />
      </div>
    </section>
    <section class="flex flex-col gap-5">
      <div class="">
        <h2 class="text-4xl font-bold mb-3">Праздничные развлечения</h2>
        <div class="secondary-text">
          Все, что нужно для идеального праздника, собрано в одном месте.
        </div>
      </div>
      <EntertainmentList />
    </section>
    <section class="relative py-10">
      <div class="z-10 container mx-auto">
        <div class="mb-5 text-center">
          <h2 class="text-3xl mb-2">Открой свои подарки</h2>
          <div class="secondary-text text-sm">
            Нажмите на карточку чтобы прочитать предсказание
          </div>
        </div>
        <WishesList />
      </div>

      <div
        class="absolute sm:left-[-400%] left-[-50%] w-[450vw] top-0 h-full bg-surface -z-10 border-y border-gray-400/20"
      />
    </section>
    <section class="py-20 px-4">
      <div
        class="mx-auto rounded-3xl bg-gradient-to-br from-primary to-red-900 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
      >
        <div class="relative z-10 flex flex-col items-center gap-6">
          <div class="rounded-full bg-white/20 p-4 backdrop-blur-sm">
            <Mail :size="36" />
          </div>
          <h2 class="text-3xl font-bold text-white sm:text-4xl"
            >Готовы к чудесам?</h2
          >
          <p class="text-white/90 text-lg max-w-xl">
            Подпишитесь на нашу новогоднюю рассылку и получайте порцию
            волшебства каждый день до самого праздника.
          </p>
          <div class="flex w-full max-w-md gap-3 flex-row">
            <input
              class="w-full rounded-xl border-none bg-white/90 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              placeholder="Ваш Email"
              type="email"
            />
            <Button class="bg-black h-12 rounded-xl"> Подписаться </Button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
