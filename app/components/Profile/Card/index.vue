<script setup lang="ts">
const userStore = useUserStore();
const { avatar, avatarColor } = useUserAvatar();
</script>

<template>
  <div
    v-if="userStore.user"
    class="py-7 px-14 flex flex-col gap-5 text-center text-sm border-primary/60 bg-primary/15 border rounded-xl"
  >
    <MyAvatar
      :avatar="avatar"
      :avatar-color="avatarColor"
      class="size-20 mx-auto"
    />
    <div class="min-w-0 flex-1">
      <span class="block truncate max-w-[25ch] font-semibold">
        {{ `${userStore.user.firstName} ${userStore.user.lastName}` }}
      </span>
      <span class="text-muted-foreground">
        {{ userStore.user.email }}
      </span>
    </div>
  </div>
</template>
