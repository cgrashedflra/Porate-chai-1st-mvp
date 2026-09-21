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
          "flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
          hasActiveChild ? "text-indigo-600" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        )}
      >
        {item.icon && <Icon name={item.icon} className={hasActiveChild ? "text-indigo-600" : "text-slate-500"} />}
        <span className="flex-1 truncate">{item.label}</span>
        <Icon name="chevronRight" size={16} className={cn("text-slate-400 transition-transform", open && "rotate-90")} />
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
