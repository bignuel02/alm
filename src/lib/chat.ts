import { BIENS } from "@/data/biens";
import { AGENCE } from "@/data/agence";

import { fcfa } from "./format";

export interface ChatMessage {
  id: string;
  who: string;
  text: string;
  mine: boolean;
}

export const AGENT = "Kossi — Alassani Immobilier";

export const CHAT_STATUS = "En ligne — réponse en quelques minutes";

export const MESSAGE_ACCUEIL: ChatMessage = {
  id: "accueil",
  who: AGENT,
  text: "Bonjour, Kossi à l’agence. Dites-moi le quartier et le budget qui vous intéressent, je vous oriente tout de suite.",
  mine: false,
};

export const QUESTIONS_RAPIDES = [
  { label: "Voir les villas", envoi: "Je cherche une villa" },
  { label: "Vendre mon bien", envoi: "Je veux une estimation pour vendre" },
  { label: "Titre foncier", envoi: "Le titre foncier est-il disponible ?" },
  { label: "Louer", envoi: "Qu’avez-vous en location ?" },
  { label: "Horaires", envoi: "Quels sont vos horaires ?" },
] as const;

/**
 * Réponses scriptées.
 *
 * Pas de modèle de langage : chaque règle teste des mots-clés et rend une
 * réponse écrite d'avance. Les chiffres sont calculés depuis `BIENS`, donc
 * une modification du portefeuille ne laisse pas le chat mentir.
 *
 * L'ordre compte : la première règle qui accroche gagne, du plus précis au
 * plus général.
 */
interface Regle {
  motsCles: readonly string[];
  reponse: () => string;
}

const enVente = () => BIENS.filter((b) => b.statut === "Vente");
const enLocation = () => BIENS.filter((b) => b.statut === "Location");

const parType = (type: string) => BIENS.filter((b) => b.type === type);

function fourchetteVente(): string {
  const prix = enVente().map((b) => b.prix);
  const min = Math.min(...prix);
  const max = Math.max(...prix);
  const moinsCher = enVente().find((b) => b.prix === min);
  const plusCher = enVente().find((b) => b.prix === max);
  return `Nos biens à la vente vont de ${fcfa(min)} FCFA (${moinsCher?.type.toLowerCase()} à ${moinsCher?.ville.split("—")[0].trim()}) à ${fcfa(max)} FCFA (${plusCher?.ville.split("—")[0].trim()}). Donnez-moi votre enveloppe, je filtre pour vous.`;
}

function listeCourte(biens: typeof BIENS): string {
  return biens
    .slice(0, 3)
    .map((b) => `${b.titre} à ${b.ville.split("—")[0].trim()} (${fcfa(b.prix)} FCFA${b.statut === "Location" ? " / mois" : ""})`)
    .join(" ; ");
}

const REGLES: readonly Regle[] = [
  {
    motsCles: ["bonjour", "bonsoir", "salut", "hello", "coucou"],
    reponse: () =>
      "Bonjour ! Dites-moi ce que vous cherchez — un quartier, un type de bien, un budget — et je vous oriente.",
  },
  {
    // « samedi » est volontairement absent : « je peux visiter samedi ? »
    // parle de visite, pas d'horaires, et cette règle passe avant.
    motsCles: ["horaire", "ouvert", "ouverture", "fermé", "ferme a quelle"],
    reponse: () =>
      "L’agence est ouverte du lundi au vendredi de 8h30 à 18h30, et le samedi sur rendez-vous. Nous sommes rue des Cocotiers, à Coconut.",
  },
  {
    motsCles: ["adresse", "où êtes", "ou etes", "situé", "situe", "venir", "bureau"],
    reponse: () =>
      `Rue des Cocotiers, Coconut — Lomé. Vous pouvez aussi nous joindre au ${AGENCE.telephone}.`,
  },
  {
    motsCles: ["honoraire", "commission", "frais", "combien vous prenez"],
    reponse: () =>
      "Nos honoraires sont de 5 % à la charge de l’acquéreur, barème affiché en agence. En gestion locative, c’est 8 % des loyers encaissés. Rien n’est facturé avant la signature.",
  },
  {
    motsCles: ["titre", "foncier", "acd", "bornage", "quitus", "litige", "papier", "document"],
    reponse: () =>
      "Chaque bien est contrôlé avant mise en vente : titre foncier ou ACD, plan de bornage et quitus fiscal. Le détail pièce par pièce figure sur la fiche du bien, section « Dossier juridique ». Les originaux sont consultables à l’agence.",
  },
  {
    motsCles: ["visite", "rendez", "rdv", "voir le bien", "visiter"],
    reponse: () =>
      "Nous organisons les visites du lundi au samedi. Indiquez-moi deux créneaux et la référence du bien, je confirme avec le propriétaire — ou utilisez le formulaire « Demander une visite » sur la fiche.",
  },
  {
    motsCles: ["vendre", "estimation", "estimer", "valeur", "combien vaut"],
    reponse: () =>
      "Pour une estimation, un négociateur passe 45 minutes sur place et vous remet une fourchette écrite sous 48 heures, sans engagement de mandat. La demande se fait depuis la page Estimation.",
  },
  {
    motsCles: ["location", "louer", "loyer", "bail", "meublé", "meuble"],
    reponse: () =>
      `En location nous avons ${enLocation().length} biens : ${listeCourte(enLocation())}. Je vous envoie les fiches ?`,
  },
  {
    motsCles: ["terrain", "parcelle", "lot"],
    reponse: () => {
      const t = parType("Terrain");
      return t.length
        ? `${listeCourte(t)}. Titré, borné, voirie ouverte — je peux vous envoyer le plan de bornage.`
        : "Nous n’avons pas de terrain disponible en ce moment, mais dites-moi votre secteur et je vous préviens dès qu’un lot titré rentre.";
    },
  },
  {
    motsCles: ["villa", "maison", "pavillon"],
    reponse: () => {
      const v = [...parType("Villa"), ...parType("Maison")];
      return `Nous avons ${v.length} villas et maisons au portefeuille : ${listeCourte(v)}. Quel secteur vous intéresse ?`;
    },
  },
  {
    motsCles: ["appartement", "studio", "f2", "f3", "t2", "t3", "t4"],
    reponse: () => {
      const a = [...parType("Appartement"), ...parType("Neuf")];
      return `Côté appartements : ${listeCourte(a)}. Achat ou location ?`;
    },
  },
  {
    motsCles: ["commerce", "boutique", "local", "bureau", "magasin"],
    reponse: () => {
      const c = parType("Commerce");
      return c.length
        ? `${listeCourte(c)}. Bail commercial de trois ans, compteur dédié.`
        : "Nous suivons régulièrement des locaux commerciaux — dites-moi la surface et le quartier visés.";
    },
  },
  {
    motsCles: ["investir", "investissement", "rendement", "rapport", "rentab"],
    reponse: () => {
      const i = parType("Investissement");
      return i.length
        ? `${listeCourte(i)}. Rendement brut constaté 9,2 %, vendu avec les baux en cours et l’état locatif.`
        : "Pour l’investissement locatif, nous étudions le rendement avant offre et vérifions les baux en cours. Quel budget visez-vous ?";
    },
  },
  {
    motsCles: ["prestige", "luxe", "bord de mer", "plage", "piscine"],
    reponse: () => {
      const p = parType("Prestige");
      return p.length
        ? `${listeCourte(p)}. Diffusion confidentielle possible, dossier photographique et technique complet.`
        : "Nous suivons quelques biens de prestige en diffusion confidentielle. Appelez-nous pour en parler.";
    },
  },
  {
    motsCles: ["prix", "budget", "fcfa", "coût", "cout", "cher", "tarif", "million"],
    reponse: fourchetteVente,
  },
  {
    motsCles: ["baguida", "avépozo", "avepozo", "kpogan", "coconut", "agoè", "agoe", "adidogomé", "adidogome", "tokoin", "bè", "nyékonakpoè", "kégué", "kegue"],
    reponse: () =>
      "Nous couvrons tout le Grand Lomé — Coconut, Baguida, Avépozo, Adidogomé, Agoè, Tokoin, Bè. Dites-moi le quartier exact et le budget, je vous sors ce qui correspond.",
  },
  {
    motsCles: ["merci", "parfait", "d'accord", "daccord", "ok"],
    reponse: () =>
      "Avec plaisir. Si vous voulez qu’un négociateur vous rappelle, laissez-moi votre numéro ou passez par la page Contact.",
  },
];

const DEFAUT =
  "C’est noté. Je regarde le portefeuille et je reviens vers vous dans la journée — souhaitez-vous que l’on vous rappelle ?";

/** Normalise pour que « Avépozo » attrape « avepozo ». */
function normalise(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function repondre(question: string): string {
  const q = normalise(question);
  for (const regle of REGLES) {
    if (regle.motsCles.some((mot) => q.includes(normalise(mot)))) {
      return regle.reponse();
    }
  }
  return DEFAUT;
}
