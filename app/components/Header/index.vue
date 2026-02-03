<script setup lang="ts">
import type { IHeaderLink } from "#shared/interfaces/IHeaderLink";
import { HeaderLinks } from "#shared/constants/HeaderLinks/HeaderLinks";

const links: IHeaderLink[] = HeaderLinks;
</script>

<template>
  <header
    class="sticky top-0 z-50 backdrop-blur-md container mx-auto flex justify-between items-center min-h-16 after:absolute after:bottom-0 after:left-[-100%] after:w-[400vw] w-[400vw] after:h-0.5 after:bg-gray-400/10 after:z-0"
  >
    <MyLogo />
    <nav class="flex gap-20">
      <NuxtLink
        v-for="(link, index) in links"
        :key="`${link.label}-${index}`"
        :to="link.to"
        class="relative text-muted transition-colors hover:text-primary duration-300"
        active-class="text-primary font-semibold"
        exact-active-class="text-primary font-semibold"
      >
        {{ link.label }}

        <span
          class="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-primary transition-transform duration-300"
          :class="{ 'scale-x-100': $route.path === link.to }"
        />
      </NuxtLink>
    </nav>

    <div class="w-0"></div>
  </header>
</template>
