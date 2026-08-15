import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";

import { ChatWidget } from "@/components/chat-widget";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AGENCE } from "@/data/agence";

import "./globals.css";

/**
 * Archivo carries the headings — a contemporary grotesque with tight,
 * squarish caps that hold up at display sizes without turning decorative.
 * Inter stays underneath it for running text and UI, where neutrality is
 * the point.
 */
const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
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
    <html lang="fr" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
