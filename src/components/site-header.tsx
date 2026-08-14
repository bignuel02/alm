"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useFavoris } from "@/components/use-favoris";

const LIENS = [
  { href: "/biens", label: "Biens" },
  { href: "/agence", label: "Agence" },
  { href: "/estimation", label: "Estimation" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useFavoris();

  return (
    <nav
      className="nav sticky top-0 z-20"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 86%, white)",
        borderBottom: "1px solid var(--color-divider)",
        gap: 26,
        padding: "16px clamp(18px, 4vw, 42px)",
        backdropFilter: "blur(18px)",
      }}
    >
      <Link
        href="/"
        className="nav-brand"
        style={{
          display: "grid",
          gap: 1,
          color: "var(--color-ink)",
          lineHeight: 1,
          marginRight: "clamp(8px, 3vw, 36px)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Alassani
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
          }}
        >
          Immobilier Lomé
        </span>
      </Link>

      {LIENS.map((lien) => (
        <Link
          key={lien.href}
          href={lien.href}
          aria-current={pathname.startsWith(lien.href) ? "page" : undefined}
          style={{
            fontSize: 11.5,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
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
        Rendez-vous
      </Link>
    </nav>
  );
}
