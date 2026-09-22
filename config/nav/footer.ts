import ROUTES from "@/constants/routes";

/** A single footer link (matches the shape `components/Footer.tsx` renders). */
export type FooterLink = {
  label: string;
  href: string;
  /** Styled as brand–primary + semibold (e.g. “Find Educators” CTA). */
  featured?: boolean;
  /** Only meaningful to admins (e.g. Admin Console); hidden from guests. */
  admin?: boolean;
};

/** “For Students” column in the footer. */
export const STUDENT_FOOTER: readonly FooterLink[] = [
  { label: "Find Educators", href: ROUTES.EDUCATORS, featured: true },
  { label: "Explore Batches", href: ROUTES.LIVE_BATCHES },
  { label: "How It Works", href: ROUTES.HOW_IT_WORKS_SECTION },
  { label: "Student Dashboard", href: ROUTES.STUDENT.DASHBOARD },
] as const;

/** “For Educators” column in the footer. */
export const EDUCATOR_FOOTER: readonly FooterLink[] = [
  { label: "Become an Educator", href: ROUTES.AUTH.SIGN_UP, featured: true },
  { label: "Create / Edit Profile", href: ROUTES.EDUCATOR.PROFILE },
  { label: "Publish a Class", href: ROUTES.EDUCATOR.MY_CLASSES },
  { label: "Educator Dashboard", href: ROUTES.EDUCATOR.DASHBOARD },
] as const;

/** “Company” column in the footer. */
export const COMPANY_FOOTER: readonly FooterLink[] = [
  { label: "About Pirate Chai", href: ROUTES.ABOUT },
  { label: "FAQ & Support", href: ROUTES.SUPPORT },
  { label: "Terms of Service", href: ROUTES.TERMS },
  { label: "Privacy Policy", href: ROUTES.PRIVACY },
  { label: "Admin Console", href: ROUTES.ADMIN.DASHBOARD, admin: true },
] as const;

/**
 * All footer groups in render order — the single thing `components/Footer.tsx`
 * maps over (one source of truth for the entire footer).
 */
export const FooterGroups = [
  { title: "For Students", links: STUDENT_FOOTER },
  { title: "For Educators", links: EDUCATOR_FOOTER },
  { title: "Company", links: COMPANY_FOOTER },
] as const;
