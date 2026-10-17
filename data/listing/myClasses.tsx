import type { GroupedListItem } from "@/lib/listing";
import { initialClasses } from "@/data/classes";

export interface ClassListItem extends GroupedListItem {
  id: string;
  type: "class";
  educatorName: string;
  educatorAvatar: string;
  subject: string;
  level: string;
  timeSlot: string;
  sessions: number;
  price: number;
  status: string;
}

export const myClassesData: ClassListItem[] = initialClasses.slice(0, 6).map((cls, idx) => ({
  id: cls.id,
  type: "class",
  group: idx < 2 ? "Today" : idx < 4 ? "Yesterday" : "Earlier",
  title: cls.title,
  description: `${cls.educatorName} • ${cls.subject} • ${cls.level}`,
  time: cls.timeSlot,
  read: idx % 2 === 0,
  href: `/student/my-classes/${cls.id}`,
  actionLabel: "View class",
  meta: cls.status,
  imageUrl: cls.educatorAvatar,
  educatorName: cls.educatorName,
  educatorAvatar: cls.educatorAvatar,
  subject: cls.subject,
  level: cls.level,
  timeSlot: cls.timeSlot,
  sessions: cls.sessions,
  price: cls.price,
  status: cls.status,
}));

export default myClassesData;
