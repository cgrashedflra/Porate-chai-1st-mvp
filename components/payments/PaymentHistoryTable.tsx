import { Download } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CardHeader } from "@/components/ui/CardHeader";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { StatusPill } from "@/components/ui/StatusPill";
import { formatTaka, type StatusFilter } from "@/lib/finance";
import { HISTORY_FILTERS, PAYMENT_STATUS_TONES } from "./config";
import type { PaymentHistoryRow } from "./types";

/** Filterable list of past payments with receipt / retry actions. */
export function PaymentHistoryTable({
  rows,
  status,
  onStatusChange,
}: {
  rows: readonly PaymentHistoryRow[];
  status: StatusFilter<PaymentHistoryRow>;
  onStatusChange: (status: StatusFilter<PaymentHistoryRow>) => void;
}) {
  return (
    <Card>
      <CardHeader
        title="Payment History"
        spacing="tight"
        action={<FilterTabs options={HISTORY_FILTERS} value={status} onChange={onStatusChange} />}
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-indigo-50 text-xs text-slate-400">
              <th className="py-3 font-medium">Class</th>
              <th className="py-3 font-medium">Date</th>
              <th className="py-3 font-medium">Method</th>
              <th className="py-3 text-right font-medium">Amount</th>
              <th className="py-3 pl-4 text-right font-medium">Status</th>
              <th className="w-10 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-indigo-50">
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="py-3">
                  <p className="font-medium text-slate-800">
                    {row.subject} · {row.level}
                  </p>
                  <p className="text-xs text-slate-500">{row.teacher}</p>
                </td>
                <td className="py-3 text-slate-500">{row.date}</td>
                <td className="py-3 text-slate-500">{row.method}</td>
                <td className="py-3 text-right font-semibold text-slate-900">
                  {formatTaka(row.amount)}
                </td>
                <td className="py-3 pl-4 text-right">
                  <StatusPill tone={PAYMENT_STATUS_TONES[row.status]}>{row.status}</StatusPill>
                </td>
                <td className="py-3 text-right">
                  {row.status === "paid" ? (
                    <button
                      type="button"
                      aria-label={`Download receipt for ${row.subject} · ${row.level}, ${row.date}`}
                      className="text-indigo-500 hover:text-indigo-700"
                    >
                      <Download className="size-4" />
                    </button>
                  ) : row.status === "failed" ? (
                    <button
                      type="button"
                      className="text-xs font-medium text-indigo-600 hover:underline"
                    >
                      Retry
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="py-10 text-center text-slate-400">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
