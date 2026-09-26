import ROUTES from "@/constants/routes";
import type { RoleNavConfig } from "./types";

export const adminNav: RoleNavConfig = {
  role: "admin",
  homeHref: ROUTES.ADMIN.DASHBOARD,
  profileHref: ROUTES.ADMIN.PROFILE,
  notificationsHref: ROUTES.ADMIN.NOTIFICATIONS,
  searchPlaceholder: "Search users, educators, courses, or anything...",
  showThemeToggle: true,
  sidebar: {
    items: [
      { label: "Dashboard", href: ROUTES.ADMIN.DASHBOARD, icon: "layoutDashboard", exact: true },
      { label: "User Management", href: ROUTES.ADMIN.USER_MANAGEMENT, icon: "userCheck", badge: 2 },
      { label: "Tutor Verification", href: ROUTES.ADMIN.TUTOR_VERIFICATION, icon: "users", badge: 5 },
      { label: "Gig Moderation", href: ROUTES.ADMIN.GIG_MODERATION, icon: "shield" },
      { label: "Booking Overview", href: ROUTES.ADMIN.BOOKING_OVERVIEW, icon: "calendar", badge: 8 },
      { label: "Reports & Disputes", href: ROUTES.ADMIN.REPORTS_DISPUTES, icon: "fileText" },
      { label: "Audit Log", href: ROUTES.ADMIN.AUDIT_LOG, icon: "activity" },
      { label: "Settings", href: ROUTES.ADMIN.SETTINGS, icon: "settings" },
    ],
    footer: { kind: "promo", title: "Guardians of Learning", body: "Keep the platform safe, fair, and thriving for every learner." },
  },
  rightSidebar: [
    {
      type: "list", title: "Recent Activities", icon: "activity",
      items: [
        { icon: "user", tone: "indigo", title: "New user registered", subtitle: "Sadia Rahman (Student)", meta: "2m ago" },
        { icon: "shield", tone: "green", title: "Educator application approved", subtitle: "Tanvir Hossain", meta: "12m ago" },
        { icon: "creditCard", tone: "green", title: "Payment received", subtitle: "৳1,200 (Batch Class)", meta: "18m ago" },
        { icon: "calendar", tone: "indigo", title: "New batch class created", subtitle: "HSC Physics (Batch)", meta: "27m ago" },
        { icon: "message", tone: "violet", title: "Message received", subtitle: "From: Mehedi Hasan", meta: "34m ago" },
        { icon: "banknote", tone: "amber", title: "Payout released", subtitle: "৳8,500 (Educator)", meta: "1h ago" },
      ],
    },
    { type: "promo", title: "Better Education Brighter Future", body: "Together we make learning accessible for everyone." },
  ],
  userMenu: [
    { label: "Home", href: ROUTES.HOME, icon: "home" },
    { label: "Marketplace", href: ROUTES.MARKETPLACE, icon: "layers" },
    { label: "Notifications", href: ROUTES.ADMIN.NOTIFICATIONS, icon: "bell" },
    { label: "Log out", icon: "logout", action: "logout" },
  ],
};