import { SearchX, Smartphone, MousePointerBan } from "lucide-react";
import { PAIN_POINTS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const ICONS = [SearchX, Smartphone, MousePointerBan];

export function Problem() {
  return (
    <section id="constat" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <Reveal>
          <h2
            className="font-semibold tracking-tight text-balance text-text-primary"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3.25rem)", lineHeight: 1.08 }}
          >
            La plupart des sites d&apos;artisans ne servent à rien.{" "}
            <span className="text-accent-strong">Voilà pourquoi le vôtre va être différent.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            La plupart des sites d&apos;artisans tombent dans les mêmes pièges. Si au moins un
            de ces points vous parle, votre site ne travaille pas pour vous.
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-line border-y border-line">
          {PAIN_POINTS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex shrink-0 items-center gap-4 sm:w-64">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                    {p.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-relaxed text-text-secondary sm:flex-1">
                  {p.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
