// ============================================================
// MARKETPLACE — build listing data
// ============================================================

import ROUTES from "@/constants/routes";
import { initialGigs } from "@/data/gigs";
import { initialClasses } from "@/data/classes";
import type { MarketplaceListing } from "@/types/types";

/** Normalize gigs + approved batch classes into one sortable/filterable list. */
export const buildListings = (): MarketplaceListing[] => [
  ...initialGigs.map((gig) => ({
    kind: "gig" as const,
    id: gig.id,
    title: gig.title,
    educatorId: gig.educatorId,
    educatorName: gig.educatorName,
    educatorAvatar: gig.educatorAvatar,
    educatorVerified: gig.educatorVerified,
    subject: gig.subject,
    level: gig.level,
    format: gig.format,
    price: gig.pricePerHour,
    rating: gig.rating,
    description: gig.description,
    href: ROUTES.EDUCATOR_PROFILE(gig.educatorId),
    reviewCount: gig.reviewCount,
    availableThisWeek: gig.availableThisWeek,
  })),
  ...initialClasses
    .filter((c) => c.moderationStatus === undefined || c.moderationStatus === "approved")
    .map((c) => ({
      kind: "class" as const,
      id: c.id,
      title: c.title,
      educatorId: c.educatorId,
      educatorName: c.educatorName,
      educatorAvatar: c.educatorAvatar,
      educatorVerified: c.educatorVerified,
      subject: c.subject,
      level: c.level,
      format: "Online" as const,
      price: c.price,
      rating: c.rating,
      description: c.description,
      href: ROUTES.EDUCATOR_PROFILE(c.id),
      schedule: c.schedule[0],
      seatsLeft: c.maxStudents - c.enrolledStudents,
      image: c.image,
      status: c.status,
    })),
];

export default buildListings;
