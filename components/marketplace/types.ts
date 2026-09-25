// ============================================================
// MARKETPLACE — shared filter / sort types & constants.
// Consumed by the header, filter card, list and explorer so
// every piece speaks the same "filter language".
// ============================================================

export type ContentType = 'all' | 'gigs' | 'classes';

export type SortKey = 'relevance' | 'rating' | 'price-asc' | 'price-desc';

export type ViewMode = 'grid' | 'list';

export type GigFormat = 'Online' | 'In-person';

export interface MarketplaceFilters {
  subjects: string[];
  levels: string[];
  /** 'all' = both formats */
  format: 'all' | GigFormat;
  /** Max acceptable price (BDT). PRICE_CAP = no upper bound. */
  maxPrice: number;
  /** Minimum rating; 0 = any rating. */
  minRating: number;
  availableThisWeek: boolean;
  verifiedOnly: boolean;
}

/** Upper bound for the price-range slider. */
export const PRICE_CAP = 5000;

export const DEFAULT_FILTERS: MarketplaceFilters = {
  subjects: [],
  levels: [],
  format: 'all',
  maxPrice: PRICE_CAP,
  minRating: 0,
  availableThisWeek: false,
  verifiedOnly: false,
};

export const CONTENT_TYPES: readonly { value: ContentType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'gigs', label: 'Gigs' },
  { value: 'classes', label: 'Batch classes' },
];

export const FORMAT_OPTIONS: readonly ('all' | GigFormat)[] = ['all', 'Online', 'In-person'];

/** Quick-pick minimum-rating values shown as a button grid. */
export const RATING_OPTIONS: readonly number[] = [0, 4.5, 4.8];

export const SORT_OPTIONS: readonly { value: SortKey; label: string }[] = [
  { value: 'relevance', label: 'Most relevant' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

/** Format a BDT amount with ৳ and locale separators. */
export const formatBDT = (value: number) => `৳${value.toLocaleString('en-US')}`;

/** Count how many filter groups are actively restricting results. */
export const countActiveFilters = (filters: MarketplaceFilters) =>
  filters.subjects.length +
  filters.levels.length +
  (filters.format !== 'all' ? 1 : 0) +
  (filters.maxPrice < PRICE_CAP ? 1 : 0) +
  (filters.minRating > 0 ? 1 : 0) +
  (filters.availableThisWeek ? 1 : 0) +
  (filters.verifiedOnly ? 1 : 0);