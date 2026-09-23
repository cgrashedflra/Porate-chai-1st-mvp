"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Props = {
  placeholder?: string;
  /** slash = press "/" (marketing) · mod-k = Ctrl/Cmd + K (app) */
  shortcut?: "slash" | "mod-k";
  searchHref?: string;
  className?: string;
};

export function SearchBar({ placeholder = "Search...", shortcut = "slash", searchHref = "/search", className }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (shortcut === "slash" && e.key === "/" && !typing) {
        e.preventDefault();
        ref.current?.focus();
      }
      if (shortcut === "mod-k" && e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shortcut]);

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const q = ref.current?.value.trim();
        if (q) router.push(`${searchHref}?q=${encodeURIComponent(q)}`);
      }}
      className={cn(
        "flex h-11 items-center gap-2.5 rounded-full border border-neutral-30 bg-neutral-20/80 px-4 transition-colors focus-within:border-primary-500 focus-within:bg-neutral-0 focus-within:ring-4 focus-within:ring-primary-100",
        className
      )}
    >
      <Icon name="search" size={18} className="shrink-0 text-primary-500" />
      <input
        ref={ref}
        type="search"
        aria-label={placeholder}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-100"
      />
      <span className="hidden shrink-0 items-center gap-1 sm:flex" aria-hidden="true">
        {shortcut === "slash" ? (
          <kbd className="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-600">/</kbd>
        ) : (
          <>
            <kbd className="rounded-md border border-neutral-30 bg-neutral-0 px-1.5 py-0.5 text-[11px] text-neutral-400">Ctrl</kbd>
            <kbd className="rounded-md border border-neutral-30 bg-neutral-0 px-1.5 py-0.5 text-[11px] text-neutral-400">K</kbd>
          </>
        )}
      </span>
    </form>
  );
}
