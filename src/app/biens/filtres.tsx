"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import {
  BUDGETS,
  STATUTS,
  TOUS_STATUTS,
  TOUS_TYPES,
  TRIS,
  TYPES,
} from "@/data/agence";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: 9,
  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
};

/**
 * Filtres du portefeuille.
 *
 * L'état vit dans l'URL, pas dans le composant : la page reste rendue côté
 * serveur, les résultats sont partageables par lien, et le bouton retour du
 * navigateur fait ce qu'on attend.
 */
export function Filtres({ resultats }: { resultats: number }) {
  const router = useRouter();
  const params = useSearchParams();

  const valeur = (cle: string, defaut: string) => params.get(cle) ?? defaut;

  const majFiltre = useCallback(
    (cle: string, val: string, valeurNeutre?: string) => {
      const suivants = new URLSearchParams(params.toString());
      if (!val || val === valeurNeutre) suivants.delete(cle);
      else suivants.set(cle, val);
      const qs = suivants.toString();
      router.replace(qs ? `/biens?${qs}` : "/biens", { scroll: false });
    },
    [params, router],
  );

  const actif = params.size > 0;

  return (
    <section
      aria-label="Filtrer le portefeuille"
      style={{
        border: "1px solid color-mix(in srgb, var(--color-text) 12%, transparent)",
        borderRadius: "var(--radius-lg)",
        background: "color-mix(in srgb, var(--color-bg) 82%, white)",
        boxShadow: "var(--shadow-sm)",
        padding: "clamp(20px, 3vw, 30px)",
        marginBottom: "clamp(36px, 5vw, 56px)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
          gap: 18,
        }}
      >
        <label className="field" style={{ display: "block", minWidth: 0 }}>
          <span style={labelStyle}>Ville ou quartier</span>
          <input
            className="input"
            type="search"
            defaultValue={valeur("q", "")}
            onChange={(e) => majFiltre("q", e.target.value)}
            placeholder="Coconut, Baguida, Agoè…"
          />
        </label>

        <label className="field" style={{ display: "block", minWidth: 0 }}>
          <span style={labelStyle}>Type de bien</span>
          <select
            className="input"
            value={valeur("type", TOUS_TYPES)}
            onChange={(e) => majFiltre("type", e.target.value, TOUS_TYPES)}
          >
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="field" style={{ display: "block", minWidth: 0 }}>
          <span style={labelStyle}>Vente ou location</span>
          <select
            className="input"
            value={valeur("statut", TOUS_STATUTS)}
            onChange={(e) => majFiltre("statut", e.target.value, TOUS_STATUTS)}
          >
            {STATUTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="field" style={{ display: "block", minWidth: 0 }}>
          <span style={labelStyle}>Budget maximum</span>
          <select
            className="input"
            value={valeur("budget", "0")}
            onChange={(e) => majFiltre("budget", e.target.value, "0")}
          >
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field" style={{ display: "block", minWidth: 0 }}>
          <span style={labelStyle}>Trier par</span>
          <select
            className="input"
            value={valeur("tri", TRIS[0])}
            onChange={(e) => majFiltre("tri", e.target.value, TRIS[0])}
          >
            {TRIS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 11.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
          }}
        >
          {resultats} bien{resultats > 1 ? "s" : ""}
          {resultats > 1 ? " correspondants" : " correspondant"}
        </p>

        {actif ? (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => router.replace("/biens", { scroll: false })}
          >
            Réinitialiser
          </button>
        ) : null}
      </div>
    </section>
  );
}
