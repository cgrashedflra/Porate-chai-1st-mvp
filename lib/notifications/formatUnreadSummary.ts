/** Copy for the notifications page subheading. */
export const formatUnreadSummary = (unread: number): string =>
  unread > 0
    ? `You have ${unread} unread ${unread === 1 ? "notification" : "notifications"}.`
    : "You're all caught up.";

export default formatUnreadSummary;
