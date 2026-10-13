import type { Notification, NotificationFilter } from "./types";

/**
 * Apply a filter tab to a list of notifications.
 * `all` keeps everything, `unread` keeps unread items, anything else
 * matches the notification type.
 */
export const filterNotifications = <T extends Notification>(
  notifications: T[],
  filter: NotificationFilter
): T[] => {
  if (filter === "all") return notifications;
  if (filter === "unread") return notifications.filter((notification) => !notification.read);
  return notifications.filter((notification) => notification.type === filter);
};

export default filterNotifications;
