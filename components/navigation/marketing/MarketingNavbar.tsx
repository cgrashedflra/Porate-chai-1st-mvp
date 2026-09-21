"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { getNavConfig } from "@/config/nav";
import { marketingNav } from "@/config/nav/marketing";
import type { NavItem } from "@/config/nav/types";
import type { NavUser } from "@/types/user";
import { ButtonLink } from "../primitives/ButtonLink";
import { Icon } from "../primitives/Icon";
import { Logo } from "../primitives/Logo";
import { NavLink } from "../primitives/NavLink";
import { NotificationBell } from "../primitives/NotificationBell";
import { SearchBar } from "../primitives/SearchBar";
import { UserMenu } from "../app/UserMenu";
import { MobileMenu } from "./MobileMenu";

type Props = {
  /** Pass the signed-in user; null/undefined shows Log In + Get Started */
  user?: NavUser | null;
  items?: NavItem[];
};

export function MarketingNavbar({ user = null, items = marketingNav.items }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const desktopItems = items.filter((i) => !i.mobileOnly);
  const iconBtn = "grid h-11 w-11 place-items-center rounded-full text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-indigo-500";

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-2xl border bg-white/85 backdrop-blur-md transition-shadow duration-200",
          scrolled ? "border-slate-200 shadow-lg shadow-indigo-500/10" : "border-white shadow-[0_8px_30px_rgba(99,102,241,0.08)]"
        )}
      >
        <div className={cn("flex items-center gap-4 px-4 transition-[height] duration-200 sm:px-6", scrolled ? "h-16" : "h-20")}>
          <Logo variant="marketing" />

          <nav aria-label="Primary" className="ml-4 hidden lg:block">
            <ul className="flex items-center gap-1">
              {desktopItems.map((item) => (
                <li key={item.href}>
                  <NavLink item={item} variant="top" />
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <SearchBar className="hidden w-64 xl:flex" placeholder="Search mentors, subjects..." shortcut="slash" />
            <Link href="/search" aria-label="Search" className={cn(iconBtn, "xl:hidden")}>
              <Icon name="search" size={21} />
            </Link>

            {user && <NotificationBell />}

            {user ? (
              <div className="hidden lg:block">
                <UserMenu user={user} items={getNavConfig(user.role).userMenu} showLabel={false} />
              </div>
            ) : (
              <div className="ml-2 hidden items-center gap-3 lg:flex">
                <ButtonLink href={marketingNav.auth.login} variant="secondary">Log In</ButtonLink>
                <ButtonLink href={marketingNav.auth.signup} icon="arrowRight">Get Started</ButtonLink>
              </div>
            )}

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((v) => !v)}
              className={cn(iconBtn, "lg:hidden")}
            >
              <Icon name={open ? "x" : "menu"} size={22} />
            </button>
          </div>
        </div>

        {open && <MobileMenu id={menuId} items={items} user={user} onNavigate={() => setOpen(false)} />}
      </div>
    </header>
  );
}
