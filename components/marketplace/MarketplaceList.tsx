"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight, Clock, Search, Star } from "lucide-react";
import { cn } from "@/lib/cn";
import ROUTES from "@/constants/routes";
import { SubjectBadge } from "@/components/SubjectBadge";
import { getSubjectVariant } from "@/constants/subjects";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { MarketplaceListing } from "@/types/types";
import { formatBDT, type ViewMode } from "./types";

type Props = {
  items: MarketplaceListing[];
  total: number;
  view: ViewMode;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  className?: string;
};

/** One list entry — a gig or a batch class, rendered in a shared row card. */
export function MarketplaceList({ items, total, view, page, pageSize, onPageChange, className }: Props) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const rangeStart = (safePage - 1) * pageSize;
  const pageItems = items.slice(rangeStart, rangeStart + pageSize);
  const rangeEnd = rangeStart + pageItems.length;

  const countLabel =
    items.length === 0 ? `0 of ${total} results` : `Showing ${rangeStart + 1}–${rangeEnd} of ${total} results`;

  return (
    <div className={className}>
      {/* Toolbar — result count */}
      <div className="flex items-center justify-end gap-3">
        <p className="caption font-medium text-neutral-500">
          <span className="font-bold text-neutral-900">{countLabel}</span>
        </p>
      </div>

      {pageItems.length === 0 ? (
        <EmptyState />
      ) : view === "grid" ? (
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pageItems.map((item) => (
            <ListingCard key={`${item.kind}-${item.id}`} item={item} />
          ))}
        </ul>
      ) : (
        <ul className="mt-5 space-y-4">
          {pageItems.map((item) => (
            <ListingRow key={`${item.kind}-${item.id}`} item={item} />
          ))}
        </ul>
      )}

      <Pagination page={safePage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}

function ListingCard({ item }: { item: MarketplaceListing }) {
  const isGig = item.kind === "gig";
  const href = isGig ? ROUTES.EDUCATOR_PROFILE(item.educatorId) : item.href;

  return (
    <li className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-pc-md">
      {/* Hero */}
      <div className="relative h-36 shrink-0 overflow-hidden bg-linear-to-br from-primary-50 via-skyblue-50 to-neutral-20">
        {isGig ? (
          <div className="absolute inset-0 grid place-items-center">
            <Image
              src={item.educatorAvatar}
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl border-2 border-neutral-0 object-cover shadow-pc-md"
            />
          </div>
        ) : (
          item.image && (
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 640px) 340px, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )
        )}
        <span
          className={cn(
            "absolute left-2.5 top-2.5 rounded-md px-2 py-0.5 overline",
            isGig ? "bg-primary-50 text-primary-600" : "bg-deep-blue-50 text-deep-blue-600"
          )}
        >
          {isGig ? "1-on-1 Gig" : "Batch class"}
        </span>
        {isGig && item.availableThisWeek && (
          <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-0.5 caption font-semibold text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            This week
          </span>
        )}
        {!isGig && item.seatsLeft !== undefined && item.seatsLeft > 0 && (
          <span className="absolute bottom-2.5 right-2.5 rounded-md bg-neutral-900/75 px-2 py-0.5 caption font-semibold text-neutral-0">
            {item.seatsLeft} seats left
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <Link href={href} className="block">
          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-neutral-900 transition-colors group-hover:text-primary-500">
            {item.title}
          </h3>
        </Link>
        <p className="mt-1 inline-flex items-center gap-1.5 caption text-neutral-500">
          {item.educatorName}
          {item.educatorVerified && <CheckCircle2 className="h-3.5 w-3.5 fill-primary-500 text-neutral-0" />}
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          <SubjectBadge label={item.subject} variant={getSubjectVariant(item.subject)} size="sm" />
          <span className="rounded-full bg-neutral-20 px-2.5 py-1 text-xs font-medium text-neutral-600">{item.level}</span>
          <span className="rounded-full bg-neutral-20 px-2.5 py-1 text-xs font-medium text-neutral-600">{item.format}</span>
        </div>

        <p className="mt-2 line-clamp-2 body-sm text-neutral-500">{item.description}</p>

        <div className="mt-4 border-t border-neutral-20 pt-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="block overline text-neutral-400">{isGig ? "Per hour" : "Batch fee"}</span>
              <span className="text-base font-extrabold text-neutral-900">{formatBDT(item.price)}</span>
            </div>
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
              <span className="text-sm font-bold text-neutral-900">{item.rating.toFixed(1)}</span>
              {item.reviewCount !== undefined && (
                <span className="caption text-neutral-400">({item.reviewCount})</span>
              )}
            </span>
          </div>
          <ButtonLink href={href} size="sm" icon="arrowRight" className="mt-3 w-full">
            {isGig ? "Book Session" : "View Batch"}
          </ButtonLink>
        </div>
      </div>
    </li>
  );
}

function ListingRow({ item }: { item: MarketplaceListing }) {
  const isGig = item.kind === "gig";
  const href = isGig ? ROUTES.EDUCATOR_PROFILE(item.educatorId) : item.href;

  return (
    <li className="glass-card group rounded-2xl p-4 transition-shadow hover:shadow-pc-md sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* Visual — educator avatar for gigs, class image for batches */}
        {isGig ? (
          <div className="relative h-14 w-14 shrink-0">
            <Image
              src={item.educatorAvatar}
              alt={item.educatorName}
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl border border-neutral-30 object-cover"
            />
            <span className="absolute -bottom-1.5 -right-1.5 grid h-6 w-6 place-items-center rounded-full bg-primary-500 text-neutral-0 shadow-sm shadow-primary-500/25">
              <Star className="h-3 w-3 fill-current" />
            </span>
          </div>
        ) : (
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl shadow-pc-sm sm:h-24 sm:w-32">
            {item.image && (
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 640px) 128px, 80px"
                className="object-cover"
              />
            )}
          </div>
        )}

        {/* Body */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={cn(
                "rounded-md px-2 py-0.5 overline",
                isGig ? "bg-primary-50 text-primary-600" : "bg-deep-blue-50 text-deep-blue-600"
              )}
            >
              {isGig ? "1-on-1 Gig" : "Batch class"}
            </span>
            {isGig && item.availableThisWeek && (
              <span className="inline-flex items-center gap-1.5 rounded-md bg-green-50 px-2 py-0.5 caption font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Available this week
              </span>
            )}
            {!isGig && item.status && (
              <span className="rounded-md bg-neutral-20 px-2 py-0.5 caption font-semibold text-neutral-600">
                {item.status}
              </span>
            )}
          </div>

          <Link href={href} className="mt-2 block">
            <h3 className="title-md text-neutral-900 transition-colors group-hover:text-primary-500">{item.title}</h3>
          </Link>

          <p className="mt-0.5 inline-flex items-center gap-1.5 caption text-neutral-500">
            {item.educatorName}
            {item.educatorVerified && (
              <CheckCircle2 className="h-3.5 w-3.5 fill-primary-500 text-neutral-0" />
            )}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <SubjectBadge label={item.subject} variant={getSubjectVariant(item.subject)} size="sm" />
            <span className="rounded-full bg-neutral-20 px-2.5 py-1 text-xs font-medium text-neutral-600">{item.level}</span>
            <span className="rounded-full bg-neutral-20 px-2.5 py-1 text-xs font-medium text-neutral-600">{item.format}</span>
            {!isGig && item.seatsLeft !== undefined && item.seatsLeft > 0 && (
              <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-600">
                {item.seatsLeft} seats left
              </span>
            )}
          </div>

          <p className="mt-2 body-sm text-neutral-500 line-clamp-2">{item.description}</p>

          {!isGig && item.schedule && (
            <p className="mt-2 inline-flex items-center gap-1.5 caption text-neutral-400">
              <Clock className="h-3.5 w-3.5 text-primary-500" />
              {item.schedule}
            </p>
          )}
        </div>

        {/* Right rail — rating, price, CTA */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-t border-neutral-20 pt-3 sm:w-44 sm:flex-col sm:items-end sm:justify-center sm:border-0 sm:pt-0">
          <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-0.5">
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
              <span className="text-sm font-bold text-neutral-900">{item.rating.toFixed(1)}</span>
              {item.reviewCount !== undefined && (
                <span className="caption text-neutral-400">({item.reviewCount})</span>
              )}
            </span>
            <span className="text-right">
              <span className="block overline text-neutral-400">{isGig ? "Per hour" : "Batch fee"}</span>
              <span className="text-lg font-extrabold text-neutral-900">{formatBDT(item.price)}</span>
            </span>
          </div>

          <ButtonLink href={href} size="sm" icon="arrowRight" className="shrink-0">
            {isGig ? "Book Session" : "View Batch"}
          </ButtonLink>
        </div>
      </div>
    </li>
  );
}

function EmptyState() {
  return (
    <div className="mt-5 rounded-2xl border border-dashed border-neutral-30 bg-neutral-20/40 px-6 py-16 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary-50 text-primary-500">
        <Search className="h-6 w-6" />
      </div>
      <h3 className="mt-4 title-md text-neutral-900">No results found</h3>
      <p className="mx-auto mt-1.5 max-w-md body-sm text-neutral-500">
        Try adjusting your search or clearing some filters to see more gigs and batch classes.
      </p>
    </div>
  );
}

const PAGE_NAV_BASE =
  "inline-flex h-9 items-center gap-1 rounded-lg border border-neutral-30 bg-neutral-0 px-3 text-xs font-semibold text-neutral-600 transition-colors hover:border-primary-300 hover:text-primary-500 disabled:pointer-events-none disabled:opacity-50";

/** Page numbers with ellipses for long lists, e.g. 1 2 3 … 9 10 */
function getPageNumbers(page: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
  const candidates = new Set([1, totalPages, page - 1, page, page + 1]);
  const sorted = [...candidates].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
  const result: (number | "ellipsis")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) result.push("ellipsis");
    result.push(p);
    prev = p;
  }
  return result;
}

function Pagination({ page, totalPages, onPageChange }: { page: number; totalPages: number; onPageChange: (page: number) => void }) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="mt-8 flex items-center justify-center gap-1.5">
      <button type="button" disabled={page === 1} onClick={() => onPageChange(page - 1)} className={PAGE_NAV_BASE}>
        <ChevronLeft className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {getPageNumbers(page, totalPages).map((p, index) =>
        p === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="px-1 text-xs text-neutral-100" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              "h-9 min-w-9 rounded-lg px-2 text-xs font-semibold transition-colors",
              p === page
                ? "bg-primary-500 text-neutral-0 shadow-sm shadow-primary-500/25"
                : "border border-neutral-30 bg-neutral-0 text-neutral-600 hover:border-primary-300 hover:text-primary-500"
            )}
          >
            {p}
          </button>
        )
      )}

      <button type="button" disabled={page === totalPages} onClick={() => onPageChange(page + 1)} className={PAGE_NAV_BASE}>
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-3.5 w-3.5" />
      </button>
    </nav>
  );
}