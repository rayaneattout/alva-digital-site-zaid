import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hammer } from "lucide-react";
import { Globe, MapPinned, Palette } from "lucide-react";
import { SERVICE_PAGES } from "@/lib/services-content";
import { METIER_PAGES } from "@/lib/metiers-content";
import { PageHero } from "@/components/ui/PageHero";
import { PageCTA } from "@/components/ui/PageCTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Expertises — création de site, SEO local, identité visuelle",
  description:
    "Trois expertises pour les artisans : création de site web, référencement local SEO, identité visuelle. Pages dédiées par métier (plombier, couvreur RGE, électricien, et plus).",
  alternates: { canonical: "/expertises" },
};

const ICONS = [Globe, MapPinned, Palette];

export default function ExpertisesPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <PageHero
        title="Trois expertises qui se complètent."
        subtitle="On ne fait pas tout. On fait bien ce qu'il faut pour qu'un artisan reçoive plus de demandes de devis. Le reste, on s'en fiche."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Expertises" }]}
      />

      <section className="relative py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-8">
          {SERVICE_PAGES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-bg-elevated/60 p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_70px_-20px_rgba(46,92,255,0.35)]"
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-white">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold tracking-tight text-text-primary">
                    {s.navLabel}
                  </h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-secondary">
                    {s.subtitle}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-1.5 border-t border-line pt-6 text-sm font-semibold text-text-secondary transition-colors group-hover:text-accent-strong">
                    Voir le détail <ArrowRight size={16} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative border-y border-line bg-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Hammer size={20} className="text-accent-strong" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-secondary">
              Sites par métier
            </span>
          </div>
          <Reveal>
            <h2
              className="max-w-3xl font-semibold tracking-tight text-balance text-text-primary"
              style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.75rem)", lineHeight: 1.1 }}
            >
              Pages dédiées à votre activité spécifique.
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Chaque métier a ses contraintes : urgences, certifications, mots-clés,
              fonctionnalités utiles. On a une page par métier — et on en ajoute au fil des
              projets.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {METIER_PAGES.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.05}>
                <Link
                  href={`/site-web-${m.slug}`}
                  className="group block rounded-2xl bg-bg/60 p-6 transition-colors hover:bg-bg"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-strong">
                    SEO sectoriel
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-text-primary">
                    Site web {m.metierPlural}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors group-hover:text-accent-strong">
                    Voir la page <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
