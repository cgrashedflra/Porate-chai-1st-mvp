import { Building2, CheckCircle2, GraduationCap, Presentation } from "lucide-react";
import { SubjectBadge } from "@/components/SubjectBadge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSubjectVariant } from "@/constants/subjects";
import { aboutAudiences } from "@/data/about/content";
import { ABOUT_TONE_STYLES } from "./tones";

const audienceIcons = {
  student: GraduationCap,
  educator: Presentation,
  institution: Building2,
} as const;

export function AboutCommunity() {
  return (
    <section
      aria-labelledby="about-community-title"
      className="relative overflow-hidden bg-neutral-0 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-community-title"
          eyebrow="কার জন্য"
          title={
            <>
              শিক্ষার্থী, শিক্ষক — <span className="text-primary-500">সবার জন্যই</span> তৈরি
            </>
          }
          description="পড়াতে চাই এমন একটি ভারসাম্যপূর্ণ প্ল্যাটফর্ম যেখানে শেখা ও শেখানো — দুটোই সম্মানজনক এবং লাভজনক।"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutAudiences.map((audience) => {
            const Icon = audienceIcons[audience.icon];
            const styles = ABOUT_TONE_STYLES[audience.tone];

            return (
              <article
                key={audience.id}
                className={`glass-card flex h-full flex-col rounded-3xl p-6 shadow-pc-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary-500/20 sm:p-7 ${styles.card}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${styles.icon}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold leading-tight text-neutral-900">
                      {audience.role}
                    </h3>
                    <p className="caption text-neutral-500">{audience.roleEn}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  {audience.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {audience.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {audience.tags.map((tag) => (
                    <SubjectBadge
                      key={tag}
                      label={tag}
                      variant={getSubjectVariant(tag)}
                      size="sm"
                    />
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <ButtonLink href={audience.cta.href} variant={audience.cta.variant} size="sm" icon="arrowRight">
                    {audience.cta.label}
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutCommunity;
