"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { roleLabels } from "@/config/brand";
import type { UserMenuItem } from "@/config/nav/types";
import type { NavUser } from "@/types/user";
import { Avatar } from "../../ui/Avatar";
import { Icon } from "../../ui/Icon";
import { LogoutButton } from "../primitives/LogoutButton";

type Props = {
  user: NavUser;
  items: UserMenuItem[];
  /** role-scoped profile route, e.g. /student/profile */
  profileHref: string;
  /** show name + role next to the avatar (app topbar) */
  showLabel?: boolean;
};

const itemCls = "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-indigo-500";

export function UserMenu({ user, items, profileHref, showLabel = true }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the menu on route change (adjust state during render)
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Account menu for ${user.name}`}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 rounded-full p-1 pr-2 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-indigo-500"
      >
        <Avatar name={user.name} src={user.avatarUrl} size="md" />
        {showLabel && (
          <span className="hidden text-left leading-tight md:block">
            <span className="block text-sm font-semibold text-slate-900">{user.name}</span>
            <span className="block text-xs text-slate-500">{roleLabels[user.role]}</span>
          </span>
        )}
        <Icon name="chevronDown" size={16} className={cn("text-slate-400 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 z-50 mt-2 w-60 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-indigo-500/10"
        >
          <Link
            href={profileHref}
            onClick={() => setOpen(false)}
            aria-label={`View ${user.name}'s profile`}
            className="mb-1 block rounded-xl border-b border-slate-100 px-3 pb-3 pt-2 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-indigo-500"
          >
            <div className="flex items-center gap-3">
              <Avatar name={user.name} src={user.avatarUrl} size="md" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">{user.name}</p>
                <p className="truncate text-xs text-slate-500">{user.email ?? roleLabels[user.role]}</p>
              </div>
            </div>
          </Link>
          {items.map((item) =>
            item.action === "logout" ? (
              <LogoutButton key={item.label} className={cn(itemCls, "text-red-600 hover:bg-red-50 hover:text-red-600")}>
                <Icon name={item.icon} size={18} /> {item.label}
              </LogoutButton>
            ) : (
              <Link key={item.label} href={item.href!} role="menuitem" className={itemCls}>
                <Icon name={item.icon} size={18} /> {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
