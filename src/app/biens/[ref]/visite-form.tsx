"use client";

import { useState } from "react";

import { FavoriButton } from "@/components/favori-button";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: 9,
  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
};

export function VisiteForm({
  bienRef,
  agent,
}: {
  bienRef: string;
  agent: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        style={{
          border: "1px solid var(--color-accent)",
          borderRadius: "var(--radius-md)",
          padding: 20,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--font-heading-weight)",
            fontSize: 18,
            margin: "0 0 8px",
          }}
        >
          Demande envoyée
        </p>
        <p style={{ margin: "0 0 14px", fontSize: 14.5 }}>
          {agent} vous rappelle sous 24 h ouvrées pour fixer la visite.
        </p>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: 13,
            color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
          }}
        >
          Dans cette version, l’envoi est simulé côté interface.
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setSent(false)}
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      style={{ display: "grid", gap: 16 }}
    >
      <label className="field" style={{ display: "block" }}>
        <span style={labelStyle}>Nom</span>
        <input className="input" type="text" required placeholder="Nom complet" />
      </label>

      <label className="field" style={{ display: "block" }}>
        <span style={labelStyle}>Téléphone</span>
        <input className="input" type="tel" required placeholder="+228 ..." />
      </label>

      <label className="field" style={{ display: "block" }}>
        <span style={labelStyle}>Créneau souhaité</span>
        <input
          className="input"
          type="text"
          placeholder="Samedi matin, en semaine après 17 h…"
        />
      </label>

      <button type="submit" className="btn btn-primary btn-block">
        Demander une visite
      </button>

      <FavoriButton bienRef={bienRef} className="btn btn-ghost btn-block" />
    </form>
  );
}
