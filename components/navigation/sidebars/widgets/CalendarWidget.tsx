import type { IconName } from "../../../ui/Icon";
import { WidgetCard } from "./WidgetCard";

type Props = { title: string; icon?: IconName; eventDays?: number[] };

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Static month grid for the current month. Replace with your calendar library later.
export function CalendarWidget({ title, icon, eventDays = [] }: Props) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const leading = new Date(year, month, 1).getDay();
  const total = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array<null>(leading).fill(null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ];
  const label = now.toLocaleString("en-US", { month: "long", year: "numeric" });

  return (
    <WidgetCard title={title} icon={icon}>
      <p className="mb-3 text-center text-sm font-semibold text-slate-800">{label}</p>
      <div className="grid grid-cols-7 gap-y-1.5 text-center text-xs">
        {weekdays.map((d) => (
          <span key={d} className="text-slate-400">{d}</span>
        ))}
        {cells.map((day, i) => (
          <span key={i} className="flex flex-col items-center">
            {day && (
              <span className={`grid h-8 w-8 place-items-center rounded-full ${day === now.getDate() ? "bg-indigo-500 font-semibold text-white" : "text-slate-700"}`}>
                {day}
              </span>
            )}
            {day && eventDays.includes(day) && <span className="-mt-1 h-1 w-1 rounded-full bg-emerald-400" />}
          </span>
        ))}
      </div>
    </WidgetCard>
  );
}
