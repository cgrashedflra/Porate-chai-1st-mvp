import type { ListItem } from "./types";

/** Mark a single item as read. Returns a new array. */
export const markItemAsRead = <T extends ListItem>(items: T[], id: string): T[] =>
  items.map((item) => (item.id === id ? { ...item, read: true } : item));

/** Mark every item as read. Returns a new array. */
export const markAllItemsAsRead = <T extends ListItem>(items: T[]): T[] =>
  items.map((item) => (item.read ? item : { ...item, read: true }));

export default markAllItemsAsRead;
