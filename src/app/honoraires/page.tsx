import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Honoraires & mentions légales",
  description:
    "Barème d’honoraires et mentions légales d’Alassani Immobilier — RCCM TG-LOM 2009 B 4187.",
};

export default function HonorairesPage() {
  return (
    <PagePlaceholder
      titre="Honoraires & mentions légales"
      resume="Cette page n’existe pas dans le design : le pied de page y renvoie, mais l’écran reste à écrire. Contenu réglementaire, à valider avec l’agence."
      aFaire={[
        "Barème d’honoraires (5 % à la charge de l’acquéreur) et cas particuliers location / gestion",
        "Mentions légales : RCCM TG-LOM 2009 B 4187, NIF 1000 428 517, directeur de publication, hébergeur",
        "Politique de confidentialité et usage des données de formulaire",
      ]}
    />
  );
}
