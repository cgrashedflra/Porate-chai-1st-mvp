import Image from "next/image";
import { CheckCircle2, ShieldCheck, Star, Video } from "lucide-react";
import ROUTES from "@/constants/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { aboutHeroHighlights } from "@/data/about/content";

/** Quick, non-numeric trust facts — the numeric impact lives in `AboutStats`. */
const quickFacts = [
  { icon: ShieldCheck, label: "যাচাইকৃত নেটওয়ার্ক" },
  { icon: Video, label: "লাইভ ইন-অ্যাপ ক্লাসরুম" },
  { icon: CheckCircle2, label: "বাতিল ও রিফান্ড সুবিধা" },
] as const;

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-10">
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-primary-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-skyblue-200/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pt-20 lg:pb-24">
        {/* Copy */}
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-deep-blue-50 px-3.5 py-1.5 text-xs font-semibold text-deep-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
            আমাদের সম্পর্কে · About Porate Chai
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-deep-blue-800 sm:text-5xl lg:text-6xl">
            ভালো শিক্ষকই <span className="text-primary-500">ভালো ভবিষ্যৎ</span> গড়ে
          </h1>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-400 sm:text-base">
            Better teachers. Brighter futures.
          </p>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            পড়াতে চাই এমন একটি শিক্ষা প্ল্যাটফর্ম যেখানে শিক্ষার্থীরা সরাসরি যাচাইকৃত শিক্ষক
            ও মেন্টরের সাথে যুক্ত হয় — লাইভ ক্লাস, পরামর্শ আর সার্টিফিকেশন, সবই এক জায়গায়।
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {aboutHeroHighlights.map((item) => (
              <li key={item.id} className="flex items-center gap-2 text-sm text-neutral-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={ROUTES.MARKETPLACE} icon="arrowRight">
              মেন্টর খুঁজুন
            </ButtonLink>
            <ButtonLink href={ROUTES.AUTH.SIGN_UP} variant="secondary" icon="graduation">
              শিক্ষক হিসেবে যোগ দিন
            </ButtonLink>
          </div>

          {/* Quick trust facts */}
          <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-neutral-30 pt-6">
            {quickFacts.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                <Icon className="h-4 w-4 text-primary-500" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-3/2 overflow-hidden rounded-3xl border border-neutral-30 bg-neutral-0 shadow-pc-xl">
              <Image
                fill
                src="/assets/welcomeSplash.png"
                alt="A Porate Chai educator teaching a live online class to students"
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="object-cover"
                priority
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-neutral-900/85 via-neutral-900/45 to-transparent p-5">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                  Live now · ৪২ জন শিক্ষার্থী
                </span>
                <p className="mt-1 text-sm font-medium text-neutral-100">
                  HSC Physics — Mechanics Revision
                </p>
              </div>
            </div>

            {/* Floating: verified educator */}
            <div className="glass-card absolute -top-5 -left-2 flex items-center gap-2.5 rounded-2xl p-3 shadow-lg shadow-primary-500/20 sm:-left-6">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=160&q=80"
                alt="Rafid Hasan, verified physics educator"
                width={44}
                height={44}
                className="h-11 w-11 rounded-xl object-cover"
              />
              <div>
                <p className="flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                  Rafid Hasan
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
                </p>
                <p className="text-[11px] text-neutral-500">Physics · B.Sc · BUET</p>
              </div>
            </div>

            {/* Floating: rating + completion */}
            <div className="glass-card absolute -bottom-6 -right-1 w-56 rounded-2xl p-4 shadow-lg shadow-primary-500/20 sm:-right-5">
              <p className="flex items-center gap-1.5 text-sm font-extrabold text-neutral-900">
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                4.9
                <span className="text-[11px] font-normal text-neutral-500">গড় রেটিং</span>
              </p>
              <div
                className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-30"
                role="img"
                aria-label="৯৮% সেশন সম্পন্ন হয়েছে"
              >
                <div className="h-full w-[98%] rounded-full gradient-success" />
              </div>
              <p className="mt-2 text-[11px] text-neutral-500">৯৮% সেশন সম্পন্ন হয়েছে</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
