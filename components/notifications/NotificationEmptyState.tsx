import { BellOff } from "lucide-react";
import { CARD_SURFACE } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

/** Shown when no notification matches the active filter or search query. */
export function NotificationEmptyState({
  title = "Nothing here",
  description = "New notifications will show up in this list.",
}: {
  title?: string;
  description?: string;
} = {}) {
  return (
    <div
      className={cn(
        CARD_SURFACE,
        "grid place-items-center gap-3 py-16 text-center"
      )}
    >
      <div className="grid size-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-500">
        <BellOff className="size-6" />
      </div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
}
