import Link from "next/link";

import { FavoriButton } from "@/components/favori-button";
import { ImageSlot } from "@/components/image-slot";
import { photoPrincipale } from "@/data/photos";
import { bienHref, prixLabel } from "@/lib/format";
import type { Bien } from "@/lib/types";

const meta = "color-mix(in srgb, var(--color-text) 70%, transparent)";

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
          photo={photoPrincipale(bien.ref)}
          ratio="4 / 3"
          placeholder="Photo du bien"
          alt={bien.titre}
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
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
