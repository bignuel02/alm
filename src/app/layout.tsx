import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AGENCE } from "@/data/agence";

import "./globals.css";

const display = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../../design/assets/acc6d29c.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
});

const sans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../../design/assets/60e6d122.woff2",
      weight: "400 800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: `${AGENCE.nom} — Vente, location et gestion à Lomé`,
    template: `%s — ${AGENCE.nom}`,
  },
  description: AGENCE.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
