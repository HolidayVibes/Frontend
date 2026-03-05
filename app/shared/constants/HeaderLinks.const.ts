import type { IHeaderLink } from "#shared/interfaces/IHeaderLink";

export const HeaderLinksConst: IHeaderLink[] = [
  { label: "Главная", to: { name: "index" } },
  { label: "Музыка и фильмы", to: { name: "media" } },
  { label: "Картинки", to: { name: "images" } },
  { label: "Советы и идеи", to: { name: "ideas" } },
  { label: "Места", to: { name: "places" } },
] as const;
