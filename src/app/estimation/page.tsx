import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Estimation gratuite",
  description:
    "45 minutes sur place, une fourchette de prix écrite sous 48 heures, sans engagement de mandat.",
};

export default function EstimationPage() {
  return (
    <PagePlaceholder
      titre="Le prix juste, argumenté"
      resume="La page estimation : les trois étapes et le formulaire de demande, avec son état « Demande enregistrée »."
      aFaire={[
        "Les trois étapes numérotées (ETAPES_ESTIMATION)",
        "Formulaire : bien, adresse, surface, coordonnées",
        "Écran de confirmation « Demande enregistrée » et retour au formulaire",
        "Server action pour recevoir la demande (e-mail ou base, à décider)",
      ]}
    />
  );
}
