import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "L’agence",
  description:
    "Alassani Immobilier — une trentaine de biens au portefeuille, un négociateur par dossier, à Lomé depuis 2009.",
};

export default function AgencePage() {
  return (
    <PagePlaceholder
      titre="Un portefeuille court, tenu de près"
      resume="La page agence : les trois valeurs, l’équipe et les deux appels à l’action. Les données sont déjà en place dans src/data/agence.ts."
      aFaire={[
        "Manifeste d’ouverture et les trois valeurs numérotées (VALEURS)",
        "Grille de l’équipe : quatre membres avec photo, rôle et périmètre (EQUIPE)",
        "Bloc de clôture : « Confier un bien à l’agence » et « Voir le portefeuille »",
      ]}
    />
  );
}
