import { cn } from "@/lib/cn";
import { CARD_SURFACE } from "@/components/ui/Card";
import type { LucideIcon } from "lucide-react";

export function ListingEmptyState({
  icon: Icon,
  title = "Nothing here",
  description = "New items will show up in this list.",
  className,
}: {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        CARD_SURFACE,
        "grid place-items-center gap-3 py-16 text-center",
        className
      )}
    >
      {Icon && (
        <div className="grid size-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-500">
          <Icon className="size-6" />
        </div>
      )}
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
}
