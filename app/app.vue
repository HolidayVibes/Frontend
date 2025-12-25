<script setup lang="ts">
import { MusicDB } from "#shared/db/music.store";

onMounted(() => {
  MusicDB.generateBase();
});
</script>
<template>
  <div class="max-lg:overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
