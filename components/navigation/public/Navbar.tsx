"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { getNavConfig } from "@/config/nav";
import { PublicNav } from "@/config/nav/public";
import type { NavItem } from "@/config/nav/types";
import type { NavUser } from "@/types/user";
import { ButtonLink } from "../../ui/ButtonLink";
import { Icon } from "../../ui/Icon";
import { Logo } from "../../ui/Logo";
import { NavLink } from "../primitives/NavLink";
import { NotificationBell } from "../primitives/NotificationBell";
import { SearchBar } from "../../ui/SearchBar";
import { UserMenu } from "../dashboard/UserMenu";
import { MobileMenu } from "./MobileMenu";

type Props = {
  /** Pass the signed-in user; null/undefined shows Log In + Get Started */
  user?: NavUser | null;
  items?: NavItem[];
};

export function Navbar({ user = null, items = PublicNav.items }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu on route change (adjust state during render)
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const desktopItems = items.filter((i) => !i.mobileOnly);
  const iconBtn = "grid h-11 w-11 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus-visible:outline-2 focus-visible:outline-primary-500";

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-2xl border border-neutral-30/60 bg-white/85 backdrop-blur-md transition-shadow duration-200",
          scrolled ? "shadow-pc-md" : "shadow-pc-sm"
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
            <SearchBar className="hidden w-64 xl:flex" placeholder="Search gigs, classes, educators..." shortcut="slash" />
            <Link href="/search" aria-label="Search" className={cn(iconBtn, "xl:hidden")}>
              <Icon name="search" size={21} />
            </Link>

            {user && <NotificationBell viewAllHref={getNavConfig(user.role).notificationsHref} />}

            {user ? (
              <div className="hidden lg:block">
                <UserMenu user={user} items={getNavConfig(user.role).userMenu} profileHref={getNavConfig(user.role).profileHref} showLabel={false} />
              </div>
            ) : (
              <div className="ml-2 hidden items-center gap-3 lg:flex">
                <ButtonLink href={PublicNav.auth.login} variant="secondary">Log In</ButtonLink>
                <ButtonLink href={PublicNav.auth.signup} icon="arrowRight">Get Started</ButtonLink>
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
