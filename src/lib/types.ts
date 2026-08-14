/** Domain types for the Alassani Immobilier portfolio. */

export type Statut = "Vente" | "Location";

export type TypeBien =
  | "Villa"
  | "Maison"
  | "Appartement"
  | "Prestige"
  | "Neuf"
  | "Investissement"
  | "Commerce"
  | "Terrain";

/** A legal document attached to a listing, and whether the agency holds it. */
export interface Document {
  label: string;
  ok: boolean;
}

export interface Bien {
  /** Agency reference, e.g. "VI-2411". Stable public id, used in URLs. */
  ref: string;
  titre: string;
  ville: string;
  type: TypeBien;
  statut: Statut;
  /** In FCFA. Monthly for Location, total for Vente. */
  prix: number;
  /** Living area in m². */
  surface: number;
  pieces: number;
  chambres: number;
  config: string;
  annee: string;
  badge: string;
  description: string;
  prestations: string[];
  docs: Document[];
  agent: string;
  agentRole: string;
  /** Shown in the "Sélection du moment" row on the home page. */
  featured?: boolean;
}

export interface Membre {
  nom: string;
  role: string;
  note: string;
  /** Image-slot key, kept from the design for when real photos land. */
  slot: string;
}

/** Numbered editorial block: expertises, valeurs, étapes d'estimation. */
export interface BlocNumerote {
  num: string;
  titre: string;
  texte: string;
}

export interface Budget {
  /** "0" means no ceiling. */
  value: string;
  label: string;
}

export interface ChatMessage {
  who: string;
  text: string;
  mine: boolean;
}
