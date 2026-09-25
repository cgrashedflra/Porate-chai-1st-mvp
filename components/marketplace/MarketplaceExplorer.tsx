"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/cn";
import ROUTES from "@/constants/routes";
import { initialGigs } from "@/data/gigs";
import { initialClasses } from "@/data/classes";
import type { MarketplaceListing } from "@/types/types";
import { MarketplaceHeader } from "./MarketplaceHeader";
import { MarketplaceFilterCard } from "./MarketplaceFilterCard";
import { MarketplaceList } from "./MarketplaceList";
import {
  DEFAULT_FILTERS,
  PRICE_CAP,
  formatBDT,
  type ContentType,
  type MarketplaceFilters,
  type SortKey,
  type ViewMode,
} from "./types";

type FilterChip = { id: string; label: string; remove: () => void };

/** Normalize gigs + approved batch classes into one sortable/filterable list. */
const buildListings = (): MarketplaceListing[] => [
  ...initialGigs.map((gig) => ({
    kind: "gig" as const,
    id: gig.id,
    title: gig.title,
    educatorId: gig.educatorId,
    educatorName: gig.educatorName,
    educatorAvatar: gig.educatorAvatar,
    educatorVerified: gig.educatorVerified,
    subject: gig.subject,
    level: gig.level,
    format: gig.format,
    price: gig.pricePerHour,
    rating: gig.rating,
    description: gig.description,
    href: ROUTES.EDUCATOR_PROFILE(gig.educatorId),
    reviewCount: gig.reviewCount,
    availableThisWeek: gig.availableThisWeek,
  })),
  ...initialClasses
    .filter((c) => c.moderationStatus === undefined || c.moderationStatus === "approved")
    .map((c) => ({
      kind: "class" as const,
      id: c.id,
      title: c.title,
      educatorId: c.educatorId,
      educatorName: c.educatorName,
      educatorAvatar: c.educatorAvatar,
      educatorVerified: c.educatorVerified,
      subject: c.subject,
      level: c.level,
      format: "Online" as const,
      price: c.price,
      rating: c.rating,
      description: c.description,
      href: ROUTES.LIVE_BATCH(c.id),
      schedule: c.schedule[0],
      seatsLeft: c.maxStudents - c.enrolledStudents,
      image: c.image,
      status: c.status,
    })),
];

export function MarketplaceExplorer() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("relevance");
  const [view, setView] = useState<ViewMode>("list");
  const [type, setType] = useState<ContentType>("all");
  const [filters, setFilters] = useState<MarketplaceFilters>(DEFAULT_FILTERS);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);

  /** Any change to search / sort / filters restarts from page 1 (adjust during render). */
  const filterKey = `${query}|${sort}|${type}|${JSON.stringify(filters)}`;
  const [lastFilterKey, setLastFilterKey] = useState(filterKey);
  if (lastFilterKey !== filterKey) {
    setLastFilterKey(filterKey);
    setPage(1);
  }

  const PAGE_SIZE = 6;

  const allListings = useMemo(() => buildListings(), []);

  /** Option lists derived from real data so filters can never drift. */
  const options = useMemo(() => {
    const subjects = new Set<string>();
    const levels = new Set<string>();
    for (const item of allListings) {
      subjects.add(item.subject);
      levels.add(item.level);
    }
    return { subjects: [...subjects].sort(), levels: [...levels].sort() };
  }, [allListings]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = allListings.filter((item) => {
      if (type === "gigs" && item.kind !== "gig") return false;
      if (type === "classes" && item.kind !== "class") return false;

      if (q) {
        const haystack = `${item.title} ${item.educatorName} ${item.subject} ${item.level} ${item.description}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (filters.subjects.length > 0 && !filters.subjects.includes(item.subject)) return false;
      if (filters.levels.length > 0 && !filters.levels.includes(item.level)) return false;
      if (filters.format !== "all" && item.format !== filters.format) return false;
      if (item.price > filters.maxPrice) return false;
      if (item.rating < filters.minRating) return false;
      if (filters.availableThisWeek) {
        if (item.kind === "gig" && !item.availableThisWeek) return false;
        if (item.kind === "class" && (item.seatsLeft === undefined || item.seatsLeft <= 0)) return false;
      }
      if (filters.verifiedOnly && !item.educatorVerified) return false;
      return true;
    });

    return [...filtered].sort((a, b) => {
      switch (sort) {
        case "rating":
          return b.rating - a.rating;
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0; // relevance — keep the original stable order
      }
    });
  }, [allListings, query, sort, type, filters]);

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
      <MarketplaceHeader query={query} onQueryChange={setQuery} sort={sort} onSortChange={setSort} view={view} onViewChange={setView} />

      {/* Mobile filter button */}
      <div className="mt-6 flex items-center gap-2 md:hidden">
        <button
          type="button"
          id="mobile-filter-open-btn"
          onClick={() => setFiltersOpen((v) => !v)}
          aria-expanded={filtersOpen}
          className="flex-1 py-1.5 px-3 rounded-md bg-neutral-0 border border-neutral-30 text-xs font-semibold text-neutral-700 inline-flex items-center justify-center gap-1.5"
        >
          <SlidersHorizontal className="h-3.5 w-3.5 text-primary-500" />
          <span>Filters {chips.length > 0 && `(${chips.length})`}</span>
        </button>
      </div>

      <div className="mt-4 md:mt-6 md:grid md:grid-cols-[320px_minmax(0,1fr)] md:items-start md:gap-8">
        <MarketplaceFilterCard
          className={cn(
            filtersOpen ? "block" : "hidden",
            "md:sticky md:top-24 md:block md:max-h-[calc(100vh-7rem)] md:overflow-auto md:overscroll-contain scrollbar-none"
          )}
          type={type}
          onTypeChange={setType}
          filters={filters}
          onChange={setFilters}
          subjects={options.subjects}
          levels={options.levels}
          resultCount={results.length}
        />

        <div className="min-w-0">
          <MarketplaceList
            className="md:mt-0"
            items={results}
            total={allListings.length}
            view={view}
            page={page}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />

          {/* Active filter chips */}
          {chips.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2" aria-label="Active filters">
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
    </div>
  );
}