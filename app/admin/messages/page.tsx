import { Suspense } from "react";
import MessagesPage from "@/components/messages/MessagesPage";

export default function AdminMessagesPage() {
  return (
    <Suspense fallback={null}>
      <MessagesPage />
    </Suspense>
  );
}