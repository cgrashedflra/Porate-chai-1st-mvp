// ============================================================
// MARKETPLACE — filter mentors
// ============================================================

import type { Mentor } from "@/data/home/types";
import type { MarketplaceFilters } from "./types";

export interface MentorFilterOptions {
  query: string;
  filters: MarketplaceFilters;
}

/** Search + filter mentors by subject, price, rating and verified status. */
export const filterMentors = (mentors: Mentor[], { query, filters }: MentorFilterOptions): Mentor[] => {
  const q = query.trim().toLowerCase();

  return mentors.filter((mentor) => {
    if (q) {
      const haystack = `${mentor.name} ${mentor.role} ${mentor.qualification} ${mentor.subjects.join(" ")} ${mentor.bio}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (filters.subjects.length > 0 && !mentor.subjects.some((subject) => filters.subjects.includes(subject))) {
      return false;
    }
    if (mentor.pricePerSession > filters.maxPrice) return false;
    if (mentor.rating < filters.minRating) return false;
    if (filters.verifiedOnly && !mentor.isVerified) return false;
    return true;
  });
};

export default filterMentors;
