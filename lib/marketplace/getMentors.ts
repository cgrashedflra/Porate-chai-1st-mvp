// ============================================================
// MARKETPLACE — mentor source data
// ============================================================

import { Mentors } from "@/data/home/mentors";
import type { Mentor } from "@/data/home/types";

/** The marketplace lists mentors only — this is its single source of data. */
export const getMentors = (): Mentor[] => Mentors;

export default getMentors;
