import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente d'Alva Digital.",
  alternates: { canonical: "/cgv" },
  robots: { index: false, follow: true },
};

const ARTICLES = [
  {
    title: "Article 1 — Objet",
    body: "Les présentes CGV définissent les conditions dans lesquelles Alva Digital fournit ses prestations de création de site web, de référencement local et d'identité visuelle à ses clients artisans.",
  },
  {
    title: "Article 2 — Devis et commande",
    body: "Chaque prestation fait l'objet d'un devis nominatif et détaillé. La commande est considérée comme ferme dès réception du devis signé et de l'acompte prévu.",
  },
  {
    title: "Article 3 — Tarifs et paiement",
    body: "Les prix sont exprimés en euros hors taxes. Les modalités de paiement sont précisées sur chaque devis. Paiement en 3 fois sans frais possible sur accord écrit.",
  },
  {
    title: "Article 4 — Délais et livraison",
    body: "Les délais indicatifs sont précisés au devis. Tout retard imputable au client (fourniture tardive de contenus, validations en attente) entraîne un décalage équivalent, sans pénalité pour Alva Digital.",
  },
  {
    title: "Article 5 — Propriété intellectuelle",
    body: "À réception du paiement intégral, le client devient propriétaire des livrables (site, contenus, identité visuelle). Alva Digital conserve le droit de mentionner le projet dans son portfolio, sauf demande écrite contraire.",
  },
  {
    title: "Article 6 — Garantie et maintenance",
    body: "Alva Digital garantit le bon fonctionnement du site pendant 3 mois après la mise en ligne. Au-delà, un contrat de maintenance peut être souscrit.",
  },
  {
    title: "Article 7 — Litiges",
    body: "En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, le Tribunal de Commerce de Paris sera seul compétent.",
  },
];

export default function CGVPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <PageHero
        title="Conditions Générales de Vente"
        subtitle="Version indicative. À faire valider par un conseil juridique avant mise en ligne définitive."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "CGV" }]}
      />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl space-y-8 px-4 text-[15px] leading-relaxed text-text-secondary md:px-8">
          {ARTICLES.map((a) => (
            <section key={a.title}>
              <h2 className="text-xl font-semibold text-text-primary">{a.title}</h2>
              <p className="mt-3">{a.body}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
