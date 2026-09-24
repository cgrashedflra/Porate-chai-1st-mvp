const ROUTES = {
  HOME: "/",
  EDUCATORS: "/educators",
  ABOUT: "/about",
  FAQ: "/faq",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  SUPPORT: "/support",
  LIVE_BATCHES: "/live-batches",
  HOW_IT_WORKS_SECTION: "/#how-it-works",

  AUTH: {
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    RECOVERY: "/recovery",
  },

  STUDENT: {
    DASHBOARD: "/student/dashboard",
    MY_CLASSES: "/student/my-classes",
    MY_EDUCATORS: "/student/my-educators",
    MESSAGES: "/student/messages",
    PAYMENTS: "/student/payments",
    PROFILE: "/student/profile",
    SAVED: "/student/saved",
    SETTINGS: "/student/settings",
    NOTIFICATIONS: "/student/notifications",
  },

  EDUCATOR: {
    DASHBOARD: "/educator/dashboard",
    MY_CLASSES: "/educator/my-classes",
    MY_STUDENTS: "/educator/my-students",
    EARNINGS: "/educator/earnings",
    MESSAGES: "/educator/messages",
    PROFILE: "/educator/profile",
    SETTINGS: "/educator/settings",
    NOTIFICATIONS: "/educator/notifications",
  },

  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    USER_MANAGEMENT: "/admin/user-management",
    TUTOR_VERIFICATION: "/admin/tutor-verification",
    GIG_MODERATION: "/admin/gig-moderation",
    BOOKING_OVERVIEW: "/admin/booking-overview",
    REPORTS_DISPUTES: "/admin/reports-disputes",
    AUDIT_LOG: "/admin/audit-log",
    SETTINGS: "/admin/settings",
    PROFILE: "/admin/profile",
    NOTIFICATIONS: "/admin/notifications",
  },

  EDUCATOR_PROFILE: (id: string) => `/educator-profile/${id}`,
  LIVE_BATCH: (id: string) => `/live-batch/${id}`,
} as const;

export default ROUTES;