import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ImageSlot } from "@/components/image-slot";
import { Monogramme } from "@/components/monogramme";
import { AGENCE } from "@/data/agence";
import { photoPrincipale, photosDuBien } from "@/data/photos";
import { docsLignes, prixNote, specs } from "@/lib/fiche";
import { bienHref, prixLabel } from "@/lib/format";
import { getBien, listRefs, listSimilar } from "@/lib/repository";

import { VisiteForm } from "./visite-form";

export async function generateStaticParams() {
  const refs = await listRefs();
  return refs.map((ref) => ({ ref: ref.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: PageProps<"/biens/[ref]">): Promise<Metadata> {
  const { ref } = await params;
  const bien = await getBien(ref);
  if (!bien) return { title: "Bien introuvable" };
  return {
    title: bien.titre,
    description: `${bien.ville} — ${bien.surface} m² — ${prixLabel(bien)}. ${bien.badge}.`,
  };
}

const muted = "color-mix(in srgb, var(--color-text) 72%, transparent)";

const SHELL = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "32px clamp(18px, 4vw, 40px) clamp(72px, 8vw, 120px)",
} as const;

export default async function FicheBienPage({ params }: PageProps<"/biens/[ref]">) {
  const { ref } = await params;
  const bien = await getBien(ref);
  if (!bien) notFound();

  const similar = await listSimilar(bien.ref, 3);
  const lignes = docsLignes(bien);
  const galerie = photosDuBien(bien.ref);

  return (
    <div style={SHELL}>
      <Link
        href="/biens"
        style={{
          fontSize: 11.5,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        ← Retour au portefeuille
      </Link>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "32px 0 20px" }}>
        <span className="tag tag-accent">{bien.statut}</span>
        <span className="tag tag-outline">{bien.type}</span>
        <span className="tag tag-neutral">réf. {bien.ref}</span>
      </div>

      {/* ── Titre + prix ─────────────────────────────────────────────── */}
      <header
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          gap: "clamp(16px, 3vw, 32px)",
          flexWrap: "wrap",
          borderBottom: "2px solid var(--color-divider)",
          paddingBottom: 28,
        }}
      >
        <div style={{ minWidth: "min(100%, 280px)", flex: "1 1 340px" }}>
          <h1
            style={{
              fontSize: "clamp(32px, 4.4vw, 64px)",
              lineHeight: 1.04,
              margin: "0 0 12px",
              maxWidth: "24ch",
            }}
          >
            {bien.titre}
          </h1>
          <p style={{ margin: 0, fontSize: 16, color: "color-mix(in srgb, var(--color-text) 75%, transparent)" }}>
            {bien.ville}
          </p>
        </div>

        <div>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-heading-weight)",
              fontSize: "clamp(28px, 3.4vw, 38px)",
              lineHeight: 1,
              margin: "0 0 8px",
              color: "var(--color-accent)",
            }}
          >
            {prixLabel(bien)}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 12.5,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: muted,
            }}
          >
            {prixNote(bien)}
          </p>
        </div>
      </header>

      {/* ── Galerie ──────────────────────────────────────────────────── */}
      <div
        className="grayscale-photo"
        style={{
          margin: "32px 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: 2,
        }}
      >
        <ImageSlot
          photo={galerie[0]}
          ratio="16 / 10"
          placeholder="Photo principale"
          alt={bien.titre}
          sizes="(max-width: 900px) 100vw, 55vw"
        />
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 2 }}>
          <ImageSlot
            photo={galerie[1]}
            ratio="16 / 5"
            placeholder="Photo 2"
            sizes="(max-width: 900px) 100vw, 40vw"
          />
          <ImageSlot
            photo={galerie[2]}
            ratio="16 / 5"
            placeholder="Photo 3"
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(32px, 4vw, 56px)",
          alignItems: "start",
        }}
      >
        {/* ── Colonne principale ─────────────────────────────────────── */}
        <div style={{ minWidth: 0 }}>
          <div className="table-scroll" style={{ marginBottom: 40 }}>
            <table className="table" style={{ minWidth: 380 }}>
              <tbody>
                {specs(bien).map((s) => (
                  <tr key={s.k}>
                    <th scope="row" style={{ textAlign: "left", width: "40%" }}>
                      {s.k}
                    </th>
                    <td>{s.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: "clamp(26px, 3vw, 32px)", margin: "0 0 20px" }}>
            Description
          </h2>
          <p
            style={{
              fontSize: 16.5,
              margin: "0 0 32px",
              maxWidth: "62ch",
              color: "color-mix(in srgb, var(--color-text) 84%, transparent)",
            }}
          >
            {bien.description}
          </p>

          <h2 style={{ fontSize: "clamp(26px, 3vw, 32px)", margin: "0 0 24px" }}>
            Prestations
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
              gap: "12px 32px",
            }}
          >
            {bien.prestations.map((p) => (
              <li
                key={p}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "baseline",
                  fontSize: 15.5,
                  borderBottom: "1px solid var(--color-divider)",
                  paddingBottom: 10,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: "var(--color-accent)",
                    flex: "0 0 auto",
                  }}
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: "clamp(26px, 3vw, 32px)", margin: "0 0 24px" }}>
            Dossier juridique
          </h2>
          <div style={{ borderTop: "2px solid var(--color-divider)" }}>
            {lignes.map((d) => (
              <div
                key={d.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 24,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--color-divider)",
                }}
              >
                <span style={{ fontSize: 15.5 }}>{d.label}</span>
                <span
                  className={d.fourni ? "tag tag-neutral" : "tag tag-accent"}
                  style={{ flex: "0 0 auto" }}
                >
                  {d.mark}
                </span>
              </div>
            ))}
          </div>
          <p style={{ margin: "16px 0 0", fontSize: 14, color: muted }}>
            Chaque pièce est vérifiée à l’agence avant la mise en vente. Les
            documents originaux sont consultables sur place, en présence du
            vendeur ou du notaire.
          </p>
        </div>

        {/* ── Négociateur + visite ───────────────────────────────────── */}
        <aside
          style={{
            border: "1px solid color-mix(in srgb, var(--color-text) 12%, transparent)",
            borderRadius: "var(--radius-lg)",
            background: "color-mix(in srgb, var(--color-bg) 82%, white)",
            boxShadow: "var(--shadow-sm)",
            padding: "clamp(22px, 3vw, 28px)",
            position: "sticky",
            top: 96,
            minWidth: 0,
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: 20,
            }}
          >
            Votre négociateur
          </span>

          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              marginBottom: 24,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "0 0 auto", width: 96 }}>
              <Monogramme
                nom={bien.agent}
                ratio="4 / 5"
                className="rounded-[var(--radius-md)] overflow-hidden"
              />
            </div>
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-heading-weight)",
                  fontSize: 18,
                  margin: "0 0 4px",
                }}
              >
                {bien.agent}
              </p>
              <p style={{ margin: 0, fontSize: 14, color: muted }}>{bien.agentRole}</p>
              <p style={{ margin: "4px 0 0", fontSize: 14 }}>
                <a href={`tel:${AGENCE.telephone.replaceAll(" ", "")}`}>
                  {AGENCE.telephone}
                </a>
              </p>
            </div>
          </div>

          <VisiteForm bienRef={bien.ref} agent={bien.agent} />
        </aside>
      </div>

      {/* ── Biens similaires ─────────────────────────────────────────── */}
      {similar.length > 0 ? (
        <div
          style={{
            borderTop: "2px solid var(--color-divider)",
            marginTop: 64,
            paddingTop: 40,
          }}
        >
          <h2 style={{ fontSize: "clamp(26px, 3vw, 32px)", margin: "0 0 32px" }}>
            Biens similaires
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: "clamp(28px, 4vw, 48px) clamp(20px, 3vw, 40px)",
            }}
          >
            {similar.map((b) => (
              <article key={b.ref} className="relative" style={{ minWidth: 0 }}>
                {/* Image hors du lien : le crédit photo porte déjà un <a>. */}
                <div className="grayscale-photo relative">
                  <ImageSlot
                    photo={photoPrincipale(b.ref)}
                    ratio="4 / 3"
                    placeholder="Photo du bien"
                    alt={b.titre}
                    sizes="(max-width: 700px) 100vw, 30vw"
                  />
                </div>
                <h3
                  style={{
                    fontSize: "clamp(21px, 2vw, 26px)",
                    lineHeight: 1.18,
                    margin: "20px 0 10px",
                  }}
                >
                  <Link
                    href={bienHref(b)}
                    className="stretched-link"
                    style={{ color: "inherit" }}
                  >
                    {b.titre}
                  </Link>
                </h3>
                <p
                  style={{
                    margin: "0 0 20px",
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: muted,
                  }}
                >
                  {b.ville} · {prixLabel(b)}
                </p>
                <Link href={bienHref(b)} className="btn btn-secondary above-stretched">
                  Voir le bien
                </Link>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
