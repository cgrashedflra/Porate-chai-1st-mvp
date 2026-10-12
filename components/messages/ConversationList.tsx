"use client";

import * as React from "react";
import { CheckCheck, Search, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/ui/Avatar";
import { CountBadge } from "@/components/ui/CountBadge";
import { IconButton } from "@/components/ui/IconButton";
import { conversations } from "./data";
import { CARD } from "./styles";

type Props = {
  activeId: string;
  onSelect: (id: string) => void;
};

export function ConversationList({ activeId, onSelect }: Props) {
  const [query, setQuery] = React.useState("");

  const visible = conversations.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className={cn(CARD, "flex min-h-0 flex-col")}>
      <div className="flex items-center gap-2 p-4 pb-2">
        <label className="flex h-11 flex-1 items-center gap-2 rounded-xl bg-indigo-50/70 px-3 text-slate-400 focus-within:ring-2 focus-within:ring-indigo-300">
          <Search className="size-4" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search conversations..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </label>
        <IconButton label="Filter conversations" className="size-11 bg-white ring-1 ring-indigo-100">
          <SlidersHorizontal className="size-4" />
        </IconButton>
      </div>

      <ul className="min-h-0 flex-1 divide-y divide-indigo-50 overflow-y-auto p-2">
        {visible.map((c) => (
          <li key={c.id}>
            <button
              onClick={() => onSelect(c.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors",
                activeId === c.id ? "bg-indigo-50" : "hover:bg-indigo-50/50"
              )}
            >
              <Avatar name={c.name} src={c.avatar} size="lg" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-800">
                    {c.name}
                    {c.online && <span className="size-1.5 rounded-full bg-emerald-500" />}
                  </span>
                  <span className="text-xs text-slate-400">{c.time}</span>
                </div>
                <div className="mt-0.5 flex items-center justify-between gap-2">
                  <p className="truncate text-xs text-slate-500">{c.preview}</p>
                  {c.unread > 0 ? (
                    <CountBadge n={c.unread} />
                  ) : c.sentByMe ? (
                    <CheckCheck className="size-4 shrink-0 text-indigo-400" />
                  ) : null}
                </div>
              </div>
            </button>
          </li>
        ))}
        {visible.length === 0 && (
          <li className="p-6 text-center text-sm text-slate-400">No conversations found.</li>
        )}
      </ul>
    </section>
  );
}
