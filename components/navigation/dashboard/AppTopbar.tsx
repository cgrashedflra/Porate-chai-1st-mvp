"use client";

import { cn } from "@/lib/cn";
import { getNavConfig } from "@/config/nav";
import type { NavUser } from "@/types/user";
import { Icon } from "../../ui/Icon";
import { Logo } from "../../ui/Logo";
import { NotificationBell } from "../primitives/NotificationBell";
import { SearchBar } from "../../ui/SearchBar";
import { UserMenu } from "./UserMenu";

type Props = { user: NavUser; onMenuClick: () => void };

export function AppTopbar({ user, onMenuClick }: Props) {
  const config = getNavConfig(user.role);
  return (
    <header className="sticky top-0 z-40 flex h-[72px] items-center gap-3 border-b border-slate-200/70 bg-white/85 pr-4 backdrop-blur-md md:pr-6">
      {/* Left slot matches the sidebar width on desktop so the search bar always starts at the sidebar edge */}
      <div className="flex h-full shrink-0 items-center gap-3 pl-4 md:pl-6 lg:w-64">
        <button
          type="button"
          aria-label="Open navigation"
          onClick={onMenuClick}
          className="grid h-11 w-11 place-items-center rounded-full text-slate-600 hover:bg-slate-50 lg:hidden"
        >
          <Icon name="menu" size={22} />
        </button>
        <Logo variant="app" href={config.homeHref} className="[&>span>span:first-child]:text-xl" />
      </div>

      <SearchBar
        className="hidden max-w-xl flex-1 md:flex"
        placeholder={config.searchPlaceholder}
        shortcut="mod-k"
      />

      <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
        {config.showThemeToggle && (
          <button type="button" aria-label="Toggle theme" className="grid h-11 w-11 place-items-center rounded-full text-slate-600 hover:bg-indigo-50 hover:text-indigo-600">
            <Icon name="sun" size={21} />
          </button>
        )}
        <NotificationBell />
        <UserMenu user={user} items={config.userMenu} />
      </div>
    </header>
  );
}
