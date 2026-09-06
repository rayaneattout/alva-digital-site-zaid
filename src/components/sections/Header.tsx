"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { EASE_OUT } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="fixed top-4 left-0 right-0 z-50 px-4"
      >
        <div
          className={`mx-auto flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "max-w-3xl border border-line-strong bg-bg-elevated/80 py-2 pl-5 pr-2 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              : "max-w-4xl border border-transparent bg-transparent py-2.5 pl-5 pr-2.5"
          }`}
        >
          <Link
            href="#hero"
            className="font-semibold text-lg tracking-tight lowercase text-text-primary"
          >
            {SITE.name}
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-text-secondary transition-colors duration-200 hover:bg-white/5 hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#contact" size="md" className="hidden sm:inline-flex">
              Audit gratuit
            </Button>
            <button
              className="md:hidden inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-text-primary"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="fixed inset-0 z-[60] bg-bg/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between p-4">
              <span className="font-semibold text-lg lowercase text-text-primary">
                {SITE.name}
              </span>
              <button
                className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-text-primary"
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-6" aria-label="Navigation mobile">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-line py-4 text-2xl font-semibold tracking-tight text-text-primary"
                >
                  {item.label}
                </a>
              ))}
              <Button href="#contact" size="lg" className="mt-6" onClick={() => setMenuOpen(false)}>
                Audit gratuit
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
