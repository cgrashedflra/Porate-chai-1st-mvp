import { ArrowDownToLine } from "lucide-react";
import { formatTaka } from "@/lib/finance";

/** Gradient balance card with the withdraw action. */
export function WithdrawCard({ balance }: { balance: number }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-5 text-white shadow-[0_12px_30px_-12px_rgba(79,70,229,0.7)]">
      <p className="text-sm text-indigo-100">Available Balance</p>
      <p className="mt-1 text-3xl font-bold">{formatTaka(balance)}</p>
      <button
        type="button"
        className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
      >
        <ArrowDownToLine className="size-4" /> Withdraw
      </button>
    </div>
  );
}
