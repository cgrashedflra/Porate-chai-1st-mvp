import { BellOff } from "lucide-react";

/** Shown when no notification matches the active filter. */
export function NotificationEmptyState() {
  return (
    <div className="grid place-items-center gap-3 rounded-2xl border border-indigo-100/80 bg-white py-16 text-center shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]">
      <div className="grid size-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-500">
        <BellOff className="size-6" />
      </div>
      <div>
        <p className="font-semibold text-slate-900">Nothing here</p>
        <p className="text-sm text-slate-500">New notifications will show up in this list.</p>
      </div>
    </div>
  );
}
