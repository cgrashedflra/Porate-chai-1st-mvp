import { cn } from "@/lib/cn";

export function OnlineStatus({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-1.5 text-xs font-medium text-emerald-500", className)}>
      <span className="size-2 rounded-full bg-emerald-500" /> Online
    </span>
  );
}
