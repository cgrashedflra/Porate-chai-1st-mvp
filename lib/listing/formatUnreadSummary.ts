/** Copy for the list page subheading. */
export const formatUnreadSummary = (unread: number, itemName = "item", itemNamePlural?: string): string => {
  const plural = itemNamePlural ?? `${itemName}${unread === 1 ? "" : "s"}`;
  if (unread === 0) return "You're all caught up.";
  return `You have ${unread} unread ${unread === 1 ? itemName : plural}.`;
};

export default formatUnreadSummary;
