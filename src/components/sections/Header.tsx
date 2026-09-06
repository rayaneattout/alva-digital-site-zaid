"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, CalendarDays } from "lucide-react";
import { NAV } from "@/lib/content";
import { SERVICE_PAGES } from "@/lib/services-content";
import { METIER_PAGES } from "@/lib/metiers-content";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { EASE_OUT } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 180);
  };

  const isActive = (href: string) => pathname === href;

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
              ? "max-w-4xl border border-line-strong bg-bg-elevated/80 py-2 pl-5 pr-2 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              : "max-w-5xl border border-transparent bg-transparent py-2.5 pl-5 pr-2.5"
          }`}
        >
          <Logo
            asLink
            className="flex items-center gap-2 text-lg font-semibold text-text-primary"
            markClassName="h-7 w-7"
          />

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-text-secondary transition-colors duration-200 hover:bg-white/5 hover:text-text-primary"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Expertises
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: EASE_OUT }}
                    className="absolute left-1/2 top-full mt-3 w-[520px] -translate-x-1/2 rounded-2xl border border-line-strong bg-bg-elevated p-4 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)]"
                    role="menu"
                  >
                    <div className="grid gap-1">
                      {SERVICE_PAGES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${s.slug}`}
                          onClick={() => setDropdownOpen(false)}
                          className="flex flex-col rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
                          role="menuitem"
                        >
                          <span className="text-sm font-semibold text-text-primary">
                            {s.navLabel}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 border-t border-line pt-3">
                      <p className="mb-2 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-strong">
                        Sites par métier
                      </p>
                      <div className="grid grid-cols-2 gap-1">
                        {METIER_PAGES.map((m) => (
                          <Link
                            key={m.slug}
                            href={`/site-web-${m.slug}`}
                            onClick={() => setDropdownOpen(false)}
                            className="rounded-xl px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                            role="menuitem"
                          >
                            {m.metier}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 hover:bg-white/5 hover:text-text-primary ${
                  isActive(item.href) ? "font-semibold text-accent-strong" : "text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:gap-2">
            <Link
              href={ROUTES.contact}
              className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary md:inline-flex"
            >
              <CalendarDays size={16} />
              Prendre RDV
            </Link>
            <Button href={ROUTES.contact} size="md" className="hidden sm:inline-flex">
              Audit gratuit
            </Button>
            <button
              className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-text-primary lg:hidden"
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
            className="fixed inset-0 z-[60] overflow-y-auto bg-bg/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between p-4">
              <Logo
                asLink
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-lg font-semibold text-text-primary"
              />
              <button
                className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-text-primary"
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-6 pb-16" aria-label="Navigation mobile">
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-strong">
                Expertises
              </p>
              {SERVICE_PAGES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-line py-3 text-xl font-semibold tracking-tight text-text-primary"
                >
                  {s.navLabel}
                </Link>
              ))}

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-strong">
                Sites par métier
              </p>
              {METIER_PAGES.map((m) => (
                <Link
                  key={m.slug}
                  href={`/site-web-${m.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-line py-2.5 text-base font-medium text-text-secondary"
                >
                  {m.metier}
                </Link>
              ))}

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-strong">
                Plus
              </p>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-line py-3 text-xl font-semibold tracking-tight text-text-primary"
                >
                  {item.label}
                </Link>
              ))}

              <Button href={ROUTES.contact} size="lg" className="mt-6 w-full" onClick={() => setMenuOpen(false)}>
                Audit gratuit
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
