import type { Notification } from "./types";
import { countUnread as genericCountUnread } from "@/lib/listing";

/** Number of notifications that have not been read yet. */
export const countUnread = (notifications: Notification[]): number =>
  genericCountUnread(notifications);
