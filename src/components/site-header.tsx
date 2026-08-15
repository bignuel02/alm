"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useFavoris } from "@/components/use-favoris";

const LIENS = [
  { href: "/biens", label: "Nos biens" },
  { href: "/agence", label: "L’agence" },
  { href: "/estimation", label: "Estimation" },
  { href: "/contact", label: "Contact" },
] as const;

const lienStyle: React.CSSProperties = {
  fontSize: 11.5,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useFavoris();
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [cheminVu, setCheminVu] = useState(pathname);

  // Le panneau ne doit pas survivre à la navigation. Ajustement pendant le
  // rendu plutôt que dans un effet : React relance le rendu immédiatement,
  // sans passe supplémentaire à l'écran ni cascade.
  if (cheminVu !== pathname) {
    setCheminVu(pathname);
    setMenuOuvert(false);
  }

  const estActif = (href: string) => pathname.startsWith(href);

  return (
    <nav
      className="nav sticky top-0 z-30"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--color-divider)",
        gap: 24,
        paddingBlock: 16,
      }}
    >
      {/* Verrouillage en deux lignes : le nom porte, « immobilier » qualifie.
          Empilé, il tient dans la largeur d'un téléphone là où une seule
          ligne tracée à 0.16em déborderait. */}
      <Link href="/" className="nav-brand" style={{ display: "grid", lineHeight: 1 }}>
        <span
          style={{
            fontSize: "clamp(18px, 2.4vw, 23px)",
            letterSpacing: "0.16em",
          }}
        >
          ALASSANI
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(8px, 1vw, 9.5px)",
            fontWeight: 500,
            letterSpacing: "0.4em",
            color: "var(--color-gold)",
            marginTop: 5,
          }}
        >
          IMMOBILIER
        </span>
      </Link>

      {/* Barre complète — au-dessus de 1000px */}
      <div className="nav-desktop">
        {LIENS.map((lien) => (
          <Link
            key={lien.href}
            href={lien.href}
            aria-current={estActif(lien.href) ? "page" : undefined}
            style={lienStyle}
          >
            {lien.label}
          </Link>
        ))}

        <Link
          href="/favoris"
          className="btn btn-ghost"
          style={{ marginLeft: "auto", fontSize: 12 }}
        >
          Favoris ({count})
        </Link>

        <Link href="/contact" className="btn btn-primary" style={{ fontSize: 12 }}>
          Prendre rendez-vous
        </Link>
      </div>

      {/* Bascule — en dessous de 1000px */}
      <button
        type="button"
        className="btn btn-secondary nav-burger"
        onClick={() => setMenuOuvert((o) => !o)}
        aria-expanded={menuOuvert}
        aria-controls="menu-principal"
      >
        {menuOuvert ? "Fermer" : "Menu"}
      </button>

      {menuOuvert ? (
        <div className="nav-panel" id="menu-principal">
          {LIENS.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              aria-current={estActif(lien.href) ? "page" : undefined}
            >
              {lien.label}
            </Link>
          ))}
          <Link href="/favoris" aria-current={estActif("/favoris") ? "page" : undefined}>
            Favoris ({count})
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Prendre rendez-vous
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
