<script setup lang="ts">
definePageMeta({
  name: "profile",
  layout: "profile",
});
useHead({
  title: "Профиль - Holiday Vibes",
});
</script>

<template>
  <div class="w-full flex flex-col gap-5">
    <ProfileMe />
    <div class=""></div>
    <div class=""></div>
  </div>
</template>
