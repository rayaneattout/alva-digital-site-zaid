import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { Marquee } from "@/components/sections/Marquee";
import { Pricing } from "@/components/sections/Pricing";
import { Proof } from "@/components/sections/Proof";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-text-primary">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Method />
      <Marquee />
      <Pricing />
      <Proof />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
