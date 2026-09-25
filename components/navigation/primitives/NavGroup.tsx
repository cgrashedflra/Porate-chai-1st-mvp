"use client";

import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/config/nav/types";
import { Icon } from "../../ui/Icon";
import { NavLink } from "./NavLink";

export function NavGroup({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const pathname = usePathname();
  const hasActiveChild = item.children?.some((c) => pathname.startsWith(c.href)) ?? false;
  const [open, setOpen] = useState(hasActiveChild);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
          hasActiveChild ? "text-primary-600" : "text-neutral-600 hover:bg-neutral-20 hover:text-neutral-900"
        )}
      >
        {item.icon && <Icon name={item.icon} className={hasActiveChild ? "text-primary-600" : "text-neutral-400"} />}
        <span className="flex-1 truncate">{item.label}</span>
        <Icon name="chevronRight" size={16} className={cn("text-neutral-100 transition-transform", open && "rotate-90")} />
      </button>
      {open && (
        <ul id={panelId} className="mt-1 space-y-1 pl-10">
          {item.children!.map((child) => (
            <li key={child.href}>
              <NavLink item={child} variant="child" onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
