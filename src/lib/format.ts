import type { Bien } from "./types";

const nf = new Intl.NumberFormat("fr-FR");

/** "185 000 000" — narrow no-break spaces flattened to plain ones. */
export function fcfa(montant: number): string {
  return nf.format(montant).replace(/ | /g, " ");
}

/** Full price label: monthly for a rental, total for a sale. */
export function prixLabel(bien: Pick<Bien, "prix" | "statut">): string {
  const n = fcfa(bien.prix);
  return bien.statut === "Location" ? `${n} FCFA / mois` : `${n} FCFA`;
}

/** URL slug for a listing — the agency reference, lowercased. */
export function bienHref(bien: Pick<Bien, "ref">): string {
  return `/biens/${bien.ref.toLowerCase()}`;
}
