import { NOTIFICATION_GROUPS, type NotificationGroup, type NotificationItem } from "./types";

export interface NotificationSection {
  group: NotificationGroup;
  items: NotificationItem[];
}

/** Bucket notifications into their recency groups, dropping empty ones. */
export const getNotificationSections = (
  notifications: NotificationItem[],
  groups: readonly NotificationGroup[] = NOTIFICATION_GROUPS
): NotificationSection[] =>
  groups
    .map((group) => ({ group, items: notifications.filter((n) => n.group === group) }))
    .filter((section) => section.items.length > 0);

export default getNotificationSections;
