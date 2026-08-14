"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { BUDGETS, TOUS_TYPES, TYPES } from "@/data/agence";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  marginBottom: 10,
  color: "color-mix(in srgb, var(--color-text) 72%, transparent)",
};

export function RechercheRapide() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [type, setType] = useState(TOUS_TYPES);
  const [budget, setBudget] = useState("0");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (type !== TOUS_TYPES) params.set("type", type);
    if (budget !== "0") params.set("budget", budget);
    const qs = params.toString();
    router.push(qs ? `/biens?${qs}` : "/biens");
  }

  return (
    <section
      style={{
        maxWidth: 1180,
        margin: "clamp(-44px, -3vw, -24px) auto 0",
        padding: "0 clamp(18px, 4vw, 40px)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <form
        onSubmit={submit}
        style={{
          border: "1px solid color-mix(in srgb, var(--color-text) 10%, transparent)",
          borderRadius: "var(--radius-lg)",
          background: "color-mix(in srgb, var(--color-bg) 86%, white)",
          boxShadow: "var(--shadow-md)",
          padding: "clamp(22px, 3vw, 34px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 16,
          alignItems: "end",
        }}
      >
        <label className="field" style={{ display: "block" }}>
          <span style={labelStyle}>Ville ou quartier</span>
          <input
            className="input"
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Coconut, Baguida, Agoè..."
          />
        </label>

        <label className="field" style={{ display: "block" }}>
          <span style={labelStyle}>Type de bien</span>
          <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="field" style={{ display: "block" }}>
          <span style={labelStyle}>Budget maximum</span>
          <select
            className="input"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className="btn btn-primary" style={{ minHeight: 43 }}>
          Rechercher
        </button>
      </form>
    </section>
  );
}
