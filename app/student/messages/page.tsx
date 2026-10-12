import { Suspense } from "react";
import MessagesPage from "@/components/messages/MessagesPage";

const StudentMessagesPage = () => {
  return (
    <Suspense fallback={null}>
      <MessagesPage />
    </Suspense>
  );
};

export default StudentMessagesPage