import type { Metadata } from "next";
import Link from "next/link";

import { ImageSlot } from "@/components/image-slot";
import { ETAPES_ESTIMATION } from "@/data/agence";
import { PHOTOS } from "@/data/photos";

import { EstimationForm } from "./estimation-form";

export const metadata: Metadata = {
  title: "Estimation gratuite",
  description:
    "45 minutes sur place, une fourchette de prix écrite sous 48 heures, sans engagement de mandat.",
};

const SHELL = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "clamp(72px, 8vw, 120px) clamp(18px, 4vw, 40px)",
} as const;

const kicker: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-gold)",
};

export default function EstimationPage() {
  return (
    <>
      <section
        style={{
          ...SHELL,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "clamp(36px, 6vw, 90px)",
          alignItems: "center",
        }}
      >
        <div>
          <span style={{ ...kicker, marginBottom: 22 }}>Estimation offerte</span>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.98 }}>
            Le prix juste, argumenté par le marché.
          </h1>
          <p
            style={{
              maxWidth: "58ch",
              fontSize: "clamp(16px, 1.4vw, 19px)",
              color: "color-mix(in srgb, var(--color-text) 74%, transparent)",
              margin: "24px 0 34px",
            }}
          >
            Nous venons sur place, contrôlons les éléments qui changent réellement
            la valeur et livrons une fourchette exploitable sous 48 heures.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#demande" className="btn btn-primary">
              Demander une estimation
            </a>
            <Link href="/biens" className="btn btn-secondary">
              Voir les références
            </Link>
          </div>
        </div>

        <div
          className="relative min-h-[520px] grayscale-photo"
          style={{
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <ImageSlot photo={PHOTOS.villaVerdure} fill priority />
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(18px, 4vw, 40px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 1,
            background: "var(--color-divider)",
            border: "1px solid var(--color-divider)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {ETAPES_ESTIMATION.map((etape) => (
            <article
              key={etape.num}
              style={{
                background: "color-mix(in srgb, var(--color-bg) 84%, white)",
                padding: "clamp(26px, 3vw, 38px)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 34,
                  color: "var(--color-gold)",
                  margin: "0 0 20px",
                }}
              >
                {etape.num}
              </p>
              <h2 style={{ fontSize: "clamp(26px, 2.5vw, 36px)" }}>{etape.titre}</h2>
              <p style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}>
                {etape.texte}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="demande"
        style={{
          ...SHELL,
          display: "grid",
          gridTemplateColumns: "minmax(min(100%, 320px), 0.8fr) minmax(min(100%, 420px), 1.2fr)",
          gap: "clamp(32px, 5vw, 72px)",
          alignItems: "start",
        }}
      >
        <div>
          <span style={{ ...kicker, marginBottom: 18 }}>Votre bien</span>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.03 }}>
            Quelques informations suffisent pour préparer la visite.
          </h2>
          <p style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}>
            Les champs servent à qualifier la demande avant rappel. Aucun mandat
            n&apos;est déclenché depuis ce formulaire.
          </p>
        </div>

        <EstimationForm />
      </section>
    </>
  );
}
