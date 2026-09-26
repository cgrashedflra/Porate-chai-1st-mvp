import { aboutStats } from "@/data/about/content";

export function AboutStats() {
  return (
    <section aria-label="Porate Chai in numbers" className="relative overflow-hidden gradient-brand py-14 lg:py-20">
      {/* Decorative grid + orbs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div aria-hidden="true" className="absolute -top-16 right-1/4 h-40 w-40 rounded-full bg-orange-400/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-skyblue-300/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">সংখ্যায় পড়াতে চাই</h2>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {aboutStats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-3xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm transition-colors hover:bg-white/15 sm:p-6"
            >
              <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white/90">{stat.label}</p>
              <p className="mt-1 text-[11px] text-white/60">{stat.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutStats;
