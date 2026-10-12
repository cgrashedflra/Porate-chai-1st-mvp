"use client";

import * as React from "react";
import { cn } from "@/lib/cn";
import { ChatHeader } from "./ChatHeader";
import { MessageBubble } from "./MessageBubble";
import { MessageComposer } from "./MessageComposer";
import { initialMessages } from "./data";
import { CARD } from "./styles";
import type { Conversation, Message } from "./types";

export function ChatPanel({ contact }: { contact: Conversation }) {
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const endRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  function send(text: string) {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((m) => [...m, { id: crypto.randomUUID(), from: "me", text, time }]);
  }

  return (
    <section className={cn(CARD, "flex min-h-0 flex-col")}>
      <ChatHeader contact={contact} />

      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-5">
        <div className="flex justify-center">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs text-slate-500">Today, Apr 26</span>
        </div>

        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} contact={contact} />
        ))}
        <div ref={endRef} />
      </div>

      <MessageComposer onSend={send} />
    </section>
  );
}
