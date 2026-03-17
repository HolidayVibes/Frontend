<script setup lang="ts">
import { ProfileNavigationTileConst } from "#shared/constants/ProfileNavigationTile.const";
import { AuthApi } from "#shared/entities/Auth";
import { Separator } from "@/components/ui/separator";

const profileNavigationTiles = ProfileNavigationTileConst;

const logout = () => {
  AuthApi.logout();
};
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
          <ProfileNavigationTile
            :tile="{
              to: '',
              icon: 'SquareArrowRightIcon',
              title: 'Выход',
            }"
            class="text-primary cursor-pointer"
            @click.stop="logout"
          />
        </div>
        <slot></slot>
      </div>
    </NuxtLayout>
  </div>
</template>
