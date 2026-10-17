import type { GroupedListItem } from "@/lib/listing";
import { initialEducators } from "@/data/educators";

export interface EducatorListItem extends GroupedListItem {
  id: string;
  type: "educator";
  name: string;
  avatar: string;
  verified: boolean;
  rating: number;
  subject: string;
  priceMin: number;
  location: string;
}

export const myEducatorsData: EducatorListItem[] = initialEducators.map((edu, idx) => ({
  id: edu.id,
  type: "educator",
  group: idx < 2 ? "Today" : idx < 5 ? "Yesterday" : "Earlier",
  title: edu.name,
  description: edu.subjects.slice(0, 2).join(", ") + (edu.subjects.length > 2 ? " & more" : ""),
  read: idx % 3 !== 0,
  href: `/student/marketplace/${edu.id}`,
  actionLabel: "View profile",
  meta: edu.verified ? "Verified" : undefined,
  imageUrl: edu.avatar,
  name: edu.name,
  avatar: edu.avatar,
  verified: edu.verified,
  rating: edu.rating,
  subject: edu.subjects[0] || "",
  priceMin: edu.priceMin,
  location: edu.location,
}));

export default myEducatorsData;
