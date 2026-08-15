# Alassani Immobilier

Site de l’agence immobilière Alassani — vente, location et gestion à Lomé.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4

## Démarrer

```bash
npm run dev     # http://localhost:3000
npm run build   # build de production
npm run lint
```

## Structure

```
design/                  Design source (bundle Claude Design), en lecture seule
src/
  app/
    layout.tsx           Polices, en-tête, pied de page
    page.tsx             Accueil
    biens/               Portefeuille + fiche bien
    agence/ estimation/ contact/ favoris/ honoraires/
  components/            Composants partagés
  data/
    biens.ts             Les 10 biens du portefeuille
    agence.ts            Équipe, valeurs, expertises, vocabulaire des filtres
  lib/
    types.ts             Types du domaine
    repository.ts        Accès aux données — la seule porte d’entrée
    format.ts            Prix en FCFA, URLs des biens
    favoris-store.ts     Favoris (localStorage)
```

## Design

Le dossier `design/` contient le design décodé depuis l’export Claude Design :
`template.html` (balisage), `logic.js` (états et données), `style-*.css` (tokens),
et les polices. C’est la **référence** — on n’édite pas ces fichiers, on porte
depuis eux.

Les tokens vivent dans `src/app/globals.css` :

- **Fond** ivoire `#f7f3ec` · **Texte** graphite chaud `#24211d`
- **Accent** cuivre discret `#a4633c`, ramp `--color-accent-100` → `900`.
  Les pas 800/900 basculent sur le graphite : les panneaux sombres sont
  graphite, le cuivre reste un rehaut.
- **Titres** Archivo 600, tracking `-0.021em` · **Corps** Inter
- Neutres à biais chaud, pour qu’ivoire, graphite et cuivre lisent comme une
  même matière à trois profondeurs

Les classes du design (`.btn`, `.input`, `.card`, `.tag`, `.nav`…) sont portées
telles quelles dans `globals.css`, donc le balisage du design se transpose
presque à l’identique.

## Données

Tout passe par `src/lib/repository.ts`, dont les fonctions sont déjà `async` et
renvoient des objets simples. Brancher Postgres / Supabase plus tard ne touchera
que ce fichier — aucune page ni composant ne bouge.

## Photographies

Toutes les photos viennent de **Wikimedia Commons** sous licence libre et sont
servies depuis `public/photos` (Wikimedia demande de ne pas pointer sur
`upload.wikimedia.org` en production). Métadonnées relevées via l’API Commons
dans `src/data/photos.ts`, crédits affichés par `<PhotoCredit>` et récapitulés
sur `/credits`.

Deux règles tenues volontairement :

- **Les annonces n’ont pas de photo.** Mettre un immeuble réel de Lomé sous un
  prix et une adresse inventés en ferait une fausse annonce. Le cadre légendé
  attend les vraies photos de l’agence.
- **Aucun portrait.** Prêter le visage d’une personne réelle à un négociateur
  inventé serait une fausse représentation, licence libre ou non —
  `<Monogramme>` affiche les initiales à la place.

## Reste à faire

- Fiche bien, agence, estimation, contact — écrans en placeholder, design prêt
- Filtres du portefeuille (le repository les gère déjà, il manque l’UI)
- Widget de chat — maquette scriptée, conforme au design
- Photos : `ImageSlot` affiche un cadre vide tant que `src` n’est pas fourni
