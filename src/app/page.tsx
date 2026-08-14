import Link from "next/link";

import { BienCard } from "@/components/bien-card";
import { ImageSlot } from "@/components/image-slot";
import { RechercheRapide } from "@/components/recherche-rapide";
import { AGENCE, EXPERTISES } from "@/data/agence";
import { countBiens, listFeatured } from "@/lib/repository";

const CHIFFRES = [
  { valeur: "184", legende: "Transactions accompagnées en 2025" },
  { valeur: "42j", legende: "Délai moyen de vente" },
  { valeur: "98%", legende: "Du prix d’estimation obtenu" },
  { valeur: "17", legende: "Années sur le marché de Lomé" },
] as const;

const SHELL = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "clamp(72px, 8vw, 120px) clamp(20px, 4vw, 40px)",
} as const;

export default async function AccueilPage() {
  const [featured, total] = await Promise.all([listFeatured(), countBiens()]);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        style={{ background: "var(--color-accent-900)", color: "var(--color-bg)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            alignItems: "stretch",
          }}
        >
          <div style={{ padding: "clamp(64px, 8vw, 128px) clamp(24px, 5vw, 88px)" }}>
            <span
              style={{
                display: "block",
                fontSize: 11.5,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-accent-300)",
                marginBottom: 40,
              }}
            >
              Agence immobilière — Coconut, Lomé
            </span>

            <h1
              style={{
                fontWeight: 300,
                fontSize: "clamp(52px, 6.6vw, 104px)",
                lineHeight: 1.02,
                letterSpacing: "-0.005em",
                margin: "0 0 36px",
              }}
            >
              <span style={{ display: "block" }}>Des biens choisis.</span>
              <span
                style={{
                  display: "block",
                  fontStyle: "italic",
                  color: "var(--color-accent-300)",
                }}
              >
                Des conseils tenus.
              </span>
            </h1>

            <p
              style={{
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "46ch",
                margin: "0 0 44px",
                color: "color-mix(in srgb, var(--color-bg) 80%, transparent)",
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
                className="btn btn-ghost"
                style={{
                  color: "var(--color-bg)",
                  borderColor: "color-mix(in srgb, var(--color-bg) 55%, transparent)",
                }}
              >
                Estimer mon bien
              </Link>
            </div>
          </div>

          <div className="grayscale-photo relative" style={{ minHeight: 540 }}>
            <ImageSlot fill priority placeholder="Photo d’immeuble ou de façade" />
          </div>
        </div>
      </section>

      <RechercheRapide />

      {/* ── Chiffres ──────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(64px, 7vw, 104px) clamp(20px, 4vw, 40px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
          }}
        >
          {CHIFFRES.map((c) => (
            <div key={c.legende}>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 300,
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: 1.05,
                  color: "var(--color-accent)",
                  margin: "0 0 12px",
                }}
              >
                {c.valeur}
              </p>
              <p
                style={{
                  fontSize: 11.5,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                  margin: 0,
                }}
              >
                {c.legende}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr" style={{ maxWidth: 1280, margin: "0 auto" }} />

      {/* ── Sélection du moment ───────────────────────────────────────── */}
      <section style={{ ...SHELL, paddingBottom: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          <h2 style={{ fontSize: "clamp(32px, 3.4vw, 48px)", lineHeight: 1.1, margin: 0 }}>
            Sélection du moment
          </h2>
          <Link
            href="/biens"
            style={{
              fontSize: 11.5,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Voir les {total} biens →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
            gap: "clamp(32px, 4vw, 64px) clamp(24px, 3vw, 48px)",
          }}
        >
          {featured.map((bien) => (
            <BienCard key={bien.ref} bien={bien} />
          ))}
        </div>
      </section>

      {/* ── Nos expertises ────────────────────────────────────────────── */}
      <section style={SHELL}>
        <span
          style={{
            display: "block",
            fontSize: 11.5,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-accent-700)",
            marginBottom: 32,
          }}
        >
          Nos expertises
        </span>

        {EXPERTISES.map((e) => (
          <div
            key={e.num}
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(48px, 100px) minmax(220px, 360px) minmax(240px, 1fr)",
              gap: "20px 56px",
              alignItems: "baseline",
              padding: "28px 0",
              borderTop: "2px solid var(--color-divider)",
            }}
          >
            <p style={{ fontFamily: "var(--font-heading)", fontSize: 15, margin: 0 }}>
              {e.num}
            </p>
            <h3 style={{ fontSize: 28, lineHeight: 1.2, margin: 0 }}>{e.titre}</h3>
            <p
              style={{
                fontSize: 15.5,
                margin: 0,
                maxWidth: "56ch",
                color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
              }}
            >
              {e.texte}
            </p>
          </div>
        ))}
      </section>

      {/* ── Équipe + estimation ───────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "24px clamp(20px, 4vw, 40px) clamp(80px, 8vw, 120px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontSize: "clamp(30px, 3vw, 42px)", lineHeight: 1.12 }}>
            Cinq négociateurs, un seul dossier à la fois
          </h2>
          <p
            style={{
              fontSize: 15.5,
              maxWidth: "52ch",
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            }}
          >
            Le négociateur qui signe le mandat vous suit jusqu’à l’acte. Pas de
            transmission de dossier en cours de route, pas de standard à
            rappeler.
          </p>
          <Link href="/agence" className="btn btn-ghost">
            Découvrir l’équipe
          </Link>
        </div>

        <div
          style={{
            border: "2px solid var(--color-divider)",
            padding: "clamp(28px, 3vw, 44px)",
          }}
        >
          <h3 style={{ fontSize: 26, lineHeight: 1.2 }}>
            Combien vaut votre bien ? Réponse en 48 heures.
          </h3>
          <p
            style={{
              fontSize: 15,
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            }}
          >
            45 minutes sur place, un rapport écrit avec les biens comparables
            qui justifient la fourchette. Sans engagement de mandat.
          </p>
          <Link href="/estimation" className="btn btn-ghost">
            Demander une estimation gratuite
          </Link>
        </div>
      </section>
    </>
  );
}
