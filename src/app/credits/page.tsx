import type { Metadata } from "next";
import Link from "next/link";

import { ImageSlot } from "@/components/image-slot";
import { TOUTES_PHOTOS } from "@/data/photos";

export const metadata: Metadata = {
  title: "Crédits photographiques",
  description:
    "Auteurs, licences et sources des photographies utilisées sur le site.",
};

const muted = "color-mix(in srgb, var(--color-text) 72%, transparent)";

export default function CreditsPage() {
  return (
    <section
      style={{
        maxWidth: 940,
        margin: "0 auto",
        padding: "clamp(64px, 7vw, 104px) clamp(18px, 4vw, 40px) clamp(80px, 8vw, 120px)",
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-gold)",
          marginBottom: 22,
        }}
      >
        Crédits
      </span>

      <h1 style={{ fontSize: "clamp(40px, 5.5vw, 74px)", lineHeight: 1 }}>
        Photographies
      </h1>

      <p style={{ maxWidth: "60ch", fontSize: 17, color: muted, margin: "24px 0 12px" }}>
        Les photographies du site proviennent de Wikimedia Commons et montrent
        des bâtiments réels de Lomé. Elles illustrent la ville où travaille
        l’agence — elles ne représentent aucun des biens du portefeuille, qui
        est présenté à titre d’exemple.
      </p>

      <p style={{ maxWidth: "60ch", color: muted, marginBottom: 56 }}>
        Chaque image est réutilisée sous sa licence d’origine, avec le crédit
        de son auteur. Les licences CC BY et CC BY-SA autorisent cet usage à
        condition que l’attribution reste visible.
      </p>

      <div style={{ display: "grid", gap: "clamp(28px, 4vw, 48px)" }}>
        {TOUTES_PHOTOS.map((photo) => (
          <article
            key={photo.slug}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "clamp(20px, 3vw, 40px)",
              alignItems: "start",
              paddingTop: 28,
              borderTop: "1px solid var(--color-divider)",
            }}
          >
            <div
              className="relative"
              style={{ borderRadius: "var(--radius-md)", overflow: "hidden" }}
            >
              <ImageSlot
                src={photo.src}
                alt={photo.sujet}
                ratio="3 / 2"
                sizes="(max-width: 700px) 100vw, 320px"
              />
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(21px, 2vw, 27px)", lineHeight: 1.2 }}>
                {photo.sujet}
              </h2>
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "6px 18px",
                  margin: "18px 0 0",
                  fontSize: 14,
                }}
              >
                <dt style={{ color: muted }}>Auteur</dt>
                <dd style={{ margin: 0 }}>{photo.auteur}</dd>

                <dt style={{ color: muted }}>Licence</dt>
                <dd style={{ margin: 0 }}>
                  <a href={photo.licenceUrl} target="_blank" rel="noopener noreferrer">
                    {photo.licence}
                  </a>
                </dd>

                <dt style={{ color: muted }}>Source</dt>
                <dd style={{ margin: 0 }}>
                  <a href={photo.source} target="_blank" rel="noopener noreferrer">
                    {photo.titreOriginal}
                  </a>
                </dd>
              </dl>
            </div>
          </article>
        ))}
      </div>

      <p style={{ marginTop: 56, fontSize: 14, color: muted }}>
        Les portraits de l’équipe sont remplacés par des monogrammes : aucune
        photographie de personne réelle n’est utilisée pour illustrer un
        négociateur.
      </p>

      <Link href="/" className="btn btn-secondary" style={{ marginTop: 28 }}>
        ← Retour à l’accueil
      </Link>
    </section>
  );
}
