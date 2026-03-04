import type { IHeaderLink } from "#shared/interfaces/IHeaderLink";
import { RoleEnum } from "#shared/enums/role.enum";

export const ProfileDropdownLinks: IHeaderLink[] = [
  { label: "Профиль", to: { name: "media" } },
  { label: "Админ панель", to: { name: "media" }, role: RoleEnum.ADMIN },
] as const;
