<script setup lang="ts">
import { Eye, Flower, Heart, Star } from "lucide-vue-next";

const isOpen = ref<(string | undefined)[]>([
  undefined,
  undefined,
  undefined,
  undefined,
]);
</script>

<template>
  <div class="flex flex-col gap-3">
    <WishesAccordion v-model="isOpen[0]" item-value="item-1">
      <template #trigger>
        <div class="flex items-center gap-2">
          <div class="p-2 bg-primary/10 rounded-full">
            <Star class="text-primary" />
          </div>
          Пожелание удачи
        </div>
      </template>
      <template #content>
        <p>
          В новом году удача будет следовать за вами по пятам, открывая самые
          неожиданные двери! Не бойтесь рисковать – звезды на вашей стороне.
        </p>
      </template>
    </WishesAccordion>

    <WishesAccordion v-model="isOpen[1]" item-value="item-2">
      <template #trigger>
        <div class="flex items-center gap-2">
          <div class="p-2 bg-primary/10 rounded-full">
            <heart class="text-primary" />
          </div>
          Пожелание любви
        </div>
      </template>
      <template #content>
        <p>
          Пусть этот год наполнит ваше сердце теплом и нежностью. Любовь
          окружает вас повсюду — в улыбках друзей, в уюте дома и в новых
          встречах
        </p>
      </template>
    </WishesAccordion>

    <WishesAccordion v-model="isOpen[2]" item-value="item-3">
      <template #trigger>
        <div class="flex items-center gap-2">
          <div class="p-2 bg-primary/10 rounded-full">
            <Flower class="text-primary" />
          </div>
          Пожелание здоровья
        </div>
      </template>
      <template #content>
        <p>
          Крепкого здоровья и неиссякаемой энергии! Пусть каждый день приносит
          бодрость духа и радость движения к новым вершинам.
        </p>
      </template>
    </WishesAccordion>

    <WishesAccordion v-model="isOpen[3]" item-value="item-4">
      <template #trigger>
        <div class="flex items-center gap-2">
          <div class="p-2 bg-primary/10 rounded-full">
            <Eye class="text-primary" />
          </div>
          Секретное предсказание
        </div>
      </template>
      <template #content>
        <p>
          Тссс... В ближайшее время вас ждет приятный сюрприз, о котором вы даже
          не догадываетесь. Будьте внимательны к знакам!
        </p>
      </template>
    </WishesAccordion>
  </div>
</template>
