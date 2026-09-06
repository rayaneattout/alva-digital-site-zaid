"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CalendarCheck, Compass, Code2, Rocket } from "lucide-react";
import { METHOD_STEPS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { GlowOrb } from "@/components/ui/GlowOrb";

const ICONS = [CalendarCheck, Compass, Code2, Rocket];

export function Method() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.65", "end 0.85"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="methode"
      ref={containerRef}
      className="relative overflow-hidden bg-bg-elevated py-24 md:py-36"
    >
      <GlowOrb className="right-[-15%] top-1/3 h-[500px] w-[500px]" intensity={0.18} />

      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <h2
            className="font-semibold tracking-tight text-balance text-text-primary"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)", lineHeight: 1.08 }}
          >
            4 étapes claires, zéro jargon.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Vous savez exactement ce qu&apos;on fait, quand, et pourquoi. À chaque étape, vous
            validez avant qu&apos;on avance.
          </p>
        </Reveal>

        <div className="relative mt-16 pl-10 md:pl-16 md:mt-20">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-line md:left-[28px]">
            <motion.div
              style={{ height: reduceMotion ? "100%" : lineHeight }}
              className="w-full origin-top bg-gradient-to-b from-accent to-accent-strong"
            />
          </div>

          <ol className="space-y-14 md:space-y-20">
            {METHOD_STEPS.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <li key={step.n} className="relative">
                  <Reveal delay={i * 0.06} y={16}>
                    <div
                      aria-hidden
                      className="absolute -left-[38px] top-1 flex size-9 items-center justify-center rounded-full border-2 border-accent bg-bg-elevated shadow-[0_0_0_6px_rgba(46,92,255,0.08)] md:-left-[58px] md:size-11"
                    >
                      <Icon size={16} className="text-accent-strong" />
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-sm font-bold tracking-widest text-accent-strong">
                        {step.n}
                      </span>
                      <h3 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                      {step.desc}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
