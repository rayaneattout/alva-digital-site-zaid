import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alvadigital.fr"),
  title: "alva digital — Agence web à Paris pour artisans",
  description:
    "Agence web parisienne pour artisans (plomberie, couverture, électricité). Sites qui génèrent des demandes de devis. SEO local. Audit gratuit en 30 minutes.",
  openGraph: {
    title: "alva digital — Agence web à Paris pour artisans",
    description:
      "Agence web parisienne pour artisans. Sites qui génèrent des demandes de devis. SEO local. Audit gratuit en 30 minutes.",
    url: "https://alvadigital.fr",
    siteName: "alva digital",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://alvadigital.fr/#organization",
  name: "Alva Digital",
  description:
    "Agence web parisienne spécialisée dans la création de sites internet pour artisans : plombiers, couvreurs, électriciens, menuisiers.",
  url: "https://alvadigital.fr",
  email: "contact@alvadigital.fr",
  priceRange: "€€",
  address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  areaServed: { "@type": "Country", name: "France" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="min-h-full bg-bg text-text-primary">{children}</body>
    </html>
  );
}
