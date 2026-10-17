"use client";

import { CalendarDays, CheckCheck } from "lucide-react";
import { GenericListPage } from "@/components/listing";
import { myClassesData } from "@/data/listing";
import { ListTab } from "@/components/listing";

const TABS: ListTab[] = [
  { id: "all", label: "All" },
  { id: "unread", label: "Unread" },
  { id: "class", label: "Classes" },
];

export default function MyClassesListPage() {
  return (
    <GenericListPage
      title="My Classes"
      items={myClassesData}
      tabs={TABS}
      searchPlaceholder="Search classes..."
      emptyStateIcon={CalendarDays}
      emptyStateTitle="No classes yet"
      emptyStateDescription="Your enrolled classes will appear here."
      noMatchTitle="No matches"
      noMatchDescription={(q) => `No classes match “${q}”.`}
      itemName="class"
      markAllReadIcon={CheckCheck}
      markAllReadLabel="Mark all as read"
    />
  );
}
