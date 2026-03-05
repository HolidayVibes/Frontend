<script setup lang="ts">
import type { IProfileNavigationTile } from "#shared/interfaces/IProfileNavigationTile";

defineProps<{
  tile: IProfileNavigationTile;
}>();
</script>

<template>
  <NuxtLink :to="tile.to" class="flex gap-3 items-center px-5 py-2">
    <MyIcon :icon-name="tile.icon" />
    <div>{{ tile.title }}</div>
  </NuxtLink>
</template>
