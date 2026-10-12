"use client";

import Link from "next/link";
import { Filter } from "lucide-react";
import ROUTES from "@/constants/routes";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { SearchBar } from "../ui/SearchBar";

type Props = {
  /** Opens the filter drawer — only used below `lg`, where the panel is hidden. */
  onOpenFilters: () => void;
  activeFilterCount: number;
  className?: string;
};

/**
 * Marketplace page header — breadcrumb route, heading, and the big
 * search bar (brand logo + live search input + filter toggle).
 * Below `lg` the filter icon opens the slide-in filter drawer.
 */
export function MarketplaceHeader({
  onOpenFilters,
  activeFilterCount,
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

      {/* Big search bar — logo · input · filter */}
      <div
        role="search"
        className="mt-6 flex items-center gap-2.5 rounded-2xl border border-neutral-30 bg-neutral-0 p-2.5 shadow-pc-lg sm:p-3"
      >
        {/* Brand logo block */}
        <div className="hidden items-center gap-3 pl-2 pr-3 sm:flex">
          <Logo />
          <span className="ml-1 h-9 w-px bg-neutral-30" aria-hidden="true" />
        </div>

        {/* Search input — grows to fill the row, shrinks when space is tight */}
        <SearchBar className="min-w-0 flex-1" />

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenFilters}
            aria-label={activeFilterCount > 0 ? `Open filters (${activeFilterCount} active)` : "Open filters"}
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-neutral-30 bg-neutral-0 px-3.5 text-sm font-semibold text-neutral-600 transition-colors hover:border-primary-300 hover:text-primary-500 lg:hidden"
          >
            <Filter className="h-4 w-4 text-primary-500" />
            {activeFilterCount > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-primary-500 px-1.5 text-[11px] font-semibold text-neutral-0">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
