import {
  CalendarClock,
  CheckCircle2,
  CreditCard,
  Smartphone,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { FilterTabOption } from "@/components/ui/FilterTabs";
import type { StatusTone } from "@/components/ui/StatusPill";
import type { StatusFilter } from "@/lib/finance";
import type { PaymentHistoryRow, PaymentMethodId, PaymentStatKey, PaymentStatus } from "./types";

/**
 * Presentational config for the payments feature: icons, tint colours and
 * labels keyed by domain value, so the components stay style-agnostic.
 */

/** Icon, tint and label for each summary tile. */
export const PAYMENT_STAT_CONFIG: Record<
  PaymentStatKey,
  { icon: LucideIcon; tile: string; label: string }
> = {
  paid: { icon: CheckCircle2, tile: "bg-emerald-50 text-emerald-500", label: "Total Paid" },
  due: { icon: Wallet, tile: "bg-indigo-50 text-indigo-500", label: "Amount Due" },
  next: { icon: CalendarClock, tile: "bg-amber-50 text-amber-500", label: "Next Due Date" },
};

/** Status → pill colour. */
export const PAYMENT_STATUS_TONES: Record<PaymentStatus, StatusTone> = {
  paid: "success",
  due: "info",
  failed: "danger",
};

/** Icon for each saved payment method. */
export const PAYMENT_METHOD_ICONS: Record<PaymentMethodId, LucideIcon> = {
  bkash: Smartphone,
  nagad: Smartphone,
  card: CreditCard,
};

/** Filter tabs above the payment history table. */
export const HISTORY_FILTERS: readonly FilterTabOption<StatusFilter<PaymentHistoryRow>>[] = [
  { value: "all", label: "All" },
  { value: "paid", label: "Paid" },
  { value: "failed", label: "Failed" },
];
