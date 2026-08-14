import type { Bien } from "@/lib/types";

/**
 * Portfolio listings, carried over from the design.
 *
 * Static for now — everything reads these through `src/lib/repository.ts`,
 * so swapping in a database later only touches that file.
 */
export const BIENS: Bien[] = [
  {
    "ref": "VI-2411",
    "titre": "Villa contemporaine R+1, piscine et dépendance",
    "ville": "Baguida — route de Kpogan",
    "type": "Villa",
    "statut": "Vente",
    "prix": 185000000,
    "surface": 320,
    "pieces": 8,
    "chambres": 5,
    "config": "R+1 sur 1 200 m² clos",
    "annee": "2019",
    "badge": "Titre foncier",
    "description": "Une villa livrée en 2019 sur un terrain titré de 1 200 m², entièrement muré avec portail motorisé. Séjour double de 68 m² ouvert sur la terrasse et la piscine, cuisine américaine équipée, cinq chambres dont deux suites climatisées. Groupe électrogène 15 kVA en relais automatique, forage avec surpresseur et bâche de 5 000 litres. Dépendance de deux pièces pour le personnel ou les invités.",
    "prestations": [
      "Piscine 9 × 4 traitée au sel",
      "Groupe électrogène automatique",
      "Forage et bâche 5 000 L",
      "Climatisation dans toutes les chambres",
      "Deux suites parentales",
      "Garage double et guérite"
    ],
    "docs": [
      {
        "label": "Titre foncier",
        "ok": true
      },
      {
        "label": "Plan de bornage",
        "ok": true
      },
      {
        "label": "Permis de construire",
        "ok": true
      },
      {
        "label": "Quitus fiscal",
        "ok": true
      }
    ],
    "agent": "Sofia Alassani",
    "agentRole": "Directrice, biens de prestige",
    "featured": true
  },
  {
    "ref": "AP-2388",
    "titre": "Appartement traversant, vue sur la lagune",
    "ville": "Coconut — Lomé",
    "type": "Appartement",
    "statut": "Vente",
    "prix": 78000000,
    "surface": 124,
    "pieces": 4,
    "chambres": 3,
    "config": "3e étage sur 4, ascenseur",
    "annee": "2021",
    "badge": "Titre foncier",
    "description": "Au troisième étage d’une résidence de huit logements livrée en 2021, à cinq minutes du siège de l’agence. Séjour traversant sur balcon filant, vue dégagée sur la lagune de Bè, trois chambres climatisées et deux salles d’eau en carrelage grand format. Ascenseur, parking couvert, gardiennage 24 h et groupe électrogène collectif.",
    "prestations": [
      "Balcon filant, vue lagune",
      "Ascenseur et parking couvert",
      "Groupe électrogène collectif",
      "Gardiennage 24 heures",
      "Cuisine équipée",
      "Charges de copropriété maîtrisées"
    ],
    "docs": [
      {
        "label": "Titre foncier",
        "ok": true
      },
      {
        "label": "Règlement de copropriété",
        "ok": true
      },
      {
        "label": "Permis de construire",
        "ok": true
      },
      {
        "label": "Quitus fiscal",
        "ok": true
      }
    ],
    "agent": "Kossi Amegan",
    "agentRole": "Négociateur, Lomé centre",
    "featured": true
  },
  {
    "ref": "VI-1902",
    "titre": "Villa duplex sur parcelle clôturée de 800 m²",
    "ville": "Adidogomé — Assiyéyé",
    "type": "Villa",
    "statut": "Vente",
    "prix": 96000000,
    "surface": 260,
    "pieces": 7,
    "chambres": 5,
    "config": "Duplex, R+1",
    "annee": "2015, rénovée 2024",
    "badge": "Titre foncier",
    "description": "Duplex de 2015 repris en 2024 : peintures, plomberie et tableau électrique refaits, toiture en tôle bac alu vérifiée. Cinq chambres, un bureau en rez-de-chaussée, cuisine séparée avec office. Cour bétonnée pour trois véhicules, puits d’appoint et bâche de 3 000 litres. Quartier calme, à dix minutes du contournement.",
    "prestations": [
      "Rénovation complète 2024",
      "Toiture bac alu",
      "Puits et bâche 3 000 L",
      "Bureau indépendant",
      "Cour trois véhicules",
      "Mur de clôture 2,50 m"
    ],
    "docs": [
      {
        "label": "Titre foncier",
        "ok": true
      },
      {
        "label": "Plan de bornage",
        "ok": true
      },
      {
        "label": "Permis de construire",
        "ok": true
      },
      {
        "label": "Quitus fiscal",
        "ok": false
      }
    ],
    "agent": "Afi Sodjinou",
    "agentRole": "Négociatrice, périphérie nord",
    "featured": true
  },
  {
    "ref": "MA-1877",
    "titre": "Maison familiale, jardin et grande varangue",
    "ville": "Agoè-Nyivé — Légbassito",
    "type": "Maison",
    "statut": "Vente",
    "prix": 52000000,
    "surface": 180,
    "pieces": 6,
    "chambres": 4,
    "config": "Plain-pied sur 600 m²",
    "annee": "2012",
    "badge": "ACD",
    "description": "Maison de plain-pied saine sur une parcelle de 600 m², quatre chambres dont une suite, séjour prolongé par une varangue couverte de 24 m². Jardin planté de manguiers, deux citernes de récupération d’eau de pluie, raccordement CEET et TdE en place. Écoles et marché à moins d’un kilomètre.",
    "prestations": [
      "Varangue couverte 24 m²",
      "Jardin planté 600 m²",
      "Deux citernes de pluie",
      "Suite parentale",
      "Raccordements CEET et TdE",
      "Écoles à proximité"
    ],
    "docs": [
      {
        "label": "ACD",
        "ok": true
      },
      {
        "label": "Plan de bornage",
        "ok": true
      },
      {
        "label": "Permis de construire",
        "ok": false
      },
      {
        "label": "Quitus fiscal",
        "ok": true
      }
    ],
    "agent": "Afi Sodjinou",
    "agentRole": "Négociatrice, périphérie nord"
  },
  {
    "ref": "PR-1544",
    "titre": "Résidence de bord de mer, accès plage privatif",
    "ville": "Avépozo — bord de mer",
    "type": "Prestige",
    "statut": "Vente",
    "prix": 420000000,
    "surface": 480,
    "pieces": 10,
    "chambres": 6,
    "config": "R+1 sur 2 400 m² en front de mer",
    "annee": "2020",
    "badge": "Titre foncier",
    "description": "Une propriété de 480 m² en front de mer, livrée en 2020 sur 2 400 m² clos avec accès privatif à la plage. Réception de 90 m² ouverte sur la piscine à débordement, six chambres toutes en suite, cuisine professionnelle et local technique séparé. Deux groupes électrogènes, panneaux solaires en appoint, logement de gardien à l’entrée.",
    "prestations": [
      "Accès privatif à la plage",
      "Piscine à débordement",
      "Six chambres en suite",
      "Panneaux solaires en appoint",
      "Cuisine professionnelle",
      "Logement de gardien"
    ],
    "docs": [
      {
        "label": "Titre foncier",
        "ok": true
      },
      {
        "label": "Plan de bornage",
        "ok": true
      },
      {
        "label": "Permis de construire",
        "ok": true
      },
      {
        "label": "Quitus fiscal",
        "ok": true
      }
    ],
    "agent": "Sofia Alassani",
    "agentRole": "Directrice, biens de prestige"
  },
  {
    "ref": "NE-3120",
    "titre": "Résidence Kégué — appartements neufs T2 à T4",
    "ville": "Kégué — Lomé",
    "type": "Neuf",
    "statut": "Vente",
    "prix": 38000000,
    "surface": 68,
    "pieces": 3,
    "chambres": 2,
    "config": "Livraison 2e trimestre 2027",
    "annee": "Neuf, sur plan",
    "badge": "Sur plan",
    "description": "Vingt-quatre appartements du T2 au T4 répartis sur deux immeubles R+3, à dix minutes du stade de Kégué. Chaque lot dispose d’un balcon, d’un parking et d’un compteur individuel. Prix affiché pour un T3 de 68 m² au deuxième étage. Paiement échelonné en trois tranches jusqu’à la livraison, notaire de la résidence pour la mutation.",
    "prestations": [
      "Balcon et parking par lot",
      "Compteurs individuels",
      "Groupe électrogène collectif",
      "Forage et bâche communs",
      "Paiement en trois tranches",
      "Livraison T2 2027"
    ],
    "docs": [
      {
        "label": "Titre foncier du promoteur",
        "ok": true
      },
      {
        "label": "Permis de construire",
        "ok": true
      },
      {
        "label": "Plan de bornage",
        "ok": true
      },
      {
        "label": "Attestation d’achèvement",
        "ok": false
      }
    ],
    "agent": "Kossi Amegan",
    "agentRole": "Négociateur, Lomé centre"
  },
  {
    "ref": "LO-4088",
    "titre": "Appartement meublé trois pièces, résidence gardée",
    "ville": "Nyékonakpoè — Lomé",
    "type": "Appartement",
    "statut": "Location",
    "prix": 450000,
    "surface": 95,
    "pieces": 3,
    "chambres": 2,
    "config": "1er étage sur 3",
    "annee": "2018",
    "badge": "Meublé",
    "description": "Trois pièces entièrement meublé et climatisé dans une petite résidence gardée du centre, à dix minutes du boulevard du 13 Janvier. Séjour avec coin repas, deux chambres avec placards, cuisine équipée. Eau et groupe électrogène inclus dans les charges. Bail d’un an renouvelable, deux mois de caution.",
    "prestations": [
      "Entièrement meublé et climatisé",
      "Résidence gardée",
      "Eau et groupe inclus",
      "Parking dans la cour",
      "Internet fibre installé",
      "Bail 1 an renouvelable"
    ],
    "docs": [
      {
        "label": "Titre foncier du bailleur",
        "ok": true
      },
      {
        "label": "Contrat de bail type",
        "ok": true
      },
      {
        "label": "État des lieux",
        "ok": true
      },
      {
        "label": "Quittances de loyer",
        "ok": true
      }
    ],
    "agent": "Afi Sodjinou",
    "agentRole": "Négociatrice, périphérie nord"
  },
  {
    "ref": "IN-2701",
    "titre": "Immeuble de rapport, six appartements loués",
    "ville": "Tokoin — Doumasséssé",
    "type": "Investissement",
    "statut": "Vente",
    "prix": 145000000,
    "surface": 380,
    "pieces": 14,
    "chambres": 8,
    "config": "R+2, immeuble entier",
    "annee": "2010",
    "badge": "Titre foncier",
    "description": "Immeuble entier de six appartements — quatre T2 et deux T3 — tous occupés, sans impayé sur les deux derniers exercices. Rendement brut constaté 9,2 %. Toiture et réseau électrique repris en 2022, compteurs séparés par logement. Vendu avec les baux en cours, l’état locatif et les quittances des douze derniers mois.",
    "prestations": [
      "Six logements occupés",
      "Rendement brut 9,2 %",
      "Compteurs individuels",
      "Toiture et électricité 2022",
      "Baux et état locatif fournis",
      "Forage sur place"
    ],
    "docs": [
      {
        "label": "Titre foncier",
        "ok": true
      },
      {
        "label": "État locatif",
        "ok": true
      },
      {
        "label": "Baux en cours",
        "ok": true
      },
      {
        "label": "Quitus fiscal",
        "ok": true
      }
    ],
    "agent": "Kossi Amegan",
    "agentRole": "Négociateur, Lomé centre"
  },
  {
    "ref": "CO-1130",
    "titre": "Local commercial d’angle, double vitrine",
    "ville": "Bè — boulevard du 13 Janvier",
    "type": "Commerce",
    "statut": "Location",
    "prix": 850000,
    "surface": 110,
    "pieces": 3,
    "chambres": 0,
    "config": "Rez-de-chaussée d’angle",
    "annee": "2008",
    "badge": "Bail commercial",
    "description": "Cellule commerciale d’angle en rez-de-chaussée sur le boulevard du 13 Janvier, deux vitrines et une devanture de 12 mètres linéaires. 110 m² de surface de vente, réserve de 20 m² et sanitaires à l’arrière. Compteur CEET dédié, climatisation en place, toutes activités hors nuisances. Loyer mensuel hors charges, bail commercial de trois ans.",
    "prestations": [
      "Double vitrine d’angle",
      "12 m de devanture",
      "Réserve de 20 m²",
      "Compteur CEET dédié",
      "Climatisation installée",
      "Bail commercial 3 ans"
    ],
    "docs": [
      {
        "label": "Titre foncier du bailleur",
        "ok": true
      },
      {
        "label": "Bail commercial type",
        "ok": true
      },
      {
        "label": "Attestation d’assurance",
        "ok": true
      },
      {
        "label": "Autorisation d’enseigne",
        "ok": false
      }
    ],
    "agent": "Kossi Amegan",
    "agentRole": "Négociateur, Lomé centre"
  },
  {
    "ref": "TE-0765",
    "titre": "Terrain titré de 800 m², viabilisé et borné",
    "ville": "Baguida — Kpogan",
    "type": "Terrain",
    "statut": "Vente",
    "prix": 22000000,
    "surface": 800,
    "pieces": 0,
    "chambres": 0,
    "config": "Parcelle plate, deux lots de 400 m²",
    "annee": "—",
    "badge": "Titre foncier",
    "description": "Deux lots contigus de 400 m² vendus ensemble, plats, bornés et titrés, à 900 mètres de la route de Kpogan. Raccordement CEET en bordure, forage réalisable, quartier en construction avec voirie ouverte. Vendu avec titre foncier, plan de bornage récent et quitus fiscal.",
    "prestations": [
      "Titre foncier au nom du vendeur",
      "Bornage récent",
      "Deux lots de 400 m²",
      "CEET en bordure de parcelle",
      "Voirie ouverte",
      "Forage réalisable"
    ],
    "docs": [
      {
        "label": "Titre foncier",
        "ok": true
      },
      {
        "label": "Plan de bornage",
        "ok": true
      },
      {
        "label": "Quitus fiscal",
        "ok": true
      },
      {
        "label": "Certificat de non-litige",
        "ok": true
      }
    ],
    "agent": "Afi Sodjinou",
    "agentRole": "Négociatrice, périphérie nord"
  }
];
