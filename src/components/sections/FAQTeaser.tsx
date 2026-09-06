import { ArrowRight } from "lucide-react";
import { FAQ } from "@/lib/content";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FAQTeaser() {
  const preview = FAQ.slice(0, 3);

  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
        <Reveal>
          <h2
            className="font-semibold tracking-tight text-balance text-text-primary"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)", lineHeight: 1.08 }}
          >
            Les questions qu&apos;on nous pose vraiment.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3 text-left">
          {preview.map((item, i) => (
            <Reveal
              key={item.q}
              delay={i * 0.06}
              className="rounded-2xl bg-bg-elevated/60 px-6 py-5"
            >
              <p className="font-semibold text-text-primary">{item.q}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{item.a}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <Button href={ROUTES.faq} size="lg" variant="secondary">
            Voir toutes les questions
            <ArrowRight size={18} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
