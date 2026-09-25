"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/config/nav/types";
import { Icon } from "../../ui/Icon";
import { Badge } from "../../ui/Badge";

export function useIsActive(href: string, exact?: boolean) {
  const pathname = usePathname();
  return exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

const base = {
  top: "rounded-full px-4 py-2 text-sm font-medium",
  side: "gap-3 rounded-xl px-3.5 py-3 text-[15px] font-medium",
  child: "gap-3 rounded-lg px-3 py-2 text-sm font-medium",
};
const active = {
  top: "bg-primary-50 text-primary-600",
  side: "bg-primary-50 text-primary-600 font-semibold",
  child: "bg-primary-50 text-primary-600",
};
const idle = {
  top: "text-neutral-600 hover:bg-neutral-20 hover:text-primary-600",
  side: "text-neutral-600 hover:bg-neutral-20 hover:text-neutral-900",
  child: "text-neutral-500 hover:bg-neutral-20 hover:text-neutral-900",
};

type Props = {
  item: NavItem;
  variant?: keyof typeof base;
  /** dynamic badge count (overrides item.badge) */
  badge?: number;
  badgeTone?: "soft" | "alert";
  onNavigate?: () => void;
};

export function NavLink({ item, variant = "side", badge, badgeTone = "soft", onNavigate }: Props) {
  const isActive = useIsActive(item.href, item.exact);
  const count = badge ?? item.badge;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex items-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
        base[variant],
        isActive ? active[variant] : idle[variant]
      )}
    >
      {item.icon && variant === "side" && (
        <Icon name={item.icon} className={isActive ? "text-primary-600" : "text-neutral-400"} />
      )}
      <span className={variant === "top" ? "" : "flex-1 truncate"}>{item.label}</span>
      {variant !== "top" && <Badge count={count} tone={badgeTone} />}
    </Link>
  );
}