import { Hammer, MessageSquare, Euro, Target } from "lucide-react";
import { TRUST_BLOCKS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const ICONS = [Hammer, MessageSquare, Euro, Target];

export function Proof() {
  return (
    <section id="preuves" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2
                className="font-semibold tracking-tight text-balance text-text-primary"
                style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)", lineHeight: 1.05 }}
              >
                Pas de portfolio clinquant.{" "}
                <span className="text-accent-strong">Juste une méthode qui tient.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-text-secondary">
                Alva Digital est jeune. On préfère le reconnaître plutôt que d&apos;inventer de
                faux témoignages. Notre parole, c&apos;est notre façon de travailler : claire,
                directe, orientée résultat.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-bg-elevated/60 p-4">
                <div className="flex -space-x-2">
                  <span className="size-9 rounded-full bg-gradient-to-br from-accent to-accent-strong" />
                  <span className="size-9 rounded-full bg-gradient-to-br from-bg-elevated-2 to-bg-elevated" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-text-primary">Équipe parisienne</div>
                  <div className="text-text-tertiary">Disponible en visio 5j/7</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            {TRUST_BLOCKS.map((b, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal
                  key={b.title}
                  delay={i * 0.08}
                  className={`rounded-2xl bg-bg-elevated/60 p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(46,92,255,0.35)] ${
                    i % 2 === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-white">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-text-primary">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{b.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
