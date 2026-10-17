import { formatUnreadSummary } from "@/lib/listing";
import type { LucideIcon } from "lucide-react";

export function ListingHeader({
  title,
  unread = 0,
  itemName = "item",
  itemNamePlural,
  onMarkAllRead,
  markAllReadLabel = "Mark all as read",
  markAllReadIcon: MarkAllReadIcon,
  showMarkAllRead = true,
  action,
}: {
  title: string;
  unread?: number;
  itemName?: string;
  itemNamePlural?: string;
  onMarkAllRead?: () => void;
  markAllReadLabel?: string;
  markAllReadIcon?: LucideIcon;
  showMarkAllRead?: boolean;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="text-sm text-slate-500">
          {formatUnreadSummary(unread, itemName, itemNamePlural)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {action}
        {showMarkAllRead && onMarkAllRead && (
          <button
            type="button"
            onClick={onMarkAllRead}
            disabled={unread === 0}
            className="flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-medium text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.7)] transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
          >
            {MarkAllReadIcon && <MarkAllReadIcon className="size-4" />}
            {markAllReadLabel}
          </button>
        )}
      </div>
    </div>
  );
}
