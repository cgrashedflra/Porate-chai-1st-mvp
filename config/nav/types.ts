import type { IconName } from "@/components/ui/Icon";
import type { Role } from "@/types/user";

export type Tone = "indigo" | "green" | "amber" | "rose" | "violet" | "sky";

export type NavItem = {
  label: string;
  href: string;
  icon?: IconName;
  badge?: number;
  exact?: boolean;       // active only on exact path match
  children?: NavItem[];  // renders an expandable group
  authOnly?: boolean;    // hide when logged out
  mobileOnly?: boolean;  // hide from desktop top nav
};

export type UserMenuItem = {
  label: string;
  icon: IconName;
  href?: string;
  action?: "logout";
};

export type ListItem = {
  icon?: IconName;
  tone?: Tone;
  title: string;
  subtitle?: string;
  meta?: string;
  href?: string;
  action?: { label: string; href: string };
};

export type WidgetConfig =
  | { type: "promo"; title: string; body?: string; cta?: { label: string; href: string } }
  | {
      type: "list";
      title: string;
      icon?: IconName;
      viewAll?: { label?: string; href: string };
      items: ListItem[];
    }
  | {
      type: "stats";
      title: string;
      icon?: IconName;
      viewAll?: { label?: string; href: string };
      stats: { icon: IconName; tone?: Tone; value: string; label: string }[];
      progress?: { label: string; percent: number };
    }
  | { type: "calendar"; title: string; icon?: IconName; eventDays?: number[] };

export type SidebarFooter =
  | { kind: "promo"; title: string; body: string }
  | { kind: "none" };

export type RoleNavConfig = {
  role: Role;
  homeHref: string;
  profileHref: string;
  notificationsHref: string;
  searchPlaceholder: string;
  showThemeToggle?: boolean;
  sidebar: { items: NavItem[]; footer: SidebarFooter };
  rightSidebar: WidgetConfig[];
  userMenu: UserMenuItem[];
};
