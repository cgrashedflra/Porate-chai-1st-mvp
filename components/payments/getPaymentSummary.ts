import { formatDueDate, sumAmounts, sumAmountsByStatus } from "@/lib/finance";
import type { PaymentHistoryRow, UpcomingPayment } from "./types";

/** Derived numbers shown in the summary tiles. */
export interface PaymentSummary {
  totalPaid: number;
  totalDue: number;
  upcomingCount: number;
  /** The soonest unpaid class, or `undefined` when nothing is due. */
  nextDue?: { date: string; subject: string };
}

/** Derive the summary tiles' values from the student's payment records. */
export function getPaymentSummary(
  history: readonly PaymentHistoryRow[],
  upcoming: readonly UpcomingPayment[]
): PaymentSummary {
  const next = upcoming[0];

  return {
    totalPaid: sumAmountsByStatus(history, "paid"),
    totalDue: sumAmounts(upcoming),
    upcomingCount: upcoming.length,
    nextDue: next ? { date: formatDueDate(next.due), subject: next.subject } : undefined,
  };
}
