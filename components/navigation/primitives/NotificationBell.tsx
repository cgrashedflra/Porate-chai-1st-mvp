"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Icon } from "../../ui/Icon";

type Props = { viewAllHref?: string; hasUnread?: boolean };

const recentNotifications = [
  { icon: "message", title: "New message from Dr. Ahsan Rahman", meta: "5m ago" },
  { icon: "calendar", title: "HSC Physics class starts in 30 min", meta: "1h ago" },
  { icon: "creditCard", title: "Payment received — BDT 1,200", meta: "Yesterday" },
] as const;

export function NotificationBell({ viewAllHref = "/notifications", hasUnread = true }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the dropdown on route change (adjust state during render)
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
        aria-label={hasUnread ? "Notifications (unread)" : "Notifications"}
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-11 w-11 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus-visible:outline-2 focus-visible:outline-primary-500"
      >
        <Icon name="bell" size={21} />
        {hasUnread && <span className="absolute right-3 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />}
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 z-50 mt-2 w-80 rounded-2xl border border-neutral-30 bg-neutral-0 p-2 shadow-pc-md"
        >
          <p className="px-3 pb-2 pt-1 text-sm font-semibold text-neutral-900">Notifications</p>
          <ul className="mb-1">
            {recentNotifications.map((n) => (
              <li key={n.title} className="flex items-start gap-3 rounded-xl px-3 py-2.5">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-50 text-primary-600">
                  <Icon name={n.icon} size={16} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-neutral-700">{n.title}</span>
                  <span className="block text-xs text-neutral-400">{n.meta}</span>
                </span>
              </li>
            ))}
          </ul>
          <Link
            href={viewAllHref}
            role="menuitem"
            onClick={() => setOpen(false)}
            className={cn(
              "flex w-full items-center justify-center rounded-xl border-t border-neutral-30 px-3 py-2.5 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-primary-500"
            )}
          >
            View all notifications
          </Link>
        </div>
      )}
    </div>
  );
}
