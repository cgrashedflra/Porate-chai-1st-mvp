import type { Notification } from "@/lib/notifications";
import { ListItemCard } from "@/components/listing";
import { NOTIFICATION_TYPE_CONFIG, type NotificationTypeOverrides } from "./config";

/** Presentational notification row: icon, copy, and an action link. */
export function NotificationCard({
  notification,
  onRead,
  overrides,
}: {
  notification: Notification;
  /** Called when the action button is clicked, so the parent can mark it read. */
  onRead?: (id: string) => void;
  /** Optional per-role overrides for this type's action label / href. */
  overrides?: NotificationTypeOverrides;
}) {
  const { type } = notification;
  const { icon, tile, action } = NOTIFICATION_TYPE_CONFIG[type];
  const override = overrides?.[type];

  return (
    <ListItemCard
      item={{
        ...notification,
        href: override?.href ?? notification.href,
        actionLabel: notification.actionLabel ?? override?.action,
      }}
      onRead={onRead}
      config={{ icon, tileClassName: tile, defaultActionLabel: action }}
    />
  );
}
