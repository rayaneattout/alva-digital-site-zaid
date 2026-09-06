import type { Metadata } from "next";
import { getServicePage } from "@/lib/services-content";
import { serviceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { ServicePageBody } from "@/components/sections/ServicePageBody";
import { JsonLdScript } from "@/components/ui/JsonLdScript";

const data = getServicePage("creation-site-web")!;

export const metadata: Metadata = {
  title: "Création de site web pour artisans — Framer, Webflow",
  description: data.description,
  alternates: { canonical: "/creation-site-web" },
};

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <JsonLdScript
        data={serviceJsonLd({
          name: "Création de site web pour artisans",
          description: data.description,
          path: "/creation-site-web",
        })}
      />
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Création de site web" },
        ]}
      />
      <ServicePageBody data={data} />
    </main>
  );
}
