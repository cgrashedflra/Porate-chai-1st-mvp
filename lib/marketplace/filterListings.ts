// ============================================================
// MARKETPLACE — filter listings
// ============================================================

import type { MarketplaceListing } from "@/types/types";
import type { MarketplaceFilters } from "./types";

export interface FilterOptions {
  query: string;
  filters: MarketplaceFilters;
}

export const filterListings = (listings: MarketplaceListing[], options: FilterOptions): MarketplaceListing[] => {
  const { query, filters } = options;
  const q = query.trim().toLowerCase();

  return listings.filter((item) => {
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
};

export default filterListings;
