"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useFavoris } from "@/components/favoris-provider";

const LIENS = [
  { href: "/biens", label: "Nos biens" },
  { href: "/agence", label: "L’agence" },
  { href: "/estimation", label: "Estimation" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { count, ready } = useFavoris();

  return (
    <nav
      className="nav sticky top-0 z-20"
      style={{
        background: "var(--color-bg)",
        borderBottom: "2px solid var(--color-divider)",
        gap: 28,
        paddingBlock: 20,
      }}
    >
      <Link
        href="/"
        className="nav-brand"
        style={{ fontSize: 27, letterSpacing: "0.16em" }}
      >
        ALASSANI
      </Link>

      {LIENS.map((lien) => (
        <Link
          key={lien.href}
          href={lien.href}
          aria-current={pathname.startsWith(lien.href) ? "page" : undefined}
          style={{
            fontSize: 11.5,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {lien.label}
        </Link>
      ))}

      <Link
        href="/favoris"
        className="btn btn-ghost"
        style={{ marginLeft: "auto", fontSize: 13 }}
      >
        {/* Renders "Favoris" until localStorage is read, so server and client
            markup match on the first pass. */}
        Favoris{ready ? ` (${count})` : ""}
      </Link>

      <Link href="/contact" className="btn btn-primary" style={{ fontSize: 13 }}>
        Prendre rendez-vous
      </Link>
    </nav>
  );
}
