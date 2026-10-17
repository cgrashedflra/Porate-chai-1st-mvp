/**
 * Shared domain types for the class-booking feature.
 *
 * The same `WeeklyAvailability` shape flows through both sides:
 *   - the educator edits it in `AvailabilityEditor`
 *   - the student reads it in `ClassBooking`
 * so it is intentionally free of any UI concerns.
 *
 * `DaySchedule` / `WeeklyAvailability` live in `@/types/types` (they are part of
 * the `Educator` record) and are re-exported here so feature imports stay local.
 */

export type { DaySchedule, WeeklyAvailability } from "@/types/types";
import type { WeeklyAvailability } from "@/types/types";

/** Snapshot emitted by the editor on every change (rate + session length + schedule). */
export interface AvailabilitySettings {
    schedule: WeeklyAvailability;
    rate: number;
    duration: number;
}

/** Payload emitted when a student confirms a set of slots. */
export interface Booking {
    date: string;
    hours: number[];
    totalHours: number;
    totalCost: number;
}

/** Minimal educator info the booking UI renders in its header. */
export interface EducatorInfo {
    name: string;
    avatar?: string;
    subject: string;
    level: string;
    rating: number;
    reviews: number;
    students: number;
    completed: number;
}
