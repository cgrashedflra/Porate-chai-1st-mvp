import { Plus, Receipt } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CardHeader } from "@/components/ui/CardHeader";
import { PAYMENT_METHOD_ICONS } from "./config";
import type { PaymentMethod } from "./types";

/** Saved payment methods with the default one highlighted. */
export function PaymentMethodsCard({ methods }: { methods: readonly PaymentMethod[] }) {
  return (
    <Card className="h-fit">
      <CardHeader title="Payment Methods" icon={Receipt} />

      <ul className="space-y-3">
        {methods.map((method) => {
          const Icon = PAYMENT_METHOD_ICONS[method.id];
          return (
            <li
              key={method.id}
              className="flex items-center gap-3 rounded-xl p-3 ring-1 ring-indigo-100"
            >
              <div className="grid size-10 place-items-center rounded-lg bg-indigo-50 text-indigo-500">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-800">{method.name}</p>
                <p className="truncate text-xs text-slate-500">{method.detail}</p>
              </div>
              {method.primary && (
                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-600">
                  Default
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-indigo-50 text-sm font-medium text-indigo-600 ring-1 ring-indigo-100 transition-colors hover:bg-indigo-100"
      >
        <Plus className="size-4" /> Add method
      </button>
    </Card>
  );
}
