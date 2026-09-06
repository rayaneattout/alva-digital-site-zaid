import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getMetierPage } from "@/lib/metiers-content";
import { sectorialServiceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { JsonLdScript } from "@/components/ui/JsonLdScript";
import { SectorialPageBody, MetierNotice } from "@/components/sections/SectorialPageBody";
import { ROUTES } from "@/lib/routes";

const data = getMetierPage("carreleur")!;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/site-web-carreleur" },
};

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <JsonLdScript
        data={sectorialServiceJsonLd({
          metierPlural: data.metierPlural,
          description: data.description,
          path: "/site-web-carreleur",
        })}
      />
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Expertises", href: "/expertises" },
          { label: `Site ${data.metierPlural}` },
        ]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={ROUTES.contact} size="lg">
            Audit gratuit
            <ArrowRight size={18} />
          </Button>
          <Button href={ROUTES.tarifs} size="lg" variant="secondary">
            Voir les tarifs
          </Button>
        </div>
        <p className="mt-4 text-sm text-text-tertiary">Sans engagement · Réponse sous 24h</p>
      </PageHero>
      <MetierNotice written={data.written} />
      <SectorialPageBody data={data} />
    </main>
  );
}
