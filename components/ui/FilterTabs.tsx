import { cn } from "@/lib/cn";

export interface FilterTabOption<T extends string> {
  value: T;
  label: string;
}

/** Pill tabs used to filter a list (all / paid / pending, …). */
export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
  className,
}: {
  options: readonly FilterTabOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      className={cn("flex gap-1 rounded-xl bg-indigo-50/70 p-1", className)}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          aria-selected={value === option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
            value === option.value
              ? "bg-white text-indigo-600 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
