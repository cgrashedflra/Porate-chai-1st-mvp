"use client";

/**
 * Notifications page — content area only (the app shell already provides the
 * sidebar + top bar). State, data, and pure helpers live in `@/lib/notifications`.
 */

import * as React from "react";
import {
  countUnread,
  filterNotifications,
  markAllNotificationsAsRead,
  markNotificationAsRead,
  type NotificationFilter,
} from "@/lib/notifications";
import { initialNotifications } from "./data";
import { NotificationEmptyState } from "./NotificationEmptyState";
import { NotificationList } from "./NotificationList";
import { NotificationTabs } from "./NotificationTabs";
import { NotificationsHeader } from "./NotificationsHeader";
import type { NotificationFilterLabels, NotificationTypeOverrides } from "./config";

export default function NotificationsPage({
  filterLabels,
  typeOverrides,
}: {
  /** Per-role overrides for the filter tab labels (e.g. `{ earning: "Payments" }`). */
  filterLabels?: NotificationFilterLabels;
  /** Per-role overrides for a type's card action label / href. */
  typeOverrides?: NotificationTypeOverrides;
} = {}) {
  const [items, setItems] = React.useState(initialNotifications);
  const [filter, setFilter] = React.useState<NotificationFilter>("all");

  const unread = countUnread(items);
  const visible = filterNotifications(items, filter);

  const markRead = (id: string) =>
    setItems((list) => markNotificationAsRead(list, id));
  const markAllRead = () => setItems(markAllNotificationsAsRead);

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 p-6">
      <NotificationsHeader unread={unread} onMarkAllRead={markAllRead} />
      <NotificationTabs filter={filter} unread={unread} onChange={setFilter} labels={filterLabels} />

      {visible.length === 0 ? (
        <NotificationEmptyState />
      ) : (
        <NotificationList notifications={visible} onRead={markRead} overrides={typeOverrides} />
      )}
    </div>
  );
}
