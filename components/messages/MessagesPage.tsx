"use client";

/**
 * Messages page for Porate Chai — content area only (the app shell already
 * provides the sidebar + top bar).
 *
 * The selected conversation is read from and written to the URL (`?chat=<id>`),
 * so the page opens empty, refresh keeps your chat, and conversations can be
 * deep-linked.
 */

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@/lib/cn";
import { IconButton } from "@/components/ui/IconButton";
import { ChatHeader } from "./ChatHeader";
import { ChatPanel } from "./ChatPanel";
import { ConversationList } from "./ConversationList";
import { EmptyChat } from "./EmptyChat";
import { conversations } from "./data";
import { CARD } from "./styles";

export default function MessagesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [showList, setShowList] = React.useState(true);

  const activeId = searchParams.get("chat");
  const contact = conversations.find((c) => c.id === activeId);

  function selectConversation(id: string) {
    router.replace(`${pathname}?chat=${id}`, { scroll: false });
  }

  return (
    <section className={cn(CARD, "flex h-[calc(100vh-8rem)] min-h-130 flex-col overflow-hidden")}>
      {/* Toolbar bar — hide list + chat header (when a conversation is open) */}
      <div className="flex items-center gap-3 border-b border-indigo-50 p-3">
        <IconButton
          label={showList ? "Hide chat list" : "Show chat list"}
          onClick={() => setShowList((v) => !v)}
          className={cn("shrink-0", !showList && "bg-indigo-500 text-white hover:bg-indigo-600")}
        >
          {showList ? <PanelLeftClose className="size-4" /> : <PanelLeftOpen className="size-4" />}
        </IconButton>

        {contact && (
          <div className="flex min-w-0 flex-1 items-center">
            <ChatHeader contact={contact} />
          </div>
        )}
      </div>

      {/* Shared card body — two sections */}
      <div
        className={cn(
          "grid min-h-0 flex-1",
          showList ? "grid-cols-[1fr_2fr] lg:grid-cols-[280px_minmax(0,1fr)]" : "grid-cols-1"
        )}
      >
        {showList && <ConversationList activeId={activeId ?? ""} onSelect={selectConversation} />}
        {contact ? <ChatPanel key={contact.id} contact={contact} /> : <EmptyChat />}
      </div>
    </section>
  );
}