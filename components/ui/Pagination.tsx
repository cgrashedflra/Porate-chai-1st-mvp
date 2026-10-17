import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    /** Builds the href for a 1-based page number. */
    buildHref: (page: number) => string;
    /** Numbered links shown on each side of the current page. */
    siblingCount?: number;
    className?: string;
}

type PageItem = number | "start-ellipsis" | "end-ellipsis";

function getPageItems(currentPage: number, totalPages: number, siblingCount: number): PageItem[] {
    // Always show first/last, current +/- siblingCount, with ellipsis for gaps.
    const totalNumbers = siblingCount * 2 + 5;
    if (totalPages <= totalNumbers) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const left = Math.max(currentPage - siblingCount, 2);
    const right = Math.min(currentPage + siblingCount, totalPages - 1);

    const items: PageItem[] = [1];

    if (left > 2) {
        items.push("start-ellipsis");
    }

    for (let page = left; page <= right; page++) {
        items.push(page);
    }

    if (right < totalPages - 1) {
        items.push("end-ellipsis");
    }

    items.push(totalPages);

    return items;
}

const baseControl =
    "grid h-9 min-w-9 place-items-center rounded-full border text-sm font-medium transition-colors";

const enabledControl =
    "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600";

const disabledControl = "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300";

const activeControl = "border-indigo-600 bg-indigo-600 text-white shadow-sm";

export function Pagination({
    currentPage,
    totalPages,
    buildHref,
    siblingCount = 1,
    className,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const items = getPageItems(currentPage, totalPages, siblingCount);

    return (
        <nav aria-label="Pagination" className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
            {currentPage > 1 ? (
                <Link
                    href={buildHref(currentPage - 1)}
                    aria-label="Previous page"
                    className={cn(baseControl, enabledControl)}
                >
                    <ChevronLeft className="size-4" aria-hidden />
                </Link>
            ) : (
                <span aria-hidden className={cn(baseControl, disabledControl)}>
                    <ChevronLeft className="size-4" />
                </span>
            )}

            {items.map((item) => {
                if (typeof item === "number") {
                    return (
                        <Link
                            key={item}
                            href={buildHref(item)}
                            aria-current={item === currentPage ? "page" : undefined}
                            className={cn(
                                baseControl,
                                item === currentPage ? activeControl : enabledControl,
                            )}
                        >
                            {item}
                        </Link>
                    );
                }

                return (
                    <span
                        key={item}
                        aria-hidden
                        className="grid h-9 min-w-9 place-items-center text-sm text-slate-400"
                    >
                        &hellip;
                    </span>
                );
            })}

            {currentPage < totalPages ? (
                <Link
                    href={buildHref(currentPage + 1)}
                    aria-label="Next page"
                    className={cn(baseControl, enabledControl)}
                >
                    <ChevronRight className="size-4" aria-hidden />
                </Link>
            ) : (
                <span aria-hidden className={cn(baseControl, disabledControl)}>
                    <ChevronRight className="size-4" />
                </span>
            )}
        </nav>
    );
}
