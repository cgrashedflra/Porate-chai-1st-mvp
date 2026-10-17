"use client";

/**
 * Educator earnings — this container owns the state; every block below it is
 * presentational. Data comes from `./data` today and must be replaced with
 * server-fetched earnings for the logged-in educator (never public).
 */

import * as React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { filterByStatus, type StatusFilter } from "@/lib/finance";
import {
  AVAILABLE_BALANCE,
  earningStats,
  earningTransactions,
  monthlyEarnings,
  payoutMethods,
} from "./data";
import { EarningsChart } from "./EarningsChart";
import { EarningsStats } from "./EarningsStats";
import { PayoutMethodPicker } from "./PayoutMethodPicker";
import { TransactionsTable } from "./TransactionsTable";
import { WithdrawCard } from "./WithdrawCard";
import type { EarningTransaction } from "./types";

export default function EarningsPage() {
  const [status, setStatus] = React.useState<StatusFilter<EarningTransaction>>("all");
  const [payoutMethodId, setPayoutMethodId] = React.useState(payoutMethods[0].id);

  const visibleTransactions = filterByStatus(earningTransactions, status);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 p-6">
      <PageHeader title="Earnings" description="Track your income and manage payouts." />

      <EarningsStats stats={earningStats} />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-5">
          <EarningsChart points={monthlyEarnings} />
          <TransactionsTable
            rows={visibleTransactions}
            status={status}
            onStatusChange={setStatus}
          />
        </div>

        <aside className="space-y-5">
          <WithdrawCard balance={AVAILABLE_BALANCE} />
          <PayoutMethodPicker
            methods={payoutMethods}
            selectedId={payoutMethodId}
            onChange={setPayoutMethodId}
          />
        </aside>
      </div>
    </div>
  );
}
