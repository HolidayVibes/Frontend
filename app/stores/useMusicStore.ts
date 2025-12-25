import { defineStore } from "pinia";
import { MusicDB } from "@/shared/db/music.store";
import type { IMusic, MusicModels } from "#shared/entities/Music";

export const useMusicStore = defineStore("music", {
  state: () => ({
    items: [] as IMusic[],
    hydrated: false,
    isLoading: false,
  }),

  getters: {
    count: (state) => state.items.length,
  },

  actions: {
    async hydrate() {
      if (this.hydrated) return;
      this.isLoading = true;
      this.items = await MusicDB.getAll();
      this.hydrated = true;
      this.isLoading = false;
    },

    async create(payload: MusicModels.PayloadCreate) {
      await MusicDB.create(payload);

      this.items.push(payload as IMusic);
    },

    async update(payload: MusicModels.PayloadUpdate) {
      const index = this.items.findIndex((item) => item.id === payload.id);

      if (index === -1) return;

      this.items[index] = {
        ...this.items[index],
        ...payload,
      } as IMusic;

      await MusicDB.update(payload);
    },

    async delete(payload: MusicModels.PayloadDelete) {
      this.items = this.items.filter((item) => item.id !== payload.id);

      await MusicDB.delete(payload);
    },

    async clear() {
      this.items = [];
      this.hydrated = false;

      await MusicDB.clear();
    },
  },
});
