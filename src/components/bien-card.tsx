import Link from "next/link";

import { FavoriButton } from "@/components/favori-button";
import { ImageSlot } from "@/components/image-slot";
import { bienHref, prixLabel } from "@/lib/format";
import type { Bien } from "@/lib/types";

const meta = "color-mix(in srgb, var(--color-text) 70%, transparent)";

const PHOTOS: Record<string, string> = {
  "VI-2411":
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  "AP-2388":
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  "VI-1902":
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
  "MA-1877":
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1400&q=85",
  "PR-1544":
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
  "NE-3120":
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  "LO-4088":
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
  "IN-2701":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
  "CO-1130":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  "TE-0765":
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
};

export function BienCard({ bien }: { bien: Bien }) {
  const href = bienHref(bien);

  return (
    <article
      className="flex flex-col"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 82%, white)",
        border: "1px solid color-mix(in srgb, var(--color-text) 10%, transparent)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <Link href={href} className="grayscale-photo relative block">
        <ImageSlot
          src={PHOTOS[bien.ref]}
          ratio="4 / 3"
          placeholder="Photo du bien"
          alt={bien.titre}
        />
      </Link>

      <div style={{ padding: "24px 24px 0", display: "flex", gap: 8, flexWrap: "wrap" }}>
        <span className="tag tag-accent">{bien.statut}</span>
        <span className="tag tag-outline">{bien.type}</span>
      </div>

      <h3
        style={{
          fontSize: "clamp(25px, 2.1vw, 32px)",
          lineHeight: 1.16,
          margin: "16px 24px 10px",
        }}
      >
        <Link href={href} style={{ color: "inherit" }}>
          {bien.titre}
        </Link>
      </h3>

      <p
        style={{
          margin: "0 0 20px",
          padding: "0 24px",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: meta,
        }}
      >
        {bien.ville} · {bien.surface} m²
        {bien.pieces > 0 ? ` · ${bien.pieces} pièces` : ""}
      </p>

      <p
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: "var(--font-heading-weight)",
          fontSize: 28,
          margin: "auto 24px 20px",
          paddingTop: 18,
          borderTop: "1px solid var(--color-divider)",
        }}
      >
        {prixLabel(bien)}
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "0 24px 24px" }}>
        <Link href={href} className="btn btn-secondary">
          Voir le bien
        </Link>
        <FavoriButton bienRef={bien.ref} />
      </div>
    </article>
  );
}
