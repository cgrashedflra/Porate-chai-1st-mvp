import NotificationsPage from "@/components/notifications/NotificationsPage";
import ROUTES from "@/constants/routes";

const StudentNotificationsPage = () => {
  return (
    <NotificationsPage
      filterLabels={{ earning: "Payments" }}
      typeOverrides={{
        earning: { action: "View payments", href: ROUTES.STUDENT.PAYMENTS },
      }}
    />
  );
};

export default StudentNotificationsPage;