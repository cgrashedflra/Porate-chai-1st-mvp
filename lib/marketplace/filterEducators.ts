// ============================================================
// MARKETPLACE — filter educators
// ============================================================

import type { EducatorCardData } from "@/data/home/types";
import type { MarketplaceFilters } from "./types";

export interface EducatorFilterOptions {
  query: string;
  filters: MarketplaceFilters;
}

/** Search + filter educators by subject, price, rating and verified status. */
export const filterEducators = (
  educators: EducatorCardData[],
  { query, filters }: EducatorFilterOptions
): EducatorCardData[] => {
  const q = query.trim().toLowerCase();

  return educators.filter((educator) => {
    if (q) {
      const haystack = `${educator.name} ${educator.role} ${educator.qualification} ${educator.subjects.join(" ")} ${educator.bio}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (filters.subjects.length > 0 && !educator.subjects.some((subject) => filters.subjects.includes(subject))) {
      return false;
    }
    if (educator.pricePerSession > filters.maxPrice) return false;
    if (educator.rating < filters.minRating) return false;
    if (filters.verifiedOnly && !educator.isVerified) return false;
    return true;
  });
};

export default filterEducators;
