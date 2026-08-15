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
      {/* Verrouillage en deux lignes calées sur la même largeur.
          ALASSANI fixe la largeur du bloc ; son interlettrage laisse un
          blanc fantôme à droite, annulé par la marge négative pour que la
          colonne mesure l'encre et non la boîte. IMMOBILIER est ensuite
          réparti lettre à lettre en space-between : la largeur tombe juste
          quelle que soit la fonte chargée, là où un tracking deviné ne
          marcherait que pour un corps donné. */}
      <Link
        href="/"
        className="nav-brand"
        aria-label="Alassani Immobilier — accueil"
        style={{ display: "grid", lineHeight: 1.04 }}
      >
        <span
          aria-hidden="true"
          style={{
            fontSize: "clamp(18px, 2.4vw, 23px)",
            letterSpacing: "0.16em",
            marginRight: "-0.16em",
          }}
        >
          ALASSANI
        </span>
        <span
          aria-hidden="true"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "clamp(8px, 1.05vw, 10px)",
            fontWeight: 500,
            color: "var(--color-gold)",
            marginTop: 6,
          }}
        >
          {[..."IMMOBILIER"].map((lettre, i) => (
            <span key={`${lettre}${i}`}>{lettre}</span>
          ))}
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
