"use client";

/**
 * Student payments — this container owns the state; every block below it is
 * presentational. Data comes from `./data` today; the "Pay now" buttons are
 * UI only — create the real charge on the server using DB amounts.
 */

import * as React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { filterByStatus, type StatusFilter } from "@/lib/finance";
import { paymentHistory, paymentMethods, upcomingPayments } from "./data";
import { getPaymentSummary } from "./getPaymentSummary";
import { PaymentHistoryTable } from "./PaymentHistoryTable";
import { PaymentMethodsCard } from "./PaymentMethodsCard";
import { SummaryStats } from "./SummaryStats";
import { UpcomingPayments } from "./UpcomingPayments";
import type { PaymentHistoryRow } from "./types";

export default function PaymentsPage() {
  const [status, setStatus] = React.useState<StatusFilter<PaymentHistoryRow>>("all");

  const visibleHistory = filterByStatus(paymentHistory, status);
  const summary = getPaymentSummary(paymentHistory, upcomingPayments);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 p-6">
      <PageHeader
        title="Payments"
        description="Manage your class fees and view payment history."
      />

      <SummaryStats summary={summary} />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-5">
          <UpcomingPayments items={upcomingPayments} />
          <PaymentHistoryTable
            rows={visibleHistory}
            status={status}
            onStatusChange={setStatus}
          />
        </div>

        <PaymentMethodsCard methods={paymentMethods} />
      </div>
    </div>
  );
}
