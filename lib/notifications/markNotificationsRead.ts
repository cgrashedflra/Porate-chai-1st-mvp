import type { Notification } from "./types";
import { markItemAsRead, markAllItemsAsRead } from "@/lib/listing";

/** Mark a single notification as read. Returns a new array. */
export const markNotificationAsRead = <T extends Notification>(
  notifications: T[],
  id: string
): T[] => markItemAsRead(notifications, id);

/** Mark every notification as read. Returns a new array. */
export const markAllNotificationsAsRead = <T extends Notification>(
  notifications: T[]
): T[] => markAllItemsAsRead(notifications);
