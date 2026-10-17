// ============================================================
// NOTIFICATIONS — shared domain types & constants.
// Kept in `lib/` (like marketplace) so pure helpers and the
// presentational components can both depend on them.
// ============================================================

import type { ListGroup } from "@/lib/listing";
import { DEFAULT_LIST_GROUPS } from "@/lib/listing";

export type NotificationType =
  | "message"
  | "class"
  | "student"
  | "earning"
  | "availability"
  | "system";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  /** Display string, e.g. "10:24 AM" or "Yesterday". */
  time: string;
  read: boolean;
  /** Route the action button opens. */
  href: string;
  /** Overrides the default action label for the type. */
  actionLabel?: string;
}

/** Recency buckets the list is grouped into. */
export type NotificationGroup = ListGroup;

/** A notification plus the bucket it belongs to. */
export type NotificationItem = Notification & { group: NotificationGroup };

/** Tabs shown above the list. */
export type NotificationFilter =
  | "all"
  | "unread"
  | Extract<NotificationType, "message" | "class" | "earning">;

/** Order the groups are rendered in. */
export const NOTIFICATION_GROUPS: readonly NotificationGroup[] = DEFAULT_LIST_GROUPS;

