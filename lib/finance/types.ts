// ============================================================
// FINANCE — shared money types for the educator earnings and the
// student payments features.
// ============================================================

/**
 * Base shape of a settled payment row (one ledger entry).
 * Features narrow `S` to the statuses they actually render, so a table
 * can only ever be filtered by the statuses it understands.
 */
export interface LedgerEntry<S extends string = string> {
  /** Stable id — the React key today, the API id once data is real. */
  id: string;
  /** Amount in BDT (৳), kept as a raw number. */
  amount: number;
  /** Display date, e.g. "Oct 12, 2026". */
  date: string;
  status: S;
}
