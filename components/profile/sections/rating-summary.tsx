import { cn } from "@/lib/cn";
import { Star } from "lucide-react";
import type { Review } from "@/types/types";
import { StarRating } from "../shared/star-rating";

interface RatingSummaryProps {
    reviews: Review[];
    className?: string;
}

export function RatingSummary({ reviews, className }: RatingSummaryProps) {
    const total = reviews.length;

    const average = total > 0
        ? reviews.reduce((sum, review) => sum + review.rating, 0) / total
        : 0;

    const distribution = [5, 4, 3, 2, 1].map((star) => ({
        star,
        count: reviews.filter((review) => Math.round(review.rating) === star).length,
    }));

    return (
        <section
            className={cn(
                "rounded-2xl border border-indigo-100/80 bg-white p-5 shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]",
                className,
            )}
        >
            <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="flex flex-col items-center justify-center gap-1 sm:px-6">
                    <p className="text-5xl font-bold tracking-tight text-slate-900">{average.toFixed(1)}</p>
                    <StarRating rating={average} size="md" />
                    <p className="text-xs text-slate-500">
                        {total > 0 ? `Based on ${total} review${total === 1 ? "" : "s"}` : "No reviews yet"}
                    </p>
                </div>

                <div className="space-y-2 sm:border-l sm:border-slate-100 sm:pl-6">
                    {distribution.map(({ star, count }) => {
                        const percent = total > 0 ? Math.round((count / total) * 100) : 0;
                        return (
                            <div key={star} className="flex items-center gap-3">
                                <span className="flex w-10 shrink-0 items-center gap-1 text-xs font-medium text-slate-500">
                                    {star}
                                    <Star className="size-3 fill-amber-400 text-amber-400" aria-hidden />
                                </span>
                                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                                    <div
                                        className="h-full rounded-full bg-amber-400 transition-[width]"
                                        style={{ width: `${percent}%` }}
                                    />
                                </div>
                                <span className="w-8 shrink-0 text-right text-xs tabular-nums text-slate-500">{count}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
