import { cn } from "@/lib/cn";
import { Avatar } from "@/components/ui/Avatar";
import type { Review } from "@/types/types";
import { StarRating } from "./star-rating";

interface ReviewCardProps {
    review: Review;
    className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
    const { studentName, avatar, rating, date, subject, text } = review;

    return (
        <figure
            className={cn(
                "flex flex-col rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-sm",
                className,
            )}
        >
            <figcaption className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                    <Avatar name={studentName} src={avatar} size="sm" className="ring-2 ring-indigo-100" />
                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-800">{studentName}</p>
                        <div className="mt-0.5 flex items-center gap-1.5">
                            <StarRating rating={rating} />
                            <span className="text-xs font-medium text-slate-500">{rating.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
                <time className="shrink-0 text-xs text-slate-400">{date}</time>
            </figcaption>

            {subject && (
                <span className="mt-3 w-fit rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
                    {subject}
                </span>
            )}

            <blockquote className="mt-3 text-sm leading-6 text-slate-600">
                &ldquo;{text}&rdquo;
            </blockquote>
        </figure>
    );
}
