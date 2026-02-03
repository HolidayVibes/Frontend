<script setup lang="ts">
import type { IMusic } from "#shared/entities/Music";
import { MusicApi } from "#shared/entities/Music";
import type { IPagination } from "#shared/interfaces/IPagination";
import { useBasePagination } from "@/composables/useBasePagination";

const music = ref<IPagination<IMusic>>(useBasePagination<IMusic>());

const getMusic = async () => {
  await MusicApi.getAll({ per_page: 9 }).then((res) => {
    if (!res) return;

    music.value = res.data;
  });
};

onMounted(() => {
  getMusic();
});
</script>

<template>
  <div class="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
    <MediaMusicCard v-for="item in music.data" :key="item.id" :music="item" />
  </div>
</template>
