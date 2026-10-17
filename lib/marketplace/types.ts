// ============================================================
// MARKETPLACE — shared filter / sort types & constants.
// The marketplace lists educators only, so these speak the educator
// filter language: subjects, price, rating and verified status.
// ============================================================

export type SortKey = 'relevance' | 'rating' | 'price-asc' | 'price-desc';

export interface MarketplaceFilters {
  subjects: string[];
  /** Max acceptable price per session (BDT). PRICE_CAP = no upper bound. */
  maxPrice: number;
  /** Minimum rating; 0 = any rating. */
  minRating: number;
  /** Only show verified educators. */
  verifiedOnly: boolean;
}

/** Upper bound for the price-range slider. */
export const PRICE_CAP = 5000;

export const DEFAULT_FILTERS: MarketplaceFilters = {
  subjects: [],
  maxPrice: PRICE_CAP,
  minRating: 0,
  verifiedOnly: false,
};

/** Quick-pick minimum-rating values shown as a button grid. */
export const RATING_OPTIONS: readonly number[] = [0, 4.5, 4.8];

export const SORT_OPTIONS: readonly { value: SortKey; label: string }[] = [
  { value: 'relevance', label: 'Most relevant' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

/** Count how many filter groups are actively restricting results. */
export const countActiveFilters = (filters: MarketplaceFilters) =>
  filters.subjects.length +
  (filters.maxPrice < PRICE_CAP ? 1 : 0) +
  (filters.minRating > 0 ? 1 : 0) +
  (filters.verifiedOnly ? 1 : 0);
