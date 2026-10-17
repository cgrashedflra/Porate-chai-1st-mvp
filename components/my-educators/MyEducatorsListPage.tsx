"use client";

import { Users, CheckCheck } from "lucide-react";
import { GenericListPage } from "@/components/listing";
import { myEducatorsData } from "@/data/listing";
import { ListTab } from "@/components/listing";

const TABS: ListTab[] = [
  { id: "all", label: "All" },
  { id: "unread", label: "Unread" },
  { id: "educator", label: "Educators" },
];

export default function MyEducatorsListPage() {
  return (
    <GenericListPage
      title="My Educators"
      items={myEducatorsData}
      tabs={TABS}
      searchPlaceholder="Search educators..."
      emptyStateIcon={Users}
      emptyStateTitle="No educators yet"
      emptyStateDescription="Your enrolled educators will appear here."
      noMatchTitle="No matches"
      noMatchDescription={(q) => `No educators match “${q}”.`}
      itemName="educator"
      markAllReadIcon={CheckCheck}
      markAllReadLabel="Mark all as read"
    />
  );
}
