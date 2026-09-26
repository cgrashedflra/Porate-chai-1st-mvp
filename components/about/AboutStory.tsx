import Image from "next/image";
import { Quote, Target, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";
import ROUTES from "@/constants/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPillars, aboutStory } from "@/data/about/content";
import { ABOUT_TONE_STYLES } from "./tones";

const pillarIcons = {
  mission: Target,
  vision: Eye,
} as const;

export function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-title"
      className="relative overflow-hidden bg-neutral-20/40 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-story-title"
          eyebrow="আমাদের গল্প"
          title={
            <>
              শুরুটা হয়েছিল একটি <span className="text-primary-500">সহজ প্রশ্ন</span> থেকে
            </>
          }
          description="ভালো শিক্ষক পাওয়া কেন এত কঠিন — এই প্রশ্নের উত্তর খুঁজতেই পড়াতে চাই।"
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Story text */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              {aboutStory.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-pretty text-base leading-relaxed text-neutral-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <figure className="glass-card mt-8 rounded-3xl border-l-4 border-l-primary-500 p-5 shadow-pc-md">
              <Quote className="h-5 w-5 text-primary-400" aria-hidden="true" />
              <blockquote className="mt-2 text-pretty text-base font-medium leading-relaxed text-neutral-800">
                {aboutStory.quote}
              </blockquote>
              <figcaption className="mt-2.5 text-xs font-semibold text-neutral-500">
                — Porate Chai টিম
              </figcaption>
            </figure>

            <ButtonLink href={ROUTES.MARKETPLACE} icon="arrowRight" className="mt-8">
              আমাদের শিক্ষকদের দেখুন
            </ButtonLink>
          </div>

          {/* Story visual */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-neutral-30 bg-neutral-0 shadow-pc-lg">
                <Image
                  fill
                  src="/assets/mentor.png"
                  alt="Mentors guiding students through a Porate Chai online session"
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>

              {/* Hand-drawn style sticker */}
              <div className="glass-card absolute -top-4 right-2 hidden rotate-12 rounded-2xl bg-primary-50/90 px-4 py-2 text-xs font-bold text-primary-500 shadow-sm shadow-primary-500/20 sm:block">
                ভালো শিক্ষাই উজ্জ্বল ভবিষ্যৎ ✨
              </div>

              {/* Floating: trust checklist */}
              <div className="glass-card absolute -bottom-6 -left-2 w-60 rounded-2xl p-4 shadow-lg shadow-primary-500/20 sm:-left-6">
                <p className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                  <ShieldCheck className="h-4 w-4 text-green-600" aria-hidden="true" />
                  প্রতিটি মেন্টর যাচাই করা
                </p>
                <ul className="mt-3 space-y-2">
                  {["পরিচয় ও শিক্ষাগত যোগ্যতা", "অভিজ্ঞতা ও রেফারেন্স", "নিয়মিত মান নিয়ন্ত্রণ"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-neutral-600">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary-500" aria-hidden="true" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & vision */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {aboutPillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon];
            const styles = ABOUT_TONE_STYLES[pillar.tone];

            return (
              <article
                key={pillar.id}
                className={`glass-card rounded-3xl p-6 transition-shadow duration-300 sm:p-7 ${styles.card} ${styles.glow}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`grid h-11 w-11 place-items-center rounded-2xl ${styles.icon}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="overline text-neutral-500">{pillar.label}</span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold leading-snug text-neutral-900 sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
