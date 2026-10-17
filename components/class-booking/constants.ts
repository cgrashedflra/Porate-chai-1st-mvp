import type { EducatorInfo, WeeklyAvailability } from "./types";

/** Weekday labels, Sunday first — index matches `Date.getDay()`. */
export const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Demo schedule used when the host app does not supply one. */
export const defaultAvailability: WeeklyAvailability = [
    { enabled: true, blocks: [9, 11, 14] },
    { enabled: true, blocks: [9, 11, 14, 16] },
    { enabled: true, blocks: [9, 10, 14, 16] },
    { enabled: true, blocks: [10, 13, 15] },
    { enabled: true, blocks: [10, 14] },
    { enabled: false, blocks: [] },
    { enabled: true, blocks: [9, 11] },
];

/** Demo educator used when the host app does not supply one. */
export const sampleEducator: EducatorInfo = {
    name: "Mehedi Hasan",
    subject: "Mathematics Teacher",
    level: "HSC (1st Year)",
    rating: 4.8,
    reviews: 124,
    students: 142,
    completed: 8,
};

/** Default editor settings (schedule + rate + session length). */
export const defaultAvailabilitySettings = {
    schedule: defaultAvailability,
    rate: 12,
    duration: 1,
};
