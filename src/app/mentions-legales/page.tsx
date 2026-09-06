import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site alva digital.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}

export default function LegalPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <PageHero
        title="Mentions légales"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
      />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl space-y-8 px-4 text-[15px] leading-relaxed text-text-secondary md:px-8">
          <Section title="Éditeur du site">
            Alva Digital — [Raison sociale à compléter]
            <br />
            Siège social : [Adresse], {SITE.city}
            <br />
            SIRET : [à compléter] — RCS Paris [à compléter]
            <br />
            Email : {SITE.email}
          </Section>
          <Section title="Directeur de la publication">[Nom du dirigeant à compléter]</Section>
          <Section title="Hébergeur">
            [Nom de l&apos;hébergeur]
            <br />
            [Adresse complète]
            <br />
            Téléphone : [à compléter]
          </Section>
          <Section title="Propriété intellectuelle">
            L&apos;ensemble du contenu de ce site est la propriété exclusive d&apos;Alva Digital,
            sauf mention contraire. Toute reproduction, représentation ou modification sans
            autorisation écrite préalable est interdite.
          </Section>
          <Section title="Données personnelles">
            Les informations recueillies via le formulaire de contact sont enregistrées par Alva
            Digital pour le seul traitement de votre demande. Conformément au RGPD, vous disposez
            d&apos;un droit d&apos;accès, de rectification et de suppression. Pour l&apos;exercer,
            écrivez à : {SITE.email}.
          </Section>
          <Section title="Cookies">
            Ce site n&apos;utilise pas de cookies de suivi publicitaire. Seuls des cookies
            techniques nécessaires au fonctionnement peuvent être déposés.
          </Section>
        </div>
      </section>
    </main>
  );
}
