import type { Notification, NotificationFilter } from "./types";
import { filterItems } from "@/lib/listing";

/**
 * Apply a filter tab to a list of notifications.
 * `all` keeps everything, `unread` keeps unread items, anything else
 * matches the notification type.
 */
export const filterNotifications = <T extends Notification>(
  notifications: T[],
  filter: NotificationFilter
): T[] => filterItems(notifications, filter);

export default filterNotifications;
