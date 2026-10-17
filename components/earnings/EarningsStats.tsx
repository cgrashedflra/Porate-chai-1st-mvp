import { StatGrid } from "@/components/ui/StatGrid";
import type { StatItem } from "@/components/ui/StatCard";
import { formatTaka } from "@/lib/finance";
import { EARNING_STAT_CONFIG } from "./config";
import type { EarningStat } from "./types";

/** The KPI tiles at the top of the earnings page. */
export function EarningsStats({ stats }: { stats: readonly EarningStat[] }) {
  const items: StatItem[] = stats.map((stat) => {
    const { icon, tile, label } = EARNING_STAT_CONFIG[stat.key];
    return {
      icon,
      tile,
      label,
      value: formatTaka(stat.amount),
      note: stat.note,
      trend: stat.trend,
    };
  });

  return <StatGrid items={items} className="sm:grid-cols-2 xl:grid-cols-4" />;
}
