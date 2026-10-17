import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageSquareQuote, Star } from "lucide-react";
import { getTeacherById } from "@/components/profile/data/mock-data";
import { ReviewCard } from "@/components/profile/shared/review-card";
import { RatingSummary } from "@/components/profile/sections/rating-summary";
import { Pagination } from "@/components/ui/Pagination";
import ROUTES from "@/constants/routes";
import { Avatar } from "@/components/ui/Avatar";
import { CARD_BASE, CARD_SURFACE } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

const REVIEWS_PER_PAGE = 6;

interface EducatorReviewsPageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
    params,
}: EducatorReviewsPageProps): Promise<Metadata> {
    const { id } = await params;
    const teacher = getTeacherById(id);

    if (!teacher) {
        return { title: "Reviews — Educator not found" };
    }

    const totalReviews = teacher.reviews.length;
    const suffix = totalReviews === 1 ? "review" : "reviews";

    return {
        title: `${teacher.name} — Student reviews (${totalReviews} ${suffix})`,
        description: totalReviews > 0
            ? `See ${totalReviews} verified student reviews for ${teacher.name} and their average rating.`
            : `No reviews yet for ${teacher.name}.`,
    };
}

export default async function EducatorReviewsPage({
    params,
    searchParams,
}: EducatorReviewsPageProps) {
    const { id } = await params;
    const { page } = await searchParams;

    const teacher = getTeacherById(id);

    if (!teacher) {
        notFound();
    }

    const reviews = teacher.reviews;
    const totalPages = Math.max(1, Math.ceil(reviews.length / REVIEWS_PER_PAGE));
    const parsedPage = Number.parseInt(page ?? "1", 10);
    const currentPage = Number.isFinite(parsedPage)
        ? Math.min(Math.max(parsedPage, 1), totalPages)
        : 1;

    const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
    const pageReviews = reviews.slice(startIndex, startIndex + REVIEWS_PER_PAGE);

    const backHref = ROUTES.EDUCATOR_PROFILE(teacher.id);

    return (
        <div className="mx-auto w-full max-w-5xl space-y-5 p-6">
            <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
                <ArrowLeft className="size-4" aria-hidden /> Back to profile
            </Link>

            <header className={cn(CARD_BASE, "flex flex-col gap-4 bg-gradient-to-br from-indigo-100 via-indigo-50 to-sky-100 p-5 sm:flex-row sm:items-center")}>
                <Avatar
                    name={teacher.name}
                    src={teacher.avatar}
                    size="lg"
                    className="ring-3 ring-white shadow-md"
                />
                <div className="min-w-0">
                    <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900">
                        {teacher.name}
                    </h1>
                    <p className="mt-1 text-sm text-slate-600">{teacher.title}</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600">
                        <MessageSquareQuote className="size-4 text-indigo-500" aria-hidden />
                        Student reviews
                    </p>
                </div>
            </header>

            <RatingSummary reviews={reviews} />

            <section className={cn(CARD_SURFACE, "p-5")}>
                <h2 className="flex items-center gap-3 text-base font-semibold text-slate-900">
                    <Star className="size-5 text-indigo-500" aria-hidden />
                    All reviews
                </h2>
                {pageReviews.length > 0 ? (
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {pageReviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                ) : (
                    <p className="mt-4 text-sm text-slate-500">No reviews available for this page.</p>
                )}
            </section>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                buildHref={(pageNumber) => {
                    const query = new URLSearchParams();
                    if (pageNumber > 1) query.set("page", pageNumber.toString());
                    const qs = query.toString();
                    return `${backHref}/reviews${qs ? `?${qs}` : ""}`;
                }}
            />
        </div>
    );
}
