"use client";

/**
 * Student Payments page.
 * Put at: components/payments/payments-page.tsx
 * Render from: app/(dashboard)/payments/page.tsx
 *   import PaymentsPage from "@/components/payments/payments-page";
 *   export default function Page() { return <PaymentsPage />; }
 *
 * Requires: lucide-react and the shadcn `cn` helper at "@/lib/utils".
 * The "Pay now" buttons are UI only. Always create the real charge on your
 * server (amounts must come from your database, not from the browser).
 */

import * as React from "react";
import {
    CalendarClock,
    CheckCircle2,
    CreditCard,
    Download,
    Plus,
    Receipt,
    Smartphone,
    Wallet,
    type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

/* Sample data — replace with your API */
const taka = (n: number) => `৳${n.toLocaleString("en-IN")}`;

type Status = "paid" | "due" | "failed";

const upcoming = [
    { id: "u1", cls: "Physics · HSC 1st Year", teacher: "Mehedi Hasan", due: "Oct 20, 2026", amount: 2500 },
    { id: "u2", cls: "Chemistry · HSC 1st Year", teacher: "Nasrin Sultana", due: "Oct 25, 2026", amount: 2200 },
];

const history: {
    id: string; cls: string; teacher: string; date: string; method: string; amount: number; status: Status;
}[] = [
        { id: "p1", cls: "Mathematics · HSC 1st Year", teacher: "Mehedi Hasan", date: "Oct 05, 2026", method: "bKash", amount: 3000, status: "paid" },
        { id: "p2", cls: "Physics · HSC 1st Year", teacher: "Mehedi Hasan", date: "Sep 20, 2026", method: "Nagad", amount: 2500, status: "paid" },
        { id: "p3", cls: "Chemistry · HSC 1st Year", teacher: "Nasrin Sultana", date: "Sep 25, 2026", method: "Card", amount: 2200, status: "failed" },
        { id: "p4", cls: "Mathematics · HSC 1st Year", teacher: "Mehedi Hasan", date: "Sep 05, 2026", method: "bKash", amount: 3000, status: "paid" },
        { id: "p5", cls: "Physics · HSC 1st Year", teacher: "Mehedi Hasan", date: "Aug 20, 2026", method: "bKash", amount: 2500, status: "paid" },
    ];

const methods: { id: string; name: string; detail: string; icon: LucideIcon; primary?: boolean }[] = [
    { id: "bkash", name: "bKash", detail: "01•••••4821", icon: Smartphone, primary: true },
    { id: "nagad", name: "Nagad", detail: "01•••••7305", icon: Smartphone },
    { id: "card", name: "Visa Card", detail: "•••• 4417", icon: CreditCard },
];

const card =
    "rounded-2xl border border-indigo-100/80 bg-white shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]";

const statusStyle: Record<Status, string> = {
    paid: "bg-emerald-50 text-emerald-600",
    due: "bg-indigo-50 text-indigo-600",
    failed: "bg-rose-50 text-rose-600",
};

const totalPaid = history.filter((h) => h.status === "paid").reduce((s, h) => s + h.amount, 0);
const totalDue = upcoming.reduce((s, u) => s + u.amount, 0);

function Summary() {
    const items: { icon: LucideIcon; label: string; value: string; note: string; tile: string }[] = [
        { icon: CheckCircle2, label: "Total Paid", value: taka(totalPaid), note: "All time", tile: "bg-emerald-50 text-emerald-500" },
        { icon: Wallet, label: "Amount Due", value: taka(totalDue), note: `${upcoming.length} upcoming payments`, tile: "bg-indigo-50 text-indigo-500" },
        { icon: CalendarClock, label: "Next Due Date", value: upcoming[0].due.replace(", 2026", ""), note: upcoming[0].cls.split(" · ")[0], tile: "bg-amber-50 text-amber-500" },
    ];
    return (
        <div className="grid gap-4 sm:grid-cols-3">
            {items.map(({ icon: Icon, label, value, note, tile }) => (
                <div key={label} className={cn(card, "flex items-start gap-4 p-5")}>
                    <div className={cn("grid size-12 shrink-0 place-items-center rounded-full", tile)}>
                        <Icon className="size-5" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">{label}</p>
                        <p className="text-2xl font-bold text-slate-900">{value}</p>
                        <p className="mt-1 text-xs text-slate-400">{note}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Upcoming() {
    return (
        <div className={cn(card, "p-5")}>
            <h2 className="mb-4 text-base font-semibold text-slate-900">Upcoming Payments</h2>
            <ul className="space-y-3">
                {upcoming.map((u) => (
                    <li
                        key={u.id}
                        className="flex flex-col gap-3 rounded-xl bg-indigo-50/50 p-4 ring-1 ring-indigo-100 sm:flex-row sm:items-center"
                    >
                        <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-indigo-500 ring-1 ring-indigo-100">
                            <CalendarClock className="size-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-slate-900">{u.cls}</p>
                            <p className="text-xs text-slate-500">
                                {u.teacher} <span className="mx-1 text-indigo-300">•</span> Due {u.due}
                            </p>
                        </div>
                        <p className="text-lg font-bold text-slate-900">{taka(u.amount)}</p>
                        <button
                            type="button"
                            className="h-9 rounded-xl bg-indigo-600 px-5 text-sm font-medium text-white shadow-[0_8px_20px_-10px_rgba(79,70,229,0.7)] transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
                        >
                            Pay now
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function History() {
    const [filter, setFilter] = React.useState<"all" | Status>("all");
    const rows = history.filter((h) => filter === "all" || h.status === filter);
    const tabs = [
        { id: "all", label: "All" },
        { id: "paid", label: "Paid" },
        { id: "failed", label: "Failed" },
    ] as const;

    return (
        <div className={cn(card, "p-5")}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-slate-900">Payment History</h2>
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
                <table className="w-full min-w-[560px] text-left text-sm">
                    <thead>
                        <tr className="border-b border-indigo-50 text-xs text-slate-400">
                            <th className="py-3 font-medium">Class</th>
                            <th className="py-3 font-medium">Date</th>
                            <th className="py-3 font-medium">Method</th>
                            <th className="py-3 text-right font-medium">Amount</th>
                            <th className="py-3 pl-4 text-right font-medium">Status</th>
                            <th className="w-10 py-3" />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-indigo-50">
                        {rows.map((h) => (
                            <tr key={h.id}>
                                <td className="py-3">
                                    <p className="font-medium text-slate-800">{h.cls}</p>
                                    <p className="text-xs text-slate-500">{h.teacher}</p>
                                </td>
                                <td className="py-3 text-slate-500">{h.date}</td>
                                <td className="py-3 text-slate-500">{h.method}</td>
                                <td className="py-3 text-right font-semibold text-slate-900">{taka(h.amount)}</td>
                                <td className="py-3 pl-4 text-right">
                                    <span className={cn("rounded-full px-3 py-1 text-xs font-medium capitalize", statusStyle[h.status])}>
                                        {h.status}
                                    </span>
                                </td>
                                <td className="py-3 text-right">
                                    {h.status === "paid" ? (
                                        <button
                                            type="button"
                                            aria-label={`Download receipt for ${h.cls}, ${h.date}`}
                                            className="text-indigo-500 hover:text-indigo-700"
                                        >
                                            <Download className="size-4" />
                                        </button>
                                    ) : h.status === "failed" ? (
                                        <button type="button" className="text-xs font-medium text-indigo-600 hover:underline">
                                            Retry
                                        </button>
                                    ) : null}
                                </td>
                            </tr>
                        ))}
                        {rows.length === 0 && (
                            <tr>
                                <td colSpan={6} className="py-10 text-center text-slate-400">No payments found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Methods() {
    return (
        <aside className={cn(card, "h-fit p-5")}>
            <h2 className="mb-4 flex items-center gap-3 text-base font-semibold text-slate-900">
                <Receipt className="size-5 text-indigo-500" /> Payment Methods
            </h2>
            <ul className="space-y-3">
                {methods.map(({ id, name, detail, icon: Icon, primary }) => (
                    <li key={id} className="flex items-center gap-3 rounded-xl p-3 ring-1 ring-indigo-100">
                        <div className="grid size-10 place-items-center rounded-lg bg-indigo-50 text-indigo-500">
                            <Icon className="size-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-slate-800">{name}</p>
                            <p className="truncate text-xs text-slate-500">{detail}</p>
                        </div>
                        {primary && (
                            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-600">
                                Default
                            </span>
                        )}
                    </li>
                ))}
            </ul>
            <button
                type="button"
                className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-indigo-50 text-sm font-medium text-indigo-600 ring-1 ring-indigo-100 transition-colors hover:bg-indigo-100"
            >
                <Plus className="size-4" /> Add method
            </button>
        </aside>
    );
}

export default function PaymentsPage() {
    return (
        <div className="mx-auto w-full max-w-6xl space-y-6 p-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Payments</h1>
                <p className="text-sm text-slate-500">Manage your class fees and view payment history.</p>
            </div>

            <Summary />

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="space-y-5">
                    <Upcoming />
                    <History />
                </div>
                <Methods />
            </div>
        </div>
    );
}