import { openDB } from "idb";
import { type AppDBSchema } from "#shared/db/schema";

export const DB_NAME = "holiday-db";
export const DB_VERSION = 1;

export default defineNuxtPlugin(() => {
  const db = openDB<AppDBSchema>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("db-music")) {
        db.createObjectStore("db-music", {
          keyPath: "id",
        });
      }
    },
  });

  return {
    provide: {
      db,
    },
  };
});
