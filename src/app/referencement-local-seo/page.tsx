import type { Metadata } from "next";
import { getServicePage } from "@/lib/services-content";
import { serviceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { ServicePageBody } from "@/components/sections/ServicePageBody";
import { JsonLdScript } from "@/components/ui/JsonLdScript";

const data = getServicePage("referencement-local-seo")!;

export const metadata: Metadata = {
  title: "Référencement local SEO pour artisans — Google Maps & Search",
  description: data.description,
  alternates: { canonical: "/referencement-local-seo" },
};

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <JsonLdScript
        data={serviceJsonLd({
          name: "Référencement local (SEO) pour artisans",
          description: data.description,
          path: "/referencement-local-seo",
        })}
      />
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Référencement local" },
        ]}
      />
      <ServicePageBody data={data} />
    </main>
  );
}
