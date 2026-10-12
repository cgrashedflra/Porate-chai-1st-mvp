import { Download, FileText } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = { name: string; size: string; className?: string };

export function FileRow({ name, size, className }: Props) {
  return (
    <div className={cn("flex items-center gap-3 rounded-xl p-3", className)}>
      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
        <FileText className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-800">{name}</p>
        <p className="text-xs text-slate-400">{size}</p>
      </div>
      <button type="button" aria-label={`Download ${name}`} className="text-indigo-500 hover:text-indigo-700">
        <Download className="size-4" />
      </button>
    </div>
  );
}
