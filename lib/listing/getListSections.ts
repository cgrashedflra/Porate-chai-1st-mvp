import { DEFAULT_LIST_GROUPS, type ListGroup, type GroupedListItem, type ListItem } from "./types";

export interface ListSection<T extends ListItem = ListItem> {
  group: ListGroup;
  items: GroupedListItem<T>[];
}

/** Bucket items into their recency groups, dropping empty ones. */
export const getListSections = <T extends ListItem>(
  items: GroupedListItem<T>[],
  groups: readonly ListGroup[] = DEFAULT_LIST_GROUPS
): ListSection<T>[] =>
  groups
    .map((group) => ({ group, items: items.filter((n) => n.group === group) }))
    .filter((section) => section.items.length > 0);

export default getListSections;
