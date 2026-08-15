import Link from "next/link";

import { BienCard } from "@/components/bien-card";
import { ImageSlot } from "@/components/image-slot";
import { RechercheRapide } from "@/components/recherche-rapide";
import { AGENCE, EXPERTISES } from "@/data/agence";
import { PHOTOS } from "@/data/photos";
import { countBiens, listFeatured } from "@/lib/repository";

const CHIFFRES = [
  { valeur: "184", legende: "Transactions accompagnées en 2025" },
  { valeur: "42j", legende: "Délai moyen de vente" },
  { valeur: "98%", legende: "Du prix d'estimation obtenu" },
  { valeur: "17", legende: "Années sur le marché de Lomé" },
] as const;

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

export default async function AccueilPage() {
  const [featured, total] = await Promise.all([listFeatured(), countBiens()]);

  return (
    <>
      <section
        style={{
          minHeight: "min(760px, calc(100svh - 72px))",
          background: "var(--color-accent-900)",
          color: "var(--color-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="grayscale-photo absolute inset-0 opacity-55">
          <ImageSlot photo={PHOTOS.palaisJustice} fill priority sizes="100vw" />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, color-mix(in srgb, var(--color-accent-900) 95%, transparent) 0%, color-mix(in srgb, var(--color-accent-900) 72%, transparent) 48%, color-mix(in srgb, var(--color-accent-900) 20%, transparent) 100%)",
          }}
        />

        <div
          style={{
            ...SHELL,
            position: "relative",
            minHeight: "inherit",
            display: "grid",
            alignContent: "center",
            paddingTop: "clamp(84px, 10vw, 140px)",
            paddingBottom: "clamp(120px, 13vw, 180px)",
          }}
        >
          <span style={{ ...kicker, marginBottom: 28 }}>Agence immobilière à Coconut</span>
          <h1
            style={{
              maxWidth: "920px",
              fontSize: "clamp(54px, 8vw, 118px)",
              lineHeight: 0.96,
              margin: "0 0 30px",
            }}
          >
            L&apos;immobilier à Lomé, traité avec calme et précision.
          </h1>
          <p
            style={{
              maxWidth: "56ch",
              fontSize: "clamp(17px, 1.6vw, 21px)",
              lineHeight: 1.7,
              margin: "0 0 38px",
              color: "color-mix(in srgb, var(--color-bg) 82%, transparent)",
            }}
          >
            {AGENCE.tagline}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/biens" className="btn btn-primary">
              {AGENCE.ctaLabel}
            </Link>
            <Link
              href="/estimation"
              className="btn btn-secondary"
              style={{
                color: "var(--color-bg)",
                background: "color-mix(in srgb, var(--color-bg) 9%, transparent)",
                borderColor: "color-mix(in srgb, var(--color-bg) 26%, transparent)",
              }}
            >
              Estimer mon bien
            </Link>
          </div>
        </div>
      </section>

      <RechercheRapide />

      <section
        style={{
          ...SHELL,
          paddingTop: "clamp(72px, 8vw, 112px)",
          paddingBottom: "clamp(48px, 6vw, 76px)",
        }}
      >
        <div
          className="split"
          style={
            {
              "--split": "0.9fr 1.4fr",
              "--split-gap": "clamp(36px, 6vw, 90px)",
              alignItems: "end",
            } as React.CSSProperties
          }
        >
          <div>
            <span style={{ ...kicker, marginBottom: 22 }}>Maison indépendante</span>
            <h2 style={{ fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: 1 }}>
              Peu de mandats. Des dossiers connus par coeur.
            </h2>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(16px, 1.4vw, 19px)",
              color: "color-mix(in srgb, var(--color-text) 74%, transparent)",
            }}
          >
            Chaque bien publié a été visité, documenté et repositionné au prix du
            marché réel. L&apos;agence privilégie la justesse au volume, avec un
            interlocuteur qui suit le dossier jusqu&apos;à la signature.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(18px, 4vw, 40px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(45%, 190px), 1fr))",
            borderTop: "1px solid var(--color-divider)",
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          {CHIFFRES.map((c) => (
            <div
              key={c.legende}
              style={{
                padding: "clamp(22px, 3vw, 34px)",
                borderRight: "1px solid var(--color-divider)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(38px, 4vw, 58px)",
                  lineHeight: 1,
                  color: "var(--color-accent)",
                  margin: "0 0 10px",
                }}
              >
                {c.valeur}
              </p>
              <p
                style={{
                  fontSize: 11.5,
                  fontWeight: 800,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "color-mix(in srgb, var(--color-text) 62%, transparent)",
                  margin: 0,
                }}
              >
                {c.legende}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...SHELL, paddingBottom: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 34,
          }}
        >
          <div>
            <span style={{ ...kicker, marginBottom: 16 }}>Sélection privée</span>
            <h2 style={{ fontSize: "clamp(36px, 4.2vw, 60px)", lineHeight: 1, margin: 0 }}>
              Biens choisis du moment
            </h2>
          </div>
          <Link
            href="/biens"
            style={{
              fontSize: 11.5,
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Voir les {total} biens →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
            gap: "clamp(22px, 3vw, 38px)",
          }}
        >
          {featured.map((bien) => (
            <BienCard key={bien.ref} bien={bien} />
          ))}
        </div>
      </section>

      <section
        className="split"
        style={
          {
            ...SHELL,
            "--split": "0.8fr 1.2fr",
            "--split-gap": "clamp(36px, 6vw, 86px)",
            alignItems: "start",
          } as React.CSSProperties
        }
      >
        <div>
          <span style={{ ...kicker, marginBottom: 18 }}>Nos expertises</span>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.04 }}>
            Une pratique sobre, des preuves solides.
          </h2>
        </div>

        <div>
          {EXPERTISES.map((e) => (
            <div
              key={e.num}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: "18px 30px",
                padding: "26px 0",
                borderTop: "1px solid var(--color-divider)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 22,
                  color: "var(--color-gold)",
                  margin: 0,
                }}
              >
                {e.num}
              </p>
              <div>
                <h3 style={{ fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: 1.12 }}>
                  {e.titre}
                </h3>
                <p
                  style={{
                    fontSize: 15.5,
                    margin: 0,
                    maxWidth: "62ch",
                    color: "color-mix(in srgb, var(--color-text) 72%, transparent)",
                  }}
                >
                  {e.texte}
                </p>
              </div>
            </div>
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
          className="split"
          style={
            {
              "--split": "0.95fr 1.05fr",
              "--split-gap": "0px",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              background: "var(--color-accent-900)",
              color: "var(--color-bg)",
              boxShadow: "var(--shadow-lg)",
            } as React.CSSProperties
          }
        >
          <div className="relative min-h-[360px] grayscale-photo">
            <ImageSlot
              photo={PHOTOS.assembleeNationale}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <div style={{ padding: "clamp(34px, 5vw, 68px)" }}>
            <span style={{ ...kicker, marginBottom: 20 }}>Estimation sous 48 h</span>
            <h2 style={{ fontSize: "clamp(34px, 4.5vw, 64px)", lineHeight: 1 }}>
              Combien vaut votre bien sur le marché réel ?
            </h2>
            <p
              style={{
                maxWidth: "52ch",
                color: "color-mix(in srgb, var(--color-bg) 78%, transparent)",
                margin: "18px 0 30px",
              }}
            >
              45 minutes sur place, un rapport écrit, des comparables défendables
              et une stratégie de prix claire. Sans engagement de mandat.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/estimation" className="btn btn-primary">
                Demander une estimation
              </Link>
              <Link
                href="/agence"
                className="btn btn-secondary"
                style={{
                  color: "var(--color-bg)",
                  background: "transparent",
                  borderColor: "color-mix(in srgb, var(--color-bg) 24%, transparent)",
                }}
              >
                Découvrir l&apos;agence
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
