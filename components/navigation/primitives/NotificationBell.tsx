import Link from "next/link";
import { Icon } from "../../ui/Icon";

type Props = { href?: string; hasUnread?: boolean };

export function NotificationBell({ href = "/notifications", hasUnread = true }: Props) {
  return (
    <Link
      href={href}
      aria-label={hasUnread ? "Notifications (unread)" : "Notifications"}
      className="relative grid h-11 w-11 place-items-center rounded-full text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-indigo-500"
    >
      <Icon name="bell" size={21} />
      {hasUnread && <span className="absolute right-3 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />}
    </Link>
  );
}
