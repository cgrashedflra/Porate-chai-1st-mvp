import { getNotificationSections, type NotificationItem } from "@/lib/notifications";
import { NotificationCard } from "./NotificationCard";
import type { NotificationTypeOverrides } from "./config";

/** Notifications grouped into recency sections (Today / Yesterday / Earlier). */
export function NotificationList({
  notifications,
  onRead,
  overrides,
}: {
  notifications: NotificationItem[];
  onRead: (id: string) => void;
  /** Optional per-role overrides applied to each card. */
  overrides?: NotificationTypeOverrides;
}) {
  return (
    <>
      {getNotificationSections(notifications).map(({ group, items }) => (
        <section key={group} className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-500">{group}</h2>
          {items.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onRead={onRead}
              overrides={overrides}
            />
          ))}
        </section>
      ))}
    </>
  );
}
