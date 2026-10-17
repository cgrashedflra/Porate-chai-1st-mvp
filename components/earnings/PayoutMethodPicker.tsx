import { Card } from "@/components/ui/Card";
import { CardHeader } from "@/components/ui/CardHeader";
import { cn } from "@/lib/cn";
import { PAYOUT_METHOD_ICONS } from "./config";
import type { PayoutMethod, PayoutMethodId } from "./types";

/** Radio list of the payout destinations the educator can withdraw to. */
export function PayoutMethodPicker({
  methods,
  selectedId,
  onChange,
}: {
  methods: readonly PayoutMethod[];
  selectedId: PayoutMethodId;
  onChange: (id: PayoutMethodId) => void;
}) {
  return (
    <Card>
      <CardHeader title="Payout Method" />
      <div role="radiogroup" className="space-y-3">
        {methods.map((method) => {
          const Icon = PAYOUT_METHOD_ICONS[method.id];
          const selected = method.id === selectedId;
          return (
            <button
              key={method.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(method.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl p-3 text-left ring-1 transition-colors",
                selected ? "bg-indigo-50 ring-indigo-300" : "ring-indigo-100 hover:bg-indigo-50/50"
              )}
            >
              <div className="grid size-10 place-items-center rounded-lg bg-white text-indigo-500 ring-1 ring-indigo-100">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-800">{method.name}</p>
                <p className="truncate text-xs text-slate-500">{method.detail}</p>
              </div>
              <span
                className={cn(
                  "grid size-4 place-items-center rounded-full border-2",
                  selected ? "border-indigo-500" : "border-slate-300"
                )}
              >
                {selected && <span className="size-2 rounded-full bg-indigo-500" />}
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
