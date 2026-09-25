import ROUTES from "./routes";

export const NAVBAR_LINKS = [
  { label: 'Explore', href: ROUTES.HOME },
  { label: 'Marketplace', href: ROUTES.MARKETPLACE },
  { label: 'How It Works', href: ROUTES.HOW_IT_WORKS_SECTION },
] as const;

export const STUDENT_NAV = [
  {
    label: "Browse Marketplace",
    href: ROUTES.MARKETPLACE,
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
    href: ROUTES.EDUCATOR.MY_CLASSES,
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
    href: ROUTES.SUPPORT,
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
    href: ROUTES.ADMIN.DASHBOARD,
    admin: true,
  },
] as const;