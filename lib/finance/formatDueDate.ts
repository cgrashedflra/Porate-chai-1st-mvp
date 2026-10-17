/** Compact due date for stat tiles: "Oct 20, 2026" → "Oct 20". */
export const formatDueDate = (due: string) => due.split(",")[0].trim();
