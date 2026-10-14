// ============================================================
// MARKETPLACE — sort educators
// ============================================================

import type { EducatorCardData } from "@/data/home/types";
import type { SortKey } from "./types";

export const sortEducators = (educators: EducatorCardData[], sort: SortKey): EducatorCardData[] => {
  return [...educators].sort((a, b) => {
    switch (sort) {
      case "rating":
        return b.rating - a.rating;
      case "price-asc":
        return a.pricePerSession - b.pricePerSession;
      case "price-desc":
        return b.pricePerSession - a.pricePerSession;
      default:
        return 0; // relevance — keep the original stable order
    }
  });
};

export default sortEducators;
