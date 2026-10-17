import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ListItem } from "@/lib/listing";

export interface ListItemCardConfig {
  icon?: React.ComponentType<{ className?: string }>;
  tileClassName?: string;
  defaultActionLabel?: string;
}

export function ListItemCard<T extends ListItem = ListItem>({
  item,
  onRead,
  config,
  renderIcon,
  renderMeta,
  renderAction,
}: {
  item: T;
  onRead?: (id: string) => void;
  config?: ListItemCardConfig;
  renderIcon?: (item: T) => React.ReactNode;
  renderMeta?: (item: T) => React.ReactNode;
  renderAction?: (item: T, handleRead: () => void) => React.ReactNode;
}) {
  const { id, title, description, time, read, href, actionLabel, meta, imageUrl } = item;
  const Icon = config?.icon;
  const tileClass = config?.tileClassName || "bg-slate-100 text-slate-600";
  const action = actionLabel ?? config?.defaultActionLabel ?? "View details";

  const handleRead = () => onRead?.(id);

  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-2xl border p-4 shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)] transition-colors sm:flex-row sm:items-center sm:p-5",
        read ? "border-indigo-100/80 bg-white" : "border-indigo-200 bg-indigo-50/50"
      )}
    >
      <div className={cn("grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl", tileClass)}>
        {renderIcon ? (
          renderIcon(item)
        ) : imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt="" className="size-12 object-cover" />
        ) : Icon ? (
          <Icon className="size-5" aria-hidden />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-sm font-semibold text-slate-900">{title}</h3>
          {!read && (
            <>
              <span className="size-2 shrink-0 rounded-full bg-indigo-500" aria-hidden />
              <span className="sr-only">Unread</span>
            </>
          )}
          {meta && <span className="ml-1 text-xs text-slate-400">{meta}</span>}
        </div>
        <p className="mt-0.5 line-clamp-2 text-sm text-slate-500">{description}</p>
        {time && <p className="mt-1 text-xs text-slate-400">{time}</p>}
        {renderMeta && <div className="mt-1">{renderMeta(item)}</div>}
      </div>

      {renderAction ? (
        renderAction(item, handleRead)
      ) : href ? (
        <Link
          href={href}
          onClick={handleRead}
          className={cn(
            "inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2",
            read
              ? "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 hover:bg-indigo-100"
              : "bg-indigo-600 text-white shadow-[0_8px_20px_-10px_rgba(79,70,229,0.7)] hover:bg-indigo-700"
          )}
        >
          {action}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      ) : null}
    </article>
  );
}
