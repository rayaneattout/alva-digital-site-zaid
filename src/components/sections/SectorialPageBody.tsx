import { ChevronRight, Euro } from "lucide-react";
import Link from "next/link";
import type { MetierPage } from "@/lib/metiers-content";
import { ROUTES } from "@/lib/routes";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageCTA } from "@/components/ui/PageCTA";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function SectorialPageBody({ data }: { data: MetierPage }) {
  return (
    <>
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal className="max-w-2xl">
            <h2
              className="font-semibold tracking-tight text-balance text-text-primary"
              style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.75rem)", lineHeight: 1.1 }}
            >
              Pourquoi les sites de {data.metierPlural} ne marchent pas.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {data.painPoints.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.06}
                className="rounded-2xl bg-bg-elevated/60 p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-xs text-text-tertiary">0{i + 1}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-line bg-bg-elevated py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal className="max-w-2xl">
            <h2
              className="font-semibold tracking-tight text-balance text-text-primary"
              style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.75rem)", lineHeight: 1.1 }}
            >
              Les fonctionnalités utiles à un {data.metier.toLowerCase()}.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {data.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06} className="rounded-2xl bg-bg/60 p-6">
                <h3 className="text-lg font-semibold text-text-primary">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {data.bonus && data.bonus.length > 0 && (
        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                {data.bonusTitle ?? "On met aussi en avant"}
              </h2>
            </Reveal>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {data.bonus.map((b, i) => (
                <Reveal
                  key={b}
                  delay={i * 0.04}
                  className="flex items-start gap-3 rounded-xl bg-bg-elevated/60 p-4"
                >
                  <ChevronRight size={18} className="mt-0.5 shrink-0 text-accent-strong" />
                  <span className="text-[15px] text-text-secondary">{b}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-bg-elevated p-8 md:p-12">
            <GlowOrb className="-right-20 -top-20 h-72 w-72" intensity={0.28} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
                <Euro size={12} /> Tarifs indicatifs
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                Combien pour un site {data.metier.toLowerCase()} ?
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-bg/60 p-6">
                  <p className="text-xs uppercase tracking-wider text-text-tertiary">
                    Formule Essentiel
                  </p>
                  <p className="mt-2 text-3xl font-bold text-text-primary">{data.tarifEntry}</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Site vitrine 5 pages, formulaire de devis, fiche Google.
                  </p>
                </div>
                <div className="rounded-2xl bg-accent p-6 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider">Formule Pro</p>
                  <p className="mt-2 text-3xl font-bold">{data.tarifPro}</p>
                  <p className="mt-2 text-sm">
                    Tout Essentiel + SEO local complet + identité visuelle légère.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button href={ROUTES.tarifs} size="md" variant="secondary">
                  Comparer les formules
                </Button>
                <Button href={ROUTES.contact} size="md">
                  Demander un audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title={`Prêt à avoir un site qui rapporte à votre activité de ${data.metier.toLowerCase()} ?`}
      />
    </>
  );
}

export function MetierNotice({ written }: { written: MetierPage["written"] }) {
  if (written === "source") return null;
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8">
      <p className="mt-4 text-xs text-text-tertiary">
        Page rédigée par l&apos;agence sur la base de caractéristiques générales du métier —{" "}
        <Link href={ROUTES.contact} className="underline hover:text-text-secondary">
          contactez-nous
        </Link>{" "}
        pour l&apos;affiner avec vos spécificités.
      </p>
    </div>
  );
}
