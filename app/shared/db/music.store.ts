import { type IMusic, MusicModels } from "#shared/entities/Music";
import { musicData } from "#shared/constants/Music/MusicData";

const STORE: string = "db-music";

export const MusicDB = {
  async generateBase() {
    const data = await this.getAll();
    if (data.length) return;

    const promises = musicData.map((elem: MusicModels.PayloadCreate) => {
      const payload = {
        id: crypto.randomUUID(),
        ...elem,
      };
      return this.create(payload);
    });

    await Promise.all(promises);
  },

  async getAll(): Promise<IMusic[]> {
    const db = useDB();

    return (await db).getAll(STORE);
  },

  async create(music: MusicModels.PayloadCreate) {
    const db = useDB();

    const payload = {
      id: crypto.randomUUID(),
      ...music,
    };

    return (await db).add(STORE, payload);
  },

  async update({ id, ...music }: MusicModels.PayloadUpdate) {
    const db = useDB();

    return (await db).put(STORE, music, id);
  },

  async delete(music: MusicModels.PayloadDelete) {
    const db = useDB();

    return (await db).delete(STORE, music.id);
  },

  async clear() {
    const db = useDB();

    return (await db).clear(STORE);
  },
};
