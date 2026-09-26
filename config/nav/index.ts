import type { Role } from "@/types/user";
import type { RoleNavConfig } from "./types";
import { studentNav } from "./student";
import { educatorNav } from "./educator";
import { adminNav } from "./admin";

export const navConfigs: Record<Role, RoleNavConfig> = {
  student: studentNav,
  educator: educatorNav,
  admin: adminNav,
};

export const getNavConfig = (role: Role) => navConfigs[role];

export { PublicNav } from "./public";
export { STUDENT_FOOTER, EDUCATOR_FOOTER, COMPANY_FOOTER, FooterGroups } from "./footer";
export type { FooterLink } from "./footer";
export type * from "./types";
