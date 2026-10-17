import type { PaymentHistoryRow, PaymentMethod, UpcomingPayment } from "./types";

/**
 * Sample data — replace with the student's real payments.
 * Amounts are in BDT (৳).
 */
export const upcomingPayments: readonly UpcomingPayment[] = [
  { id: "u1", subject: "Physics", level: "HSC 1st Year", teacher: "Mehedi Hasan", due: "Oct 20, 2026", amount: 2500 },
  { id: "u2", subject: "Chemistry", level: "HSC 1st Year", teacher: "Nasrin Sultana", due: "Oct 25, 2026", amount: 2200 },
];

export const paymentHistory: readonly PaymentHistoryRow[] = [
  { id: "p1", subject: "Mathematics", level: "HSC 1st Year", teacher: "Mehedi Hasan", date: "Oct 05, 2026", method: "bKash", amount: 3000, status: "paid" },
  { id: "p2", subject: "Physics", level: "HSC 1st Year", teacher: "Mehedi Hasan", date: "Sep 20, 2026", method: "Nagad", amount: 2500, status: "paid" },
  { id: "p3", subject: "Chemistry", level: "HSC 1st Year", teacher: "Nasrin Sultana", date: "Sep 25, 2026", method: "Card", amount: 2200, status: "failed" },
  { id: "p4", subject: "Mathematics", level: "HSC 1st Year", teacher: "Mehedi Hasan", date: "Sep 05, 2026", method: "bKash", amount: 3000, status: "paid" },
  { id: "p5", subject: "Physics", level: "HSC 1st Year", teacher: "Mehedi Hasan", date: "Aug 20, 2026", method: "bKash", amount: 2500, status: "paid" },
];

export const paymentMethods: readonly PaymentMethod[] = [
  { id: "bkash", name: "bKash", detail: "01•••••4821", primary: true },
  { id: "nagad", name: "Nagad", detail: "01•••••7305" },
  { id: "card", name: "Visa Card", detail: "•••• 4417" },
];
