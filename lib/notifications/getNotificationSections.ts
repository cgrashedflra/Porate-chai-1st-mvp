import { NOTIFICATION_GROUPS, type NotificationGroup, type NotificationItem } from "./types";
import { getListSections } from "@/lib/listing";

export interface NotificationSection {
  group: NotificationGroup;
  items: NotificationItem[];
}

/** Bucket notifications into their recency groups, dropping empty ones. */
export const getNotificationSections = (
  notifications: NotificationItem[],
  groups: readonly NotificationGroup[] = NOTIFICATION_GROUPS
): NotificationSection[] =>
  getListSections(notifications, groups) as NotificationSection[];

export default getNotificationSections;
