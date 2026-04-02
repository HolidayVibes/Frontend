import type { IHeaderLink } from "#shared/interfaces/IHeaderLink";
import { RoleEnum } from "#shared/enums/role.enum";

export const ProfileDropdownLinksConst: IHeaderLink[] = [
  { label: "Профиль", to: { name: "profile" } },
  { label: "Админ панель", to: { name: "adminMusic" }, role: RoleEnum.ADMIN },
] as const;
