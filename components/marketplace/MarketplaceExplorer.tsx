"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { MarketplaceHeader } from "./MarketplaceHeader";
import { MarketplaceFilterPanel } from "./MarketplaceFilterPanel";
import {
  DEFAULT_FILTERS,
  PRICE_CAP,
  countActiveFilters,
  formatBDT,
  getMentors,
  filterMentors,
  sortMentors,
  getFilterOptions,
  type MarketplaceFilters,
  type SortKey,
} from "@/lib/marketplace";
import { MentorGrid } from "./MentorGrid";

type FilterChip = { id: string; label: string; remove: () => void };

/** MarketplaceExplorer: displays and filters marketplace mentors */
export function MarketplaceExplorer() {
  const [sort, setSort] = useState<SortKey>("relevance");
  const [filters, setFilters] = useState<MarketplaceFilters>(DEFAULT_FILTERS);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const allMentors = useMemo(() => getMentors(), []);

  /** Option lists derived from real data so filters can never drift. */
  const options = useMemo(() => getFilterOptions(allMentors), [allMentors]);

  const results = useMemo(() => {
    const filtered = filterMentors(allMentors, { query: "", filters });
    return sortMentors(filtered, sort);
  }, [allMentors, sort, filters]);

  const chips = useMemo<FilterChip[]>(() => {
    const out: FilterChip[] = [];
    const push = (id: string, label: string, remove: () => void) => out.push({ id, label, remove });

    filters.subjects.forEach((s) =>
      push(`subject:${s}`, s, () => setFilters((f) => ({ ...f, subjects: f.subjects.filter((v) => v !== s) })))
    );
    if (filters.maxPrice < PRICE_CAP)
      push("price", `Up to ${formatBDT(filters.maxPrice)}`, () => setFilters((f) => ({ ...f, maxPrice: PRICE_CAP })));
    if (filters.minRating > 0)
      push("rating", `${filters.minRating}+ ★`, () => setFilters((f) => ({ ...f, minRating: 0 })));
    if (filters.verifiedOnly)
      push("verified", "Verified educators", () => setFilters((f) => ({ ...f, verifiedOnly: false })));

    return out;
  }, [filters]);

  const clearAll = () => setFilters(DEFAULT_FILTERS);

  /** Lock body scroll + close on Escape while the mobile drawer is open. */
  useEffect(() => {
    if (!filtersOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFiltersOpen(false);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [filtersOpen]);

  const panelProps = {
    filters,
    onFiltersChange: setFilters,
    subjects: options.subjects,
    resultCount: results.length,
    sort,
    onSortChange: setSort,
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <MarketplaceHeader
        onOpenFilters={() => setFiltersOpen(true)}
        activeFilterCount={countActiveFilters(filters)}
      />

      <div className="mt-6 lg:mt-8 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-8">
        {/* Large screens — sticky filter sidebar */}
        <aside className="scrollbar-none hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:rounded-xl lg:border lg:border-neutral-30 lg:bg-neutral-0 lg:p-4 lg:shadow-pc-sm">
          <MarketplaceFilterPanel {...panelProps} />
        </aside>

        {/* Results */}
        <div className="flex min-w-0 flex-col gap-3">
          <MentorGrid mentors={results} />

          {/* Active filter chips */}
          {chips.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-2" aria-label="Active filters">
              {chips.map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={chip.remove}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 caption font-semibold text-primary-600 transition-colors hover:bg-primary-100"
                >
                  {chip.label}
                  <X className="h-3 w-3" />
                </button>
              ))}
              <button
                type="button"
                onClick={clearAll}
                className="caption font-semibold text-neutral-500 underline-offset-2 transition-colors hover:text-primary-500 hover:underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Small / medium screens — slide-in filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-neutral-900/40"
            onClick={() => setFiltersOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Marketplace filters"
            className="scrollbar-none absolute inset-y-0 left-0 w-[88%] max-w-sm overflow-y-auto overscroll-contain bg-neutral-0 p-4 shadow-pc-xl"
          >
            <MarketplaceFilterPanel {...panelProps} onClose={() => setFiltersOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
