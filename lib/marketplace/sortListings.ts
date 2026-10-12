// ============================================================
// MARKETPLACE — sort listings
// ============================================================

import type { MarketplaceListing } from "@/types/types";
import type { SortKey } from "./types";

export const sortListings = (listings: MarketplaceListing[], sort: SortKey): MarketplaceListing[] => {
  return [...listings].sort((a, b) => {
    switch (sort) {
      case "rating":
        return b.rating - a.rating;
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - b.price ? b.price - a.price : 0;
      default:
        return 0; // relevance — keep the original stable order
    }
  });
};

export default sortListings;
