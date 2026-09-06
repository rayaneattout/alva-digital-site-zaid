import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PageCTA } from "@/components/ui/PageCTA";
import { Proof } from "@/components/sections/Proof";
import { Reveal } from "@/components/ui/Reveal";
import { AGENCY_CONTENT } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "L'agence — alva digital, pour les artisans qui veulent du concret",
  description:
    "Alva Digital est une agence web parisienne pour artisans. Notre vision : pas de jargon, méthode claire, engagement résultat. Découvrez qui on est.",
  alternates: { canonical: "/agence" },
};

export default function AgencePage() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <PageHero
        title={AGENCY_CONTENT.title}
        subtitle={AGENCY_CONTENT.subtitle}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Agence" }]}
      />

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-4 md:px-8">
          {AGENCY_CONTENT.paragraphs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                {p.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <Proof />

      <PageCTA title="On a 30 minutes pour parler de votre projet ?" />
    </main>
  );
}
