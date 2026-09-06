"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { EASE_OUT } from "@/lib/motion";

// Le hero est la zone où se joue le LCP : aucun de ces éléments ne doit être masqué
// derrière une opacité à 0 (ce qui retarderait leur paint tant que React n'a pas
// hydraté). Seule la position glisse, l'opacité reste à 1 dès le rendu serveur.
const slideUp = {
  hidden: { y: 22 },
  show: (i = 0) => ({
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: EASE_OUT },
  }),
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-32 pb-20"
    >
      <GlowOrb
        className="left-1/2 top-[-25%] h-[700px] w-[1100px] -translate-x-1/2"
        intensity={0.28}
      />
      <GlowOrb
        className="bottom-[-30%] right-[-10%] h-[500px] w-[500px]"
        intensity={0.14}
      />

      <div className="relative mx-auto max-w-5xl px-4 md:px-8 text-center">
        <motion.span
          initial={reduceMotion ? undefined : "hidden"}
          animate="show"
          variants={slideUp}
          custom={0}
          className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary"
        >
          Agence web pour artisans · Paris
        </motion.span>

        <motion.h1
          initial={reduceMotion ? undefined : "hidden"}
          animate="show"
          variants={slideUp}
          custom={1}
          className="mt-8 font-semibold tracking-tight text-balance text-text-primary"
          style={{ fontSize: "clamp(2.75rem, 4vw + 1.5rem, 6rem)", lineHeight: 0.98 }}
        >
          Agence web <span className="text-accent-strong">à Paris</span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? undefined : "hidden"}
          animate="show"
          variants={slideUp}
          custom={2}
          className="mx-auto mt-8 max-w-xl text-base md:text-lg leading-relaxed text-text-secondary"
        >
          {SITE.baseline} Fin du bouche-à-oreille : votre site travaille pour vous, 24/7.
        </motion.p>

        <motion.div
          initial={reduceMotion ? undefined : "hidden"}
          animate="show"
          variants={slideUp}
          custom={3}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button href="#contact" size="lg">
            Réserver mon audit gratuit
            <ArrowRight size={18} />
          </Button>
          <Button href="#methode" size="lg" variant="secondary">
            Voir la méthode
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
