import { Suspense } from "react";
import MessagesPage from "@/components/messages/MessagesPage";

const EducatorMessagesPage = () => {
  return (
    <Suspense fallback={null}>
      <MessagesPage />
    </Suspense>
  );
};

export default EducatorMessagesPage