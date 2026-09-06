import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PageCTA } from "@/components/ui/PageCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLdScript } from "@/components/ui/JsonLdScript";
import { faqJsonLd } from "@/lib/seo";
import { FAQ } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ — questions fréquentes sur nos sites web pour artisans",
  description:
    "Délais, tarifs, hébergement, référencement, propriété du site : toutes les réponses aux questions que les artisans nous posent avant de se lancer.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <JsonLdScript data={faqJsonLd([...FAQ])} />
      <PageHero
        title="Les questions qu'on nous pose vraiment."
        subtitle="Votre question ne figure pas ? Posez-la directement à l'audit gratuit."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]}
      />
      <FAQSection />
      <PageCTA />
    </main>
  );
}
