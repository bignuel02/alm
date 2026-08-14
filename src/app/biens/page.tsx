import type { Metadata } from "next";
import Link from "next/link";

import { BienCard } from "@/components/bien-card";
import { listBiens } from "@/lib/repository";

export const metadata: Metadata = {
  title: "Le portefeuille",
  description:
    "Villas, appartements, terrains titrés et biens de prestige à Lomé — chaque dossier vérifié avant mise en vente.",
};

export default async function BiensPage({ searchParams }: PageProps<"/biens">) {
  const params = await searchParams;
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

  const biens = await listBiens({
    q: one(params.q),
    type: one(params.type),
    statut: one(params.statut),
    budgetMax: one(params.budget),
    tri: one(params.tri),
  });

  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "clamp(56px, 6vw, 88px) clamp(20px, 4vw, 40px) clamp(80px, 8vw, 120px)",
      }}
    >
      <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 1.02 }}>
        Le portefeuille
      </h1>

      <p
        style={{
          fontSize: 11.5,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
          marginBottom: 48,
        }}
      >
        {biens.length} bien{biens.length > 1 ? "s" : ""}
        {biens.length > 1 ? " disponibles" : " disponible"}
      </p>

      {biens.length === 0 ? (
        <div style={{ borderTop: "2px solid var(--color-divider)", paddingTop: 48 }}>
          <h3 style={{ fontSize: 28 }}>Aucun bien ne correspond</h3>
          <p
            style={{
              maxWidth: "52ch",
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            }}
          >
            Élargissez la recherche, ou dites-nous ce que vous cherchez : la
            moitié de nos ventes se font avant publication.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/biens" className="btn btn-primary">
              Voir tous les biens
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Créer une alerte
            </Link>
          </div>
        </div>
      ) : (
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
      )}
    </section>
  );
}
