import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Notification } from "@/lib/notifications";
import { NOTIFICATION_TYPE_CONFIG, type NotificationTypeOverrides } from "./config";

/** Presentational notification row: icon, copy, and an action link. */
export function NotificationCard({
  notification,
  onRead,
  overrides,
}: {
  notification: Notification;
  /** Called when the action button is clicked, so the parent can mark it read. */
  onRead?: (id: string) => void;
  /** Optional per-role overrides for this type's action label / href. */
  overrides?: NotificationTypeOverrides;
}) {
  const { id, type, title, description, time, read, href, actionLabel } = notification;
  const { icon: Icon, tile, action } = NOTIFICATION_TYPE_CONFIG[type];
  const override = overrides?.[type];
  const actionHref = override?.href ?? href;

  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-2xl border p-4 shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)] transition-colors sm:flex-row sm:items-center sm:p-5",
        read ? "border-indigo-100/80 bg-white" : "border-indigo-200 bg-indigo-50/50"
      )}
    >
      <div className={cn("grid size-12 shrink-0 place-items-center rounded-xl", tile)}>
        <Icon className="size-5" aria-hidden />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-sm font-semibold text-slate-900">{title}</h3>
          {!read && (
            <>
              <span className="size-2 shrink-0 rounded-full bg-indigo-500" aria-hidden />
              <span className="sr-only">Unread</span>
            </>
          )}
        </div>
        <p className="mt-0.5 line-clamp-2 text-sm text-slate-500">{description}</p>
        <p className="mt-1 text-xs text-slate-400">{time}</p>
      </div>

      <Link
        href={actionHref}
        onClick={() => onRead?.(id)}
        className={cn(
          "inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2",
          read
            ? "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 hover:bg-indigo-100"
            : "bg-indigo-600 text-white shadow-[0_8px_20px_-10px_rgba(79,70,229,0.7)] hover:bg-indigo-700"
        )}
      >
        {actionLabel ?? override?.action ?? action}
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </article>
  );
}
