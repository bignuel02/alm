import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";

import { FavorisProvider } from "@/components/favoris-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AGENCE } from "@/data/agence";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="fr" className={`${cormorant.variable} ${jost.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <FavorisProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </FavorisProvider>
      </body>
    </html>
  );
}
