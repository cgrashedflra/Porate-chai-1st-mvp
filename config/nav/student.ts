import ROUTES from "@/constants/routes";
import type { RoleNavConfig } from "./types";

/**
 * Student role-nav contract — the single home for the student navbar/sidebar.
 *
 * Every `href` comes from the canonical `ROUTES` map — never a hardcoded
 * path string, never a phantom top-level key. The public navbar has NO
 * personal links here (those are role-scoped); role personal routes
 * (Saved, Messages, Profile, Settings) live only in this role config.
 */
export const studentNav: RoleNavConfig = {
  role: "student",
  homeHref: ROUTES.STUDENT.DASHBOARD,
  searchPlaceholder: "Search educators, subjects, or anything...",
  sidebar: {
    items: [
      { label: "Dashboard", href: ROUTES.STUDENT.DASHBOARD, icon: "layoutDashboard", exact: true },
      { label: "My Classes", href: ROUTES.STUDENT.MY_CLASSES, icon: "calendar", badge: 2 },
      { label: "My Educators", href: ROUTES.STUDENT.MY_EDUCATORS, icon: "user" },
      { label: "Saved", href: ROUTES.STUDENT.SAVED, icon: "bookmark" },
      { label: "Messages", href: ROUTES.STUDENT.MESSAGES, icon: "message", badge: 3 },
      { label: "Payments", href: ROUTES.STUDENT.PAYMENTS, icon: "creditCard" },
      { label: "Profile", href: ROUTES.STUDENT.PROFILE, icon: "userCheck" },
      { label: "Settings", href: ROUTES.STUDENT.SETTINGS, icon: "settings" },
    ],
    footer: { kind: "promo", title: "Keep Going!", body: "Small steps every day lead to big results." },
  },
  rightSidebar: [
    {
      type: "list",
      title: "Class Schedule",
      icon: "calendar",
      viewAll: { label: "View all", href: ROUTES.STUDENT.MY_CLASSES },
      items: [
        { icon: "video", tone: "green", title: "HSC Physics - Chapter 3", subtitle: "Dr. Ahsan Rahman", meta: "Today 07:00 PM", action: { label: "Join", href: ROUTES.STUDENT.MY_CLASSES } },
        { icon: "book", tone: "indigo", title: "Mathematics - Integration", subtitle: "Nusrat Jahan", meta: "Tomorrow 06:00 PM", action: { label: "View", href: ROUTES.STUDENT.MY_CLASSES } },
        { icon: "graduation", tone: "rose", title: "Chemistry - Organic", subtitle: "Farhan Kabir", meta: "Apr 28 08:00 PM", action: { label: "View", href: ROUTES.STUDENT.MY_CLASSES } },
      ],
    },
    {
      type: "stats",
      title: "Your Progress",
      icon: "barChart",
      stats: [
        { icon: "video", tone: "green", value: "5", label: "Total Classes" },
        { icon: "calendar", tone: "green", value: "3", label: "This Week" },
        { icon: "star", tone: "amber", value: "4.8", label: "Avg. Rating" },
      ],
      progress: { label: "Course Completion", percent: 60 },
    },
  ],
  userMenu: [
    { label: "Dashboard", href: ROUTES.STUDENT.DASHBOARD, icon: "layoutDashboard" },
    { label: "Profile", href: ROUTES.STUDENT.PROFILE, icon: "user" },
    { label: "Settings", href: ROUTES.STUDENT.SETTINGS, icon: "settings" },
    { label: "Log out", icon: "logout", action: "logout" },
  ],
};
