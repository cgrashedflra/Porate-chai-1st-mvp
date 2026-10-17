import { Card } from "@/components/ui/Card";
import { CardHeader } from "@/components/ui/CardHeader";
import { formatTaka } from "@/lib/finance";
import { cn } from "@/lib/cn";
import type { MonthlyEarning } from "./types";

/** Bar chart of the last months of income (CSS only, no chart library). */
export function EarningsChart({ points }: { points: readonly MonthlyEarning[] }) {
  const max = Math.max(...points.map((point) => point.amount), 0);
  const chartLabel = points
    .map((point) => `${point.month} ${formatTaka(point.amount)}`)
    .join(", ");

  return (
    <Card>
      <CardHeader title="Monthly Earnings" hint="Last 6 months" spacing="loose" />
      <div
        role="img"
        aria-label={`Bar chart of monthly earnings: ${chartLabel}`}
        className="flex h-52 items-end gap-3 sm:gap-5"
      >
        {points.map((point, index) => {
          const current = index === points.length - 1;
          return (
            <div
              key={point.month}
              className="group flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <span className="text-[11px] font-medium text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">
                {formatTaka(point.amount)}
              </span>
              <div
                style={{ height: `${(point.amount / max) * 100}%` }}
                className={cn(
                  "w-full max-w-12 rounded-t-xl transition-colors",
                  current ? "bg-indigo-500" : "bg-indigo-200 group-hover:bg-indigo-300"
                )}
              />
              <span
                className={cn(
                  "text-xs",
                  current ? "font-semibold text-indigo-600" : "text-slate-400"
                )}
              >
                {point.month}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
