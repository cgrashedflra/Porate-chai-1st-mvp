import { cn } from "@/lib/cn";

const sizes = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-12 w-12 text-base" };

type Props = { name: string; src?: string | null; size?: keyof typeof sizes; className?: string };

export function Avatar({ name, src, size = "md", className }: Props) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" className={cn("shrink-0 rounded-full object-cover", sizes[size], className)} />;
  }
  // Placeholder: initials on a brand gradient
  return (
    <span aria-hidden="true" className={cn("grid shrink-0 place-items-center rounded-full bg-linear-to-br from-primary-400 to-skyblue-400 font-semibold text-white", sizes[size], className)}>
      {initials || "?"}
    </span>
  );
}
