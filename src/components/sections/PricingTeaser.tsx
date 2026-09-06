import { ArrowRight, Sparkles } from "lucide-react";
import { PRICING } from "@/lib/content";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function PricingTeaser() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <h2
              className="max-w-xl font-semibold tracking-tight text-balance text-text-primary"
              style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)", lineHeight: 1.08 }}
            >
              Combien ça coûte ?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md text-[15px] leading-relaxed text-text-secondary">
            Rare dans le secteur : on affiche nos fourchettes dès cette page.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PRICING.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 0.08}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1 ${
                tier.featured
                  ? "bg-gradient-to-b from-accent-soft to-bg-elevated shadow-[0_24px_70px_-24px_rgba(46,92,255,0.4)]"
                  : "bg-bg-elevated/60"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  <Sparkles size={12} /> Populaire
                </span>
              )}
              <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-text-tertiary">{tier.tagline}</p>
              <p className="mt-6 font-semibold tracking-tight text-text-primary text-3xl">
                {tier.price}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Button href={ROUTES.tarifs} size="lg" variant="secondary">
            Voir le détail des formules
            <ArrowRight size={18} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
