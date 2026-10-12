// ============================================================
// MARKETPLACE — derive filter options from mentors
// ============================================================

import type { Mentor } from "@/data/home/types";

/** Subjects are collected from every mentor so the filter list can never drift. */
export const getFilterOptions = (mentors: Mentor[]) => {
  const subjects = new Set<string>();
  for (const mentor of mentors) {
    for (const subject of mentor.subjects) subjects.add(subject);
  }
  return { subjects: [...subjects].sort() };
};

export default getFilterOptions;
