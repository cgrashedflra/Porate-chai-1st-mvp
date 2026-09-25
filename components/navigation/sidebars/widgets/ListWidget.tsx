import Link from "next/link";
import type { ListItem } from "@/config/nav/types";
import type { IconName } from "../../../ui/Icon";
import { Avatar } from "../../../ui/Avatar";
import { ButtonLink } from "../../../ui/ButtonLink";
import { Icon } from "../../../ui/Icon";
import { toneClasses } from "../../primitives/tone";
import { WidgetCard } from "./WidgetCard";

type Props = {
  title: string;
  icon?: IconName;
  viewAll?: { label?: string; href: string };
  items: ListItem[];
};

function Row({ item }: { item: ListItem }) {
  const content = (
    <>
      {item.icon ? (
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${toneClasses[item.tone ?? "indigo"]}`}>
          <Icon name={item.icon} size={18} />
        </span>
      ) : (
        // No icon: use a placeholder avatar (e.g. message senders)
        <Avatar name={item.title} size="md" />
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-neutral-700">{item.title}</span>
        {item.subtitle && <span className="block truncate text-xs text-neutral-500">{item.subtitle}</span>}
        {item.meta && !item.action && <span className="block text-xs text-neutral-100">{item.meta}</span>}
      </span>
      {item.action && (
        <span className="flex shrink-0 flex-col items-end gap-1">
          {item.meta && <span className="text-[11px] text-neutral-100">{item.meta}</span>}
          <ButtonLink href={item.action.href} variant="secondary" size="sm">{item.action.label}</ButtonLink>
        </span>
      )}
    </>
  );
  const cls = "flex items-center gap-3";
  return item.href ? <Link href={item.href} className={cls}>{content}</Link> : <div className={cls}>{content}</div>;
}

export function ListWidget({ title, icon, viewAll, items }: Props) {
  return (
    <WidgetCard title={title} icon={icon} viewAll={viewAll}>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={`${item.title}-${item.meta ?? ""}`}>
            <Row item={item} />
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
