import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutMilestones } from "@/data/about/content";
import type { AboutMilestoneStatus } from "@/data/about/types";

const statusStyles: Record<AboutMilestoneStatus, { dot: string; pill: string; label: string }> = {
  done: { dot: "bg-green-500", pill: "bg-green-50 text-green-700", label: "সম্পন্ন" },
  active: { dot: "bg-primary-500", pill: "bg-primary-50 text-primary-600", label: "চলমান" },
  next: { dot: "bg-neutral-60", pill: "bg-neutral-20 text-neutral-600", label: "আসন্ন" },
};

export function AboutJourney() {
  return (
    <section
      aria-labelledby="about-journey-title"
      className="relative overflow-hidden bg-neutral-20/40 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-journey-title"
          eyebrow="আমাদের যাত্রা"
          title={
            <>
              একটি ছোট ধাপ থেকে <span className="text-primary-500">বড় লক্ষ্য</span> পর্যন্ত
            </>
          }
          description="প্রতিটি ধাপে আমরা একটি প্রশ্নের উত্তর খুঁজেছি — শিক্ষার্থী ও শিক্ষকের জন্য কীসে সবচেয়ে ভালো কাজ করে?"
        />

        <ol className="mt-14 space-y-5">
          {aboutMilestones.map((milestone, index) => {
            const isLast = index === aboutMilestones.length - 1;
            const status = statusStyles[milestone.status];

            return (
              <li key={milestone.id} className="flex gap-4 sm:gap-6">
                {/* Rail: dot + connecting line */}
                <div className="flex w-7 shrink-0 flex-col items-center sm:w-9">
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-full border-4 border-neutral-0 shadow-pc-sm sm:h-8 sm:w-8",
                      status.dot
                    )}
                  >
                    {milestone.status === "done" && (
                      <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
                    )}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn("mt-1 w-px flex-1", isLast ? "bg-transparent" : "bg-neutral-40")}
                  />
                </div>

                {/* Content */}
                <div className="pb-1 flex-1">
                  <div className="glass-card rounded-3xl p-5 shadow-pc-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary-500/20 sm:p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="overline text-primary-500">{milestone.year}</span>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-[11px] font-bold",
                          status.pill
                        )}
                      >
                        {status.label}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-bold leading-snug text-neutral-900">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default AboutJourney;
