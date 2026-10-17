import type { ListFilter, ListItem } from "./types";

/**
 * Apply a filter tab to a list of items.
 * `all` keeps everything, `unread` keeps unread items, anything else
 * matches the item type.
 */
export const filterItems = <T extends ListItem>(
  items: T[],
  filter: ListFilter
): T[] => {
  if (filter === "all") return items;
  if (filter === "unread") return items.filter((item) => !item.read);
  return items.filter((item) => item.type === filter);
};

export default filterItems;
