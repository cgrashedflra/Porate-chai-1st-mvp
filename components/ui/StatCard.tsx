import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/cn";

/** Content of a single KPI tile — rendered by `StatCard` / `StatGrid`. */
export interface StatItem {
  icon: LucideIcon;
  /** Tailwind classes tinting the circular icon tile. */
  tile: string;
  label: string;
  /** Pre-formatted display value (use `formatTaka` for money). */
  value: ReactNode;
  /** Supporting note below the value. */
  note?: ReactNode;
  /** Positive delta shown in green, e.g. "15%". */
  trend?: string;
}

/** KPI tile: tinted icon, label, big value, and an optional note / trend. */
export function StatCard({ icon: Icon, tile, label, value, note, trend }: StatItem) {
  return (
    <Card className="flex items-start gap-4">
      <div className={cn("grid size-12 shrink-0 place-items-center rounded-full", tile)}>
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
          {trend && (
            <span className="flex items-center font-medium text-emerald-500">
              <ArrowUp className="size-3" />
              {trend}
            </span>
          )}
          {note}
        </p>
      </div>
    </Card>
  );
}
