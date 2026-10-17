import { StatCard, type StatItem } from "./StatCard";
import { cn } from "@/lib/cn";

/**
 * Responsive row of KPI tiles. Pass the column classes that suit the number
 * of tiles, e.g. `className="sm:grid-cols-2 xl:grid-cols-4"`.
 */
export function StatGrid({
  items,
  className,
}: {
  items: readonly StatItem[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4", className)}>
      {items.map((item) => (
        <StatCard key={item.label} {...item} />
      ))}
    </div>
  );
}
