import type { Notification } from "./types";

/** Number of notifications that have not been read yet. */
export const countUnread = (notifications: Notification[]): number =>
  notifications.filter((notification) => !notification.read).length;

export default countUnread;
