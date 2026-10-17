/**
 * Class booking feature — public surface.
 *
 * Two primary views that share one `WeeklyAvailability` shape:
 *   - `AvailabilityEditor` (educator) sets the weekly schedule + rate
 *   - `ClassBooking`       (student)  picks a date/slots and books
 *
 *   import { ClassBooking, AvailabilityEditor } from "@/components/class-booking";
 */

export { ClassBooking } from "./booking/ClassBooking";
export { AvailabilityEditor } from "./availability/AvailabilityEditor";

// Composables, for teams that want to build a custom layout.
export { DatePicker } from "./booking/DatePicker";
export { SlotPicker } from "./booking/SlotPicker";
export { BookingSummary } from "./booking/BookingSummary";
export { DayCard } from "./availability/DayCard";
export { QuickSettings } from "./availability/QuickSettings";
export { EducatorHeader } from "./shared/EducatorHeader";
export { StatChip } from "./shared/StatChip";

// Data + helpers.
export { DAYS, defaultAvailability, defaultAvailabilitySettings, sampleEducator } from "./constants";
export { fmtHour, fmtRange, dateKey, buildWeek } from "./lib/format";
export { useTimezone } from "./lib/useTimezone";
export { freeStartHours, dedupeOverlapping, applyDuration } from "./lib/slots";

// Types.
export type {
    Booking,
    DaySchedule,
    WeeklyAvailability,
    AvailabilitySettings,
    EducatorInfo,
} from "./types";
