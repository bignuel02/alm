import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PagePlaceholder } from "@/components/page-placeholder";
import { prixLabel } from "@/lib/format";
import { getBien, listRefs } from "@/lib/repository";

export async function generateStaticParams() {
  const refs = await listRefs();
  return refs.map((ref) => ({ ref: ref.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: PageProps<"/biens/[ref]">): Promise<Metadata> {
  const { ref } = await params;
  const bien = await getBien(ref);
  if (!bien) return { title: "Bien introuvable" };
  return {
    title: bien.titre,
    description: `${bien.ville} — ${bien.surface} m² — ${prixLabel(bien)}. ${bien.badge}.`,
  };
}

export default async function FicheBienPage({ params }: PageProps<"/biens/[ref]">) {
  const { ref } = await params;
  const bien = await getBien(ref);
  if (!bien) notFound();

  return (
    <PagePlaceholder
      titre={bien.titre}
      resume={`${bien.ville} — ${prixLabel(bien)}. La fiche détaillée est le prochain écran à porter depuis le design.`}
      aFaire={[
        "Galerie photo (image principale + deux secondaires) et bandeau statut / type / référence",
        "Tableau des caractéristiques : surface, pièces, chambres, configuration, année",
        "Description longue et liste des prestations",
        "Dossier juridique : titre foncier, bornage, permis, quitus — avec l’état de chaque pièce",
        "Encart négociateur, demande de visite et ajout aux favoris",
        "Bandeau « Biens similaires »",
      ]}
    />
  );
}
