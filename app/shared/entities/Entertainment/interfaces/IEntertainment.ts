import type * as LucideIcons from "lucide-vue-next";

export interface IEntertainment {
  img: string;
  name: string;
  icon: keyof typeof LucideIcons;
  description: string;
}
