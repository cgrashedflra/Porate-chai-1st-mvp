/**
 * Today's date (`YYYY-MM-DD`) in the app's primary timezone.
 *
 * Resolved on the server so the class-booking window is computed once and can
 * be passed down as a prop — deriving it during render on the client would make
 * the server and client disagree about "today" during hydration.
 */
export function todayInDhaka(): string {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka" }).format(new Date());
}
