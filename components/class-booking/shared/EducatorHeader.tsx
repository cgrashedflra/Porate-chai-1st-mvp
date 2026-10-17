import type { ReactNode } from "react";
import { BadgeCheck, Star } from "lucide-react";

import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/cn";
import { card } from "./card";

/** The identity fields the header renders — satisfied by both `Educator` views and `EducatorInfo`. */
export interface EducatorHeaderInfo {
    name: string;
    avatar?: string;
    subject: string;
    level: string;
    rating: number;
    reviews: number;
}

interface EducatorHeaderProps {
    educator: EducatorHeaderInfo;
    /** `lg` on the student booking page, `md` on the educator editor. */
    size?: "md" | "lg";
    /** Right-hand actions (stat chips, edit button, …). */
    children?: ReactNode;
}

/** Identity row shared by the booking page and the availability editor. */
export function EducatorHeader({ educator, size = "md", children }: EducatorHeaderProps) {
    const isLarge = size === "lg";

    return (
        <section className={cn(card, "flex flex-wrap items-center gap-5 p-5")}>
            <Avatar
                name={educator.name}
                src={educator.avatar}
                className={isLarge ? "size-20 text-xl" : "size-16 text-lg"}
            />
            <div className={cn("min-w-0 flex-1", isLarge && "basis-56")}>
                <h1 className={cn("flex items-center gap-2 font-bold text-slate-900", isLarge ? "text-xl" : "text-lg")}>
                    {educator.name} <BadgeCheck className="size-5 fill-indigo-500 text-white" aria-label="Verified" />
                </h1>
                <p className="text-sm text-slate-500">
                    {educator.subject} <span className="mx-1 text-indigo-300">•</span> {educator.level}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                    <Star className="size-4 fill-amber-400 text-amber-400" /> {educator.rating} ({educator.reviews} reviews)
                </p>
            </div>
            {children}
        </section>
    );
}
