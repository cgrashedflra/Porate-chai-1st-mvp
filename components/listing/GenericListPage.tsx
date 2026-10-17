"use client";

import * as React from "react";
import { SearchBar } from "@/components/ui/SearchBar";
import {
  countUnread,
  filterItems,
  markAllItemsAsRead,
  markItemAsRead,
  searchItems,
  type GroupedListItem,
  type ListFilter,
  type ListGroup,
  type ListItem,
} from "@/lib/listing";
import { ListingEmptyState } from "./ListingEmptyState";
import { GroupedList } from "./GroupedList";
import { ListingHeader } from "./ListingHeader";
import { ListingTabs, type ListTab } from "./ListingTabs";
import type { ListItemCardConfig } from "./ListItemCard";
import type { LucideIcon } from "lucide-react";

export interface GenericListPageProps<T extends ListItem = ListItem> {
  title: string;
  items: GroupedListItem<T>[];
  tabs: ListTab[];
  searchPlaceholder?: string;
  emptyStateIcon?: LucideIcon;
  emptyStateTitle?: string;
  emptyStateDescription?: string;
  noMatchTitle?: string;
  noMatchDescription?: (query: string) => string;
  itemName?: string;
  itemNamePlural?: string;
  onMarkAllRead?: () => void;
  onItemRead?: (id: string) => void;
  markAllReadLabel?: string;
  markAllReadIcon?: LucideIcon;
  headerAction?: React.ReactNode;
  renderIcon?: (item: GroupedListItem<T>) => React.ReactNode;
  renderMeta?: (item: GroupedListItem<T>) => React.ReactNode;
  renderAction?: (item: GroupedListItem<T>, handleRead: () => void) => React.ReactNode;
  renderCard?: (item: GroupedListItem<T>, handleRead: () => void) => React.ReactNode;
  cardConfig?: ListItemCardConfig;
  showMarkAllRead?: boolean;
  initialFilter?: ListFilter;
  groups?: readonly ListGroup[];
}

export default function GenericListPage<T extends ListItem = ListItem>({
  title,
  items: initialItems,
  tabs,
  searchPlaceholder = "Search...",
  emptyStateIcon,
  emptyStateTitle = "Nothing here",
  emptyStateDescription = "New items will show up in this list.",
  noMatchTitle = "No matches",
  noMatchDescription = (q) => `No items match “${q}”.`,
  itemName = "item",
  itemNamePlural,
  onMarkAllRead,
  onItemRead,
  markAllReadLabel = "Mark all as read",
  markAllReadIcon,
  headerAction,
  renderIcon,
  renderMeta,
  renderAction,
  renderCard,
  cardConfig,
  showMarkAllRead = true,
  initialFilter = "all",
  groups,
}: GenericListPageProps<T>) {
  const [items, setItems] = React.useState(initialItems);
  const [filter, setFilter] = React.useState<ListFilter>(initialFilter);
  const [query, setQuery] = React.useState("");

  const unread = countUnread(items);
  const visible = searchItems(filterItems(items, filter), query);

  const markRead = (id: string) => {
    setItems((list) => markItemAsRead(list, id));
    onItemRead?.(id);
  };
  const markAllRead = () => {
    setItems(markAllItemsAsRead);
    onMarkAllRead?.();
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 p-6">
      <ListingHeader
        title={title}
        unread={unread}
        itemName={itemName}
        itemNamePlural={itemNamePlural}
        onMarkAllRead={markAllRead}
        markAllReadLabel={markAllReadLabel}
        markAllReadIcon={markAllReadIcon}
        showMarkAllRead={showMarkAllRead}
        action={headerAction}
      />
      <SearchBar
        placeholder={searchPlaceholder}
        shortcut="none"
        value={query}
        onChange={setQuery}
      />
      <ListingTabs filter={filter} onChange={setFilter} tabs={tabs} unreadCount={unread} />

      {visible.length === 0 ? (
        query.trim() ? (
          <ListingEmptyState
            icon={emptyStateIcon}
            title={noMatchTitle}
            description={noMatchDescription(query.trim())}
          />
        ) : (
          <ListingEmptyState
            icon={emptyStateIcon}
            title={emptyStateTitle}
            description={emptyStateDescription}
          />
        )
      ) : (
        <GroupedList
          items={visible}
          onRead={markRead}
          cardConfig={cardConfig}
          renderCard={renderCard}
          renderIcon={renderIcon}
          renderMeta={renderMeta}
          renderAction={renderAction}
          groups={groups}
        />
      )}
    </div>
  );
}
