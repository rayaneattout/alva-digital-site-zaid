import { Globe, MapPinned, Palette, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const ICONS = [Globe, MapPinned, Palette];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <h2
              className="max-w-xl font-semibold tracking-tight text-balance text-text-primary"
              style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)", lineHeight: 1.08 }}
            >
              Ce qu&apos;on fait, concrètement.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md text-[15px] leading-relaxed text-text-secondary">
            Pas de blabla. Trois services qui se complètent, pensés pour générer des demandes
            de devis réelles.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.title} delay={i * 0.1} className="h-full">
                <div className="group relative flex h-full flex-col rounded-2xl bg-bg-elevated/60 p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_70px_-20px_rgba(46,92,255,0.35)]">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-white">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-secondary">
                    {s.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-1.5 border-t border-line pt-6 text-sm font-semibold text-text-secondary transition-colors group-hover:text-accent-strong">
                    En savoir plus
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
