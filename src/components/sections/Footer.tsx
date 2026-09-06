import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/content";
import { SERVICE_PAGES } from "@/lib/services-content";
import { METIER_PAGES } from "@/lib/metiers-content";
import { ROUTES } from "@/lib/routes";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-elevated pb-10 pt-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo
              asLink
              className="flex items-center gap-2 text-xl font-semibold text-text-primary"
              markClassName="h-7 w-7"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Agence web parisienne pour artisans. On fait des sites qui génèrent des devis,
              pas des cartes de visite.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-text-secondary">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-accent-strong" />
                <a href={`mailto:${SITE.email}`} className="hover:text-text-primary">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-accent-strong" />
                {SITE.city}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Expertises
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICE_PAGES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-text-secondary hover:text-text-primary">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Sites par métier
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {METIER_PAGES.slice(0, 6).map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/site-web-${m.slug}`}
                    className="text-text-secondary hover:text-text-primary"
                  >
                    {m.metier}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Alva digital
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href={ROUTES.methode} className="text-text-secondary hover:text-text-primary">
                  Méthode
                </Link>
              </li>
              <li>
                <Link href={ROUTES.tarifs} className="text-text-secondary hover:text-text-primary">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href={ROUTES.agence} className="text-text-secondary hover:text-text-primary">
                  Agence
                </Link>
              </li>
              <li>
                <Link href={ROUTES.faq} className="text-text-secondary hover:text-text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={ROUTES.contact} className="text-text-secondary hover:text-text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.mentionsLegales}
                  className="text-text-secondary hover:text-text-primary"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href={ROUTES.cgv} className="text-text-secondary hover:text-text-primary">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-text-secondary md:flex-row">
          <p>© 2026 Alva Digital. Tous droits réservés.</p>
          <p>
            Fait à Paris avec attention ·{" "}
            <span className="text-accent-strong">design qui convertit</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
