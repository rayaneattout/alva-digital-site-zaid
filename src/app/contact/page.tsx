import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — audit gratuit en 30 minutes",
  description:
    "Audit gratuit pour artisans : 30 minutes en visio, sans engagement. On regarde votre site actuel, votre fiche Google, vos concurrents. Réponse sous 24h.",
  alternates: { canonical: "/contact" },
};

const QUICK_FAQ = [
  { q: "Combien coûte un audit ?", a: "Rien. C'est gratuit et sans engagement. 30 minutes en visio." },
  {
    q: "Comment ça se passe ?",
    a: "On vous répond dans les 24h pour caler un créneau. On regarde votre situation, on vous envoie un compte-rendu écrit avec nos recommandations. Vous décidez ensuite.",
  },
  {
    q: "Qu'est-ce que vous me proposez ensuite ?",
    a: "Soit rien si votre site actuel marche bien (oui, ça arrive). Soit un devis chiffré et clair, sans pression.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <PageHero
        title="30 minutes pour comprendre ce qui bloque."
        subtitle="On regarde votre site actuel, votre fiche Google, ce que font vos concurrents. Vous repartez avec un compte-rendu écrit et des recommandations concrètes."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <section className="relative overflow-hidden pb-24 md:pb-32">
        <GlowOrb className="bottom-0 right-0 h-[500px] w-[500px]" intensity={0.2} />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-5 md:px-8">
          <Reveal className="md:col-span-3 rounded-3xl bg-bg-elevated/60 p-8 text-center md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
              Réservez votre audit gratuit.
            </h2>
            <p className="mt-3 text-text-secondary">
              Écrivez-nous en décrivant votre activité et votre ville — on vous répond sous 24h
              pour caler un créneau de visio.
            </p>
            <div className="mt-8">
              <Button href={`mailto:${SITE.email}`} size="lg">
                Écrire à {SITE.email}
                <ArrowRight size={18} />
              </Button>
            </div>
            <p className="mt-4 text-xs text-text-tertiary">
              Vos données ne sont utilisées que pour ce rendez-vous. Aucune revente.
            </p>
          </Reveal>

          <div className="space-y-4 md:col-span-2">
            <Reveal delay={0.06} className="rounded-2xl bg-bg-elevated/60 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">
                Réponse
              </p>
              <p className="mt-2 flex items-center gap-2 text-base text-text-primary">
                <Clock size={16} className="text-accent-strong" /> Sous 24h ouvrées
              </p>
            </Reveal>

            <Reveal delay={0.1} className="rounded-2xl bg-bg-elevated/60 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">
                Coordonnées
              </p>
              <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                <li className="flex items-center gap-3">
                  <Mail size={14} className="text-accent-strong" /> {SITE.email}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5 text-accent-strong" /> {SITE.city}
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.14} className="rounded-2xl bg-bg-elevated/60 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">
                FAQ rapide
              </p>
              <div className="space-y-4">
                {QUICK_FAQ.map((item) => (
                  <div key={item.q} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-semibold text-text-primary">{item.q}</p>
                    <p className="mt-1.5 text-sm text-text-secondary">{item.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
