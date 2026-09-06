// Contenu du site — reproduit fidèlement depuis content.md (source : code de la version actuelle
// d'alva-digital.fr). Aucune donnée inventée : les coordonnées non confirmées (téléphone, adresse,
// SIRET) sont volontairement omises plutôt que fabriquées. Voir content.md pour le détail.

export const SITE = {
  name: "alva digital",
  tagline: "Agence web à Paris",
  baseline:
    "L'agence digitale parisienne spécialisée dans la création de sites web pour les artisans.",
  email: "contact@alvadigital.fr",
  city: "Paris, France",
};

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

export const PAIN_POINTS = [
  {
    title: "Invisible sur Google",
    desc: "Vos clients tapent « plombier Paris 15 » et c'est votre concurrent qui ressort. Vous n'existez nulle part dans les résultats locaux.",
  },
  {
    title: "Pas adapté mobile",
    desc: "8 clients sur 10 vous cherchent depuis leur téléphone. S'ils pincent pour zoomer, ils sont déjà partis chez un autre artisan.",
  },
  {
    title: "Aucun appel à l'action",
    desc: "Un numéro planqué en bas de page et aucun formulaire clair. Résultat : les visiteurs repartent sans vous appeler.",
  },
] as const;

export const SERVICES = [
  {
    title: "Création de site web",
    desc: "Site vitrine rapide et optimisé conversion. Formulaires de devis qui marchent vraiment, et pas un numéro caché en bas de page.",
  },
  {
    title: "Référencement local (SEO)",
    desc: "On vous fait apparaître quand un client tape votre métier + votre ville. Fiche Google, avis clients, mots-clés qui rapportent.",
  },
  {
    title: "Identité visuelle",
    desc: "Logo, charte, photos pro : on arrête le site qui ressemble à un document Word de 2008. Vous devenez crédible dès la première seconde.",
  },
] as const;

export const METHOD_STEPS = [
  {
    n: "01",
    title: "Audit gratuit",
    desc: "On regarde votre situation actuelle, ce qui marche déjà, et ce qui vous fait perdre des clients. 30 minutes en visio, sans engagement.",
  },
  {
    n: "02",
    title: "Stratégie & maquette",
    desc: "On conçoit le site qui convient à VOTRE métier. Pas un template. Chaque page est pensée pour déclencher une demande de devis.",
  },
  {
    n: "03",
    title: "Création sur Framer",
    desc: "On construit votre site sur Framer : design ultra-moderne, chargement instantané, modifications faciles. Webflow disponible pour les projets sur-mesure plus complexes.",
  },
  {
    n: "04",
    title: "Lancement & suivi",
    desc: "On vous forme, on suit les résultats (visiteurs, appels, devis), et on ajuste. On ne vous lâche pas après la livraison.",
  },
] as const;

export const PRICING = [
  {
    name: "Essentiel",
    tagline: "Pour démarrer proprement",
    price: "990 €",
    suffix: "à partir de",
    featured: false,
    features: [
      "Site vitrine 5 pages",
      "Optimisé mobile",
      "Formulaire de devis",
      "Fiche Google mise à jour",
      "Hébergement 1re année offert",
    ],
    cta: "Choisir Essentiel",
  },
  {
    name: "Pro",
    tagline: "Le plus demandé",
    price: "1 990 €",
    suffix: "à partir de",
    featured: true,
    features: [
      "Tout Essentiel",
      "SEO local complet",
      "Jusqu'à 10 pages + blog",
      "Identité visuelle légère",
      "Suivi performance 3 mois",
    ],
    cta: "Choisir Pro",
  },
  {
    name: "Sur-mesure",
    tagline: "Projets spécifiques",
    price: "Sur devis",
    suffix: "",
    featured: false,
    features: [
      "Audit approfondi",
      "Identité visuelle complète",
      "Fonctionnalités sur-mesure",
      "SEO local + contenu",
      "Accompagnement 6 à 12 mois",
    ],
    cta: "Parler de mon projet",
  },
] as const;

export const TRUST_BLOCKS = [
  {
    title: "Spécialisés artisans",
    desc: "On ne fait pas de site pour tout le monde. On connaît votre métier, vos clients, vos urgences. Votre plombier de quartier n'a pas les mêmes besoins qu'un cabinet d'avocats.",
  },
  {
    title: "Pas de jargon",
    desc: "On vous parle clairement. Vous comprenez chaque étape, chaque ligne de devis, chaque choix technique. Si on emploie un mot compliqué, on l'explique.",
  },
  {
    title: "Tarif transparent",
    desc: "Devis détaillé dès le premier rendez-vous. Pas de « ça dépend » ni de surcoûts découverts au dernier moment. Le prix annoncé est le prix final.",
  },
  {
    title: "Engagement résultat",
    desc: "On suit vos demandes de devis après la livraison. On n'arrête pas quand on encaisse. Votre site doit vous rapporter, sinon on corrige le tir.",
  },
] as const;

export const FAQ = [
  {
    q: "Combien de temps pour avoir mon site ?",
    a: "Entre 3 et 6 semaines selon la formule. On vous donne un planning précis dès la validation de la maquette, et on tient les délais.",
  },
  {
    q: "Je n'y connais rien en informatique, c'est un problème ?",
    a: "Non, c'est même la majorité de nos clients. On vous accompagne pas à pas, sans jargon. Et on vous forme à la fin pour que vous soyez autonome.",
  },
  {
    q: "Et si je veux modifier mon site moi-même après ?",
    a: "Vous pourrez. Sur Framer, modifier un texte, une photo ou un tarif se fait en quelques clics depuis un éditeur visuel. On vous forme 1h après la mise en ligne.",
  },
  {
    q: "Vous gérez l'hébergement et le nom de domaine ?",
    a: "Oui, on s'occupe de tout : nom de domaine, hébergement sécurisé, certificat SSL, sauvegardes. Vous n'avez rien à gérer techniquement.",
  },
  {
    q: "Comment je vais apparaître sur Google ?",
    a: "On optimise votre site (SEO local), on travaille votre fiche Google Business, et on cible les requêtes type « plombier + votre ville ». Les premiers résultats arrivent en 2 à 4 mois.",
  },
  {
    q: "Combien de demandes de devis je peux espérer ?",
    a: "Ça dépend de votre métier, zone et concurrence. On fixe un objectif chiffré ensemble à l'audit, basé sur des données réelles de votre secteur.",
  },
  {
    q: "À qui appartient le site une fois livré ?",
    a: "À vous, 100 %. Nom de domaine, code, contenus, images : tout vous appartient. Vous pouvez partir travailler avec quelqu'un d'autre à tout moment.",
  },
  {
    q: "Vous travaillez avec quels artisans ?",
    a: "Plombiers, couvreurs, électriciens, menuisiers, maçons, chauffagistes, carreleurs, peintres, serruriers. Si vous êtes artisan du BTP, on est fait pour vous.",
  },
] as const;

export const MARQUEE_ITEMS = [
  "Sites web artisans",
  "SEO local",
  "Refonte",
  "Identité visuelle",
  "Fiche Google",
  "Devis en ligne",
  "Framer",
  "Webflow",
  "Suivi performance",
] as const;
