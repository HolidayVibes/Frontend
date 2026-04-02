<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { IMusic, MusicModels } from "#shared/entities/Music";
import type { IPagination } from "#shared/interfaces/IPagination";

defineProps<{
  items: IPagination<IMusic>;
}>();

const emits = defineEmits<{
  (name: "music:update", e: MusicModels.IPayloadUpdate): void;
  (name: "music:delete", e: MusicModels.IPayloadDelete): void;
  (name: "music:nextPage"): void;
}>();

const formatDuration = (seconds: number): string => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("ru-RU");
};
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-12" />
        <TableHead>Название</TableHead>
        <TableHead>Исполнитель</TableHead>
        <TableHead>Жанр</TableHead>
        <TableHead>Год</TableHead>
        <TableHead>Длительность</TableHead>
        <TableHead>Добавлено</TableHead>
        <TableHead>Действия</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="music in items.data" :key="music.id">
        <!-- Обложка -->
        <TableCell>
          <Avatar class="size-10 rounded-md">
            <AvatarImage :src="music.imgUrl" :alt="music.title" />
            <AvatarFallback class="rounded-md text-xs">
              {{ music.title.slice(0, 2).toUpperCase() }}
            </AvatarFallback>
          </Avatar>
        </TableCell>

        <!-- Название + альбом -->
        <TableCell>
          <div class="font-medium">{{ music.title }}</div>
          <div v-if="music.album" class="text-xs text-muted-foreground">
            {{ music.album }}
          </div>
        </TableCell>

        <TableCell>{{ music.author }}</TableCell>
        <TableCell>{{ music.genre }}</TableCell>
        <TableCell>{{ music.releaseDate }}</TableCell>
        <TableCell>{{ formatDuration(music.duration) }}</TableCell>

        <TableCell class="text-muted-foreground text-sm">
          {{ formatDate(music.createdAt) }}
        </TableCell>
        <TableCell>
          <div class="flex gap-3 *:cursor-pointer">
            <MyIcon
              icon-name="PencilIcon"
              class="h-4 w-4"
              @click="emits('music:update', music)"
            />
            <MyIcon
              icon-name="TrashIcon"
              class="h-4 w-4"
              @click="emits('music:delete', { id: music.id })"
            />
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
