import { cn } from "@/lib/cn";

type Props = { n: number; className?: string };

export function CountBadge({ n, className }: Props) {
  return (
    <span
      className={cn(
        "grid h-5 min-w-5 place-items-center rounded-full bg-indigo-500 px-1.5 text-[11px] font-semibold text-white",
        className
      )}
    >
      {n}
    </span>
  );
}
