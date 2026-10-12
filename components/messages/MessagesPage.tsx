"use client";

/**
 * Messages page for Porate Chai — content area only (the app shell already
 * provides the sidebar + top bar).
 *
 * Composed from the pieces in `components/messages/`; small reusable UI
 * primitives live in `components/ui/`.
 */

import * as React from "react";
import { PenLine } from "lucide-react";
import { ChatPanel } from "./ChatPanel";
import { ConversationList } from "./ConversationList";
import { conversations } from "./data";

export default function MessagesPage() {
  const [activeId, setActiveId] = React.useState(conversations[0].id);
  const contact = conversations.find((c) => c.id === activeId)!;

  return (
    <div className="flex h-[calc(100vh-5rem)] min-h-[640px] flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Messages</h1>
          <p className="text-sm text-slate-500">Chat with your students and stay connected.</p>
        </div>
        <button
          type="button"
          className="flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-medium text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.7)] transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
        >
          <PenLine className="size-4" /> New Message
        </button>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[1fr_2fr] lg:grid-cols-[280px_minmax(0,1fr)]">
        <ConversationList activeId={activeId} onSelect={setActiveId} />
        <ChatPanel key={contact.id} contact={contact} />
      </div>
    </div>
  );
}
