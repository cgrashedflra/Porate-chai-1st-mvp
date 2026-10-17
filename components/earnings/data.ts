import type { EarningStat, EarningTransaction, MonthlyEarning, PayoutMethod } from "./types";

/**
 * Sample data — replace with the educator's real (private) earnings.
 * Amounts are in BDT; never expose this data on a public profile.
 */
export const AVAILABLE_BALANCE = 22300;

export const earningStats: readonly EarningStat[] = [
  { key: "total", amount: 128500, trend: "15%", note: "from last month" },
  { key: "month", amount: 28500, trend: "8%", note: "vs. last month" },
  { key: "pending", amount: 6200, note: "3 payments processing" },
  { key: "available", amount: AVAILABLE_BALANCE, note: "Ready to withdraw" },
];

export const monthlyEarnings: readonly MonthlyEarning[] = [
  { month: "May", amount: 18200 },
  { month: "Jun", amount: 21500 },
  { month: "Jul", amount: 19800 },
  { month: "Aug", amount: 24100 },
  { month: "Sep", amount: 26400 },
  { month: "Oct", amount: 28500 },
];

export const earningTransactions: readonly EarningTransaction[] = [
  { id: "t1", student: "Tasmia Akter", subject: "Physics", level: "HSC 1st Year", date: "Oct 12, 2026", amount: 2500, status: "paid" },
  { id: "t2", student: "Rafid Hasan", subject: "Mathematics", level: "HSC 1st Year", date: "Oct 10, 2026", amount: 3000, status: "paid" },
  { id: "t3", student: "Nusrat Jahan", subject: "Chemistry", level: "HSC 1st Year", date: "Oct 09, 2026", amount: 2200, status: "pending" },
  { id: "t4", student: "Tanvir Ahmed", subject: "Mathematics", level: "HSC 2nd Year", date: "Oct 07, 2026", amount: 3000, status: "paid" },
  { id: "t5", student: "Sadia Rahman", subject: "Physics", level: "HSC 1st Year", date: "Oct 05, 2026", amount: 2500, status: "pending" },
  { id: "t6", student: "Arman Hossain", subject: "Mathematics", level: "HSC 1st Year", date: "Oct 02, 2026", amount: 3000, status: "paid" },
];

export const payoutMethods: readonly PayoutMethod[] = [
  { id: "bkash", name: "bKash", detail: "01•••••4821" },
  { id: "bank", name: "Bank Account", detail: "Dutch-Bangla •••• 2210" },
];
