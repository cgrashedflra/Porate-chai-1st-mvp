// ============================================================
// MARKETPLACE — educator source data
// ============================================================

import { educators } from "@/data/home/educators";
import type { EducatorCardData } from "@/data/home/types";

/** The marketplace lists educators only — this is its single source of data. */
export const getEducators = (): EducatorCardData[] => educators;

export default getEducators;
