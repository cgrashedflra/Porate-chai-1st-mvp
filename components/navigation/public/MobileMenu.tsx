"use client";

import { PublicNav } from "@/config/nav/public";
import type { NavItem } from "@/config/nav/types";
import type { NavUser } from "@/types/user";
import { ButtonLink } from "../../ui/ButtonLink";
import { Icon } from "../../ui/Icon";
import { LogoutButton } from "../primitives/LogoutButton";
import { NavLink } from "../primitives/NavLink";
import { PromoCard } from "../../ui/PromoCard";

type Props = { id: string; items: NavItem[]; user: NavUser | null; onNavigate: () => void };

export function MobileMenu({ id, items, user, onNavigate }: Props) {
  const visible = items.filter((i) => !i.authOnly || user);
  return (
    <div id={id} className="border-t border-neutral-30 p-3 lg:hidden">
      <nav aria-label="Mobile">
        <ul className="space-y-1">
          {visible.map((item) => (
            <li key={item.href}>
              <NavLink item={item} variant="side" badgeTone="alert" onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </nav>

      {user ? (
        <LogoutButton className="mt-2 flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-[15px] font-medium text-red-600 hover:bg-red-50">
          <Icon name="logout" /> Log out
        </LogoutButton>
      ) : (
        <div className="mt-3 grid grid-cols-2 gap-3">
          <ButtonLink href={PublicNav.auth.login} variant="secondary">Log In</ButtonLink>
          <ButtonLink href={PublicNav.auth.signup}>Get Started</ButtonLink>
        </div>
      )}

      <PromoCard className="mt-3" {...PublicNav.promo} />
    </div>
  );
}
