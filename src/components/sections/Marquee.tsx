import { MARQUEE_ITEMS } from "@/lib/content";

export function Marquee() {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      aria-label="Nos expertises"
      className="marquee-pause relative overflow-hidden border-y border-line bg-bg-elevated py-8 md:py-10"
    >
      <div className="flex animate-marquee whitespace-nowrap will-change-transform" aria-hidden>
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-6 text-2xl font-semibold uppercase tracking-tight text-text-primary/80 md:gap-12 md:px-10 md:text-4xl"
          >
            <span>{item}</span>
            <span className="text-accent-strong">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
