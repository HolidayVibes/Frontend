<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import { type HeaderLink } from "#shared/interfaces/HeaderLink";
import { HeaderLinks } from "#shared/constants/HeaderLinks/HeaderLinks";

const isSidebarOpen = ref<boolean>(false);

const links: HeaderLink[] = HeaderLinks;
</script>

<template>
  <div class="p-2 border-b-2 border-gray-400/10">
    <MySidebar :isOpen="isSidebarOpen">
      <template #header>
        <div class="flex items-center justify-between">
          <MyLogo />
          <button>
            <Menu
              v-if="!isSidebarOpen"
              class="text-primary cursor-pointer"
              @click="isSidebarOpen = true"
            />
            <X
              v-else
              class="text-primary mr-3"
              @click="isSidebarOpen = false"
            />
          </button>
        </div>
      </template>
      <nav class="flex flex-col gap-5 px-3">
        <NuxtLink
          v-for="(link, index) in links"
          :key="`${link.label}-${index}`"
          :to="link.to"
          class="relative text-muted transition-colors hover:text-primary duration-300"
          active-class="text-primary font-semibold"
          exact-active-class="text-primary font-semibold"
          @click="isSidebarOpen = false"
        >
          {{ link.label }}

          <span
            class="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-primary transition-transform duration-300"
            :class="{ 'scale-x-100': $route.path === link.to }"
          />
        </NuxtLink>
      </nav>
    </MySidebar>
  </div>
</template>
