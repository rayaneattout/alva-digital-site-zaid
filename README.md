# alva digital — refonte

Refonte complète du site vitrine d'Alva Digital (agence web parisienne pour artisans),
en Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run start   # sert le build de production
npm run lint    # ESLint
```

## Structure

- `content.md` — contenu du site extrait fidèlement depuis le code source de la version
  actuelle (aucune donnée inventée ; les coordonnées non confirmées sont marquées
  `[À COMPLÉTER]`).
- `src/lib/content.ts` — ce même contenu, typé, consommé par les sections.
- `src/components/sections/*` — une section par bloc de la page (Hero, Problème,
  Services, Méthode, Tarifs, Preuves, FAQ, CTA final, Footer).
- `src/components/ui/*` — primitives partagées (bouton, halo décoratif, reveal au scroll).
- `src/app/globals.css` — tokens de design (couleurs, easing) et styles globaux.

## Design

Noir bleu-nuit (`#050510`) + bleu électrique (`#2E5CFF`) comme unique accent, typographie
Inter, animations pilotées par le scroll (Framer Motion) avec easing proche d'Apple,
`prefers-reduced-motion` respecté partout.

À compléter avant mise en production : coordonnées réelles (téléphone, adresse, SIRET) —
voir la fin de `content.md` pour la liste précise.
