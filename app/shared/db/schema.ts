import type { IMusic } from "#shared/entities/Music";

export interface AppDBSchema {
  "db-music": {
    key: string;
    value: IMusic;
    indexes: {
      "by-title": string;
      "by-artist": string;
    };
  };
}
