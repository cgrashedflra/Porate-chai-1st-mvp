"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getSnapshot = () => {
    const offset = -new Date().getTimezoneOffset() / 60;
    return `GMT${offset >= 0 ? "+" : ""}${offset}`;
};

/** Server render + first client paint must match, so start empty. */
const getServerSnapshot = () => "";

/**
 * The visitor's timezone label (e.g. `"GMT+6"`).
 *
 * Read through `useSyncExternalStore` so it is only resolved on the client —
 * rendering it during SSR would cause a hydration mismatch — without resorting
 * to a `setState`-in-effect.
 */
export function useTimezone(): string {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
