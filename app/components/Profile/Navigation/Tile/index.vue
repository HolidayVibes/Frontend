<script setup lang="ts">
import type { IProfileNavigationTile } from "#shared/interfaces/IProfileNavigationTile";

const { tile } = defineProps<{
  tile: IProfileNavigationTile;
}>();

const route = useRoute();

const isActive = computed(() => {
  if (typeof tile.to === "string") {
    return tile.to === route.path;
  }

  if ("name" in tile.to) {
    return tile.to.name === route.name;
  }

  return tile.to.path === route.path;
});
</script>

<template>
  <NuxtLink
    :to="tile.to"
    class="flex gap-3 items-center px-5 py-2 rounded-lg"
    :class="isActive ? 'bg-primary' : ''"
  >
    <MyIcon :icon-name="tile.icon" :class="isActive ? 'text-secondary' : ''" />
    <div>{{ tile.title }}</div>
  </NuxtLink>
</template>
