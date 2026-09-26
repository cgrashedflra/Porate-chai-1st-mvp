import { Globe, ShieldCheck, Users, Wallet } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutValues } from "@/data/about/content";
import { ABOUT_TONE_STYLES } from "./tones";

const valueIcons = {
  shield: ShieldCheck,
  users: Users,
  wallet: Wallet,
  globe: Globe,
} as const;

export function AboutValues() {
  return (
    <section
      aria-labelledby="about-values-title"
      className="relative overflow-hidden bg-neutral-0 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-values-title"
          eyebrow="আমাদের ভিত্তি"
          title={
            <>
              যে চারটি নীতির উপর <span className="text-primary-500">প্রতিটি সিদ্ধান্ত</span> দাঁড়ানো
            </>
          }
          description="পড়াতে চাই শুধু ফিচার নয় — আমরা বিশ্বাস করি এই চারটি নীতিই একটি শিক্ষা প্ল্যাটফর্মকে বিশ্বস্ত করে তোলে।"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((value) => {
            const Icon = valueIcons[value.icon];
            const styles = ABOUT_TONE_STYLES[value.tone];

            return (
              <article
                key={value.id}
                className={`glass-card flex h-full flex-col rounded-3xl p-6 transition-shadow duration-300 ${styles.card} ${styles.glow}`}
              >
                <div className={`grid h-12 w-12 place-items-center rounded-2xl ${styles.icon}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <p className="mt-5 overline text-neutral-400">{value.titleEn}</p>
                <h3 className="mt-1.5 text-lg font-extrabold leading-snug text-neutral-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{value.description}</p>

                <p
                  className={`mt-6 w-fit rounded-full px-3 py-1 text-[11px] font-bold ${styles.icon}`}
                >
                  {value.tag}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
