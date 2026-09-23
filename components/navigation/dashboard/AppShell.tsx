"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { NavUser } from "@/types/user";
import { Icon } from "../../ui/Icon";
import { AppTopbar } from "./AppTopbar";

type Props = {
  user: NavUser;
  /** Server-rendered left sidebar, e.g. <LeftSidebar config={studentNav} user={user} /> */
  left: React.ReactNode;
  /** Optional server-rendered right sidebar, e.g. <RightSidebar widgets={studentNav.rightSidebar} /> */
  right?: React.ReactNode;
  children: React.ReactNode;
};

export function AppShell({ user, left, right, children }: Props) {
  const [drawer, setDrawer] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile drawer on route change (adjust state during render)
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setDrawer(false);
  }
  useEffect(() => {
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawer(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawer]);

  return (
    <div className="min-h-screen bg-slate-50/70">
      <AppTopbar user={user} onMenuClick={() => setDrawer(true)} />

      {/* Desktop sidebar, below the topbar */}
      <aside className="fixed bottom-0 left-0 top-[72px] z-30 hidden w-64 border-r border-slate-200/70 bg-white lg:block">{left}</aside>

      {/* Mobile drawer */}
      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <button type="button" aria-label="Close navigation" onClick={() => setDrawer(false)} className="absolute inset-0 bg-slate-900/40" />
          <div className="glass-card relative h-full w-72 max-w-[85%] shadow-2xl shadow-indigo-500/10">
            <button type="button" aria-label="Close navigation" onClick={() => setDrawer(false)} className="absolute right-3 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-500 hover:bg-slate-50">
              <Icon name="x" size={20} />
            </button>
            {left}
          </div>
        </div>
      )}

      <div className="lg:pl-64">
        <div className="flex gap-6 p-4 md:p-6">
          <main className="min-w-0 flex-1">{children}</main>
          {right && <aside className="hidden w-[340px] shrink-0 xl:block">{right}</aside>}
        </div>
      </div>
    </div>
  );
}
