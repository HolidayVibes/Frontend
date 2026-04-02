<script setup lang="ts">
import { AdminNavigationTileConst } from "#shared/constants/AdminNavigationTile.const";

const adminNavigationTiles = AdminNavigationTileConst;
</script>

<template>
  <NuxtLayout name="default">
    <div class="container mx-auto">
      <div class="mt-6 flex gap-5">
        <div class="flex flex-col gap-3">
          <ProfileNavigationTile
            v-for="item in adminNavigationTiles"
            :key="item.title"
            :tile="item"
          />
        </div>
        <slot />
      </div>
    </div>
  </NuxtLayout>
</template>
