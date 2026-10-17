import type { Notification } from "./types";

/**
 * Keep notifications whose title, description, type or action label
 * contains `query` (case-insensitive). An empty query keeps everything.
 */
export const searchNotifications = <T extends Notification>(
  notifications: T[],
  query: string
): T[] => {
  const q = query.trim().toLowerCase();
  if (!q) return notifications;
  return notifications.filter((notification) =>
    [notification.title, notification.description, notification.type, notification.actionLabel].some(
      (field) => field?.toLowerCase().includes(q)
    )
  );
};

export default searchNotifications;
