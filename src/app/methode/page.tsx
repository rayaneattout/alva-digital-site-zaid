import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PageCTA } from "@/components/ui/PageCTA";
import { Method } from "@/components/sections/Method";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Notre méthode en 4 étapes — création de site artisan",
  description:
    "La méthode Alva Digital : audit gratuit, stratégie, création sur Framer, lancement & suivi. Calendrier type d'un projet site web pour artisan.",
  alternates: { canonical: "/methode" },
};

const TIMELINE = [
  { week: "Semaine 0", desc: "Audit gratuit + brief approfondi (1h en visio)." },
  { week: "Semaine 1", desc: "Stratégie de contenu + arborescence + maquettes." },
  { week: "Semaine 2", desc: "Validation des maquettes (2 allers-retours inclus)." },
  { week: "Semaines 3-4", desc: "Construction du site sur Framer (ou Webflow). Tests permanents." },
  { week: "Semaine 5", desc: "Optimisation SEO, fiche Google, formation (1h)." },
  { week: "Semaine 6", desc: "Mise en ligne, suivi des premières remontées Google." },
  { week: "Mois 2-3", desc: "Suivi des positions, ajustements, premier rapport mensuel." },
];

export default function MethodePage() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <PageHero
        title="4 étapes claires, zéro mauvaise surprise."
        subtitle="Vous savez exactement ce qu'on fait, quand, et combien ça coûte. À chaque étape, vous validez avant qu'on avance."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Méthode" }]}
      />

      <Method />

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Reveal>
            <h2
              className="font-semibold tracking-tight text-balance text-text-primary"
              style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.75rem)", lineHeight: 1.1 }}
            >
              À quoi ressemble un projet, semaine par semaine.
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Un projet standard prend 4 à 6 semaines. Voici la trame indicative — on l&apos;adapte
              selon votre disponibilité (les artisans n&apos;ont pas tous le même temps libre).
            </p>
          </Reveal>

          <ol className="relative mt-12 space-y-8 border-l-2 border-accent/30 pl-8">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.week} delay={i * 0.05} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-1.5 inline-flex size-5 items-center justify-center rounded-full border-4 border-bg bg-accent"
                />
                <p className="text-xs font-bold uppercase tracking-wider text-accent-strong">
                  {t.week}
                </p>
                <p className="mt-1 text-base leading-relaxed text-text-secondary md:text-lg">
                  {t.desc}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <PageCTA title="On commence par l'étape 01 — l'audit gratuit." />
    </main>
  );
}
