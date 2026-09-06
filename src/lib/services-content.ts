// Contenu détaillé des 3 pages Services — repris fidèlement du code source de la version
// actuelle (pages CreationSiteWeb.jsx, ReferencementLocalSEO.jsx, IdentiteVisuelle.jsx).

export type ServicePage = {
  slug: string;
  navLabel: string;
  title: string;
  subtitle: string;
  description: string;
  sectionTitle: string;
  sectionIntro?: string;
  features: { title: string; desc: string }[];
  processTitle: string;
  process: string[];
  cases?: { title: string; desc: string }[];
  facts?: string[];
  ctaTitle: string;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "creation-site-web",
    navLabel: "Création de site web",
    title: "Un site qui travaille pour vous, pas pour la galerie.",
    subtitle:
      "On construit votre site sur Framer ou Webflow : design moderne, chargement instantané, formulaires de devis qui convertissent. Aucun template recyclé.",
    description:
      "Création de site web pour artisans à Paris. Framer ou Webflow, mobile-first, chargement instantané, optimisé pour les demandes de devis. À partir de 990 €.",
    sectionTitle: "Ce qui rend un site rentable pour un artisan.",
    features: [
      {
        title: "Mobile-first",
        desc: "8 visiteurs sur 10 sont sur téléphone. On conçoit la version mobile en premier, pas après coup.",
      },
      {
        title: "Chargement instantané",
        desc: "Site optimisé Lighthouse ≥ 90. Plus c'est rapide, plus Google vous remonte et plus vos clients restent.",
      },
      {
        title: "Construit sur Framer / Webflow",
        desc: "Plateformes modernes, faciles à modifier, sécurisées. Vous gardez la main après la livraison.",
      },
      {
        title: "Pages SEO ciblées",
        desc: "Une page par service ou par métier, optimisée pour un mot-clé précis. Chaque page = une porte d'entrée Google.",
      },
    ],
    processTitle: "Comment on construit votre site, étape par étape.",
    process: [
      "Brief en visio (30 min) — on comprend votre activité, vos clients, votre concurrence.",
      "Maquette en 5 jours — vous voyez votre futur site avant qu'on touche au code.",
      "Construction sur Framer (ou Webflow si projet complexe) — 2 à 4 semaines selon la formule.",
      "Tests sur smartphone, tablette, ordinateur — on ne livre rien qui pixellise sur iPhone SE.",
      "Mise en ligne + formation 1h — vous repartez autonome.",
    ],
    cases: [
      {
        title: "Plombier qui passe de 0 à 12 demandes / mois",
        desc: "Site avec click-to-call mobile, page par arrondissement, fiche Google complète. Résultat : visibilité sur les requêtes urgentes.",
      },
      {
        title: "Couvreur RGE qui capte MaPrimeRénov'",
        desc: "Calculateur d'aides intégré + bandeau RGE permanent. Les visiteurs comprennent immédiatement qu'ils sont au bon endroit.",
      },
      {
        title: "Électricien qui se positionne sur l'IRVE",
        desc: "Page dédiée aux bornes de recharge en copropriété + qualifications affichées. Mot-clé peu concurrentiel, gros volumes.",
      },
    ],
    ctaTitle: "Prêt à avoir un site qui travaille vraiment pour vous ?",
  },
  {
    slug: "referencement-local-seo",
    navLabel: "Référencement local (SEO)",
    title: "Apparaître quand votre client cherche, là où il cherche.",
    subtitle:
      "80 % de vos futurs clients tapent « [votre métier] + leur ville » sur Google. Si vous n'êtes pas dans les 3 premiers résultats, vous n'existez pas.",
    description:
      "Apparaître quand un client tape votre métier + votre ville. Fiche Google Business, avis clients, mots-clés locaux, suivi mensuel. Pour artisans Paris et Île-de-France.",
    sectionTitle: "Comment on vous fait remonter sur Google.",
    sectionIntro:
      "Le SEO local, c'est un mélange de site optimisé + fiche Google Business + avis clients + signaux locaux. On orchestre les 4 ensemble.",
    features: [
      {
        title: "Audit de mots-clés locaux",
        desc: "On identifie les requêtes qui rapportent : « plombier + arrondissement », « urgence électricien », etc.",
      },
      {
        title: "Optimisation Google Business",
        desc: "Fiche Google complète : photos, services, horaires, zone d'intervention, posts. C'est la 1ʳᵉ source de leads en local.",
      },
      {
        title: "Stratégie d'avis clients",
        desc: "On vous donne un système simple pour récupérer 20-30 avis Google en 3 mois. Indispensable pour grimper.",
      },
      {
        title: "Suivi des positions",
        desc: "On vous envoie un rapport mensuel : positions, clics, demandes générées. Pas de jargon.",
      },
    ],
    processTitle: "4 chiffres qui expliquent pourquoi le SEO local est non-négociable.",
    process: [],
    facts: [
      "76 % des recherches locales sur smartphone se transforment en visite ou appel sous 24h.",
      "Les sites en page 1 de Google captent 92 % des clics. La page 2 ne sert à rien.",
      "Une fiche Google bien tenue génère 5x plus d'appels qu'une fiche vide.",
      "Les avis Google récents (< 3 mois) pèsent 3x plus dans le classement local.",
    ],
    ctaTitle: "Prêt à apparaître quand vos clients vous cherchent ?",
  },
  {
    slug: "identite-visuelle",
    navLabel: "Identité visuelle",
    title: "Une image qui rassure avant même qu'on vous appelle.",
    subtitle:
      "Un logo cohérent, des photos pro, une charte simple : c'est ce qui fait la différence entre un artisan qui inspire confiance et un autre qu'on hésite à contacter.",
    description:
      "Logo professionnel, charte graphique, photos de chantiers : on construit une identité qui inspire confiance dès la première seconde. Pour artisans à Paris.",
    sectionTitle: "Ce que vous recevez.",
    features: [
      {
        title: "Logo professionnel",
        desc: "3 directions créatives, 2 allers-retours, fichiers vectoriels (SVG, PDF) + déclinaisons couleur.",
      },
      {
        title: "Charte graphique",
        desc: "Couleurs, typographies, principes de composition. Document PDF que vos partenaires pourront utiliser.",
      },
      {
        title: "Photos pro de votre activité",
        desc: "Demi-journée de shooting sur vos chantiers ou en atelier. 30 photos retouchées, format web et print.",
      },
      {
        title: "Modèles de cartes & devis",
        desc: "Carte de visite, modèle de devis, signature email : tout aligné sur votre nouvelle identité.",
      },
    ],
    processTitle: "Process créatif en 4 temps.",
    process: [
      "Brief créatif (30 min) : on comprend votre métier, votre clientèle, votre ton.",
      "Moodboard et 3 directions visuelles — vous choisissez celle qui vous parle.",
      "Itération sur la direction retenue (2 allers-retours inclus).",
      "Livraison des fichiers + guide d'utilisation simple.",
    ],
    ctaTitle: "Vous voulez une identité qui vous représente vraiment ?",
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

export const AGENCY_CONTENT = {
  eyebrow: "Qui on est",
  title: "Une agence sans cravate, pour des artisans qui n'en portent pas non plus.",
  subtitle:
    "On ne va pas vous parler de synergies ou d'écosystèmes. On parle clients, devis, factures. Le reste, on s'en fiche.",
  paragraphs: [
    {
      title: "Notre vision.",
      body: "Les artisans sont les héros silencieux de l'économie. Ils réparent, construisent, dépannent. Ils n'ont pas le temps d'apprendre le marketing digital, et c'est normal. Notre boulot, c'est de leur faire un site qui travaille à leur place — sans qu'ils aient à devenir experts en SEO ou en CMS.",
    },
    {
      title: "Pourquoi on existe.",
      body: "Trop d'agences font des sites « jolis » qui ne génèrent rien. Trop d'autres font des sites « bon marché » qui ressemblent à un document Word de 2008. On a fondé Alva Digital pour combler ce vide : du design moderne, des résultats mesurables, des prix lisibles, et zéro jargon.",
    },
    {
      title: "Comment on travaille.",
      body: "Tout passe en visio (ou en présentiel à Paris si vous préférez). On ne vous demande jamais de connaître WordPress, Framer ou Webflow. On vous explique chaque étape avec des mots du quotidien. Et si on ne sait pas, on dit « on ne sait pas » au lieu d'inventer une réponse.",
    },
  ],
};
