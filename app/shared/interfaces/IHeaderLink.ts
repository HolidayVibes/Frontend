import type { RouteLocationRaw } from "vue-router";
import type { RoleEnum } from "#shared/enums/role.enum";

export interface IHeaderLink {
  label: string;
  to: RouteLocationRaw;
  role?: RoleEnum;
}
