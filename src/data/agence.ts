import type { BlocNumerote, Budget, Membre, Statut, TypeBien } from "@/lib/types";

export const AGENCE = {
  nom: "Alassani Immobilier",
  tagline:
    "Vente, location et gestion à Lomé depuis 2009. Nous ne présentons qu'un bien que nous connaissons: visité, titre vérifié, estimé au prix du marché réel.",
  ctaLabel: "Voir les biens disponibles",
  telephone: "+228 22 61 04 87",
  ville: "Lomé, Togo",
  quartier: "Coconut",
} as const;

export const EXPERTISES: BlocNumerote[] = [
  {
    num: "01",
    titre: "Vente d'appartements et de maisons",
    texte:
      "Mandat suivi par un seul négociateur, visites accompagnées, comptes rendus après chaque visite et négociation menée sur pièces jusqu'à la signature.",
  },
  {
    num: "02",
    titre: "Biens de prestige et bord de mer",
    texte:
      "Diffusion confidentielle possible, dossier photographique et technique complet, mise en relation avec notaires, géomètres et architectes de confiance.",
  },
  {
    num: "03",
    titre: "Location et gestion locative",
    texte:
      "Sélection des dossiers, état des lieux détaillé, quittancement et suivi des travaux. Un interlocuteur unique pour le propriétaire comme pour le locataire.",
  },
  {
    num: "04",
    titre: "Investissement, neuf, commerces et terrains",
    texte:
      "Étude de rendement avant offre, lecture des baux en cours, vérification du titre foncier et du bornage, accompagnement sur les programmes sur plan.",
  },
];

export const VALEURS: BlocNumerote[] = [
  {
    num: "01",
    titre: "Peu de mandats",
    texte:
      "Une trentaine de biens au portefeuille, pas plus. Ce qui nous permet de connaître chaque dossier sans le relire.",
  },
  {
    num: "02",
    titre: "Dossier vérifié",
    texte:
      "Titre foncier, bornage et quitus fiscal contrôlés avant la mise en vente. Aucun bien au litige foncier dans notre portefeuille.",
  },
  {
    num: "03",
    titre: "Un seul interlocuteur",
    texte:
      "Le négociateur qui signe le mandat vous suit jusqu'à l'acte. Pas de transmission de dossier en cours de route.",
  },
];

export const ETAPES_ESTIMATION: BlocNumerote[] = [
  {
    num: "01",
    titre: "Visite d'estimation",
    texte:
      "45 minutes sur place: état réel, exposition, nuisances, potentiel de travaux. Rien ne s'estime depuis un tableur.",
  },
  {
    num: "02",
    titre: "Rapport écrit sous 48 h",
    texte:
      "Une fourchette de prix en FCFA, les trois à cinq biens comparables qui la justifient et le délai de vente attendu.",
  },
  {
    num: "03",
    titre: "Décision libre",
    texte:
      "Vous gardez le rapport, avec ou sans mandat. Si vous nous confiez le bien, la stratégie de prix est fixée avec vous.",
  },
];

export const EQUIPE: Membre[] = [
  {
    nom: "Sofia Alassani",
    role: "Directrice",
    note: "Fondatrice de l'agence en 2009 à Coconut. Suit les biens de prestige et le bord de mer.",
    slot: "agent-sofia",
  },
  {
    nom: "Kossi Amegan",
    role: "Négociateur",
    note: "Lomé centre, Tokoin et Bè: appartements, immeubles de rapport et commerces.",
    slot: "agent-kossi",
  },
  {
    nom: "Afi Sodjinou",
    role: "Négociatrice",
    note: "Adidogomé, Agoè et Baguida: villas familiales et terrains titrés.",
    slot: "agent-afi",
  },
  {
    nom: "Marc Doumbia",
    role: "Gestion locative",
    note: "Suivi des baux, états des lieux et travaux pour 140 lots gérés.",
    slot: "agent-marc",
  },
];

export const TYPES: readonly string[] = [
  "Tous les types",
  "Villa",
  "Maison",
  "Appartement",
  "Prestige",
  "Neuf",
  "Investissement",
  "Commerce",
  "Terrain",
];

export const STATUTS: readonly string[] = ["Vente et location", "Vente", "Location"];

export const TRIS: readonly string[] = [
  "Les plus récents",
  "Prix croissant",
  "Prix décroissant",
  "Surface décroissante",
];

export const BUDGETS: Budget[] = [
  { value: "0", label: "Sans limite" },
  { value: "30000000", label: "Jusqu'à 30 M FCFA" },
  { value: "60000000", label: "Jusqu'à 60 M FCFA" },
  { value: "120000000", label: "Jusqu'à 120 M FCFA" },
  { value: "250000000", label: "Jusqu'à 250 M FCFA" },
];

export const TOUS_TYPES = TYPES[0];
export const TOUS_STATUTS = STATUTS[0];
export const TRI_DEFAUT = TRIS[0];

export type FiltreType = TypeBien | typeof TOUS_TYPES;
export type FiltreStatut = Statut | typeof TOUS_STATUTS;
