"use client";

/**
 * Messages page for Porate Chai — content area only (the app shell already
 * provides the sidebar + top bar).
 *
 * Composed from the pieces in `components/messages/`; small reusable UI
 * primitives live in `components/ui/`.
 */

import * as React from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@/lib/cn";
import { IconButton } from "@/components/ui/IconButton";
import { ChatHeader } from "./ChatHeader";
import { ChatPanel } from "./ChatPanel";
import { ConversationList } from "./ConversationList";
import { conversations } from "./data";
import { CARD } from "./styles";

export default function MessagesPage() {
  const [activeId, setActiveId] = React.useState(conversations[0].id);
  const [showList, setShowList] = React.useState(true);
  const contact = conversations.find((c) => c.id === activeId)!;

  return (
    <section className={cn(CARD, "flex h-[calc(100vh-8rem)] min-h-[520px] flex-col overflow-hidden")}>
      {/* Toolbar bar — hide list + chat header */}
      <div className="flex items-center gap-3 border-b border-indigo-50 p-3">
        <IconButton
          label={showList ? "Hide chat list" : "Show chat list"}
          onClick={() => setShowList((v) => !v)}
          className={cn("shrink-0", !showList && "bg-indigo-500 text-white hover:bg-indigo-600")}
        >
          {showList ? <PanelLeftClose className="size-4" /> : <PanelLeftOpen className="size-4" />}
        </IconButton>

        <div className="flex min-w-0 flex-1 items-center">
          <ChatHeader contact={contact} />
        </div>
      </div>

      {/* Shared card body — two sections */}
      <div
        className={cn(
          "grid min-h-0 flex-1",
          showList ? "grid-cols-[1fr_2fr] lg:grid-cols-[280px_minmax(0,1fr)]" : "grid-cols-1"
        )}
      >
        {showList && <ConversationList activeId={activeId} onSelect={setActiveId} />}
        <ChatPanel key={contact.id} contact={contact} />
      </div>
    </section>
  );
}
