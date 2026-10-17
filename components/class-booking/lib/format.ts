/** Time + date formatting helpers. Pure functions — safe on both server and client. */

/** Render a 24h start hour as a 12h label, e.g. `14` -> `"02:00 PM"`. */
export const fmtHour = (h: number) => `${String(h % 12 || 12).padStart(2, "0")}:00 ${h % 24 >= 12 ? "PM" : "AM"}`;

/** Render a slot of `duration` hours starting at `h`, e.g. `"09:00 AM – 10:00 AM"`. */
export const fmtRange = (h: number, duration: number) => `${fmtHour(h)} – ${fmtHour(h + duration)}`;

/** Local (not UTC) `YYYY-MM-DD` key for a date — the key used in the `booked` map. */
export const dateKey = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/** The seven consecutive days starting at `startDate`, parsed as a local date. */
export function buildWeek(startDate: string): Date[] {
    const base = new Date(`${startDate}T00:00:00`);
    return Array.from(
        { length: 7 },
        (_, i) => new Date(base.getFullYear(), base.getMonth(), base.getDate() + i)
    );
}
