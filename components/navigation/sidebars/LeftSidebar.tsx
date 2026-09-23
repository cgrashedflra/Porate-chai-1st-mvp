import type { RoleNavConfig } from "@/config/nav/types";
import { roleLabels } from "@/config/brand";
import type { NavUser } from "@/types/user";
import { Avatar } from "../../ui/Avatar";
import { Icon } from "../../ui/Icon";
import { LogoutButton } from "../primitives/LogoutButton";
import { NavGroup } from "../primitives/NavGroup";
import { NavLink } from "../primitives/NavLink";
import { PromoCard } from "../../ui/PromoCard";

type Props = {
  config: RoleNavConfig;
  user?: NavUser;
  /** live counts keyed by href, e.g. { "/student/messages": 7 } */
  badges?: Record<string, number>;
};

export function LeftSidebar({ config, user, badges }: Props) {
  const { items, footer } = config.sidebar;
  return (
    <div className="flex h-full flex-col">
      <nav aria-label="Main" className="scrollbar-none flex-1 overflow-y-auto px-3 pt-5">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              {item.children ? (
                <NavGroup item={item} />
              ) : (
                <NavLink item={item} variant="side" badge={badges?.[item.href]} />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {footer.kind === "promo" && (
        <div className="p-4">
          <PromoCard title={footer.title} body={footer.body} className="min-h-[220px]" />
        </div>
      )}

      {footer.kind === "account" && (
        <div className="p-4">
          <div className="glass-card rounded-2xl p-3 shadow-sm shadow-indigo-500/10">
            {user && (
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <Avatar name={user.name} src={user.avatarUrl} />
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-sm font-semibold text-slate-900">{user.name}</p>
                  <p className="truncate text-xs text-slate-500">{roleLabels[user.role]}</p>
                </div>
              </div>
            )}
            <LogoutButton className="mt-2 flex w-full items-center gap-3 rounded-xl px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Icon name="logout" size={18} /> Log out
            </LogoutButton>
          </div>
        </div>
      )}
    </div>
  );
}
