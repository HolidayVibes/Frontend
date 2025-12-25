<script setup lang="ts">
const musicStore = useMusicStore();

onMounted(() => {
  musicStore.hydrate();
});
</script>

<template>
  <div class="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
    <MediaMusicCard
      v-for="item in musicStore.items.toSpliced(0, 6)"
      :key="item.id"
      :music="item"
    />
  </div>
</template>
