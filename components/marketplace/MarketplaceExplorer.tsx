"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { MarketplaceHeader } from "./MarketplaceHeader";
import {
  DEFAULT_FILTERS,
  PRICE_CAP,
  formatBDT,
  buildListings,
  filterListings,
  sortListings,
  getFilterOptions,
  type MarketplaceFilters,
  type SortKey,
} from "@/lib/marketplace";
import { MentorCard } from "../MentorCard";
import { Mentors } from "@/data/home/mentors";

type FilterChip = { id: string; label: string; remove: () => void };

/** MarketplaceExplorer: displays and filters marketplace listings */
export function MarketplaceExplorer() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("relevance");
  const [filters, setFilters] = useState<MarketplaceFilters>(DEFAULT_FILTERS);

  const allListings = useMemo(() => buildListings(), []);

  /** Option lists derived from real data so filters can never drift. */
  const options = useMemo(() => getFilterOptions(allListings), [allListings]);

  const results = useMemo(() => {
    const filtered = filterListings(allListings, { query, filters });
    return sortListings(filtered, sort);
  }, [allListings, query, sort, filters]);

  const chips = useMemo<FilterChip[]>(() => {
    const out: FilterChip[] = [];
    const push = (id: string, label: string, remove: () => void) => out.push({ id, label, remove });

    filters.subjects.forEach((s) =>
      push(`subject:${s}`, s, () => setFilters((f) => ({ ...f, subjects: f.subjects.filter((v) => v !== s) })))
    );
    filters.levels.forEach((l) =>
      push(`level:${l}`, l, () => setFilters((f) => ({ ...f, levels: f.levels.filter((v) => v !== l) })))
    );
    if (filters.format !== "all")
      push("format", filters.format, () => setFilters((f) => ({ ...f, format: "all" })));
    if (filters.maxPrice < PRICE_CAP)
      push("price", `Up to ${formatBDT(filters.maxPrice)}`, () => setFilters((f) => ({ ...f, maxPrice: PRICE_CAP })));
    if (filters.minRating > 0)
      push("rating", `${filters.minRating}+ ★`, () => setFilters((f) => ({ ...f, minRating: 0 })));
    if (filters.availableThisWeek)
      push("availability", "Available this week", () => setFilters((f) => ({ ...f, availableThisWeek: false })));
    if (filters.verifiedOnly)
      push("verified", "Verified educators", () => setFilters((f) => ({ ...f, verifiedOnly: false })));

    return out;
  }, [filters]);

  const clearAll = () => setFilters(DEFAULT_FILTERS);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <MarketplaceHeader
        query={query}
        onQueryChange={setQuery}
        sort={sort}
        onSortChange={setSort}
        filters={filters}
        onFiltersChange={setFilters}
        subjects={options.subjects}
        levels={options.levels}
        resultCount={results.length}
      />

      <div className="mt-6 flex flex-col gap-3 sm:mt-8">
        {Mentors.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}

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
  );
}
