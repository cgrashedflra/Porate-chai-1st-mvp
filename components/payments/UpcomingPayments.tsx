import { CalendarClock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CardHeader } from "@/components/ui/CardHeader";
import { formatTaka } from "@/lib/finance";
import type { UpcomingPayment } from "./types";

/** Class fees the student still has to pay. */
export function UpcomingPayments({ items }: { items: readonly UpcomingPayment[] }) {
  return (
    <Card>
      <CardHeader title="Upcoming Payments" />

      {items.length === 0 ? (
        <p className="py-6 text-center text-sm text-slate-400">No upcoming payments.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-3 rounded-xl bg-indigo-50/50 p-4 ring-1 ring-indigo-100 sm:flex-row sm:items-center"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-indigo-500 ring-1 ring-indigo-100">
                <CalendarClock className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {item.subject} · {item.level}
                </p>
                <p className="text-xs text-slate-500">
                  {item.teacher} <span className="mx-1 text-indigo-300">•</span> Due {item.due}
                </p>
              </div>
              <p className="text-lg font-bold text-slate-900">{formatTaka(item.amount)}</p>
              <button
                type="button"
                className="h-9 rounded-xl bg-indigo-600 px-5 text-sm font-medium text-white shadow-[0_8px_20px_-10px_rgba(79,70,229,0.7)] transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
              >
                Pay now
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
