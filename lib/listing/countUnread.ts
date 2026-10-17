import type { ListItem } from "./types";

/** Number of items that have not been read yet. */
export const countUnread = <T extends ListItem>(items: T[]): number =>
  items.filter((item) => !item.read).length;

export default countUnread;
