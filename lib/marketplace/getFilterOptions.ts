// ============================================================
// MARKETPLACE — derive filter options from educators
// ============================================================

import type { EducatorCardData } from "@/data/home/types";

/** Subjects are collected from every educator so the filter list can never drift. */
export const getFilterOptions = (educators: EducatorCardData[]) => {
  const subjects = new Set<string>();
  for (const educator of educators) {
    for (const subject of educator.subjects) subjects.add(subject);
  }
  return { subjects: [...subjects].sort() };
};

export default getFilterOptions;
