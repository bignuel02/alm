import type { Metadata } from "next";
import Link from "next/link";

import { AGENCE } from "@/data/agence";

export const metadata: Metadata = {
  title: "Honoraires & mentions légales",
  description:
    "Barème d’honoraires, mentions légales et traitement des données d’Alassani Immobilier — RCCM TG-LOM 2009 B 4187.",
};

const SHELL = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "clamp(56px, 6vw, 96px) clamp(18px, 4vw, 40px) clamp(80px, 8vw, 120px)",
} as const;

const muted = "color-mix(in srgb, var(--color-text) 72%, transparent)";

const kicker: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-gold)",
  marginBottom: 20,
};

const BAREME = [
  {
    prestation: "Vente",
    taux: "5 %",
    base: "du prix de vente",
    charge: "À la charge de l’acquéreur",
  },
  {
    prestation: "Location — entremise",
    taux: "1 mois",
    base: "de loyer hors charges",
    charge: "Partagé bailleur / locataire",
  },
  {
    prestation: "Gestion locative",
    taux: "8 %",
    base: "des loyers encaissés",
    charge: "À la charge du bailleur",
  },
  {
    prestation: "Estimation écrite",
    taux: "Gratuite",
    base: "sans engagement de mandat",
    charge: "—",
  },
];

const MENTIONS = [
  { k: "Raison sociale", v: `${AGENCE.nom}, agence immobilière` },
  { k: "Siège", v: "Rue des Cocotiers, Coconut — Lomé, Togo" },
  { k: "RCCM", v: "TG-LOM 2009 B 4187" },
  { k: "NIF", v: "1000 428 517" },
  { k: "Téléphone", v: AGENCE.telephone },
  { k: "Directeur de la publication", v: "Sofia Alassani" },
  { k: "Hébergeur", v: "À compléter avant mise en ligne" },
];

function Section({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: "clamp(48px, 6vw, 76px)" }}>
      <h2
        style={{
          fontSize: "clamp(26px, 3vw, 38px)",
          lineHeight: 1.1,
          paddingBottom: 16,
          borderBottom: "2px solid var(--color-divider)",
          marginBottom: 24,
        }}
      >
        {titre}
      </h2>
      {children}
    </section>
  );
}

export default function HonorairesPage() {
  return (
    <div style={SHELL}>
      <span style={kicker}>Informations légales</span>
      <h1 style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1 }}>
        Honoraires & mentions légales
      </h1>
      <p style={{ maxWidth: "60ch", fontSize: 17, color: muted, marginTop: 24 }}>
        Nos honoraires sont affichés en agence et rappelés sur chaque mandat.
        Rien n’est facturé avant la signature de l’acte ou du bail.
      </p>

      <Section titre="Barème">
        <div className="table-scroll">
          <table className="table" style={{ minWidth: 560 }}>
            <thead>
              <tr>
                <th scope="col">Prestation</th>
                <th scope="col">Taux</th>
                <th scope="col">Base de calcul</th>
                <th scope="col">Charge</th>
              </tr>
            </thead>
            <tbody>
              {BAREME.map((l) => (
                <tr key={l.prestation}>
                  <th scope="row" style={{ textAlign: "left", fontWeight: 500 }}>
                    {l.prestation}
                  </th>
                  <td style={{ color: "var(--color-accent)", whiteSpace: "nowrap" }}>
                    {l.taux}
                  </td>
                  <td>{l.base}</td>
                  <td>{l.charge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 16, fontSize: 14, color: muted }}>
          Barème en vigueur, exprimé toutes taxes comprises. Les frais de
          notaire, de bornage et d’enregistrement restent dus en sus et sont
          réglés directement aux professionnels concernés.
        </p>
      </Section>

      <Section titre="Mentions légales">
        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: "22px 40px",
            margin: 0,
          }}
        >
          {MENTIONS.map((m) => (
            <div key={m.k}>
              <dt
                style={{
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: muted,
                  marginBottom: 6,
                }}
              >
                {m.k}
              </dt>
              <dd style={{ margin: 0, fontSize: 16 }}>{m.v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section titre="Données personnelles">
        <p style={{ maxWidth: "68ch", color: "color-mix(in srgb, var(--color-text) 84%, transparent)" }}>
          Les informations saisies dans les formulaires d’estimation, de visite
          et de contact servent uniquement à traiter votre demande. Elles sont
          conservées le temps du suivi commercial, ne sont ni vendues ni cédées
          à des tiers, et vous pouvez en demander la suppression à tout moment
          en écrivant à l’agence.
        </p>
        <p style={{ maxWidth: "68ch", color: "color-mix(in srgb, var(--color-text) 84%, transparent)" }}>
          Les favoris que vous enregistrez restent sur votre appareil, dans le
          stockage local de votre navigateur. Ils ne sont pas transmis à
          l’agence.
        </p>
      </Section>

      <Section titre="À propos de ce site">
        <p style={{ maxWidth: "68ch", color: "color-mix(in srgb, var(--color-text) 84%, transparent)" }}>
          Les biens présentés le sont à titre d’exemple : références, prix et
          adresses sont fictifs et ne constituent pas une offre de vente. Les
          photographies illustrent la ville de Lomé et ne représentent pas les
          biens décrits — voir les{" "}
          <Link href="/credits">crédits photographiques</Link>.
        </p>
        <p style={{ maxWidth: "68ch", color: "color-mix(in srgb, var(--color-text) 84%, transparent)" }}>
          Le chat de l’agence répond à partir de réponses écrites d’avance. Il
          ne remplace pas un négociateur : pour un engagement, passez par le{" "}
          <Link href="/contact">formulaire de contact</Link> ou appelez
          l’agence.
        </p>
      </Section>

      <div style={{ display: "flex", gap: 12, marginTop: 48, flexWrap: "wrap" }}>
        <Link href="/biens" className="btn btn-secondary">
          Voir le portefeuille
        </Link>
        <Link href="/contact" className="btn btn-ghost">
          Nous écrire
        </Link>
      </div>
    </div>
  );
}
