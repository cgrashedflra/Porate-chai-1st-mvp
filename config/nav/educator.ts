import ROUTES from "@/constants/routes";
import type { RoleNavConfig } from "./types";

export const educatorNav: RoleNavConfig = {
  role: "educator",
  homeHref: "/educator/dashboard",
  profileHref: "/educator/profile",
  notificationsHref: "/educator/notifications",
  searchPlaceholder: "Search students, classes, or messages...",
  sidebar: {
    items: [
      { label: "Dashboard", href: "/educator/dashboard", icon: "layoutDashboard", exact: true },
      { label: "My Classes", href: "/educator/my-classes", icon: "calendar", badge: 5 },
      { label: "My Students", href: "/educator/my-students", icon: "users", badge: 12 },
      { label: "Earnings", href: "/educator/earnings", icon: "wallet" },
      { label: "Messages", href: "/educator/messages", icon: "message", badge: 3 },
      { label: "Profile", href: "/educator/profile", icon: "user" },
      { label: "Settings", href: "/educator/settings", icon: "settings" },
    ],
    footer: { kind: "promo", title: "Teach. Share Knowledge. Make an Impact.", body: "Good teachers build a better future." },
  },
  rightSidebar: [
    { type: "calendar", title: "My Schedule", icon: "calendar", eventDays: [3, 6, 13, 26, 28] },
    {
      type: "list", title: "Next Class", icon: "message",
      items: [{ icon: "video", tone: "indigo", title: "Physics", subtitle: "Rafid Hasan · HSC (1st Year)", meta: "10:00 AM - 11:00 AM", action: { label: "Join Now", href: "#" } }],
    },
    {
      type: "list", title: "Recent Messages", icon: "message", viewAll: { href: "/educator/messages" },
      items: [
        { title: "Tasmina Akter", subtitle: "Sir, can you share the notes for today?", meta: "10:24 AM" },
        { title: "Nusrat Jahan", subtitle: "Thank you so much for the class!", meta: "Yesterday" },
        { title: "Rafid Hasan", subtitle: "Sir, tomorrow's class timing is fine?", meta: "Yesterday" },
      ],
    },
  ],
  userMenu: [
    { label: "Home", href: ROUTES.HOME, icon: "home" },
    { label: "Notifications", href: "/educator/notifications", icon: "bell" },
    { label: "Log out", icon: "logout", action: "logout" },
  ],
};