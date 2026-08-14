import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Rue des Cocotiers, Coconut — Lomé, Togo. +228 22 61 04 87. Ouvert du lundi au samedi.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      titre="Passez à l’agence"
      resume="La page contact : coordonnées, formulaire de message et point d’entrée du chat."
      aFaire={[
        "Coordonnées, horaires et accès (Rue des Cocotiers, Coconut)",
        "Formulaire « Nous écrire » avec son état « Message envoyé »",
        "Bouton « Ouvrir le chat » relié au widget",
      ]}
    />
  );
}
