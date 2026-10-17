/**
 * `card` — the base card surface shared by every class-booking panel.
 *
 * This is the export the two components import (the old `import { card } from ""`
 * pointed at nothing). Padding is deliberately left out so each call site can
 * compose its own spacing, e.g. `cn(card, "p-5")` or `cn(card, "space-y-5 p-5")`.
 */
export const card =
    "rounded-2xl border border-indigo-100/80 bg-white shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]";
