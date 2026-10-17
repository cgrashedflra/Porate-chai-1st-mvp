import type { ListItem } from "./types";

/**
 * Keep items whose title, description, type, action label or meta
 * match the query (case-insensitive). An empty query keeps everything.
 */
export const searchItems = <T extends ListItem>(items: T[], query: string): T[] => {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter((item) =>
    [item.title, item.description, item.type, item.actionLabel, item.meta].some((field) =>
      field?.toLowerCase().includes(q)
    )
  );
};

export default searchItems;
