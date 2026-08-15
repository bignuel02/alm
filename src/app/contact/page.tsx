import type { Metadata } from "next";
import Link from "next/link";

import { ImageSlot } from "@/components/image-slot";
import { OuvrirChat } from "@/components/ouvrir-chat";
import { AGENCE } from "@/data/agence";
import { PHOTOS } from "@/data/photos";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Rue des Cocotiers, Coconut - Lomé, Togo. +228 22 61 04 87. Ouvert du lundi au samedi.",
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

const infos = [
  { label: "Adresse", value: "Rue des Cocotiers, Coconut - Lomé" },
  { label: "Téléphone", value: AGENCE.telephone },
  { label: "Horaires", value: "Lundi à vendredi, 8h30-18h30. Samedi sur rendez-vous." },
];

export default function ContactPage() {
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
          <span style={{ ...kicker, marginBottom: 22 }}>Nous rencontrer</span>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.98 }}>
            Passez à l&apos;agence ou envoyez-nous votre projet.
          </h1>
          <p
            style={{
              maxWidth: "58ch",
              fontSize: "clamp(16px, 1.4vw, 19px)",
              color: "color-mix(in srgb, var(--color-text) 74%, transparent)",
              margin: "24px 0 34px",
            }}
          >
            Achat, vente, location ou gestion: l&apos;équipe vous répond avec une
            première orientation claire avant de proposer une visite ou un
            rendez-vous.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={`tel:${AGENCE.telephone.replaceAll(" ", "")}`} className="btn btn-primary">
              Appeler l&apos;agence
            </a>
            <Link href="/estimation" className="btn btn-secondary">
              Estimer un bien
            </Link>
            <OuvrirChat className="btn btn-ghost" />
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
          <ImageSlot photo={PHOTOS.residenceBlewu} fill priority />
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(18px, 4vw, 40px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: 1,
            background: "var(--color-divider)",
            border: "1px solid var(--color-divider)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {infos.map((info) => (
            <article
              key={info.label}
              style={{
                background: "color-mix(in srgb, var(--color-bg) 84%, white)",
                padding: "clamp(26px, 3vw, 38px)",
              }}
            >
              <span className="tag tag-outline">{info.label}</span>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(25px, 2.5vw, 34px)",
                  lineHeight: 1.12,
                  margin: "18px 0 0",
                }}
              >
                {info.value}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          ...SHELL,
          display: "grid",
          gridTemplateColumns: "minmax(min(100%, 320px), 0.85fr) minmax(min(100%, 420px), 1.15fr)",
          gap: "clamp(32px, 5vw, 72px)",
          alignItems: "start",
        }}
      >
        <div>
          <span style={{ ...kicker, marginBottom: 18 }}>Nous écrire</span>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.03 }}>
            Un message suffit pour cadrer le prochain échange.
          </h2>
          <p style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}>
            Indiquez le quartier, le type de bien, votre budget ou votre délai.
            Nous vous rappelons avec les prochaines étapes utiles.
          </p>
        </div>

        <ContactForm />
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ ...kicker, marginBottom: 18 }}>Accès</span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1 }}>
              Coconut, à quelques minutes du centre de Lomé.
            </h2>
          </div>
          <p
            style={{
              color: "color-mix(in srgb, var(--color-bg) 78%, transparent)",
              margin: 0,
            }}
          >
            Les rendez-vous de vente et d&apos;estimation sont préparés à l&apos;avance:
            apportez les documents disponibles, nous nous chargeons de vérifier
            les points manquants.
          </p>
        </div>
      </section>
    </>
  );
}
