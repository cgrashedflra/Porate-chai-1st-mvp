import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { CardHeader } from "@/components/ui/CardHeader";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { StatusPill } from "@/components/ui/StatusPill";
import { formatTaka, type StatusFilter } from "@/lib/finance";
import { EARNING_STATUS_TONES, TRANSACTION_FILTERS } from "./config";
import type { EarningTransaction } from "./types";

/** Filterable list of payments received from students. */
export function TransactionsTable({
  rows,
  status,
  onStatusChange,
}: {
  rows: readonly EarningTransaction[];
  status: StatusFilter<EarningTransaction>;
  onStatusChange: (status: StatusFilter<EarningTransaction>) => void;
}) {
  return (
    <Card>
      <CardHeader
        title="Recent Transactions"
        spacing="tight"
        action={
          <FilterTabs options={TRANSACTION_FILTERS} value={status} onChange={onStatusChange} />
        }
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-indigo-50 text-xs text-slate-400">
              <th className="py-3 font-medium">Student</th>
              <th className="py-3 font-medium">Date</th>
              <th className="py-3 text-right font-medium">Amount</th>
              <th className="py-3 pl-4 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-indigo-50">
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={row.student} size="xs" variant="soft" />
                    <div className="min-w-0">
                      <p className="truncate font-medium text-slate-800">{row.student}</p>
                      <p className="truncate text-xs text-slate-500">
                        {row.subject} · {row.level}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-slate-500">{row.date}</td>
                <td className="py-3 text-right font-semibold text-slate-900">
                  {formatTaka(row.amount)}
                </td>
                <td className="py-3 pl-4 text-right">
                  <StatusPill tone={EARNING_STATUS_TONES[row.status]}>{row.status}</StatusPill>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="py-10 text-center text-slate-400">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
