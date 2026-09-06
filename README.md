# alva digital — refonte

Refonte complète du site d'Alva Digital (agence web parisienne pour artisans), en Next.js
(App Router) + TypeScript + Tailwind CSS + Framer Motion. Site multi-pages, chaque section
vit sur sa propre route pour un maillage et un référencement (SEO local + général) solides.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production (26 routes statiques)
npm run start   # sert le build de production
npm run lint    # ESLint
```

## Pages

- `/` — accueil (hero + teasers reliant vers chaque page dédiée)
- `/expertises` — vue d'ensemble des 3 expertises + des 9 métiers
- `/creation-site-web`, `/referencement-local-seo`, `/identite-visuelle` — pages service
- `/methode`, `/tarifs`, `/agence`, `/faq`, `/contact`
- `/site-web-plombier`, `/site-web-couvreur-rge`, `/site-web-electricien`,
  `/site-web-menuisier`, `/site-web-macon`, `/site-web-carreleur`, `/site-web-peintre`,
  `/site-web-chauffagiste`, `/site-web-serrurier` — pages SEO locales par métier
- `/mentions-legales`, `/cgv`

## Structure

- `content.md` — contenu extrait fidèlement depuis le code source de la version actuelle
  (aucune donnée inventée ; coordonnées non confirmées marquées `[À COMPLÉTER]`).
- `src/lib/content.ts`, `services-content.ts`, `metiers-content.ts`, `routes.ts` — contenu
  typé consommé par les pages. **Note transparence** : dans `metiers-content.ts`, seuls
  plombier / couvreur RGE / électricien ont un contenu repris du code source d'origine ;
  les 6 autres métiers ont été rédigés par l'agence sur le même gabarit (marqués
  `written: "template"`) et méritent une relecture avant mise en ligne.
- `src/components/sections/*` — un composant par bloc de contenu, réutilisé entre la home
  (version teaser) et sa page dédiée (version complète), pour éviter le contenu dupliqué.
- `src/components/ui/*` — primitives partagées (bouton, logo, PageHero, PageCTA, breadcrumbs
  avec JSON-LD, reveal au scroll).
- `src/app/sitemap.ts`, `robots.ts` — sitemap et robots.txt générés dynamiquement.
- `src/app/globals.css` — tokens de design (couleurs, easing) et styles globaux.

## SEO

- Metadata unique par page (`title`, `description`, `alternates.canonical`).
- JSON-LD : `LocalBusiness` (layout), `Service` (pages services), `Service` sectoriel +
  `AggregateOffer` (pages métier), `FAQPage` (page FAQ), `BreadcrumbList` (toutes les
  sous-pages).
- Maillage interne : header (méga-menu Expertises + Métiers), footer, teasers de la home,
  liens croisés entre pages métier/tarifs/contact.
- `robots: noindex` sur les pages légales (mentions légales, CGV) pour éviter le contenu
  dupliqué/faible valeur dans l'index.

## Design

Noir bleu-nuit (`#050510`) + bleu électrique (`#2E5CFF`) comme unique accent, monogramme
"A" vectoriel (reconstruction du logo fourni, fond transparent), typographie Inter,
animations pilotées par le scroll (Framer Motion) avec easing proche d'Apple,
`prefers-reduced-motion` respecté partout.

Lighthouse (build de prod, mobile) : ~96-99 perf / 100 a11y / 100 bonnes pratiques / 100 SEO
sur la home et les pages métier testées.

À compléter avant mise en production : coordonnées réelles (téléphone, adresse, SIRET) —
voir la fin de `content.md` pour la liste précise.
