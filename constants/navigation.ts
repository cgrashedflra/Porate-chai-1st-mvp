import ROUTES from "./routes";

export const STUDENT_NAV = [
  {
    label: "Find Mentors",
    href: ROUTES.MENTORS,
  },
  {
    label: "Explore Classes",
    href: ROUTES.CLASSES,
  },
  {
    label: "How It Works",
    href: ROUTES.HOW_IT_WORKS_SECTION,
  },
  {
    label: "Student Dashboard",
    href: ROUTES.STUDENT.DASHBOARD,
  },
] as const;

export const EDUCATOR_NAV = [
  {
    label: "Become an Educator",
    href: ROUTES.AUTH.SIGN_UP,
  },
  {
    label: "Create / Edit Profile",
    href: ROUTES.EDUCATOR.PROFILE,
  },
  {
    label: "Publish a Class",
    href: ROUTES.EDUCATOR.NEW_CLASS,
  },
  {
    label: "Educator Dashboard",
    href: ROUTES.EDUCATOR.DASHBOARD,
  },
] as const;

export const COMPANY_NAV = [
  {
    label: "About Pirate Chai",
    href: ROUTES.ABOUT,
  },
  {
    label: "FAQ & Support",
    href: ROUTES.FAQ,
  },
  {
    label: "Terms of Service",
    href: ROUTES.TERMS,
  },
  {
    label: "Privacy Policy",
    href: ROUTES.PRIVACY,
  },
  {
    label: "Admin Console",
    href: ROUTES.ADMIN.ROOT,
    admin: true,
  },
] as const;