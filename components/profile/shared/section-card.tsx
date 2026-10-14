import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { EditButton } from "./edit-button";

interface SectionCardProps {
    icon: LucideIcon;
    title: string;
    onEdit?: string;
    children: React.ReactNode;
    className?: string;
}

const cardClass =
    "rounded-2xl border border-indigo-100/80 bg-white shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]";

export function SectionCard({ icon: Icon, title, onEdit, children, className }: SectionCardProps) {
    return (
        <div className={cn(cardClass, "p-5", className)}>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-3 text-base font-semibold text-slate-900">
                    <Icon className="size-5 text-indigo-500" /> {title}
                </h3>
                {onEdit && <EditButton label={onEdit} />}
            </div>
            {children}
        </div>
    );
}
