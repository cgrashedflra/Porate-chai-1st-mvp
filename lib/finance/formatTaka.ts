/** Format a BDT amount for display, e.g. 128500 → "৳1,28,500". */
export const formatTaka = (amount: number) => `৳${amount.toLocaleString("en-IN")}`;
