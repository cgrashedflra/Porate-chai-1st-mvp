import Link from "next/link";
import type { IconName } from "../../../ui/Icon";
import { Icon } from "../../../ui/Icon";

type Props = {
  title: string;
  icon?: IconName;
  viewAll?: { label?: string; href: string };
  children: React.ReactNode;
};

export function WidgetCard({ title, icon, viewAll, children }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2.5 text-base font-semibold text-slate-900">
          {icon && <Icon name={icon} size={20} className="text-indigo-500" />}
          {title}
        </h2>
        {viewAll && (
          <Link href={viewAll.href} className="text-xs font-medium text-indigo-600 hover:underline">
            {viewAll.label ?? "View All"}
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}
