<script setup lang="ts">
definePageMeta({
  name: "ideas",
});
</script>

<template>
  <div class="flex flex-col items-center justify-center my-auto gap-5">
    <h1 class="text-primary text-xl sm:text-5xl font-bold text-center">
      Фа Вота фа Тут пока что ничего шнэне нету
    </h1>
    <NuxtLink
      :to="{
        name: 'index',
      }"
      class="underline sm:text-xl"
    >
      Вернуться на главную
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss"></style>
