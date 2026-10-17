import type { DaySchedule, WeeklyAvailability } from "../types";

/** Earliest bookable hour (6 AM) and the number of hours offered in a day. */
const FIRST_HOUR = 6;
const HOURS_PER_DAY = 17;

/** Does a `duration`-hour slot starting at `h` collide with an existing block? */
const overlaps = (h: number, duration: number, block: number, blockDuration: number) =>
    !(h + duration <= block || block + blockDuration <= h);

/**
 * Start hours that fit `duration` inside the day and do not overlap any block
 * already scheduled for that day. Used when adding a block in the editor.
 */
export function freeStartHours(day: DaySchedule, duration: number): number[] {
    return Array.from({ length: HOURS_PER_DAY }, (_, i) => i + FIRST_HOUR).filter(
        (h) => h + duration <= 24 && day.blocks.every((block) => !overlaps(h, duration, block, duration))
    );
}

/**
 * Drop blocks that would overlap once `duration` changes, keeping the earliest
 * of each overlapping run. Used when the session length is edited.
 */
export function dedupeOverlapping(blocks: number[], duration: number): number[] {
    return [...blocks]
        .sort((a, b) => a - b)
        .reduce<number[]>((kept, h) => {
            const last = kept[kept.length - 1];
            return last !== undefined && h < last + duration ? kept : [...kept, h];
        }, []);
}

/** Apply a new session `duration` across a whole week, removing overlaps. */
export function applyDuration(schedule: WeeklyAvailability, duration: number): WeeklyAvailability {
    return schedule.map((day) => ({ ...day, blocks: dedupeOverlapping(day.blocks, duration) }));
}
