import type * as LucideIcons from "lucide-vue-next";
import type { RouteLocationRaw } from "vue-router";

export interface IProfileNavigationTile {
  title: string;
  icon: keyof typeof LucideIcons;
  to: RouteLocationRaw;
}
