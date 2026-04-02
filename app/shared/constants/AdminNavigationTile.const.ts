import type { IProfileNavigationTile } from "#shared/interfaces/IProfileNavigationTile";

export const AdminNavigationTileConst: IProfileNavigationTile[] = [
  { title: "Музыка", icon: "MusicIcon", to: { name: "adminMusic" } },
] as const;
