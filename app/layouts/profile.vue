<script setup lang="ts">
import { ProfileNavigationTileConst } from "#shared/constants/ProfileNavigationTile.const";

const profileNavigationTiles = ProfileNavigationTileConst;
</script>

<template>
  <div class="container mx-auto">
    <NuxtLayout name="default">
      <div class="mt-6 flex gap-5">
        <div class="flex flex-col gap-3">
          <ProfileCard />
          <ProfileNavigationTile
            v-for="item in profileNavigationTiles"
            :key="item.title"
            :tile="item"
          />
          <Separator />
          <div>Выход</div>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
