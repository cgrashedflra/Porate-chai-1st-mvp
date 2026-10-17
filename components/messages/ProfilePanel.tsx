import {
  ArrowRight,
  CalendarDays,
  FolderOpen,
  Hash,
  Info,
  Mail,
  PenLine,
  Phone,
  Video,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/ui/Avatar";
import { FileRow } from "@/components/ui/FileRow";
import { OnlineStatus } from "@/components/ui/OnlineStatus";
import { PanelCard } from "@/components/ui/PanelCard";
import { recentFiles } from "./data";
import { CARD_SURFACE } from "@/components/ui/Card";
import type { Conversation } from "./types";

/** Contact detail panel — intended for the right sidebar, above the other widgets. */
export function ProfilePanel({ contact }: { contact: Conversation }) {
  return (
    <div className="flex flex-col gap-4">
      <div className={cn(CARD_SURFACE, "p-5")}>
        <div className="flex items-center gap-4">
          <Avatar name={contact.name} src={contact.avatar} size="xl" />
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{contact.name}</h3>
            <p className="text-sm text-slate-500">{contact.grade}</p>
            {contact.online && <OnlineStatus />}
          </div>
        </div>
        <p className="mt-4 text-center text-sm italic text-slate-500">
          &ldquo;Small steps every day lead to big dreams.&rdquo;
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[{ l: "Call", i: Phone }, { l: "Video Call", i: Video }].map(({ l, i: I }) => (
            <button
              key={l}
              type="button"
              className="flex h-10 items-center justify-center gap-2 rounded-xl bg-indigo-50 text-sm font-medium text-indigo-600 ring-1 ring-indigo-100 transition-colors hover:bg-indigo-100"
            >
              <I className="size-4" /> {l}
            </button>
          ))}
        </div>
      </div>

      <PanelCard icon={CalendarDays} title="Class Information">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-500">
            <CalendarDays className="size-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-800">Physics</p>
            <p className="text-xs text-slate-500">10:00 AM – 11:00 AM</p>
          </div>
        </div>
        <button
          type="button"
          className="mt-4 flex h-10 w-full items-center justify-between rounded-xl bg-indigo-50/60 px-4 text-sm text-indigo-600 ring-1 ring-indigo-100 hover:bg-indigo-50"
        >
          View Class <ArrowRight className="size-4" />
        </button>
      </PanelCard>

      <PanelCard icon={Info} title="About">
        <dl className="space-y-4">
          {[
            { i: Hash, k: "Student ID", v: "STU-2025-014" },
            { i: Mail, k: "Email", v: "tasmia.akter@gmail.com" },
            { i: PenLine, k: "Joined", v: "Apr 12, 2025" },
          ].map(({ i: I, k, v }) => (
            <div key={k} className="flex items-center gap-3">
              <I className="size-5 shrink-0 text-indigo-400" />
              <div className="min-w-0">
                <dt className="text-xs text-slate-500">{k}</dt>
                <dd className="truncate text-sm text-slate-800">{v}</dd>
              </div>
            </div>
          ))}
        </dl>
      </PanelCard>

      <PanelCard icon={FolderOpen} title="Recent Files">
        <div className="space-y-3">
          {recentFiles.map((f) => (
            <FileRow key={f.name} {...f} className="ring-1 ring-indigo-100" />
          ))}
        </div>
      </PanelCard>
    </div>
  );
}
