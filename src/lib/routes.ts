import { SERVICE_PAGES } from "@/lib/services-content";
import { METIER_PAGES } from "@/lib/metiers-content";

export const SITE_URL = "https://alvadigital.fr";

export const ROUTES = {
  home: "/",
  methode: "/methode",
  tarifs: "/tarifs",
  agence: "/agence",
  faq: "/faq",
  contact: "/contact",
  mentionsLegales: "/mentions-legales",
  cgv: "/cgv",
};

export const SERVICE_ROUTES = SERVICE_PAGES.map((s) => `/${s.slug}`);
export const METIER_ROUTES = METIER_PAGES.map((m) => `/site-web-${m.slug}`);

export const ALL_ROUTES = [
  ROUTES.home,
  ...SERVICE_ROUTES,
  ROUTES.methode,
  ROUTES.tarifs,
  ROUTES.agence,
  ...METIER_ROUTES,
  ROUTES.faq,
  ROUTES.contact,
  ROUTES.mentionsLegales,
  ROUTES.cgv,
];
