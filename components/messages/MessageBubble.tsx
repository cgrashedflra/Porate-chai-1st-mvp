import { CheckCheck } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { FileRow } from "@/components/ui/FileRow";
import type { Conversation, Message } from "./types";

type Props = {
  message: Message;
  contact: Conversation;
};

export function MessageBubble({ message, contact }: Props) {
  if (message.from !== "them") {
    return (
      <div className="flex flex-col items-end">
        <div className="max-w-[70%] whitespace-pre-line rounded-2xl rounded-tr-md bg-indigo-500 px-4 py-3 text-sm text-white">
          {message.text}
          {message.file && (
            <FileRow
              name={message.file.name}
              size={message.file.size}
              className="mt-3 bg-white [&_p:first-child]:text-slate-800"
            />
          )}
        </div>
        <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
          {message.time} <CheckCheck className="size-3.5 text-indigo-500" />
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <Avatar name={contact.name} src={contact.avatar} size="xs" />
      <div className="max-w-[70%]">
        <div className="whitespace-pre-line rounded-2xl rounded-tl-md bg-indigo-50/80 px-4 py-3 text-sm text-slate-700">
          {message.text}
        </div>
        <p className="mt-1 text-[11px] text-slate-400">{message.time}</p>
      </div>
    </div>
  );
}
