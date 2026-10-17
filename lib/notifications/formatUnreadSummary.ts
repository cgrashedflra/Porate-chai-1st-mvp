import { formatUnreadSummary as genericFormatUnreadSummary } from "@/lib/listing";

/** Copy for the notifications page subheading. */
export const formatUnreadSummary = (unread: number): string =>
  genericFormatUnreadSummary(unread, "notification");

export default formatUnreadSummary;
