import { cn } from "@/lib/cn";
import type { ListFilter } from "@/lib/listing";

export interface ListTab {
  id: ListFilter;
  label: string;
  /** Show the unread count badge on this tab (defaults to true for the "unread" tab). */
  showCount?: boolean;
}

export function ListingTabs({
  filter,
  onChange,
  tabs,
  unreadCount,
}: {
  filter: ListFilter;
  onChange: (filter: ListFilter) => void;
  tabs: ListTab[];
  unreadCount?: number;
}) {
  return (
    <div role="tablist" className="flex gap-6 overflow-x-auto border-b border-indigo-100">
      {tabs.map((f) => {
        const showBadge = (f.showCount ?? f.id === "unread") && (unreadCount ?? 0) > 0;
        return (
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
            {showBadge && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-indigo-500 px-1.5 text-[11px] font-semibold text-white">
                {unreadCount}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
