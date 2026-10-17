"use client";

/**
 * Educator Earnings page.
 * Put at: components/earnings/earnings-page.tsx
 * Render from: app/(dashboard)/earnings/page.tsx
 *   import EarningsPage from "@/components/earnings/earnings-page";
 *   export default function Page() { return <EarningsPage />; }
 *
 * Requires: lucide-react and the shadcn `cn` helper at "@/lib/utils".
 * Earnings are private: fetch this data on the server for the logged-in
 * teacher only, and never include it in any public profile response.
 */

import * as React from "react";
import {
    ArrowDownToLine,
    ArrowUp,
    Banknote,
    Clock,
    Landmark,
    Smartphone,
    TrendingUp,
    Wallet,
    type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

/* Sample data — replace with your API */
const taka = (n: number) => `৳${n.toLocaleString("en-IN")}`;

const stats: { icon: LucideIcon; label: string; value: number; note: string; trend?: string; tile: string }[] = [
    { icon: Wallet, label: "Total Earnings", value: 128500, trend: "15%", note: "from last month", tile: "bg-indigo-50 text-indigo-500" },
    { icon: TrendingUp, label: "This Month", value: 28500, trend: "8%", note: "vs. last month", tile: "bg-emerald-50 text-emerald-500" },
    { icon: Clock, label: "Pending", value: 6200, note: "3 payments processing", tile: "bg-amber-50 text-amber-500" },
    { icon: Banknote, label: "Available", value: 22300, note: "Ready to withdraw", tile: "bg-sky-50 text-sky-500" },
];

const monthly = [
    { m: "May", v: 18200 }, { m: "Jun", v: 21500 }, { m: "Jul", v: 19800 },
    { m: "Aug", v: 24100 }, { m: "Sep", v: 26400 }, { m: "Oct", v: 28500 },
];

type Status = "paid" | "pending";
const transactions: { id: string; student: string; cls: string; date: string; amount: number; status: Status }[] = [
    { id: "t1", student: "Tasmia Akter", cls: "Physics · HSC 1st Year", date: "Oct 12, 2026", amount: 2500, status: "paid" },
    { id: "t2", student: "Rafid Hasan", cls: "Mathematics · HSC 1st Year", date: "Oct 10, 2026", amount: 3000, status: "paid" },
    { id: "t3", student: "Nusrat Jahan", cls: "Chemistry · HSC 1st Year", date: "Oct 09, 2026", amount: 2200, status: "pending" },
    { id: "t4", student: "Tanvir Ahmed", cls: "Mathematics · HSC 2nd Year", date: "Oct 07, 2026", amount: 3000, status: "paid" },
    { id: "t5", student: "Sadia Rahman", cls: "Physics · HSC 1st Year", date: "Oct 05, 2026", amount: 2500, status: "pending" },
    { id: "t6", student: "Arman Hossain", cls: "Mathematics · HSC 1st Year", date: "Oct 02, 2026", amount: 3000, status: "paid" },
];

const methods = [
    { id: "bkash", name: "bKash", detail: "01•••••4821", icon: Smartphone },
    { id: "bank", name: "Bank Account", detail: "Dutch-Bangla •••• 2210", icon: Landmark },
];

const card =
    "rounded-2xl border border-indigo-100/80 bg-white shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]";

const statusStyle: Record<Status, string> = {
    paid: "bg-emerald-50 text-emerald-600",
    pending: "bg-amber-50 text-amber-600",
};

function Initials({ name }: { name: string }) {
    return (
        <div className="grid size-9 shrink-0 place-items-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
            {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
        </div>
    );
}

function EarningsChart() {
    const max = Math.max(...monthly.map((d) => d.v));
    return (
        <div className={cn(card, "p-5")}>
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-base font-semibold text-slate-900">Monthly Earnings</h2>
                <span className="text-xs text-slate-400">Last 6 months</span>
            </div>
            <div
                role="img"
                aria-label={`Bar chart of monthly earnings: ${monthly.map((d) => `${d.m} ${taka(d.v)}`).join(", ")}`}
                className="flex h-52 items-end gap-3 sm:gap-5"
            >
                {monthly.map((d, i) => {
                    const current = i === monthly.length - 1;
                    return (
                        <div key={d.m} className="group flex h-full flex-1 flex-col items-center justify-end gap-2">
                            <span className="text-[11px] font-medium text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">
                                {taka(d.v)}
                            </span>
                            <div
                                style={{ height: `${(d.v / max) * 100}%` }}
                                className={cn(
                                    "w-full max-w-12 rounded-t-xl transition-colors",
                                    current ? "bg-indigo-500" : "bg-indigo-200 group-hover:bg-indigo-300"
                                )}
                            />
                            <span className={cn("text-xs", current ? "font-semibold text-indigo-600" : "text-slate-400")}>{d.m}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function Transactions() {
    const [filter, setFilter] = React.useState<"all" | Status>("all");
    const rows = transactions.filter((t) => filter === "all" || t.status === filter);
    const tabs = [{ id: "all", label: "All" }, { id: "paid", label: "Paid" }, { id: "pending", label: "Pending" }] as const;

    return (
        <div className={cn(card, "p-5")}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-slate-900">Recent Transactions</h2>
                <div role="tablist" className="flex gap-1 rounded-xl bg-indigo-50/70 p-1">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            role="tab"
                            aria-selected={filter === t.id}
                            onClick={() => setFilter(t.id)}
                            className={cn(
                                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                                filter === t.id ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                            )}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                    <thead>
                        <tr className="border-b border-indigo-50 text-xs text-slate-400">
                            <th className="py-3 font-medium">Student</th>
                            <th className="py-3 font-medium">Date</th>
                            <th className="py-3 text-right font-medium">Amount</th>
                            <th className="py-3 pl-4 text-right font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-indigo-50">
                        {rows.map((t) => (
                            <tr key={t.id}>
                                <td className="py-3">
                                    <div className="flex items-center gap-3">
                                        <Initials name={t.student} />
                                        <div className="min-w-0">
                                            <p className="truncate font-medium text-slate-800">{t.student}</p>
                                            <p className="truncate text-xs text-slate-500">{t.cls}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 text-slate-500">{t.date}</td>
                                <td className="py-3 text-right font-semibold text-slate-900">{taka(t.amount)}</td>
                                <td className="py-3 pl-4 text-right">
                                    <span className={cn("rounded-full px-3 py-1 text-xs font-medium capitalize", statusStyle[t.status])}>
                                        {t.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {rows.length === 0 && (
                            <tr>
                                <td colSpan={4} className="py-10 text-center text-slate-400">No transactions found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function WithdrawPanel() {
    const [method, setMethod] = React.useState(methods[0].id);
    return (
        <aside className="space-y-5">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-5 text-white shadow-[0_12px_30px_-12px_rgba(79,70,229,0.7)]">
                <p className="text-sm text-indigo-100">Available Balance</p>
                <p className="mt-1 text-3xl font-bold">{taka(22300)}</p>
                <button
                    type="button"
                    className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
                >
                    <ArrowDownToLine className="size-4" /> Withdraw
                </button>
            </div>

            <div className={cn(card, "p-5")}>
                <h2 className="mb-4 text-base font-semibold text-slate-900">Payout Method</h2>
                <div role="radiogroup" className="space-y-3">
                    {methods.map(({ id, name, detail, icon: Icon }) => (
                        <button
                            key={id}
                            role="radio"
                            aria-checked={method === id}
                            onClick={() => setMethod(id)}
                            className={cn(
                                "flex w-full items-center gap-3 rounded-xl p-3 text-left ring-1 transition-colors",
                                method === id ? "bg-indigo-50 ring-indigo-300" : "ring-indigo-100 hover:bg-indigo-50/50"
                            )}
                        >
                            <div className="grid size-10 place-items-center rounded-lg bg-white text-indigo-500 ring-1 ring-indigo-100">
                                <Icon className="size-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-slate-800">{name}</p>
                                <p className="truncate text-xs text-slate-500">{detail}</p>
                            </div>
                            <span
                                className={cn(
                                    "grid size-4 place-items-center rounded-full border-2",
                                    method === id ? "border-indigo-500" : "border-slate-300"
                                )}
                            >
                                {method === id && <span className="size-2 rounded-full bg-indigo-500" />}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default function EarningsPage() {
    return (
        <div className="mx-auto w-full max-w-6xl space-y-6 p-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Earnings</h1>
                <p className="text-sm text-slate-500">Track your income and manage payouts.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map(({ icon: Icon, label, value, note, trend, tile }) => (
                    <div key={label} className={cn(card, "flex items-start gap-4 p-5")}>
                        <div className={cn("grid size-12 shrink-0 place-items-center rounded-full", tile)}>
                            <Icon className="size-5" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">{label}</p>
                            <p className="text-2xl font-bold text-slate-900">{taka(value)}</p>
                            <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                                {trend && (
                                    <span className="flex items-center font-medium text-emerald-500">
                                        <ArrowUp className="size-3" />
                                        {trend}
                                    </span>
                                )}
                                {note}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="space-y-5">
                    <EarningsChart />
                    <Transactions />
                </div>
                <WithdrawPanel />
            </div>
        </div>
    );
}