import { Banknote, Clock, Landmark, Smartphone, TrendingUp, Wallet, type LucideIcon } from "lucide-react";
import type { FilterTabOption } from "@/components/ui/FilterTabs";
import type { StatusTone } from "@/components/ui/StatusPill";
import type { StatusFilter } from "@/lib/finance";
import type { EarningStatKey, EarningStatus, EarningTransaction, PayoutMethodId } from "./types";

/**
 * Presentational config for the earnings feature: icons, tint colours and
 * labels keyed by domain value, so the components stay style-agnostic.
 */

/** Icon, tint and label for each KPI tile. */
export const EARNING_STAT_CONFIG: Record<
  EarningStatKey,
  { icon: LucideIcon; tile: string; label: string }
> = {
  total: { icon: Wallet, tile: "bg-indigo-50 text-indigo-500", label: "Total Earnings" },
  month: { icon: TrendingUp, tile: "bg-emerald-50 text-emerald-500", label: "This Month" },
  pending: { icon: Clock, tile: "bg-amber-50 text-amber-500", label: "Pending" },
  available: { icon: Banknote, tile: "bg-sky-50 text-sky-500", label: "Available" },
};

/** Status → pill colour. */
export const EARNING_STATUS_TONES: Record<EarningStatus, StatusTone> = {
  paid: "success",
  pending: "warning",
};

/** Icon for each payout destination. */
export const PAYOUT_METHOD_ICONS: Record<PayoutMethodId, LucideIcon> = {
  bkash: Smartphone,
  bank: Landmark,
};

/** Filter tabs above the transactions table. */
export const TRANSACTION_FILTERS: readonly FilterTabOption<StatusFilter<EarningTransaction>>[] = [
  { value: "all", label: "All" },
  { value: "paid", label: "Paid" },
  { value: "pending", label: "Pending" },
];
