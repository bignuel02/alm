import type { Bien } from "./types";

/** Ligne du tableau de caractéristiques. */
export interface Spec {
  k: string;
  v: string;
}

/** Pièce du dossier juridique, prête à afficher. */
export interface DocLigne {
  label: string;
  mark: string;
  fourni: boolean;
}

export function specs(bien: Bien): Spec[] {
  return [
    { k: "Type", v: bien.type },
    { k: "Surface", v: `${bien.surface} m² habitables` },
    {
      k: "Pièces",
      v: bien.pieces ? `${bien.pieces} pièces, ${bien.chambres} chambres` : "—",
    },
    { k: "Configuration", v: bien.config },
    { k: "Année", v: bien.annee },
    { k: "Situation juridique", v: bien.badge },
    { k: "Référence", v: bien.ref },
  ];
}

/** Mention légale sous le prix — elle change entre vente et location. */
export function prixNote(bien: Bien): string {
  return bien.statut === "Location"
    ? "Hors charges · deux mois de caution"
    : "Honoraires 5 % à la charge de l’acquéreur";
}

export function docsLignes(bien: Bien): DocLigne[] {
  return bien.docs.map((d) => ({
    label: d.label,
    mark: d.ok ? "Fourni" : "À régulariser",
    fourni: d.ok,
  }));
}
