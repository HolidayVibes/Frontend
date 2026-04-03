import type { IHeaderLink } from "#shared/interfaces/IHeaderLink";

export const ProfileDropdownLinksConst: IHeaderLink[] = [
  { label: "Профиль", to: { name: "profile" } },
] as const;
