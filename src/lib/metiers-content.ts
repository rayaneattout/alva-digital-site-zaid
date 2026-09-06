// Pages locales "Site web pour [métier]" — SEO local.
//
// IMPORTANT (transparence) : seuls plombier, couvreur-rge et electricien ont un contenu
// détaillé (pain points/features) repris fidèlement du code source de la version actuelle.
// Les 6 autres métiers (menuisier, maçon, carreleur, peintre, chauffagiste, serrurier)
// n'avaient JAMAIS été rédigés côté client (backlog PRD : "pages sectorielles
// supplémentaires à dupliquer"). Je les ai écrits sur le même gabarit, avec des faits
// génériques et vérifiables du métier (pas de statistique ni de cas client inventés) —
// à faire relire avant mise en ligne. Marqués `written: "template"` ci-dessous.

export type MetierPage = {
  slug: string;
  metier: string;
  metierPlural: string;
  title: string;
  subtitle: string;
  description: string;
  painPoints: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  tarifEntry: string;
  tarifPro: string;
  bonusTitle?: string;
  bonus?: string[];
  written: "source" | "template";
};

export const METIER_PAGES: MetierPage[] = [
  {
    slug: "plombier",
    metier: "Plombier",
    metierPlural: "plombiers",
    title: "Site web pour plombiers qui génère des appels en urgence.",
    subtitle:
      "Vos clients tapent « plombier » + leur ville à 23h un dimanche. On vous fait apparaître en haut, avec un bouton d'appel direct.",
    description:
      "Création de site web pour plombiers : SEO local, formulaire de devis avec photo, click-to-call mobile, zone d'intervention. À partir de 990 €.",
    painPoints: [
      {
        title: "Vous perdez les urgences au profit de Pages Jaunes / IZI by EDF",
        desc: "Quand un client a une fuite, il appelle le premier qui sort sur Google. Ces plateformes captent les requêtes et vous facturent ensuite chaque lead.",
      },
      {
        title: "Pas de bouton d'appel visible sur mobile",
        desc: "8 clients sur 10 vous cherchent depuis leur téléphone. Un numéro en bas de page, c'est trop tard. Il faut un bouton sticky.",
      },
      {
        title: "Aucune indication de zone d'intervention",
        desc: "Le visiteur ne sait pas si vous vous déplacez chez lui. Il rebondit chez le concurrent qui affiche clairement « Paris 11ᵉ et alentours ».",
      },
      {
        title: "Le devis se demande par mail, en 2026",
        desc: "Pas de formulaire avec photo de la fuite, pas de réponse sous 1h. Résultat : le client appelle quelqu'un d'autre.",
      },
    ],
    features: [
      { title: "Click-to-call sticky mobile", desc: "Un bouton « Appeler » fixé en bas d'écran, toujours visible. Un clic = un appel." },
      { title: "Formulaire devis avec photo", desc: "Le client envoie une photo de sa fuite. Vous avez tout pour chiffrer rapidement." },
      { title: "Page « zones d'intervention »", desc: "Une page par arrondissement / commune que vous couvrez. SEO local boosté." },
      { title: "Avis Google intégrés", desc: "Vos derniers avis affichés en page d'accueil. Crédibilité immédiate." },
      { title: "Bandeau urgence 24/7", desc: "Mise en avant claire : « Dépannage en 30 minutes » avec horaires et tarifs." },
      { title: "Schéma de prestations", desc: "Détartrage, débouchage, fuite, chaudière, rénovation. Chaque service a sa page indexée." },
    ],
    tarifEntry: "990 €",
    tarifPro: "1 990 €",
    written: "source",
  },
  {
    slug: "couvreur-rge",
    metier: "Couvreur RGE",
    metierPlural: "couvreurs RGE",
    title: "Site web pour couvreurs RGE qui transforme MaPrimeRénov' en chantiers.",
    subtitle:
      "Vos clients potentiels veulent rénover leur toiture avec MaPrimeRénov'. On les capte avant Hellio et Effy.",
    description:
      "Création de site web pour couvreurs RGE : mise en avant du label, calculateur d'aides, simulateur de devis, SEO local. À partir de 1 290 €.",
    painPoints: [
      {
        title: "Le label RGE n'est pas visible sur votre site",
        desc: "C'est pourtant votre plus gros différenciant. Sans la mention claire, le visiteur file chez Hellio qui le met en bandeau.",
      },
      {
        title: "Aucune info MaPrimeRénov'",
        desc: "Les particuliers cherchent « combien je peux toucher ». Si vous ne répondez pas, ils vont sur effy.fr ou hellio.com.",
      },
      {
        title: "Pas de simulateur de devis ou d'aides",
        desc: "Un simple calculateur qui dit « vous pouvez avoir X € d'aides » multiplie les contacts par 3 ou 4.",
      },
      {
        title: "Vos chantiers terminés ne sont nulle part",
        desc: "Un avant/après est l'argument le plus puissant pour la couverture. Sans galerie, vous perdez en crédibilité face aux gros acteurs.",
      },
    ],
    features: [
      { title: "Bandeau RGE permanent", desc: "Logo RGE Qualibat ou QualiPV affiché en haut de site, sur chaque page." },
      { title: "Calculateur MaPrimeRénov'", desc: "Le visiteur entre ses revenus, sa surface, et obtient une estimation d'aides." },
      { title: "Simulateur de devis simple", desc: "Type de toiture + surface = fourchette de prix. Capte 3x plus de leads qu'un formulaire vide." },
      { title: "Galerie avant / après", desc: "Photos hautes résolutions, chantiers récents, témoignages clients." },
      { title: "Page par prestation", desc: "Couverture neuve, rénovation, isolation, démoussage, zinguerie : 1 page = 1 mot-clé indexé." },
      { title: "Avis Google + bouclier", desc: "Avis intégrés en page d'accueil + section « notre engagement qualité » contre la concurrence prédatrice." },
    ],
    tarifEntry: "1 290 €",
    tarifPro: "2 290 €",
    bonusTitle: "On met aussi en avant",
    bonus: [
      "Logo RGE Qualibat / QualiPV / Eco-Artisan",
      "Numéro RGE et année d'obtention",
      "Zone géographique d'intervention détaillée",
      "Liens vers les organismes (France Rénov', Anah)",
      "Garantie décennale et assurance affichées",
      "Mentions « Éligible MaPrimeRénov' » sur chaque page",
    ],
    written: "source",
  },
  {
    slug: "electricien",
    metier: "Électricien",
    metierPlural: "électriciens",
    title: "Site web pour électriciens qui capte les urgences et la mise aux normes.",
    subtitle:
      "Coupure de courant à 21h, mise aux normes pour vendre un appartement, installation IRVE : on cible chaque besoin avec une page dédiée.",
    description:
      "Création de site web pour électriciens : interventions urgentes, mise aux normes NF C 15-100, IRVE bornes de recharge, SEO local. À partir de 990 €.",
    painPoints: [
      {
        title: "Les urgences vont au plus rapide",
        desc: "Sans bouton d'appel mobile clair, vous perdez les pannes nocturnes. Le concurrent visible sur Google Maps gagne le client.",
      },
      {
        title: "Vous ne ressortez pas sur « mise aux normes »",
        desc: "C'est un mot-clé en or (vente d'appartement, location). Sans page dédiée et structurée, vous laissez le marché à AlloElec et compagnie.",
      },
      {
        title: "L'IRVE (borne de recharge) n'est pas mis en avant",
        desc: "Marché en croissance forte. Si vous êtes qualifié IRVE et que ce n'est pas écrit sur votre site, c'est de l'argent perdu.",
      },
      {
        title: "Aucune preuve de qualification visible",
        desc: "Qualifelec, IRVE, RGE : ces labels rassurent et convertissent. Les afficher = +30 % de demandes de devis sur ces requêtes.",
      },
    ],
    features: [
      { title: "Bouton appel urgence sticky", desc: "« Dépannage électricité 24/7 » fixé en bas d'écran mobile." },
      { title: "Page mise aux normes NF C 15-100", desc: "Optimisée pour les requêtes type « mise aux normes électrique appartement vente »." },
      { title: "Page IRVE / borne de recharge", desc: "Cible spécifique : copropriétés, particuliers, entreprises. Chacune avec sa page indexée." },
      { title: "Calculateur de prix simple", desc: "Type de prestation + surface = fourchette indicative. Filtre les leads sérieux." },
      { title: "Galerie réalisations", desc: "Tableaux électriques, mise aux normes, IRVE installés : photos = preuve de compétence." },
      { title: "Logos qualifications", desc: "Qualifelec, IRVE niveau 1/2/3, RGE : affichés sur chaque page pour la crédibilité." },
    ],
    tarifEntry: "990 €",
    tarifPro: "1 990 €",
    bonusTitle: "On met aussi en avant",
    bonus: [
      "Qualification Qualifelec et numéro",
      "Mention IRVE niveau 1, 2 ou 3",
      "Zone d'intervention par commune / arrondissement",
      "Garantie décennale et assurance RC pro",
      "Liste des marques posées (Schneider, Legrand, Hager…)",
      "Délais d'intervention typiques (urgence, devis)",
    ],
    written: "source",
  },
  {
    slug: "menuisier",
    metier: "Menuisier",
    metierPlural: "menuisiers",
    title: "Site web pour menuisiers qui met vos réalisations en valeur.",
    subtitle:
      "Cuisine sur mesure, fenêtres, escalier, agencement : c'est un métier qui se vend par la photo. Sans galerie, vous êtes invisible face à un devis flou.",
    description:
      "Création de site web pour menuisiers : galerie de réalisations, formulaire de devis avec photos et dimensions, SEO local. À partir de 990 €.",
    painPoints: [
      {
        title: "Aucune galerie de réalisations",
        desc: "Le menuisier se choisit sur la qualité visible du travail. Sans photos de chantiers, le client ne peut pas juger et va voir ailleurs.",
      },
      {
        title: "Le devis sur mesure prend des allers-retours par mail",
        desc: "Sans formulaire structuré (dimensions, photos, essence de bois souhaitée), chaque devis démarre de zéro.",
      },
      {
        title: "Les délais de fabrication ne sont jamais annoncés",
        desc: "Un client qui prépare des travaux veut savoir s'il doit vous contacter maintenant ou dans 2 mois. Le silence le fait partir chez un concurrent.",
      },
      {
        title: "Les matériaux et finitions ne sont pas mis en avant",
        desc: "Chêne massif, agencement sur mesure, finitions : c'est ce qui justifie votre prix face à la menuiserie industrielle. Encore faut-il le montrer.",
      },
    ],
    features: [
      { title: "Galerie de réalisations par catégorie", desc: "Cuisine, fenêtres, escalier, agencement : chaque catégorie a sa page et ses photos." },
      { title: "Formulaire devis avec dimensions et photos", desc: "Le client décrit son projet précisément dès le premier contact." },
      { title: "Page par prestation", desc: "Menuiserie intérieure, extérieure, sur mesure : chaque service indexé sur Google." },
      { title: "Mise en avant des matériaux et finitions", desc: "Essences de bois, finitions proposées, garanties : de quoi justifier votre positionnement." },
      { title: "Avis Google intégrés", desc: "Vos derniers avis affichés en page d'accueil pour rassurer avant le premier contact." },
      { title: "Zone d'intervention claire", desc: "Le client sait immédiatement si vous vous déplacez chez lui." },
    ],
    tarifEntry: "990 €",
    tarifPro: "1 990 €",
    written: "template",
  },
  {
    slug: "macon",
    metier: "Maçon",
    metierPlural: "maçons",
    title: "Site web pour maçons qui inspire confiance sur des gros chantiers.",
    subtitle:
      "Extension, rénovation, gros œuvre : ce sont des montants importants. Un site flou ou sans preuve fait fuir un client avant même le premier appel.",
    description:
      "Création de site web pour maçons : chantiers avant/après, garantie décennale mise en avant, formulaire de devis détaillé, SEO local. À partir de 990 €.",
    painPoints: [
      {
        title: "La garantie décennale et l'assurance ne sont pas affichées",
        desc: "Sur un chantier à plusieurs dizaines de milliers d'euros, c'est la première chose qu'un client cherche. Son absence crée un doute immédiat.",
      },
      {
        title: "Aucun chantier réalisé n'est visible",
        desc: "Un avant/après sur une extension ou une rénovation est l'argument le plus convaincant du métier. Sans galerie, vous perdez face à un concurrent qui en montre.",
      },
      {
        title: "Le devis reste flou tant qu'on ne vous a pas appelé",
        desc: "Sans indication de fourchette par type de projet, le client hésite à prendre contact et passe au suivant.",
      },
      {
        title: "Les délais de chantier ne sont jamais communiqués en amont",
        desc: "Un client qui planifie des travaux veut une idée de calendrier avant de vous solliciter, pas après.",
      },
    ],
    features: [
      { title: "Page « nos chantiers » avant / après", desc: "Extensions, rénovations, gros œuvre : photos organisées par type de projet." },
      { title: "Garantie décennale et assurance mises en avant", desc: "Affichées sur chaque page pour lever le doute dès l'arrivée sur le site." },
      { title: "Formulaire de devis détaillé", desc: "Type de projet, surface, photos de l'existant : de quoi chiffrer sérieusement dès le premier contact." },
      { title: "Page par type de prestation", desc: "Extension, rénovation, gros œuvre, fondations : chaque prestation indexée sur Google." },
      { title: "Avis Google intégrés", desc: "Vos derniers avis affichés en page d'accueil, essentiels sur un chantier à fort enjeu." },
      { title: "Zone d'intervention claire", desc: "Le client sait immédiatement si votre entreprise couvre son secteur." },
    ],
    tarifEntry: "990 €",
    tarifPro: "1 990 €",
    written: "template",
  },
  {
    slug: "carreleur",
    metier: "Carreleur",
    metierPlural: "carreleurs",
    title: "Site web pour carreleurs qui vend par la photo, pas par le devis seul.",
    subtitle:
      "Sol, salle de bain, extérieur : le choix se fait à l'œil. Sans galerie de réalisations, un devis au téléphone ne suffit pas à convaincre.",
    description:
      "Création de site web pour carreleurs : galerie de réalisations par type de pose, formulaire de devis avec surface et photos, SEO local. À partir de 990 €.",
    painPoints: [
      {
        title: "Aucune galerie de réalisations par type de pose",
        desc: "Mosaïque, grand format, sol chauffant : le client veut voir un rendu proche du sien avant de se décider. Sans photos, il compare à l'aveugle.",
      },
      {
        title: "Le devis au m² n'est jamais clair",
        desc: "Sans fourchette indicative, le client hésite à prendre contact de peur d'une facture surprise.",
      },
      {
        title: "Les délais de pose ne sont pas communiqués",
        desc: "Un client en pleine rénovation planifie plusieurs corps de métier. Sans délai annoncé, il passe à un concurrent plus clair.",
      },
      {
        title: "Aucune mise en avant des finitions proposées",
        desc: "Faïence, grand format, mosaïque, sols chauffants : ce qui différencie votre travail doit être visible, pas deviné.",
      },
    ],
    features: [
      { title: "Galerie de réalisations par type de pose", desc: "Salle de bain, sols, extérieur, mosaïque : chaque catégorie a ses photos." },
      { title: "Formulaire devis avec surface et photos", desc: "Le client renseigne la surface et l'état actuel pour un chiffrage rapide." },
      { title: "Page par prestation", desc: "Salle de bain, sols intérieurs, terrasses : chaque service indexé sur Google." },
      { title: "Mise en avant des finitions", desc: "Grand format, mosaïque, sols chauffants : vos spécialités bien visibles." },
      { title: "Avis Google intégrés", desc: "Vos derniers avis affichés en page d'accueil pour rassurer avant contact." },
      { title: "Zone d'intervention claire", desc: "Le client sait immédiatement si vous couvrez son secteur." },
    ],
    tarifEntry: "990 €",
    tarifPro: "1 990 €",
    written: "template",
  },
  {
    slug: "peintre",
    metier: "Peintre en bâtiment",
    metierPlural: "peintres en bâtiment",
    title: "Site web pour peintres en bâtiment qui montre le résultat, pas juste le devis.",
    subtitle:
      "Intérieur, extérieur, décoratif : la décision se prend à l'œil. Sans avant/après ni disponibilité claire, le client part chez le premier qui répond.",
    description:
      "Création de site web pour peintres en bâtiment : galerie avant/après, formulaire de devis avec surface et photos, SEO local. À partir de 990 €.",
    painPoints: [
      {
        title: "Aucun avant/après visible",
        desc: "La peinture se juge au résultat. Sans galerie de chantiers terminés, le client ne peut pas évaluer la qualité de votre travail.",
      },
      {
        title: "La disponibilité n'est jamais indiquée",
        desc: "Un client qui planifie ses travaux veut savoir si vous pouvez intervenir sous 2 semaines ou sous 2 mois. Le silence le fait chercher ailleurs.",
      },
      {
        title: "Le devis au m² reste flou",
        desc: "Sans fourchette par type de prestation, le client hésite à demander un devis de peur d'un tarif décalé.",
      },
      {
        title: "Aucune page dédiée aux prestations spécifiques",
        desc: "Façade, décoratif, intérieur : chaque prestation attire une recherche Google différente que vous laissez à vos concurrents.",
      },
    ],
    features: [
      { title: "Galerie avant / après par pièce", desc: "Salon, façade, extérieur : photos organisées pour montrer le résultat concret." },
      { title: "Formulaire devis avec surface et photos", desc: "Le client décrit son projet en détail dès le premier contact." },
      { title: "Page par prestation", desc: "Intérieur, extérieur, façade, décoratif : chaque service indexé sur Google." },
      { title: "Indication de disponibilité", desc: "Le client sait à quel délai s'attendre avant même de vous contacter." },
      { title: "Avis Google intégrés", desc: "Vos derniers avis affichés en page d'accueil pour rassurer avant contact." },
      { title: "Zone d'intervention claire", desc: "Le client sait immédiatement si vous couvrez son secteur." },
    ],
    tarifEntry: "990 €",
    tarifPro: "1 990 €",
    written: "template",
  },
  {
    slug: "chauffagiste",
    metier: "Chauffagiste",
    metierPlural: "chauffagistes",
    title: "Site web pour chauffagistes qui capte les pannes et les aides à la rénovation.",
    subtitle:
      "Panne de chaudière en plein hiver, remplacement par une pompe à chaleur éligible aux aides : deux besoins, deux pages, deux façons de vous trouver.",
    description:
      "Création de site web pour chauffagistes : dépannage urgent, mise en avant RGE et aides à la rénovation, SEO local. À partir de 990 €.",
    painPoints: [
      {
        title: "Les pannes en hiver vont au plus visible",
        desc: "Une chaudière en panne un dimanche d'hiver, c'est une recherche Google dans l'urgence. Sans bouton d'appel clair, vous perdez ce client au concurrent visible sur Maps.",
      },
      {
        title: "Aucune info sur les aides à la rénovation",
        desc: "MaPrimeRénov', CEE : les particuliers qui veulent changer de chaudière cherchent d'abord le montant des aides. Sans réponse, ils vont chez un concurrent qui l'affiche.",
      },
      {
        title: "La qualification RGE n'est pas mise en avant",
        desc: "C'est pourtant la condition pour toucher les aides. Sans la mention claire, le visiteur doute et repart.",
      },
      {
        title: "Aucune page dédiée par type d'équipement",
        desc: "Chaudière, pompe à chaleur, entretien : chaque recherche Google est différente et mérite sa propre page.",
      },
    ],
    features: [
      { title: "Bouton appel urgence sticky", desc: "« Dépannage chauffage » fixé en bas d'écran mobile, toujours visible." },
      { title: "Mise en avant RGE et aides", desc: "Qualification RGE et mentions MaPrimeRénov' / CEE affichées sur chaque page concernée." },
      { title: "Page par type d'équipement", desc: "Chaudière, pompe à chaleur, entretien, dépannage : chaque prestation indexée sur Google." },
      { title: "Formulaire devis simple", desc: "Type d'intervention et équipement actuel pour un premier chiffrage rapide." },
      { title: "Avis Google intégrés", desc: "Vos derniers avis affichés en page d'accueil pour rassurer avant contact." },
      { title: "Zone d'intervention claire", desc: "Le client sait immédiatement si vous couvrez son secteur, essentiel en urgence." },
    ],
    tarifEntry: "990 €",
    tarifPro: "1 990 €",
    bonusTitle: "On met aussi en avant",
    bonus: [
      "Qualification RGE et année d'obtention",
      "Mentions « Éligible MaPrimeRénov' / CEE »",
      "Zone géographique d'intervention détaillée",
      "Garantie décennale et assurance affichées",
      "Marques d'équipement installées",
      "Délais d'intervention typiques (urgence, devis)",
    ],
    written: "template",
  },
  {
    slug: "serrurier",
    metier: "Serrurier",
    metierPlural: "serruriers",
    title: "Site web pour serruriers qui rassure avant même l'intervention.",
    subtitle:
      "Porte claquée, serrure forcée : l'urgence est totale et la méfiance envers le secteur aussi. Un site clair et transparent fait toute la différence.",
    description:
      "Création de site web pour serruriers : intervention urgente, tarifs affichés clairement, SEO local. À partir de 990 €.",
    painPoints: [
      {
        title: "L'urgence va au premier qui répond",
        desc: "Porte claquée ou serrure forcée : le client cherche une intervention immédiate. Sans bouton d'appel visible sur mobile, vous perdez ces demandes.",
      },
      {
        title: "L'absence de tarifs affichés entretient la méfiance",
        desc: "Le grand public se méfie des arnaques au dépannage. Un site qui n'affiche aucun ordre de prix renforce ce doute au lieu de le lever.",
      },
      {
        title: "Le délai d'intervention n'est jamais précisé",
        desc: "Un client en urgence veut savoir si vous arrivez en 20 minutes ou en 2 heures avant même de décrocher le téléphone.",
      },
      {
        title: "Aucune page par type d'intervention",
        desc: "Ouverture de porte, serrure blindée, dépannage : chaque recherche est différente et mérite sa propre page indexée.",
      },
    ],
    features: [
      { title: "Bouton appel urgence sticky 24/7", desc: "Toujours visible en bas d'écran mobile, pour une intervention immédiate." },
      { title: "Tarifs affichés clairement", desc: "Une fourchette de prix par intervention, pour rassurer face à la réputation du secteur." },
      { title: "Délai d'intervention par zone", desc: "Le client sait à quoi s'attendre avant même de vous appeler." },
      { title: "Page par prestation", desc: "Ouverture de porte, serrure blindée, dépannage : chaque service indexé sur Google." },
      { title: "Avis Google intégrés", desc: "Vos derniers avis affichés en page d'accueil, essentiels pour rassurer dans l'urgence." },
      { title: "Devis avant intervention", desc: "Mention claire que le prix est confirmé avant le début des travaux, pas après." },
    ],
    tarifEntry: "990 €",
    tarifPro: "1 990 €",
    written: "template",
  },
];

export function getMetierPage(slug: string) {
  return METIER_PAGES.find((m) => m.slug === slug);
}
