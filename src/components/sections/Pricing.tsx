import { Check, Sparkles } from "lucide-react";
import { PRICING } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="tarifs" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <h2
            className="font-semibold tracking-tight text-balance text-text-primary"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)", lineHeight: 1.08 }}
          >
            Combien ça coûte ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Rare dans le secteur : on affiche nos fourchettes. Vous savez à quoi vous attendre
            dès cette page. Le tarif final est toujours fixé après l&apos;audit gratuit.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 0.08}
              className={cn(
                "relative flex flex-col rounded-2xl p-8 transition-all duration-400 hover:-translate-y-1",
                tier.featured
                  ? "bg-gradient-to-b from-accent-soft to-bg-elevated shadow-[0_30px_90px_-24px_rgba(46,92,255,0.45)]"
                  : "bg-bg-elevated/60 hover:shadow-[0_20px_60px_-24px_rgba(46,92,255,0.3)]"
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  <Sparkles size={12} /> Populaire
                </span>
              )}
              <h3 className="text-2xl font-semibold tracking-tight text-text-primary">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-text-tertiary">{tier.tagline}</p>

              <div className="mt-8">
                {tier.suffix && (
                  <span className="block text-xs uppercase tracking-wider text-text-tertiary">
                    {tier.suffix}
                  </span>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold tracking-tight text-text-primary text-4xl md:text-5xl">
                    {tier.price}
                  </span>
                  {tier.price !== "Sur devis" && (
                    <span className="text-sm text-text-tertiary">HT</span>
                  )}
                </div>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-text-secondary">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-10 w-full"
              >
                {tier.cta}
              </Button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-sm text-text-tertiary">
          Tarifs HT indicatifs, révisés à l&apos;audit gratuit selon votre besoin réel. Paiement
          en 3 fois possible.
        </p>
      </div>
    </section>
  );
}
