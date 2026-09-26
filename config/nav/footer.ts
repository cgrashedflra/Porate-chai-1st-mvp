import ROUTES from "@/constants/routes";

/**
 * Public footer config — the single home for every link in `components/Footer.tsx`.
 *
 * The footer is rendered for every visitor, guests included, so it links ONLY to
 * public pages and auth CTAs. Role-scoped app destinations (student/educator/admin
 * dashboards, profiles, class management) are deliberately absent — they live in the
 * role nav configs (`config/nav/student.ts`, `config/nav/educator.ts`,
 * `config/nav/admin.ts`) and are reached from the signed-in chrome instead.
 *
 * Every `href` comes from the canonical `ROUTES` map — never a literal path.
 */

/** A single footer link (matches the shape `components/Footer.tsx` renders). */
export type FooterLink = {
  label: string;
  href: string;
  /** Styled as brand–primary + semibold (e.g. “Find Educators” CTA). */
  featured?: boolean;
};

/** “For Students” column in the footer. */
export const STUDENT_FOOTER: readonly FooterLink[] = [
  { label: "Browse Marketplace", href: ROUTES.MARKETPLACE, featured: true },
  { label: "How It Works", href: ROUTES.HOW_IT_WORKS_SECTION },
] as const;

/** “For Educators” column in the footer. */
export const EDUCATOR_FOOTER: readonly FooterLink[] = [
  { label: "Become an Educator", href: ROUTES.AUTH.SIGN_UP, featured: true },
] as const;

/** “Company” column in the footer. */
export const COMPANY_FOOTER: readonly FooterLink[] = [
  { label: "About Porate Chai", href: ROUTES.ABOUT },
  { label: "FAQ & Support", href: ROUTES.SUPPORT },
  { label: "Terms of Service", href: ROUTES.TERMS },
  { label: "Privacy Policy", href: ROUTES.PRIVACY },
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
