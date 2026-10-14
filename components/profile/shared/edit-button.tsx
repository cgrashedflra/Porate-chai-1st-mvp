import { Pencil } from "lucide-react";
import { cn } from "@/lib/cn";

interface EditButtonProps {
    label: string;
    className?: string;
}

export function EditButton({ label, className }: EditButtonProps) {
    return (
        <button
            type="button"
            aria-label={label}
            className={cn(
                "grid size-8 place-items-center rounded-lg text-indigo-500 transition-colors hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
                className
            )}
        >
            <Pencil className="size-4" />
        </button>
    );
}
