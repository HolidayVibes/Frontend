<script setup lang="ts">
import { ProfileNavigationTileConst } from "#shared/constants/ProfileNavigationTile.const";
import { AuthApi } from "#shared/entities/Auth";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const profileNavigationTiles = ProfileNavigationTileConst;

const logout = () => AuthApi.logout();
</script>

<template>
  <NuxtLayout name="default">
    <div class="container mx-auto">
      <div class="mt-6 hidden md:flex! gap-5">
        <div class="flex flex-col gap-3">
          <ProfileCard />
          <ProfileNavigationTile
            v-for="item in profileNavigationTiles"
            :key="item.title"
            :tile="item"
          />
          <Separator />
          <ProfileNavigationTile
            :tile="{ to: '', icon: 'SquareArrowRightIcon', title: 'Выход' }"
            class="text-primary cursor-pointer"
            @click.stop="logout"
          />
        </div>
        <slot />
      </div>

      <div class="md:hidden">
        <SidebarProvider>
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <div class="p-3">
                    <ProfileCard />
                  </div>
                  <Separator class="my-2" />
                  <SidebarMenu>
                    <SidebarMenuItem
                      v-for="item in profileNavigationTiles"
                      :key="item.title"
                    >
                      <ProfileNavigationTile :tile="item" class="w-full" />
                    </SidebarMenuItem>
                  </SidebarMenu>
                  <Separator class="my-2" />
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <ProfileNavigationTile
                        :tile="{
                          to: '',
                          icon: 'SquareArrowRightIcon',
                          title: 'Выход',
                        }"
                        class="w-full text-primary cursor-pointer"
                        @click.stop="logout"
                      />
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <div class="flex flex-col w-full">
            <header class="flex h-12 items-center gap-2 px-4">
              <SidebarTrigger />
            </header>
            <div class="p-4">
              <slot />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  </NuxtLayout>
</template>
