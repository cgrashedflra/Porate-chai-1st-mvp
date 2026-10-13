import {
  Bell,
  CalendarDays,
  Clock,
  MessageSquare,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { NotificationFilter, NotificationType } from "@/lib/notifications";

/**
 * Presentational config for the notifications feature.
 * Keeps icon / colour / label choices out of the card component.
 */

interface NotificationTypeStyle {
  icon: LucideIcon;
  /** Tailwind classes for the icon tile. */
  tile: string;
  /** Default action label for the type. */
  action: string;
}

export const NOTIFICATION_TYPE_CONFIG: Record<NotificationType, NotificationTypeStyle> = {
  message: { icon: MessageSquare, tile: "bg-indigo-100 text-indigo-600", action: "Open chat" },
  class: { icon: CalendarDays, tile: "bg-sky-100 text-sky-600", action: "View class" },
  student: { icon: Users, tile: "bg-violet-100 text-violet-600", action: "View student" },
  earning: { icon: Wallet, tile: "bg-emerald-100 text-emerald-600", action: "View earnings" },
  availability: { icon: Clock, tile: "bg-amber-100 text-amber-600", action: "Update availability" },
  system: { icon: Bell, tile: "bg-slate-100 text-slate-600", action: "View details" },
};

export const NOTIFICATION_FILTERS: readonly { id: NotificationFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "unread", label: "Unread" },
  { id: "message", label: "Messages" },
  { id: "class", label: "Classes" },
  { id: "earning", label: "Earnings" },
];

/** Optional per-role overrides for the filter tab labels (e.g. "Payments"). */
export type NotificationFilterLabels = Partial<Record<NotificationFilter, string>>;

/** Filter tabs with any role-specific label overrides applied. */
export const getNotificationFilters = (
  labels: NotificationFilterLabels = {}
): { id: NotificationFilter; label: string }[] =>
  NOTIFICATION_FILTERS.map((filter) => ({ ...filter, label: labels[filter.id] ?? filter.label }));

/**
 * Optional per-role overrides for a notification type's card action.
 * e.g. students see "View payments" pointing at their payments page
 * instead of the default "View earnings" → `/earnings`.
 */
export type NotificationTypeOverrides = Partial<
  Record<NotificationType, { action?: string; href?: string }>
>;
