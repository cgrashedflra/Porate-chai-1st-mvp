import { MoreVertical } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { IconButton } from "@/components/ui/IconButton";
import { OnlineStatus } from "@/components/ui/OnlineStatus";
import type { Conversation } from "./types";

export function ChatHeader({ contact }: { contact: Conversation }) {
  return (
    <div className="flex w-full min-w-0 items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <Avatar name={contact.name} src={contact.avatar} size="md" />
        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold text-slate-900">{contact.name}</h2>
          <p className="truncate text-xs text-slate-500">{contact.grade}</p>
          {contact.online && <OnlineStatus />}
        </div>
      </div>
      <IconButton label="More options" className="shrink-0">
        <MoreVertical className="size-4" />
      </IconButton>
    </div>
  );
}
