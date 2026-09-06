import { SITE_URL } from "@/lib/routes";

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "LocalBusiness", name: "Alva Digital", url: SITE_URL },
    areaServed: { "@type": "Country", name: "France" },
  };
}

export function sectorialServiceJsonLd({
  metierPlural,
  description,
  path,
}: {
  metierPlural: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Création de site web pour ${metierPlural}`,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "LocalBusiness", name: "Alva Digital", url: SITE_URL },
    areaServed: { "@type": "Country", name: "France" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "990",
      highPrice: "5000",
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

