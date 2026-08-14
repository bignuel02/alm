import Link from "next/link";

import { FavoriButton } from "@/components/favori-button";
import { ImageSlot } from "@/components/image-slot";
import { bienHref, prixLabel } from "@/lib/format";
import type { Bien } from "@/lib/types";

const meta = "color-mix(in srgb, var(--color-text) 72%, transparent)";

export function BienCard({ bien }: { bien: Bien }) {
  const href = bienHref(bien);

  return (
    <article
      className="flex flex-col"
      style={{ background: "var(--color-bg)" }}
    >
      <Link href={href} className="grayscale-photo relative block">
        <ImageSlot ratio="4 / 3" placeholder="Photo du bien" alt={bien.titre} />
      </Link>

      <div style={{ padding: "24px 0 0", display: "flex", gap: 8, flexWrap: "wrap" }}>
        <span className="tag tag-accent">{bien.statut}</span>
        <span className="tag tag-outline">{bien.type}</span>
      </div>

      <h3
        style={{
          fontSize: "clamp(26px, 2.1vw, 32px)",
          lineHeight: 1.18,
          margin: "16px 0 10px",
        }}
      >
        <Link href={href} style={{ color: "inherit" }}>
          {bien.titre}
        </Link>
      </h3>

      <p
        style={{
          margin: "0 0 20px",
          fontSize: 12,
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
          margin: "auto 0 20px",
          paddingTop: 18,
          borderTop: "1px solid var(--color-divider)",
        }}
      >
        {prixLabel(bien)}
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Link href={href} className="btn btn-secondary">
          Voir le bien
        </Link>
        <FavoriButton bienRef={bien.ref} />
      </div>
    </article>
  );
}
