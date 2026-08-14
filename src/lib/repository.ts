import { BIENS } from "@/data/biens";
import { TOUS_STATUTS, TOUS_TYPES, TRI_DEFAUT } from "@/data/agence";

import type { Bien } from "./types";

/**
 * The single door onto listing data.
 *
 * Backed by the static array in `src/data/biens.ts` today. Everything is
 * async and returns plain objects, so pointing this at Postgres/Supabase
 * later is a change to this file alone — no page or component moves.
 */

export interface BienQuery {
  /** Free text over titre, ville, ref, type and description. */
  q?: string;
  type?: string;
  statut?: string;
  /** Ceiling in FCFA, applied to sales only. "0" / 0 means no ceiling. */
  budgetMax?: number | string;
  tri?: string;
  /** Restrict to these refs — used by the favourites page. */
  refs?: string[];
}

export async function listBiens(query: BienQuery = {}): Promise<Bien[]> {
  const q = (query.q ?? "").trim().toLowerCase();
  const max = Number(query.budgetMax ?? 0) || 0;
  const refs = query.refs;

  let out = BIENS.filter((b) => {
    if (q) {
      const haystack =
        `${b.titre} ${b.ville} ${b.ref} ${b.type} ${b.description}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (query.type && query.type !== TOUS_TYPES && b.type !== query.type) return false;
    if (query.statut && query.statut !== TOUS_STATUTS && b.statut !== query.statut) {
      return false;
    }
    if (max && b.statut === "Vente" && b.prix > max) return false;
    if (refs && !refs.includes(b.ref)) return false;
    return true;
  });

  switch (query.tri) {
    case "Prix croissant":
      out = [...out].sort((a, b) => a.prix - b.prix);
      break;
    case "Prix décroissant":
      out = [...out].sort((a, b) => b.prix - a.prix);
      break;
    case "Surface décroissante":
      out = [...out].sort((a, b) => b.surface - a.surface);
      break;
    default:
      // TRI_DEFAUT — "Les plus récents", i.e. the portfolio's own order.
      break;
  }

  return out;
}

export async function getBien(ref: string): Promise<Bien | null> {
  const wanted = ref.toLowerCase();
  return BIENS.find((b) => b.ref.toLowerCase() === wanted) ?? null;
}

/** The listings shown in "Sélection du moment" on the home page. */
export async function listFeatured(): Promise<Bien[]> {
  return BIENS.filter((b) => b.featured);
}

/** Same type or same city, excluding the listing itself. */
export async function listSimilar(ref: string, limit = 3): Promise<Bien[]> {
  const bien = await getBien(ref);
  if (!bien) return [];
  return BIENS.filter(
    (b) => b.ref !== bien.ref && (b.type === bien.type || b.ville === bien.ville),
  ).slice(0, limit);
}

export async function countBiens(): Promise<number> {
  return BIENS.length;
}

/** Every ref, for `generateStaticParams` on the listing route. */
export async function listRefs(): Promise<string[]> {
  return BIENS.map((b) => b.ref);
}

export { TOUS_STATUTS, TOUS_TYPES, TRI_DEFAUT };
