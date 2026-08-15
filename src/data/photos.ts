/**
 * Photographies du site.
 *
 * Toutes proviennent de Wikimedia Commons sous licence libre. Les métadonnées
 * ci-dessous ont été relevées via l'API Commons, pas recopiées à la main :
 * auteur, licence et page source sont ceux déclarés par le dépôt.
 *
 * CC BY et CC BY-SA imposent le crédit à l'affichage — d'où <PhotoCredit>,
 * qui doit rester visible partout où l'image apparaît. La page /credits
 * reprend l'ensemble.
 */

export interface Photo {
  slug: string;
  src: string;
  width: number;
  height: number;
  /** Ce que la photo montre réellement, pour l'attribut alt. */
  sujet: string;
  auteur: string;
  licence: string;
  licenceUrl: string;
  /** Page de description sur Commons. */
  source: string;
  titreOriginal: string;
}

export const PHOTOS = {
  palaisJustice: {
    slug: "palais-justice-lome",
    src: "/photos/palais-justice-lome.jpg",
    width: 2400,
    height: 1443,
    sujet:
      "Le bâtiment du ministère de la Justice à Lomé, façade à arcades et colonnades",
    auteur: "Andrew Moore",
    licence: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Building_in_Lom%C3%A9_(30668258326).jpg",
    titreOriginal: "Building in Lomé (30668258326).jpg",
  },
  villaVerdure: {
    slug: "villa-verdure-lome",
    src: "/photos/villa-verdure-lome.jpg",
    width: 2000,
    height: 1500,
    sujet: "Villa à terrasse couverte émergeant de la végétation, Lomé",
    auteur: "Aboukey",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Aboukey_Construction_verdure.jpg",
    titreOriginal: "Aboukey Construction verdure.jpg",
  },
  villaVerdure2: {
    slug: "villa-verdure-lome-2",
    src: "/photos/villa-verdure-lome-2.jpg",
    width: 2000,
    height: 1500,
    sujet: "Villa à colonnades entourée de palmiers, Lomé",
    auteur: "Aboukey",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Aboukey_Construction_verdure5.jpg",
    titreOriginal: "Aboukey Construction verdure5.jpg",
  },
  villaVerdure3: {
    slug: "villa-verdure-lome-3",
    src: "/photos/villa-verdure-lome-3.jpg",
    width: 2000,
    height: 1500,
    sujet: "La même villa vue depuis l'angle sud, Lomé",
    auteur: "Aboukey",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Aboukey_Construction_verdured.jpg",
    titreOriginal: "Aboukey Construction verdured.jpg",
  },
  residenceBlewu: {
    slug: "residence-blewu-lome",
    src: "/photos/residence-blewu-lome.jpg",
    width: 2000,
    height: 1333,
    sujet: "La résidence Blewu à Lomé, immeuble d'habitation en pierre claire",
    auteur: "Hermannkass",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:B%C3%A2timent_de_la_r%C3%A9sidence_Blewu_%C3%A0_Lom%C3%A9.jpg",
    titreOriginal: "Bâtiment de la résidence Blewu à Lomé.jpg",
  },
  assembleeNationale: {
    slug: "assemblee-nationale-lome",
    src: "/photos/assemblee-nationale-lome.jpg",
    width: 2000,
    height: 1500,
    sujet:
      "L'Assemblée nationale et le Monument de l'Indépendance à Lomé",
    auteur: "David Bacon",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Buildings_in_Lom%C3%A9_(6717151255).jpg",
    titreOriginal: "Buildings in Lomé (6717151255).jpg",
  },
} as const satisfies Record<string, Photo>;

export const TOUTES_PHOTOS: readonly Photo[] = Object.values(PHOTOS);

/**
 * Photographies rattachées à une annonce, par référence.
 *
 * Volontairement partiel. Commons n'a pas d'iconographie immobilière pour
 * Lomé : sur plus de 500 fichiers passés en revue, seules ces prises de vue
 * montrent un bâtiment résidentiel présentable. Les annonces absentes de
 * cette table gardent leur cadre légendé plutôt qu'une image d'emprunt.
 *
 * Les trois vues « villa verdure » sont le même bâtiment sous trois angles —
 * d'où une galerie cohérente sur la fiche.
 *
 * Ces images illustrent la ville, pas le bien vendu : le portefeuille est
 * une démonstration, et le pied de page le dit.
 */
export const PHOTOS_PAR_BIEN: Record<string, readonly Photo[]> = {
  "VI-2411": [PHOTOS.villaVerdure, PHOTOS.villaVerdure2, PHOTOS.villaVerdure3],
  "AP-2388": [PHOTOS.residenceBlewu],
  "VI-1902": [PHOTOS.villaVerdure2, PHOTOS.villaVerdure3],
  "IN-2701": [PHOTOS.residenceBlewu],
};

/** Photo de couverture d'une annonce, si elle en a une. */
export function photoPrincipale(ref: string): Photo | undefined {
  return PHOTOS_PAR_BIEN[ref]?.[0];
}

export function photosDuBien(ref: string): readonly Photo[] {
  return PHOTOS_PAR_BIEN[ref] ?? [];
}
