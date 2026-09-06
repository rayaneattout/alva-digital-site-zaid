import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";
import { ROUTES } from "@/lib/routes";

export function PageCTA({ title }: { title?: string }) {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <GlowOrb
        className="bottom-0 left-1/2 h-[500px] w-[600px] -translate-x-1/2 translate-y-1/2"
        intensity={0.24}
      />
      <div className="relative mx-auto max-w-2xl px-4 md:px-8 text-center">
        <Reveal>
          <h2
            className="font-semibold tracking-tight text-balance text-text-primary"
            style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.75rem)", lineHeight: 1.1 }}
          >
            {title ?? "Prêt à en discuter ?"}
          </h2>
          <p className="mt-4 text-text-secondary">
            Audit gratuit, 30 minutes en visio. Sans engagement.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href={ROUTES.contact} size="lg">
              Réserver mon audit gratuit
              <ArrowRight size={18} />
            </Button>
            <Button href={ROUTES.tarifs} size="lg" variant="secondary">
              Voir les tarifs
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
