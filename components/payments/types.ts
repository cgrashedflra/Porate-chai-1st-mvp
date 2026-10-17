import type { LedgerEntry } from "@/lib/finance";

/** Statuses a student payment row can have. */
export type PaymentStatus = "paid" | "due" | "failed";

/** A settled (or failed) payment in the student's history. */
export interface PaymentHistoryRow extends LedgerEntry<PaymentStatus> {
  /** Class the fee was for, shown as "subject · level". */
  subject: string;
  level: string;
  teacher: string;
  /** Payment method used, e.g. "bKash". */
  method: string;
}

/** A class fee the student still has to pay. */
export interface UpcomingPayment {
  id: string;
  subject: string;
  level: string;
  teacher: string;
  /** Due date, e.g. "Oct 20, 2026". */
  due: string;
  amount: number;
}

/** Keys of the summary tiles above the tables. */
export type PaymentStatKey = "paid" | "due" | "next";

/** Saved payment methods the student can pay with. */
export type PaymentMethodId = "bkash" | "nagad" | "card";

export interface PaymentMethod {
  id: PaymentMethodId;
  name: string;
  detail: string;
  /** Highlighted as the method used by default. */
  primary?: boolean;
}
