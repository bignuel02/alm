import Link from "next/link";

/** Honest stub for a route whose design exists but isn't ported yet. */
export function PagePlaceholder({
  titre,
  resume,
  aFaire,
}: {
  titre: string;
  resume: string;
  aFaire: string[];
}) {
  return (
    <section
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "clamp(72px, 8vw, 120px) clamp(20px, 4vw, 40px)",
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: 11.5,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--color-accent-700)",
          marginBottom: 24,
        }}
      >
        Écran à porter
      </span>

      <h1 style={{ fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.05 }}>{titre}</h1>

      <p
        style={{
          fontSize: 17,
          maxWidth: "52ch",
          color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
        }}
      >
        {resume}
      </p>

      <div style={{ marginTop: 40, borderTop: "2px solid var(--color-divider)" }}>
        {aFaire.map((item, i) => (
          <div
            key={item}
            style={{
              display: "grid",
              gridTemplateColumns: "48px 1fr",
              gap: 24,
              padding: "20px 0",
              borderBottom: "1px solid var(--color-divider)",
            }}
          >
            <p style={{ fontFamily: "var(--font-heading)", fontSize: 15, margin: 0 }}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <p style={{ margin: 0, fontSize: 15.5 }}>{item}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
        <Link href="/biens" className="btn btn-secondary">
          Voir le portefeuille
        </Link>
        <Link href="/" className="btn btn-ghost">
          ← Retour à l’accueil
        </Link>
      </div>
    </section>
  );
}
