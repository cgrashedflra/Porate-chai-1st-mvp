import * as React from "react";
import { Paperclip, Send, Smile } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

export function MessageComposer({ onSend }: { onSend: (text: string) => void }) {
  const [draft, setDraft] = React.useState("");

  function send() {
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft("");
  }

  return (
    <div className="flex items-center gap-2 border-t border-indigo-50 p-4">
      <IconButton label="Attach file" className="bg-white ring-1 ring-indigo-100">
        <Paperclip className="size-4" />
      </IconButton>
      <label className="flex h-10 flex-1 items-center gap-2 rounded-xl bg-white px-3 ring-1 ring-indigo-100 focus-within:ring-2 focus-within:ring-indigo-300">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())}
          placeholder="Type a message..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
        <button type="button" aria-label="Add emoji" className="text-slate-400 hover:text-indigo-500">
          <Smile className="size-5" />
        </button>
      </label>
      <button
        type="button"
        onClick={send}
        aria-label="Send message"
        className="grid size-10 place-items-center rounded-xl bg-indigo-500 text-white transition-colors hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
      >
        <Send className="size-4" />
      </button>
    </div>
  );
}
