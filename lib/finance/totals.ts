/** Sum of every row's amount. */
export const sumAmounts = (rows: readonly { amount: number }[]): number =>
  rows.reduce((total, row) => total + row.amount, 0);

/** Sum of the amounts of the rows in a given status. */
export const sumAmountsByStatus = (
  rows: readonly { amount: number; status: string }[],
  status: string
): number => sumAmounts(rows.filter((row) => row.status === status));
