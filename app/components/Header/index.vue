<script setup lang="ts">
import type { IHeaderLink } from "#shared/interfaces/IHeaderLink";
import { HeaderLinks } from "#shared/constants/HeaderLinks/HeaderLinks";
import { ProfileDropdownLinks } from "#shared/constants/ProfileDropdownLinks/ProfileDropdownLinks";
import { AuthApi } from "@/shared/entities/Auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links: IHeaderLink[] = HeaderLinks;
const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const profileDropdown = ProfileDropdownLinks;

const redirectTo = (to: string) => {
  router.replace({
    path: route.path,
    query: {
      ...route.query,
      modal: to,
    },
  });
};
const { avatar, avatarColor } = useUserAvatar();

const logout = () => {
  AuthApi.logout();
};
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

    <div>
      <div v-if="!userStore.isUserAuthorised" class="flex gap-5 items-center">
        <Button variant="outline" @click="redirectTo('login')">Войти</Button>
        <Button variant="outline" @click="redirectTo('register')">
          Зарегестрироваться
        </Button>
      </div>
      <div v-else>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar class="cursor-pointer">
              <AvatarImage :src="avatar" />
              <AvatarFallback
                :style="{ backgroundColor: avatarColor }"
                class="flex justify-center items-center"
              >
                <div class="text-center font-semibold text-lg">
                  {{ avatar }}
                </div>
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem
                v-for="item in profileDropdown"
                :key="item.label"
              >
                <NuxtLink :to="item.to">
                  {{ item.label }}
                </NuxtLink>
                <DropdownMenuSeparator />
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuItem @click.prevent="logout" class="cursor-pointer">
                Выйти
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </header>
</template>
