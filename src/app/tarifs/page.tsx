import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { PageCTA } from "@/components/ui/PageCTA";
import { Pricing } from "@/components/sections/Pricing";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Tarifs création de site artisan — formules Essentiel, Pro, Sur-mesure",
  description:
    "Combien coûte un site web pour artisan ? Essentiel à partir de 990 €, Pro à 1 990 €, Sur-mesure sur devis. Paiement en 3 fois possible. Devis transparent.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <PageHero
        title="Les vrais prix, affichés sans pirouette."
        subtitle="Rare dans le secteur. Voici nos 3 formules avec leurs fourchettes. Le tarif final est fixé à l'audit gratuit, selon votre besoin réel."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Tarifs" }]}
      />
      <Pricing />
      <section className="pb-8 text-center">
        <Reveal>
          <Button href={ROUTES.faq} size="md" variant="secondary">
            Des questions avant de vous décider ? Voir la FAQ
            <ArrowRight size={16} />
          </Button>
        </Reveal>
      </section>
      <PageCTA />
    </main>
  );
}
