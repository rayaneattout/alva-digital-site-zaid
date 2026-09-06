import { ArrowRight, Mail } from "lucide-react";
import { SITE } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <GlowOrb
        className="bottom-0 left-1/2 h-[800px] w-[800px] translate-x-[-50%] translate-y-1/2"
        intensity={0.32}
      />

      <div className="relative mx-auto max-w-3xl px-4 md:px-8 text-center">
        <Reveal>
          <h2
            className="font-semibold tracking-tight text-balance text-text-primary"
            style={{ fontSize: "clamp(2.25rem, 5vw + 1rem, 4.5rem)", lineHeight: 1.03 }}
          >
            Prêt à avoir un vrai site
            <br />
            <span className="text-accent-strong">qui rapporte ?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg md:text-xl text-text-secondary">
            Audit gratuit, 30 minutes en visio. Sans engagement.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-4">
          <Button href={`mailto:${SITE.email}`} size="lg" className="px-10 py-5 text-lg">
            Réserver mon audit
            <ArrowRight size={20} />
          </Button>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
          >
            <Mail size={14} />
            {SITE.email}
          </a>
          <p className="text-sm text-text-tertiary">
            Réponse sous 24h · Pas de pression commerciale
          </p>
        </Reveal>
      </div>
    </section>
  );
}
