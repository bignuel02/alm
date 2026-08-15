import Link from "next/link";

import { AGENCE } from "@/data/agence";

const COLONNES = [
  {
    titre: "Acheter",
    liens: [
      { label: "Villas et maisons", href: "/biens?type=Villa" },
      { label: "Appartements", href: "/biens?type=Appartement" },
      { label: "Biens de prestige", href: "/biens?type=Prestige" },
      { label: "Neuf, terrains & investissement", href: "/biens?type=Neuf" },
    ],
  },
  {
    titre: "Vendre & louer",
    liens: [
      { label: "Estimation gratuite", href: "/estimation" },
      { label: "Gestion locative", href: "/contact" },
      { label: "Commerces & bureaux", href: "/biens?type=Commerce" },
      { label: "Terrains", href: "/biens?type=Terrain" },
    ],
  },
  {
    titre: "Agence",
    liens: [
      { label: "L’équipe", href: "/agence" },
      { label: "Contact", href: "/contact" },
      { label: "Honoraires", href: "/honoraires" },
      { label: "Mentions légales", href: "/honoraires" },
      { label: "Crédits photo", href: "/credits" },
    ],
  },
] as const;

const muted = "color-mix(in srgb, var(--color-text) 70%, transparent)";

export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "2px solid var(--color-divider)",
        background: "var(--color-bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(56px, 6vw, 88px) clamp(20px, 4vw, 40px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-heading-weight)",
              fontSize: 20,
              margin: "0 0 12px",
            }}
          >
            {AGENCE.nom}
          </p>
          <p style={{ margin: 0, fontSize: 14, color: muted }}>
            Rue des Cocotiers, Coconut — Lomé, Togo
            <br />
            {AGENCE.telephone}
          </p>
        </div>

        {COLONNES.map((colonne) => (
          <div key={colonne.titre}>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: muted,
              }}
            >
              {colonne.titre}
            </p>
            <div style={{ display: "grid", gap: 8, fontSize: 14 }}>
              {colonne.liens.map((lien) => (
                <Link key={lien.label} href={lien.href}>
                  {lien.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 40px) 48px",
          fontSize: 12.5,
          color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
        }}
      >
        <p style={{ margin: 0 }}>
          Agence immobilière enregistrée à Lomé — RCCM TG-LOM 2009 B 4187, NIF
          1000 428 517. Honoraires de 5 % à la charge de l’acquéreur, barème
          affiché en agence. Prix en francs CFA. Biens présentés à titre
          d’exemple.
        </p>
      </div>
    </footer>
  );
}
