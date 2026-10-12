import { MoreVertical, Phone, Video } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { IconButton } from "@/components/ui/IconButton";
import { OnlineStatus } from "@/components/ui/OnlineStatus";
import type { Conversation } from "./types";

export function ChatHeader({ contact }: { contact: Conversation }) {
  return (
    <header className="flex items-center gap-3 border-b border-indigo-50 p-4">
      <Avatar name={contact.name} src={contact.avatar} size="lg" />
      <div className="min-w-0 flex-1">
        <h2 className="text-base font-semibold text-slate-900">{contact.name}</h2>
        <p className="text-xs text-slate-500">{contact.grade}</p>
        {contact.online && <OnlineStatus />}
      </div>
      <div className="flex gap-2">
        <IconButton label="Voice call"><Phone className="size-4" /></IconButton>
        <IconButton label="Video call"><Video className="size-4" /></IconButton>
        <IconButton label="More options"><MoreVertical className="size-4" /></IconButton>
      </div>
    </header>
  );
}
