<script setup lang="ts">
definePageMeta({
  name: "profile",
  layout: "profile",
  middleware: ["auth"],
});
useHead({
  title: "Профиль - Holiday Vibes",
});
</script>

<template>
  <div class="w-full flex flex-col gap-5">
    <div class="card">
      <ProfileMe />
    </div>
    <!--    <div>-->
    <!--      <div class="flex items-center gap-3">-->
    <!--        <MyIcon icon-name="BellIcon" />-->
    <!--        <div class="text-lg">Уведомления</div>-->
    <!--      </div>-->
    <!--      <div class="text-primary text-lg">Уведомления пока не реализованы :(</div>-->
    <!--    </div>-->
  </div>
</template>
