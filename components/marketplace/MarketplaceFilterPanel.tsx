"use client";

import type { ReactNode } from "react";
import { Check, RotateCcw, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatTaka } from "@/lib/finance";
import {
  DEFAULT_FILTERS,
  PRICE_CAP,
  RATING_OPTIONS,
  SORT_OPTIONS,
  countActiveFilters,
  type MarketplaceFilters,
  type SortKey,
} from "@/lib/marketplace";

type Props = {
  filters: MarketplaceFilters;
  onFiltersChange: (next: MarketplaceFilters) => void;
  subjects: string[];
  resultCount: number;
  sort: SortKey;
  onSortChange: (sort: SortKey) => void;
  /** Present when rendered inside the mobile drawer — shows a close button. */
  onClose?: () => void;
  className?: string;
};

const toggleValue = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

/**
 * MarketplaceFilterPanel — every educator filter grouped into sections
 * (verified, price, rating & subjects). Rendered in the sticky left
 * column on large screens and inside the slide-in drawer below `lg`.
 */
export function MarketplaceFilterPanel({
  filters,
  onFiltersChange,
  subjects,
  resultCount,
  sort,
  onSortChange,
  onClose,
  className,
}: Props) {
  const activeCount = countActiveFilters(filters);
  const set = (patch: Partial<MarketplaceFilters>) => onFiltersChange({ ...filters, ...patch });

  return (
    <div className={cn("flex flex-col", className)}>
      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-neutral-20 pb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-700">
          <SlidersHorizontal className="h-3.5 w-3.5 text-primary-500" />
          Filters{activeCount > 0 ? ` (${activeCount})` : ""}
        </span>
        <div className="flex items-center gap-1.5">
          {activeCount > 0 && (
            <button
              type="button"
              onClick={() => onFiltersChange(DEFAULT_FILTERS)}
              className="inline-flex items-center gap-1 rounded-lg px-1.5 py-1 text-xs font-semibold text-primary-500 transition-colors hover:text-primary-700"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          )}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close filters"
              className="grid size-7 place-items-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-20 hover:text-neutral-900"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-3.5">
        {/* Sort by */}
        <Section title="Sort by">
          <div className="space-y-1.5">
            {SORT_OPTIONS.map((option) => {
              const active = sort === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onSortChange(option.value)}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-left text-xs font-semibold transition",
                    active
                      ? "bg-primary-500 text-neutral-0 shadow-sm shadow-primary-500/25"
                      : "border border-neutral-30 bg-neutral-20 text-neutral-600 hover:bg-neutral-30"
                  )}
                >
                  {option.label}
                  {active && <Check className="h-3.5 w-3.5" />}
                </button>
              );
            })}
          </div>
        </Section>

        {/* Verified */}
        <div className="border-b border-neutral-20 pb-3.5">
          <SwitchRow
            label="Verified educators only"
            checked={filters.verifiedOnly}
            onChange={(checked) => set({ verifiedOnly: checked })}
          />
        </div>

        {/* Max price */}
        <Section title="Max price">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="font-medium text-neutral-500">Up to</span>
            <span className="font-bold text-neutral-900">
              {filters.maxPrice >= PRICE_CAP ? `${formatTaka(PRICE_CAP)}+` : formatTaka(filters.maxPrice)}
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

        {/* Subjects */}
        {subjects.length > 0 && (
          <Section title="Subjects">
            <div className="scrollbar-none max-h-48 space-y-1.5 overflow-y-auto overscroll-contain pr-1">
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

      {/* Result summary */}
      <div className="mt-4 rounded-lg bg-neutral-20/70 px-3 py-2 text-center text-xs font-semibold text-neutral-600">
        {resultCount} result{resultCount === 1 ? "" : "s"}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-neutral-20 pb-3.5 last:border-0 last:pb-0">
      <h4 className="mb-2 text-xs font-semibold text-neutral-700">{title}</h4>
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
