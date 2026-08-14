"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = { display: "block" };

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: 10,
  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
};

export function EstimationForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        style={{
          border: "1px solid color-mix(in srgb, var(--color-text) 10%, transparent)",
          borderRadius: "var(--radius-lg)",
          background: "color-mix(in srgb, var(--color-bg) 82%, white)",
          boxShadow: "var(--shadow-sm)",
          padding: "clamp(28px, 4vw, 44px)",
        }}
      >
        <span className="tag tag-accent">Demande enregistrée</span>
        <h2 style={{ fontSize: "clamp(30px, 3vw, 44px)", marginTop: 18 }}>
          Nous revenons vers vous sous 24 heures.
        </h2>
        <p style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}>
          Votre demande est prête à être transmise à l&apos;équipe. Dans cette version,
          l&apos;envoi est simulé côté interface.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setSent(false)}>
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
      style={{
        border: "1px solid color-mix(in srgb, var(--color-text) 10%, transparent)",
        borderRadius: "var(--radius-lg)",
        background: "color-mix(in srgb, var(--color-bg) 82%, white)",
        boxShadow: "var(--shadow-sm)",
        padding: "clamp(24px, 4vw, 42px)",
        display: "grid",
        gap: 18,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 16,
        }}
      >
        <label className="field" style={fieldStyle}>
          <span style={labelStyle}>Type de bien</span>
          <select className="input" required defaultValue="">
            <option value="" disabled>
              Choisir
            </option>
            <option>Villa</option>
            <option>Maison</option>
            <option>Appartement</option>
            <option>Terrain</option>
            <option>Commerce</option>
          </select>
        </label>
        <label className="field" style={fieldStyle}>
          <span style={labelStyle}>Surface estimée</span>
          <input className="input" required type="number" min="1" placeholder="Ex. 240" />
        </label>
      </div>

      <label className="field" style={fieldStyle}>
        <span style={labelStyle}>Adresse ou quartier</span>
        <input className="input" required type="text" placeholder="Coconut, Baguida, Agoè..." />
      </label>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 16,
        }}
      >
        <label className="field" style={fieldStyle}>
          <span style={labelStyle}>Votre nom</span>
          <input className="input" required type="text" placeholder="Nom complet" />
        </label>
        <label className="field" style={fieldStyle}>
          <span style={labelStyle}>Téléphone</span>
          <input className="input" required type="tel" placeholder="+228 ..." />
        </label>
      </div>

      <label className="field" style={fieldStyle}>
        <span style={labelStyle}>Précisions utiles</span>
        <textarea
          className="input"
          placeholder="Titre foncier, travaux récents, urgence de vente..."
        />
      </label>

      <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }}>
        Demander l&apos;estimation
      </button>
    </form>
  );
}
