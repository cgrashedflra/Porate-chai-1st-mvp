export type Role = "student" | "parent";

export type MessageFrom = "them" | "me";

export type MessageFile = { name: string; size: string };

export interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  role: Role;
  preview: string;
  time: string;
  unread: number;
  sentByMe?: boolean;
  online?: boolean;
  grade?: string;
}

export interface Message {
  id: string;
  from: MessageFrom;
  text: string;
  time: string;
  file?: MessageFile;
}
