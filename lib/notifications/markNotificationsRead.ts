import type { Notification } from "./types";

/** Mark a single notification as read. Returns a new array. */
export const markNotificationAsRead = <T extends Notification>(
  notifications: T[],
  id: string
): T[] => notifications.map((n) => (n.id === id ? { ...n, read: true } : n));

/** Mark every notification as read. Returns a new array. */
export const markAllNotificationsAsRead = <T extends Notification>(
  notifications: T[]
): T[] => notifications.map((n) => (n.read ? n : { ...n, read: true }));
