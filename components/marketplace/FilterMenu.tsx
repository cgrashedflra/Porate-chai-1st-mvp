"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, RotateCcw, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  CONTENT_TYPES,
  DEFAULT_FILTERS,
  PRICE_CAP,
  RATING_OPTIONS,
  SORT_OPTIONS,
  countActiveFilters,
  formatBDT,
  type ContentType,
  type MarketplaceFilters,
  type SortKey,
} from "@/lib/marketplace";

type Props = {
  sort: SortKey;
  onSortChange: (sort: SortKey) => void;
  type: ContentType;
  onTypeChange: (type: ContentType) => void;
  filters: MarketplaceFilters;
  onFiltersChange: (next: MarketplaceFilters) => void;
  subjects: string[];
  levels: string[];
  resultCount: number;
};

const toggleValue = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

/**
 * FilterMenu — a single header dropdown triggered by the filter icon.
 * Holds the sort options plus every marketplace filter (content type,
 * availability, price, rating, level & subjects) so the results area
 * stays uncluttered. Styled to match the header's search bar / dropdowns.
 */
export function FilterMenu({
  sort,
  onSortChange,
  type,
  onTypeChange,
  filters,
  onFiltersChange,
  subjects,
  levels,
  resultCount,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const activeCount = countActiveFilters(filters);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const set = (patch: Partial<MarketplaceFilters>) => onFiltersChange({ ...filters, ...patch });

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={cn(
          "inline-flex h-12 items-center gap-2 rounded-xl border bg-neutral-0 px-3.5 text-sm font-semibold transition-colors hover:text-primary-500",
          open ? "border-primary-300 text-primary-500" : "border-neutral-30 text-neutral-600 hover:border-primary-300"
        )}
      >
        <SlidersHorizontal className="h-4 w-4 text-primary-500" />
        <span className="hidden sm:inline">Filters{activeCount > 0 ? ` (${activeCount})` : ""}</span>
        <span className="sm:hidden">Filter</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Marketplace filters and sorting"
          className="absolute right-0 top-full z-30 mt-2 max-h-[70vh] w-80 max-w-[calc(100vw-2rem)] overflow-y-auto overscroll-contain rounded-xl border border-neutral-30 bg-neutral-0 p-3 shadow-pc-lg scrollbar-none"
        >
          <div className="space-y-3.5">
            {/* Sort */}
            <Section title="Sort by">
              <ul role="listbox" aria-label="Sort results" className="space-y-0.5">
                {SORT_OPTIONS.map((option) => {
                  const active = sort === option.value;
                  return (
                    <li key={option.value}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={active}
                        onClick={() => onSortChange(option.value)}
                        className={cn(
                          "flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                          active ? "bg-primary-50 font-semibold text-primary-600" : "text-neutral-600 hover:bg-neutral-20"
                        )}
                      >
                        {option.label}
                        {active && <Check className="h-4 w-4" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Section>

            {/* Content type */}
            <Section title="Content type">
              <div className="grid grid-cols-3 gap-1.5">
                {CONTENT_TYPES.map((ct) => {
                  const active = type === ct.value;
                  return (
                    <button
                      key={ct.value}
                      type="button"
                      aria-pressed={active}
                      onClick={() => onTypeChange(ct.value)}
                      className={cn(
                        "cursor-pointer rounded-lg px-2 py-2 text-[11px] font-semibold leading-tight transition",
                        active
                          ? "bg-primary-500 text-neutral-0 shadow-sm shadow-primary-500/25"
                          : "border border-neutral-30 bg-neutral-20 text-neutral-600 hover:bg-neutral-30"
                      )}
                    >
                      {ct.label}
                    </button>
                  );
                })}
              </div>
            </Section>

            {/* Availability */}
            <Section title="Availability">
              <div className="space-y-2">
                <SwitchRow
                  label="Available this week"
                  checked={filters.availableThisWeek}
                  onChange={(checked) => set({ availableThisWeek: checked })}
                />
                <SwitchRow
                  label="Verified educators only"
                  checked={filters.verifiedOnly}
                  onChange={(checked) => set({ verifiedOnly: checked })}
                />
              </div>
            </Section>

            {/* Max price */}
            <Section title="Max price">
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-500">Up to</span>
                <span className="font-bold text-neutral-900">
                  {filters.maxPrice >= PRICE_CAP ? `${formatBDT(PRICE_CAP)}+` : formatBDT(filters.maxPrice)}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={PRICE_CAP}
                step={100}
                value={filters.maxPrice}
                onChange={(e) => set({ maxPrice: Number(e.target.value) })}
                aria-label="Maximum price"
                className="w-full cursor-pointer accent-primary-500"
              />
            </Section>

            {/* Minimum rating */}
            <Section title="Minimum rating">
              <div className="grid grid-cols-3 gap-1.5">
                {RATING_OPTIONS.map((rating) => {
                  const active = filters.minRating === rating;
                  return (
                    <button
                      key={rating}
                      type="button"
                      aria-pressed={active}
                      onClick={() => set({ minRating: rating })}
                      className={cn(
                        "cursor-pointer rounded-lg px-2 py-1.5 text-center text-xs font-semibold transition",
                        active
                          ? "bg-primary-500 text-neutral-0 shadow-sm shadow-primary-500/25"
                          : "border border-neutral-30 bg-neutral-20 text-neutral-600 hover:bg-neutral-30"
                      )}
                    >
                      {rating === 0 ? "Any" : `${rating}+ ★`}
                    </button>
                  );
                })}
              </div>
            </Section>

            {/* Level */}
            {levels.length > 0 && (
              <Section title="Level">
                <div className="space-y-1.5">
                  {levels.map((level) => (
                    <CheckRow
                      key={level}
                      label={level}
                      checked={filters.levels.includes(level)}
                      onChange={() => set({ levels: toggleValue(filters.levels, level) })}
                    />
                  ))}
                </div>
              </Section>
            )}

            {/* Subjects */}
            {subjects.length > 0 && (
              <Section title="Subjects">
                <div className="max-h-40 space-y-1.5 overflow-y-auto overscroll-contain pr-1 scrollbar-none">
                  {subjects.map((subject) => (
                    <CheckRow
                      key={subject}
                      label={subject}
                      checked={filters.subjects.includes(subject)}
                      onChange={() => set({ subjects: toggleValue(filters.subjects, subject) })}
                    />
                  ))}
                </div>
              </Section>
            )}
          </div>

          {/* Footer — reset + live result count */}
          <div className="mt-3 flex items-center justify-between gap-2 border-t border-neutral-20 pt-3">
            <button
              type="button"
              onClick={() => onFiltersChange(DEFAULT_FILTERS)}
              disabled={activeCount === 0}
              className="inline-flex items-center gap-1.5 rounded-lg px-1.5 py-1 text-xs font-semibold text-primary-500 transition-colors hover:text-primary-700 disabled:pointer-events-none disabled:opacity-40"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
            <span className="text-xs font-semibold text-neutral-500">
              {resultCount} result{resultCount === 1 ? "" : "s"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-neutral-20 pb-3.5 last:border-0 last:pb-0">
      <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-neutral-500">{title}</h4>
      {children}
    </section>
  );
}

function SwitchRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 text-xs font-medium text-neutral-700">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 cursor-pointer rounded border-neutral-30 accent-primary-500"
      />
    </label>
  );
}

function CheckRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-xs text-neutral-700 transition-colors hover:text-neutral-900">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 cursor-pointer rounded border-neutral-30 accent-primary-500"
      />
      <span>{label}</span>
    </label>
  );
}
