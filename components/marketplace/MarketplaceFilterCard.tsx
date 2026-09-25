"use client";

import { RotateCcw, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  CONTENT_TYPES,
  FORMAT_OPTIONS,
  PRICE_CAP,
  RATING_OPTIONS,
  countActiveFilters,
  formatBDT,
  type ContentType,
  type MarketplaceFilters,
} from "./types";

type Props = {
  type: ContentType;
  onTypeChange: (type: ContentType) => void;
  filters: MarketplaceFilters;
  onChange: (next: MarketplaceFilters) => void;
  subjects: string[];
  levels: string[];
  resultCount: number;
  className?: string;
};

const toggleValue = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

/**
 * Marketplace filter sidebar — every filter option for gigs & batch classes:
 * availability, content type, price, rating, level, format and subject.
 * Bordered sections + a light header keep the hierarchy scannable.
 */
export function MarketplaceFilterCard({ type, onTypeChange, filters, onChange, subjects, levels, resultCount, className }: Props) {
  const activeCount = countActiveFilters(filters);
  const set = (patch: Partial<MarketplaceFilters>) => onChange({ ...filters, ...patch });
  const reset = () => onChange({ ...filters, subjects: [], levels: [], format: "all", maxPrice: PRICE_CAP, minRating: 0, availableThisWeek: false, verifiedOnly: false });

  return (
    <aside className={cn("rounded-xl border border-neutral-30 bg-neutral-0 p-4 shadow-pc-sm", className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-20 pb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-700">
          <SlidersHorizontal className="h-3.5 w-3.5 text-primary-500" />
          Filters {activeCount > 0 && `(${activeCount})`}
        </span>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary-500 transition-colors hover:text-primary-700"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
        )}
      </div>

      <div className="mt-4 space-y-4">
        {/* Availability & verified switches */}
        <section className="space-y-2.5 border-b border-neutral-20 pb-4">
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
        </section>

        {/* Content type */}
        <section className="border-b border-neutral-20 pb-4">
          <SectionTitle>Content type</SectionTitle>
          <div className="space-y-1.5 text-xs">
            {CONTENT_TYPES.map((option) => (
              <RadioRow
                key={option.value}
                name="content-type"
                label={option.label}
                checked={type === option.value}
                onChange={() => onTypeChange(option.value)}
              />
            ))}
          </div>
        </section>

        {/* Price range */}
        <section className="border-b border-neutral-20 pb-4">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="font-semibold text-neutral-700">Max price</span>
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
          <div className="mt-1 flex justify-between text-[10px] text-neutral-100">
            <span>৳0</span>
            <span>{formatBDT(PRICE_CAP)}+</span>
          </div>
        </section>

        {/* Minimum rating */}
        <section className="border-b border-neutral-20 pb-4">
          <SectionTitle>Minimum rating</SectionTitle>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            {RATING_OPTIONS.map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => set({ minRating: rating })}
                className={cn(
                  "cursor-pointer rounded-md px-2 py-1.5 text-center font-semibold transition",
                  filters.minRating === rating
                    ? "bg-primary-500 text-neutral-0 shadow-sm shadow-primary-500/25"
                    : "border border-neutral-30 bg-neutral-20 text-neutral-600 hover:bg-neutral-30"
                )}
              >
                {rating === 0 ? "Any" : `${rating}+ ★`}
              </button>
            ))}
          </div>
        </section>

        {/* Level checklist */}
        <section className="border-b border-neutral-20 pb-4">
          <SectionTitle>Level</SectionTitle>
          <div className="space-y-1.5 text-xs">
            {levels.map((level) => (
              <CheckRow
                key={level}
                label={level}
                checked={filters.levels.includes(level)}
                onChange={() => set({ levels: toggleValue(filters.levels, level) })}
              />
            ))}
          </div>
        </section>

        {/* Teaching format */}
        <section className="border-b border-neutral-20 pb-4">
          <SectionTitle>Format</SectionTitle>
          <div className="space-y-1.5 text-xs">
            {FORMAT_OPTIONS.map((option) => (
              <RadioRow
                key={option}
                name="format"
                label={option === "all" ? "All formats" : option}
                checked={filters.format === option}
                onChange={() => set({ format: option })}
              />
            ))}
          </div>
        </section>

        {/* Subjects checklist */}
        <section>
          <SectionTitle>Subjects</SectionTitle>
          <div className="max-h-48 space-y-1.5 overflow-y-auto overscroll-contain pr-1 text-xs scrollbar-none">
            {subjects.map((subject) => (
              <CheckRow
                key={subject}
                label={subject}
                checked={filters.subjects.includes(subject)}
                onChange={() => set({ subjects: toggleValue(filters.subjects, subject) })}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Result summary */}
      <div className="mt-4 rounded-md bg-neutral-20/70 px-3 py-2 text-center text-xs font-semibold text-neutral-600">
        {resultCount} result{resultCount === 1 ? "" : "s"}
      </div>
    </aside>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="mb-1.5 text-xs font-semibold text-neutral-700">{children}</h4>;
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

function RadioRow({ name, label, checked, onChange }: { name: string; label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-neutral-700 transition-colors hover:text-neutral-900">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="cursor-pointer accent-primary-500"
      />
      <span className="capitalize">{label}</span>
    </label>
  );
}

function CheckRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-neutral-700 transition-colors hover:text-neutral-900">
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