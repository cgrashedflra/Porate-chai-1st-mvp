export function ComingSoon({ tab }: { tab: string }) {
    return (
        <div className="grid place-items-center rounded-xl bg-indigo-50/50 py-16 text-center">
            <p className="font-semibold text-slate-900">{tab}</p>
            <p className="text-sm text-slate-500">This section isn&apos;t built yet.</p>
        </div>
    );
}
