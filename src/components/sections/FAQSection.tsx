"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { EASE_OUT } from "@/lib/motion";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={item.q}
                delay={Math.min(i * 0.04, 0.3)}
                className="overflow-hidden rounded-2xl border border-line bg-bg-elevated/60"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 font-mono text-xs font-bold text-accent-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-base md:text-lg text-text-primary">
                      {item.q}
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`mt-1 shrink-0 text-text-tertiary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 0.3,
                        ease: EASE_OUT,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pl-14 text-[15px] leading-relaxed text-text-secondary">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
