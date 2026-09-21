import { cn } from "@/lib/cn";

type Props = { count?: number; tone?: "soft" | "alert"; max?: number; className?: string };

export function Badge({ count, tone = "soft", max = 99, className }: Props) {
  if (!count) return null;
  return (
    <span
      className={cn(
        "grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[11px] font-semibold leading-none",
        tone === "soft" ? "bg-indigo-100 text-indigo-600" : "bg-red-500 text-white",
        className
      )}
    >
      {count > max ? `${max}+` : count}
      <span className="sr-only"> unread</span>
    </span>
  );
}
