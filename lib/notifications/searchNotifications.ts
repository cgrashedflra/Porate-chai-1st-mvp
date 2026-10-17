import type { Notification } from "./types";
import { searchItems } from "@/lib/listing";

/**
 * Keep notifications whose title, description, type or action label
 * match the query (case-insensitive). If query is empty, return all.
 */
export const searchNotifications = <T extends Notification>(
  notifications: T[],
  query: string
): T[] => searchItems(notifications, query);

export default searchNotifications;
