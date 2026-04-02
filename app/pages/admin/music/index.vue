<script setup lang="ts">
import {
  type IMusic,
  MusicApi,
  type MusicModels,
} from "#shared/entities/Music";
import type { IPagination } from "#shared/interfaces/IPagination";
import { useBasePagination } from "@/composables/useBasePagination";

definePageMeta({
  name: "adminMusic",
  layout: "admin",
});

const music = ref<IPagination<IMusic>>(useBasePagination<IMusic>());

const getMusic = async () => {
  await MusicApi.getAll({ per_page: 15 }).then((res) => {
    if (!res) return;

    music.value = res;
  });
};

const updateMusic = async () => {};

const deleteMusic = async (payload: MusicModels.IPayloadDelete) => {
  await MusicApi.remove(payload);
};

onMounted(() => {
  getMusic();
});
</script>

<template>
  <div class="flex flex-col gap-10">
    <div>
      <Button variant="outline">Создать трек</Button>
    </div>
    <AdminMusicTable
      :items="music"
      @music:update="updateMusic"
      @music:delete="deleteMusic"
    />
  </div>
</template>
