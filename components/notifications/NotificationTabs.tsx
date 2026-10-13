import { cn } from "@/lib/cn";
import type { NotificationFilter } from "@/lib/notifications";
import { getNotificationFilters, type NotificationFilterLabels } from "./config";

/** Filter tabs (all / unread / per-type) above the notification list. */
export function NotificationTabs({
  filter,
  unread,
  onChange,
  labels,
}: {
  filter: NotificationFilter;
  unread: number;
  onChange: (filter: NotificationFilter) => void;
  /** Optional per-role label overrides (e.g. `{ earning: "Payments" }`). */
  labels?: NotificationFilterLabels;
}) {
  return (
    <div role="tablist" className="flex gap-6 overflow-x-auto border-b border-indigo-100">
      {getNotificationFilters(labels).map((f) => (
        <button
          key={f.id}
          role="tab"
          aria-selected={filter === f.id}
          onClick={() => onChange(f.id)}
          className={cn(
            "-mb-px flex items-center gap-2 whitespace-nowrap border-b-2 py-3 text-sm font-medium transition-colors",
            filter === f.id
              ? "border-indigo-500 text-indigo-600"
              : "border-transparent text-slate-500 hover:text-slate-700"
          )}
        >
          {f.label}
          {f.id === "unread" && unread > 0 && (
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-indigo-500 px-1.5 text-[11px] font-semibold text-white">
              {unread}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
