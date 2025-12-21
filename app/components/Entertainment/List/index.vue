<script setup lang="ts">
import firstImg from "@/assets/img/entertainments/1.png";
import secondImg from "@/assets/img/entertainments/2.png";
import thirdImg from "@/assets/img/entertainments/3.png";
import type { IEntertainment } from "#shared/entities/Entertainment";
import { Entertainments } from "#shared/constants/entertainments/entertainments";

const entertainments = ref<IEntertainment[]>(Entertainments);
</script>

<template>
  <div class="flex max-sm:flex-col gap-3">
    <EntertainmentCard class="flex-1" :entertainment="entertainments[0]!">
      <template #img>
        <img :src="firstImg" alt="" class="h-full w-full object-cover" />
      </template>
    </EntertainmentCard>
    <EntertainmentCard class="flex-1" :entertainment="entertainments[1]!">
      <template #img>
        <img :src="secondImg" alt="" class="h-full w-full object-cover" />
      </template>
    </EntertainmentCard>
    <EntertainmentCard class="flex-1" :entertainment="entertainments[2]!">
      <template #img>
        <img :src="thirdImg" alt="" class="h-full w-full object-cover" />
      </template>
    </EntertainmentCard>
  </div>
</template>
