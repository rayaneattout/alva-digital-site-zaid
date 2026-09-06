import { Mail, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-elevated pb-10 pt-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-semibold lowercase tracking-tight text-text-primary">
              {SITE.name}
            </div>
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
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-text-secondary hover:text-text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Métiers
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">
              Plombiers, couvreurs, électriciens, menuisiers, maçons, chauffagistes,
              carreleurs, peintres, serruriers.
            </p>
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
