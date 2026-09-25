import type { Tone } from "@/config/nav/types";
import type { IconName } from "../../../ui/Icon";
import { Icon } from "../../../ui/Icon";
import { toneClasses } from "../../primitives/tone";
import { WidgetCard } from "./WidgetCard";

type Props = {
  title: string;
  icon?: IconName;
  viewAll?: { label?: string; href: string };
  stats: { icon: IconName; tone?: Tone; value: string; label: string }[];
  progress?: { label: string; percent: number };
};

export function StatsWidget({ title, icon, viewAll, stats, progress }: Props) {
  return (
    <WidgetCard title={title} icon={icon} viewAll={viewAll}>
      <ul className="grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <li key={s.label} className="rounded-xl border border-neutral-30 p-3">
            <div className="flex items-center gap-2">
              <span className={`grid h-6 w-6 place-items-center rounded-md ${toneClasses[s.tone ?? "indigo"]}`}>
                <Icon name={s.icon} size={14} />
              </span>
              <span className="text-lg font-semibold text-neutral-900">{s.value}</span>
            </div>
            <p className="mt-1 text-[11px] text-neutral-500">{s.label}</p>
          </li>
        ))}
      </ul>
      {progress && (
        <div className="mt-4">
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-neutral-600">{progress.label}</span>
            <span className="font-semibold text-neutral-700">{progress.percent}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-primary-100" role="progressbar" aria-valuenow={progress.percent} aria-valuemin={0} aria-valuemax={100} aria-label={progress.label}>
            <div className="h-full rounded-full bg-primary-500" style={{ width: `${progress.percent}%` }} />
          </div>
        </div>
      )}
    </WidgetCard>
  );
}
