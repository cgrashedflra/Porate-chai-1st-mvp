// ============================================================
// MARKETPLACE — derive filter options from listings
// ============================================================

import type { MarketplaceListing } from "@/types/types";

export const getFilterOptions = (listings: MarketplaceListing[]) => {
  const subjects = new Set<string>();
  const levels = new Set<string>();
  for (const item of listings) {
    subjects.add(item.subject);
    levels.add(item.level);
  }
  return {
    subjects: [...subjects].sort(),
    levels: [...levels].sort(),
  };
};

export default getFilterOptions;
