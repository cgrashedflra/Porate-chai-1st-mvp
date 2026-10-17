import type { LedgerEntry } from "@/lib/finance";

/** Statuses an educator earning row can have. */
export type EarningStatus = "paid" | "pending";

/** A settled payment from a student to the educator. */
export interface EarningTransaction extends LedgerEntry<EarningStatus> {
  student: string;
  /** Class the payment was for, shown as "subject · level". */
  subject: string;
  level: string;
}

/** One month of income in the earnings chart. */
export interface MonthlyEarning {
  /** Short month label, e.g. "Oct". */
  month: string;
  amount: number;
}

/** Keys of the KPI tiles above the chart. */
export type EarningStatKey = "total" | "month" | "pending" | "available";

/** Raw KPI numbers; labels, icons and colours live in `config.ts`. */
export interface EarningStat {
  key: EarningStatKey;
  amount: number;
  trend?: string;
  note: string;
}

/** Payout destinations the educator can withdraw to. */
export type PayoutMethodId = "bkash" | "bank";

export interface PayoutMethod {
  id: PayoutMethodId;
  name: string;
  detail: string;
}
