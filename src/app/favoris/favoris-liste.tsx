"use client";

import Link from "next/link";

import { BienCard } from "@/components/bien-card";
import { useFavoris } from "@/components/use-favoris";
import { BIENS } from "@/data/biens";

const muted = "color-mix(in srgb, var(--color-text) 70%, transparent)";

export function FavorisListe() {
  const { refs } = useFavoris();
  const biens = BIENS.filter((b) => refs.includes(b.ref));

  if (biens.length === 0) {
    return (
      <div style={{ borderTop: "2px solid var(--color-divider)", paddingTop: 48 }}>
        <h3 style={{ fontSize: 28 }}>Aucun bien mis de côté</h3>
        <p
          style={{
            maxWidth: "52ch",
            color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
          }}
        >
          Ajoutez des biens depuis le portefeuille : ils resteront ici, sur cet
          appareil, jusqu’à votre prochaine visite.
        </p>
        <Link href="/biens" className="btn btn-primary">
          Parcourir les biens
        </Link>
      </div>
    );
  }

  return (
    <>
      <p
        style={{
          fontSize: 11.5,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: muted,
          marginBottom: 48,
        }}
      >
        {biens.length} bien{biens.length > 1 ? "s" : ""} mis de côté
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
          gap: "clamp(32px, 4vw, 64px) clamp(24px, 3vw, 48px)",
        }}
      >
        {biens.map((bien) => (
          <BienCard key={bien.ref} bien={bien} />
        ))}
      </div>
    </>
  );
}
