import type { IProfileNavigationTile } from "#shared/interfaces/IProfileNavigationTile";

export const ProfileNavigationTileConst: IProfileNavigationTile[] = [
  { title: "Профиль", icon: "UserIcon", to: { name: "profile" } },
  { title: "Настройки", icon: "SettingsIcon", to: { name: "profile" } },
  { title: "Мой вайб", icon: "HeartIcon", to: { name: "profile" } },
  { title: "История", icon: "HistoryIcon", to: { name: "profile" } },
] as const;
