<script setup lang="ts">
import type { IMusic } from "#shared/entities/Music";

const musicStore = ref<IMusic[]>();
</script>

<template>
  <div class="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
    <MediaMusicCard v-for="item in musicStore" :key="item.id" :music="item" />
  </div>
</template>
