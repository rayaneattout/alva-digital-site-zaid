import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TRUST_BLOCKS } from "@/lib/content";

export function ProofTeaser() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
        <Reveal>
          <h2
            className="font-semibold tracking-tight text-balance text-text-primary"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)", lineHeight: 1.05 }}
          >
            Pas de portfolio clinquant.{" "}
            <span className="text-accent-strong">Juste une méthode qui tient.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            Alva Digital est jeune. On préfère le reconnaître plutôt que d&apos;inventer de
            faux témoignages.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 text-left sm:grid-cols-4"
        >
          {TRUST_BLOCKS.map((b) => (
            <span key={b.title} className="text-sm font-medium text-text-secondary">
              {b.title}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <Button href={ROUTES.agence} size="lg" variant="secondary">
            Découvrir l&apos;agence
            <ArrowRight size={18} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
