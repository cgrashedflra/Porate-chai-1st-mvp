/** `"all"` plus every status the row type declares. */
export type StatusFilter<Row extends { status: string }> = "all" | Row["status"];

/** Rows matching `status`; `"all"` returns a copy of the whole list. */
export function filterByStatus<Row extends { status: string }>(
  rows: readonly Row[],
  status: StatusFilter<Row>
): Row[] {
  return status === "all" ? [...rows] : rows.filter((row) => row.status === status);
}
