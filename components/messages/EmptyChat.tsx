import { MessageSquare } from "lucide-react";

/** Shown in the chat column until a conversation is selected. */
export function EmptyChat() {
  return (
    <div className="grid h-full min-h-0 flex-1 place-items-center">
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <div className="grid size-16 place-items-center rounded-full bg-indigo-50 text-indigo-400">
          <MessageSquare className="size-8" />
        </div>
        <h2 className="text-lg font-semibold text-slate-800">Select a conversation</h2>
        <p className="max-w-xs text-sm leading-relaxed text-slate-500">
          Choose a chat from the list to start messaging with your students and stay connected.
        </p>
      </div>
    </div>
  );
}