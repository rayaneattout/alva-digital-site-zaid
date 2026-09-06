import { Check } from "lucide-react";
import type { ServicePage } from "@/lib/services-content";
import { Reveal } from "@/components/ui/Reveal";
import { PageCTA } from "@/components/ui/PageCTA";

export function ServicePageBody({ data }: { data: ServicePage }) {
  return (
    <>
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <h2
              className="max-w-3xl font-semibold tracking-tight text-balance text-text-primary"
              style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.75rem)", lineHeight: 1.1 }}
            >
              {data.sectionTitle}
            </h2>
            {data.sectionIntro && (
              <p className="mt-4 max-w-2xl text-text-secondary">{data.sectionIntro}</p>
            )}
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {data.features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.06}
                className="rounded-2xl bg-bg-elevated/60 p-7 transition-colors hover:bg-bg-elevated"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-white">
                  <Check size={18} strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-text-primary">
                  {f.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {data.facts ? (
        <section className="relative border-y border-line bg-bg-elevated py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <Reveal>
              <h2
                className="font-semibold tracking-tight text-balance text-text-primary"
                style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.75rem)", lineHeight: 1.1 }}
              >
                {data.processTitle}
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-4">
              {data.facts.map((f, i) => (
                <Reveal
                  key={f}
                  delay={i * 0.06}
                  className="flex items-start gap-4 rounded-xl bg-bg/60 p-5"
                >
                  <span className="shrink-0 font-mono text-2xl font-bold text-accent-strong">
                    0{i + 1}
                  </span>
                  <span className="text-base leading-relaxed text-text-secondary md:text-lg">
                    {f}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <section className="relative border-y border-line bg-bg-elevated py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <Reveal>
              <h2
                className="font-semibold tracking-tight text-balance text-text-primary"
                style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.75rem)", lineHeight: 1.1 }}
              >
                {data.processTitle}
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-4">
              {data.process.map((step, i) => (
                <Reveal
                  key={step}
                  delay={i * 0.06}
                  className="flex items-start gap-4 rounded-xl bg-bg/60 p-5"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-base text-text-secondary md:text-lg">{step}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {data.cases && (
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <Reveal>
              <h2
                className="max-w-3xl font-semibold tracking-tight text-balance text-text-primary"
                style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.75rem)", lineHeight: 1.1 }}
              >
                Cas d&apos;usage : à quoi ressemble un projet.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {data.cases.map((c) => (
                <div key={c.title} className="rounded-2xl bg-bg-elevated/60 p-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-strong">
                    Cas type
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCTA title={data.ctaTitle} />
    </>
  );
}
