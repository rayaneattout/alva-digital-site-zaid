import type { Metadata } from "next";
import { getServicePage } from "@/lib/services-content";
import { serviceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { ServicePageBody } from "@/components/sections/ServicePageBody";
import { JsonLdScript } from "@/components/ui/JsonLdScript";

const data = getServicePage("identite-visuelle")!;

export const metadata: Metadata = {
  title: "Identité visuelle pour artisans — logo, charte, photos pro",
  description: data.description,
  alternates: { canonical: "/identite-visuelle" },
};

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <JsonLdScript
        data={serviceJsonLd({
          name: "Identité visuelle pour artisans",
          description: data.description,
          path: "/identite-visuelle",
        })}
      />
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Identité visuelle" },
        ]}
      />
      <ServicePageBody data={data} />
    </main>
  );
}
