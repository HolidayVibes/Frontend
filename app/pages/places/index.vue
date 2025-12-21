<script setup lang="ts">
definePageMeta({
  name: "places",
});
</script>

<template>
  <div class="flex flex-col items-center justify-center my-auto gap-5">
    <h1 class="text-primary text-5xl font-bold"> Тут пока что ничего нету( </h1>
    <NuxtLink
      :to="{
        name: 'index',
      }"
      class="underline text-xl"
    >
      Вернуться на главную
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss"></style>
