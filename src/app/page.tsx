import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { Marquee } from "@/components/sections/Marquee";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { ProofTeaser } from "@/components/sections/ProofTeaser";
import { FAQTeaser } from "@/components/sections/FAQTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "alva digital — Agence web à Paris pour artisans",
  description:
    "Agence web parisienne pour artisans (plomberie, couverture, électricité, menuiserie...). Sites qui génèrent des demandes de devis. SEO local. Audit gratuit en 30 minutes.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <Hero />
      <Problem />
      <Services />
      <Method compact />
      <Marquee />
      <PricingTeaser />
      <ProofTeaser />
      <FAQTeaser />
      <FinalCTA />
    </main>
  );
}
