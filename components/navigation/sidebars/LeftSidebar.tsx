import type { RoleNavConfig } from "@/config/nav/types";
import { NavGroup } from "../primitives/NavGroup";
import { NavLink } from "../primitives/NavLink";
import { PromoCard } from "../../ui/PromoCard";

type Props = {
  config: RoleNavConfig;
  /** live counts keyed by href, e.g. { "/student/messages": 7 } */
  badges?: Record<string, number>;
};

export function LeftSidebar({ config, badges }: Props) {
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
    </div>
  );
}
