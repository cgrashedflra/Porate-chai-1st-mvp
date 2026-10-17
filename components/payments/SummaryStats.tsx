import { StatGrid } from "@/components/ui/StatGrid";
import type { StatItem } from "@/components/ui/StatCard";
import { formatTaka } from "@/lib/finance";
import { PAYMENT_STAT_CONFIG } from "./config";
import type { PaymentSummary } from "./getPaymentSummary";

/** The summary tiles at the top of the payments page. */
export function SummaryStats({ summary }: { summary: PaymentSummary }) {
  const { paid, due, next } = PAYMENT_STAT_CONFIG;

  const items: StatItem[] = [
    {
      ...paid,
      value: formatTaka(summary.totalPaid),
      note: "All time",
    },
    {
      ...due,
      value: formatTaka(summary.totalDue),
      note: `${summary.upcomingCount} upcoming payments`,
    },
    {
      ...next,
      value: summary.nextDue?.date ?? "—",
      note: summary.nextDue?.subject ?? "No upcoming payments",
    },
  ];

  return <StatGrid items={items} className="sm:grid-cols-3" />;
}
