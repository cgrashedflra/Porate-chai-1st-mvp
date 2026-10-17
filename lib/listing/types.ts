// ============================================================
// GENERIC LISTING — reusable list types & constants
// Extracted from notifications to be used across different pages
// (notifications, my educators, my classes, ...).
// ============================================================

export interface ListItem {
  id: string;
  title: string;
  description: string;
  /** Optional type/category used for filtering (e.g. "message", "educator"). */
  type?: string;
  /** Display string, e.g. "10:24 AM" or "Yesterday". */
  time?: string;
  /** Whether the item is read (drives the unread badge / highlight). */
  read?: boolean;
  /** Route the action button opens. */
  href?: string;
  /** Overrides the default action label for the type. */
  actionLabel?: string;
  /** Optional short badge/text shown next to the title. */
  meta?: string;
  /** Optional image/avatar URL for custom item rendering. */
  imageUrl?: string;
}

/** Recency buckets the list is grouped into. */
export type ListGroup = "Today" | "Yesterday" | "Earlier";

/** A list item plus the bucket it belongs to. */
export type GroupedListItem<T extends ListItem = ListItem> = T & { group: ListGroup };

/** Generic filter type (tab id). */
export type ListFilter = string;

/** Order the groups are rendered in. */
export const DEFAULT_LIST_GROUPS: readonly ListGroup[] = [
  "Today",
  "Yesterday",
  "Earlier",
];
