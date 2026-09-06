import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { SITE_URL } from "@/lib/routes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "alva digital — Agence web à Paris pour artisans",
    template: "%s — alva digital",
  },
  description:
    "Agence web parisienne pour artisans (plomberie, couverture, électricité). Sites qui génèrent des demandes de devis. SEO local. Audit gratuit en 30 minutes.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "alva digital — Agence web à Paris pour artisans",
    description:
      "Agence web parisienne pour artisans. Sites qui génèrent des demandes de devis. SEO local. Audit gratuit en 30 minutes.",
    url: SITE_URL,
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
  "@id": `${SITE_URL}/#organization`,
  name: "Alva Digital",
  description:
    "Agence web parisienne spécialisée dans la création de sites internet pour artisans : plombiers, couvreurs, électriciens, menuisiers, maçons, carreleurs, peintres, chauffagistes, serruriers.",
  url: SITE_URL,
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
      <body className="min-h-full bg-bg text-text-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
