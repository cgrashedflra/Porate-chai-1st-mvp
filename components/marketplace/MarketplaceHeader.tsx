"use client";

import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { MarketplaceFilters, SortKey } from "./types";
import { FilterMenu } from "./FilterMenu";

type Props = {
  query: string;
  onQueryChange: (query: string) => void;
  sort: SortKey;
  onSortChange: (sort: SortKey) => void;
  filters: MarketplaceFilters;
  onFiltersChange: (next: MarketplaceFilters) => void;
  subjects: string[];
  levels: string[];
  resultCount: number;
  className?: string;
};

/**
 * Marketplace page header — breadcrumb route, heading, and the big
 * search bar (brand logo + live search input + filter/sort dropdown).
 */
export function MarketplaceHeader({
  query,
  onQueryChange,
  sort,
  onSortChange,
  filters,
  onFiltersChange,
  subjects,
  levels,
  resultCount,
  className,
}: Props) {
  return (
    <header className={cn("pt-6 sm:pt-8", className)}>
      {/* Breadcrumb — small nav route */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
        <Link
          href={ROUTES.HOME}
          className="inline-flex items-center gap-1.5 rounded-md transition-colors hover:text-primary-500"
        >
          <Icon name="home" size={13} />
          Home
        </Link>
        <Icon name="chevronRight" size={14} className="text-neutral-60" />
        <span aria-current="page" className="text-neutral-700">Marketplace</span>
      </nav>

      {/* Heading */}
      <div className="mt-3 max-w-3xl">
        <h1 className="heading-lg text-neutral-900 lg:heading-xl">
          Learning <span className="text-primary-500">Marketplace</span>
        </h1>
        <p className="mt-2 body-sm text-neutral-500 sm:body-md">
          Discover verified 1-on-1 gigs and structured batch classes from expert educators — book direct and pay per engagement.
        </p>
      </div>

      {/* Big search bar — logo · input · sort */}
      <form
        role="search"
        onSubmit={(e) => e.preventDefault()} /* results filter live — no page navigation */
        className="mt-6 flex flex-col gap-2.5 rounded-2xl border border-neutral-30 bg-neutral-0 p-2.5 shadow-pc-lg sm:flex-row sm:items-center sm:p-3"
      >
        {/* Brand logo block */}
        <div className="hidden items-center gap-3 pl-2 pr-3 sm:flex">
          <Logo />
          <span className="ml-1 h-9 w-px bg-neutral-30" aria-hidden="true" />
        </div>

        {/* Search input */}
        <div className="flex min-w-0 flex-1 items-center gap-2.5 px-2 sm:px-1">
          <Icon name="search" size={20} className="shrink-0 text-primary-500" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search gigs, batch classes & subjects — e.g. HSC Physics, IELTS, Web Development"
            aria-label="Search the marketplace"
            className="h-12 min-w-0 flex-1 bg-transparent body-sm text-neutral-900 outline-none placeholder:text-neutral-100"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary-500 px-5 text-sm font-semibold text-neutral-0 shadow-sm shadow-primary-500/25 transition-colors hover:bg-primary-700"
          >
            <Icon name="search" size={16} />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>

        <FilterMenu
          sort={sort}
          onSortChange={onSortChange}
          filters={filters}
          onFiltersChange={onFiltersChange}
          subjects={subjects}
          levels={levels}
          resultCount={resultCount}
        />

      </form>
    </header>
  );
}
