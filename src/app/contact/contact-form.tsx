"use client";

import { useState } from "react";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: 10,
  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
};

export function ContactForm() {
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
        <span className="tag tag-accent">Message envoyé</span>
        <h2 style={{ fontSize: "clamp(30px, 3vw, 44px)", marginTop: 18 }}>
          Merci, nous avons bien reçu votre message.
        </h2>
        <p style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}>
          L&apos;équipe vous répondra sur le canal indiqué. Dans cette version, l&apos;envoi
          est simulé côté interface.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setSent(false)}>
          Écrire un autre message
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
        <label className="field" style={{ display: "block" }}>
          <span style={labelStyle}>Nom</span>
          <input className="input" required type="text" placeholder="Votre nom" />
        </label>
        <label className="field" style={{ display: "block" }}>
          <span style={labelStyle}>Téléphone</span>
          <input className="input" required type="tel" placeholder="+228 ..." />
        </label>
      </div>

      <label className="field" style={{ display: "block" }}>
        <span style={labelStyle}>Objet</span>
        <select className="input" required defaultValue="">
          <option value="" disabled>
            Choisir
          </option>
          <option>Acheter un bien</option>
          <option>Vendre ou estimer</option>
          <option>Louer ou gérer</option>
          <option>Question générale</option>
        </select>
      </label>

      <label className="field" style={{ display: "block" }}>
        <span style={labelStyle}>Message</span>
        <textarea
          className="input"
          required
          placeholder="Dites-nous ce que vous cherchez, votre délai et le meilleur moment pour vous rappeler."
        />
      </label>

      <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }}>
        Envoyer le message
      </button>
    </form>
  );
}
