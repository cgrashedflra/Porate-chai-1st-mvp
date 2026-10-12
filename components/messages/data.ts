import type { Conversation, Message, MessageFile } from "./types";

/** Sample data — replace with your API data. */
export const conversations: Conversation[] = [
  { id: "1", name: "Tasmia Akter", role: "student", preview: "Sir, can you share the notes for today's...", time: "10:24 AM", unread: 1, online: true, grade: "HSC (1st Year)" },
  { id: "2", name: "Rafid Hasan", role: "student", preview: "You: Okay, noted!", time: "09:42 AM", unread: 0, sentByMe: true },
  { id: "3", name: "Nusrat Jahan", role: "parent", preview: "Thank you so much for the class!", time: "Yesterday", unread: 1 },
  { id: "4", name: "Tanvir Ahmed", role: "student", preview: "Will there be a test next week?", time: "Yesterday", unread: 0, sentByMe: true },
  { id: "5", name: "Sadia Rahman", role: "student", preview: "Can you explain the last part again?", time: "Apr 26", unread: 2 },
  { id: "6", name: "Arman Hossain", role: "student", preview: "That makes sense now. Thanks!", time: "Apr 25", unread: 0 },
  { id: "7", name: "Fahim Abdullah", role: "student", preview: "Looking forward to the next class.", time: "Apr 24", unread: 0 },
  { id: "8", name: "Mim Islam", role: "parent", preview: "Is the class on Sunday at the same time?", time: "Apr 22", unread: 0 },
  { id: "9", name: "Sharif Ahmed", role: "student", preview: "Noted, sir. I'll do it.", time: "Apr 20", unread: 0 },
];

export const initialMessages: Message[] = [
  { id: "m1", from: "them", text: "Assalamu Alaikum Sir,\nCan you share the notes for today's class?", time: "10:12 AM" },
  { id: "m2", from: "me", text: "Wa Alaikum Assalam,\nSure! I'm sharing the notes now.", time: "10:15 AM", file: { name: "Physics_Chapter_5_Notes.pdf", size: "2.4 MB" } },
  { id: "m3", from: "them", text: "JazakAllah Sir!\nAlso, can you explain the last question in the homework? I'm a bit confused.", time: "10:20 AM" },
  { id: "m4", from: "me", text: "Of course! I'll explain it in the next class, but I'll also send you a short explanation here. Give me a few minutes.", time: "10:23 AM" },
  { id: "m5", from: "them", text: "Thank you so much! 😊", time: "10:24 AM" },
];

export const recentFiles: MessageFile[] = [
  { name: "Physics_Chapter_5_Notes.pdf", size: "2.4 MB" },
  { name: "Previous Class Notes.pdf", size: "1.8 MB" },
];
