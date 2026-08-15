import type { Metadata } from "next";
import Link from "next/link";

import { ImageSlot } from "@/components/image-slot";
import { Monogramme } from "@/components/monogramme";
import { AGENCE, EQUIPE, VALEURS } from "@/data/agence";
import { PHOTOS } from "@/data/photos";

export const metadata: Metadata = {
  title: "L'agence",
  description:
    "Alassani Immobilier: une trentaine de biens au portefeuille, un négociateur par dossier, à Lomé depuis 2009.",
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

export default function AgencePage() {
  return (
    <>
      <section
        style={{
          ...SHELL,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: "clamp(36px, 6vw, 88px)",
          alignItems: "center",
        }}
      >
        <div>
          <span style={{ ...kicker, marginBottom: 22 }}>Depuis 2009 à Coconut</span>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.98 }}>
            Une agence courte, précise, très impliquée.
          </h1>
          <p
            style={{
              maxWidth: "58ch",
              fontSize: "clamp(16px, 1.4vw, 19px)",
              color: "color-mix(in srgb, var(--color-text) 74%, transparent)",
              margin: "24px 0 34px",
            }}
          >
            {AGENCE.nom} privilégie les dossiers maîtrisés: peu de mandats,
            documents contrôlés, estimation défendable et un seul interlocuteur
            jusqu&apos;à la signature.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Confier un bien
            </Link>
            <Link href="/biens" className="btn btn-secondary">
              Voir le portefeuille
            </Link>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.82fr 1fr",
            gap: 16,
            alignItems: "end",
          }}
        >
          <div className="grayscale-photo relative min-h-[360px]" style={{ borderRadius: 8, overflow: "hidden" }}>
            <ImageSlot photo={PHOTOS.residenceBlewu} fill priority sizes="(max-width: 900px) 45vw, 22vw" />
          </div>
          <div className="grayscale-photo relative min-h-[500px]" style={{ borderRadius: 8, overflow: "hidden" }}>
            <ImageSlot photo={PHOTOS.villaVerdure2} fill priority sizes="(max-width: 900px) 55vw, 28vw" />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(18px, 4vw, 40px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: 1,
            background: "var(--color-divider)",
            border: "1px solid var(--color-divider)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {VALEURS.map((valeur) => (
            <article
              key={valeur.num}
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
                {valeur.num}
              </p>
              <h2 style={{ fontSize: "clamp(26px, 2.5vw, 36px)" }}>{valeur.titre}</h2>
              <p style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}>
                {valeur.texte}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section style={SHELL}>
        <div style={{ maxWidth: 720, marginBottom: 36 }}>
          <span style={{ ...kicker, marginBottom: 18 }}>L&apos;équipe</span>
          <h2 style={{ fontSize: "clamp(38px, 5vw, 70px)", lineHeight: 1 }}>
            Des interlocuteurs qui connaissent leur secteur.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "clamp(20px, 3vw, 34px)",
          }}
        >
          {EQUIPE.map((membre) => (
            <article
              key={membre.nom}
              style={{
                background: "color-mix(in srgb, var(--color-bg) 82%, white)",
                border: "1px solid color-mix(in srgb, var(--color-text) 10%, transparent)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <Monogramme nom={membre.nom} />
              <div style={{ padding: 24 }}>
                <span className="tag tag-outline">{membre.role}</span>
                <h3 style={{ fontSize: 30, marginTop: 16 }}>{membre.nom}</h3>
                <p style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}>
                  {membre.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(18px, 4vw, 40px) clamp(80px, 8vw, 120px)",
        }}
      >
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            background: "var(--color-accent-900)",
            color: "var(--color-bg)",
            padding: "clamp(34px, 5vw, 68px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: 24,
            alignItems: "end",
          }}
        >
          <div>
            <span style={{ ...kicker, marginBottom: 18 }}>Prochaine étape</span>
            <h2 style={{ fontSize: "clamp(34px, 4.4vw, 64px)", lineHeight: 1 }}>
              Parlons de votre projet, sans pression commerciale.
            </h2>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
