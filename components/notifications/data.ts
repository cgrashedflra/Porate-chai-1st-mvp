import type { NotificationItem } from "@/lib/notifications";

/** Sample data — replace with your API. Change each `href` to your real routes. */
export const initialNotifications: NotificationItem[] = [
  { id: "1", group: "Today", type: "message", title: "New message from Tasmia Akter", description: "Sir, can you share the notes for today's class?", time: "10:24 AM", read: false, href: "/messages" },
  { id: "2", group: "Today", type: "class", title: "Physics class starts in 30 minutes", description: "HSC (1st Year) · 10:00 AM – 11:00 AM", time: "9:30 AM", read: false, href: "/classes", actionLabel: "View class" },
  { id: "3", group: "Today", type: "student", title: "New student joined", description: "Rafid Hasan enrolled in your Chemistry batch.", time: "8:15 AM", read: false, href: "/students" },
  { id: "4", group: "Yesterday", type: "earning", title: "Payment received", description: "You received a payment for 12 completed classes.", time: "Yesterday", read: true, href: "/earnings" },
  { id: "5", group: "Yesterday", type: "availability", title: "Update your availability", description: "Your schedule for next week hasn't been set yet.", time: "Yesterday", read: true, href: "/availability" },
  { id: "6", group: "Earlier", type: "system", title: "Profile verified", description: "Your teacher profile is now visible to students.", time: "Apr 22", read: true, href: "/profile" },
  { id: "7", group: "Earlier", type: "message", title: "New message from Sadia Rahman", description: "Can you explain the last part again?", time: "Apr 20", read: true, href: "/messages" },
];
