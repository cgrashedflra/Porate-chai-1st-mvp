"use client";

/**
 * Notifications page — content area only (the app shell already provides the
 * sidebar + top bar). Built on the shared `GenericListPage` so it gets the
 * same layout/UI as every other list page (My Educators, My Classes, ...);
 * only the texts, labels, and icons differ per page.
 */

import { BellOff, CheckCheck } from "lucide-react";
import { GenericListPage, type ListTab } from "@/components/listing";
import { initialNotifications } from "./data";
import { NotificationCard } from "./NotificationCard";
import { getNotificationFilters, type NotificationFilterLabels, type NotificationTypeOverrides } from "./config";

export default function NotificationsPage({
  filterLabels,
  typeOverrides,
}: {
  /** Per-role overrides for the filter tab labels (e.g. `{ earning: "Payments" }`). */
  filterLabels?: NotificationFilterLabels;
  /** Per-role overrides for a type's card action label / href. */
  typeOverrides?: NotificationTypeOverrides;
} = {}) {
  const tabs: ListTab[] = getNotificationFilters(filterLabels).map((f) => ({
    id: f.id,
    label: f.label,
  }));

  return (
    <GenericListPage
      title="Notifications"
      items={initialNotifications}
      tabs={tabs}
      initialFilter="all"
      searchPlaceholder="Search notifications..."
      emptyStateIcon={BellOff}
      emptyStateTitle="Nothing here"
      emptyStateDescription="New notifications will show up in this list."
      noMatchTitle="No matches"
      noMatchDescription={(q) => `No notifications match “${q}”.`}
      itemName="notification"
      markAllReadIcon={CheckCheck}
      markAllReadLabel="Mark all as read"
      renderCard={(item, handleRead) => (
        <NotificationCard
          notification={item}
          onRead={() => handleRead()}
          overrides={typeOverrides}
        />
      )}
    />
  );
}
