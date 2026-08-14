
const BIENS = [
  { ref: "VI-2411", titre: "Villa contemporaine R+1, piscine et dépendance", ville: "Baguida — route de Kpogan", type: "Villa", statut: "Vente", prix: 185000000, surface: 320, pieces: 8, chambres: 5, config: "R+1 sur 1 200 m² clos", annee: "2019", badge: "Titre foncier",
    description: "Une villa livrée en 2019 sur un terrain titré de 1 200 m², entièrement muré avec portail motorisé. Séjour double de 68 m² ouvert sur la terrasse et la piscine, cuisine américaine équipée, cinq chambres dont deux suites climatisées. Groupe électrogène 15 kVA en relais automatique, forage avec surpresseur et bâche de 5 000 litres. Dépendance de deux pièces pour le personnel ou les invités.",
    prestations: ["Piscine 9 × 4 traitée au sel", "Groupe électrogène automatique", "Forage et bâche 5 000 L", "Climatisation dans toutes les chambres", "Deux suites parentales", "Garage double et guérite"],
    docs: [{ label: "Titre foncier", ok: true }, { label: "Plan de bornage", ok: true }, { label: "Permis de construire", ok: true }, { label: "Quitus fiscal", ok: true }],
    agent: "Sofia Alassani", agentRole: "Directrice, biens de prestige", featured: true },
  { ref: "AP-2388", titre: "Appartement traversant, vue sur la lagune", ville: "Coconut — Lomé", type: "Appartement", statut: "Vente", prix: 78000000, surface: 124, pieces: 4, chambres: 3, config: "3e étage sur 4, ascenseur", annee: "2021", badge: "Titre foncier",
    description: "Au troisième étage d’une résidence de huit logements livrée en 2021, à cinq minutes du siège de l’agence. Séjour traversant sur balcon filant, vue dégagée sur la lagune de Bè, trois chambres climatisées et deux salles d’eau en carrelage grand format. Ascenseur, parking couvert, gardiennage 24 h et groupe électrogène collectif.",
    prestations: ["Balcon filant, vue lagune", "Ascenseur et parking couvert", "Groupe électrogène collectif", "Gardiennage 24 heures", "Cuisine équipée", "Charges de copropriété maîtrisées"],
    docs: [{ label: "Titre foncier", ok: true }, { label: "Règlement de copropriété", ok: true }, { label: "Permis de construire", ok: true }, { label: "Quitus fiscal", ok: true }],
    agent: "Kossi Amegan", agentRole: "Négociateur, Lomé centre", featured: true },
  { ref: "VI-1902", titre: "Villa duplex sur parcelle clôturée de 800 m²", ville: "Adidogomé — Assiyéyé", type: "Villa", statut: "Vente", prix: 96000000, surface: 260, pieces: 7, chambres: 5, config: "Duplex, R+1", annee: "2015, rénovée 2024", badge: "Titre foncier",
    description: "Duplex de 2015 repris en 2024 : peintures, plomberie et tableau électrique refaits, toiture en tôle bac alu vérifiée. Cinq chambres, un bureau en rez-de-chaussée, cuisine séparée avec office. Cour bétonnée pour trois véhicules, puits d’appoint et bâche de 3 000 litres. Quartier calme, à dix minutes du contournement.",
    prestations: ["Rénovation complète 2024", "Toiture bac alu", "Puits et bâche 3 000 L", "Bureau indépendant", "Cour trois véhicules", "Mur de clôture 2,50 m"],
    docs: [{ label: "Titre foncier", ok: true }, { label: "Plan de bornage", ok: true }, { label: "Permis de construire", ok: true }, { label: "Quitus fiscal", ok: false }],
    agent: "Afi Sodjinou", agentRole: "Négociatrice, périphérie nord", featured: true },
  { ref: "MA-1877", titre: "Maison familiale, jardin et grande varangue", ville: "Agoè-Nyivé — Légbassito", type: "Maison", statut: "Vente", prix: 52000000, surface: 180, pieces: 6, chambres: 4, config: "Plain-pied sur 600 m²", annee: "2012", badge: "ACD",
    description: "Maison de plain-pied saine sur une parcelle de 600 m², quatre chambres dont une suite, séjour prolongé par une varangue couverte de 24 m². Jardin planté de manguiers, deux citernes de récupération d’eau de pluie, raccordement CEET et TdE en place. Écoles et marché à moins d’un kilomètre.",
    prestations: ["Varangue couverte 24 m²", "Jardin planté 600 m²", "Deux citernes de pluie", "Suite parentale", "Raccordements CEET et TdE", "Écoles à proximité"],
    docs: [{ label: "ACD", ok: true }, { label: "Plan de bornage", ok: true }, { label: "Permis de construire", ok: false }, { label: "Quitus fiscal", ok: true }],
    agent: "Afi Sodjinou", agentRole: "Négociatrice, périphérie nord" },
  { ref: "PR-1544", titre: "Résidence de bord de mer, accès plage privatif", ville: "Avépozo — bord de mer", type: "Prestige", statut: "Vente", prix: 420000000, surface: 480, pieces: 10, chambres: 6, config: "R+1 sur 2 400 m² en front de mer", annee: "2020", badge: "Titre foncier",
    description: "Une propriété de 480 m² en front de mer, livrée en 2020 sur 2 400 m² clos avec accès privatif à la plage. Réception de 90 m² ouverte sur la piscine à débordement, six chambres toutes en suite, cuisine professionnelle et local technique séparé. Deux groupes électrogènes, panneaux solaires en appoint, logement de gardien à l’entrée.",
    prestations: ["Accès privatif à la plage", "Piscine à débordement", "Six chambres en suite", "Panneaux solaires en appoint", "Cuisine professionnelle", "Logement de gardien"],
    docs: [{ label: "Titre foncier", ok: true }, { label: "Plan de bornage", ok: true }, { label: "Permis de construire", ok: true }, { label: "Quitus fiscal", ok: true }],
    agent: "Sofia Alassani", agentRole: "Directrice, biens de prestige" },
  { ref: "NE-3120", titre: "Résidence Kégué — appartements neufs T2 à T4", ville: "Kégué — Lomé", type: "Neuf", statut: "Vente", prix: 38000000, surface: 68, pieces: 3, chambres: 2, config: "Livraison 2e trimestre 2027", annee: "Neuf, sur plan", badge: "Sur plan",
    description: "Vingt-quatre appartements du T2 au T4 répartis sur deux immeubles R+3, à dix minutes du stade de Kégué. Chaque lot dispose d’un balcon, d’un parking et d’un compteur individuel. Prix affiché pour un T3 de 68 m² au deuxième étage. Paiement échelonné en trois tranches jusqu’à la livraison, notaire de la résidence pour la mutation.",
    prestations: ["Balcon et parking par lot", "Compteurs individuels", "Groupe électrogène collectif", "Forage et bâche communs", "Paiement en trois tranches", "Livraison T2 2027"],
    docs: [{ label: "Titre foncier du promoteur", ok: true }, { label: "Permis de construire", ok: true }, { label: "Plan de bornage", ok: true }, { label: "Attestation d’achèvement", ok: false }],
    agent: "Kossi Amegan", agentRole: "Négociateur, Lomé centre" },
  { ref: "LO-4088", titre: "Appartement meublé trois pièces, résidence gardée", ville: "Nyékonakpoè — Lomé", type: "Appartement", statut: "Location", prix: 450000, surface: 95, pieces: 3, chambres: 2, config: "1er étage sur 3", annee: "2018", badge: "Meublé",
    description: "Trois pièces entièrement meublé et climatisé dans une petite résidence gardée du centre, à dix minutes du boulevard du 13 Janvier. Séjour avec coin repas, deux chambres avec placards, cuisine équipée. Eau et groupe électrogène inclus dans les charges. Bail d’un an renouvelable, deux mois de caution.",
    prestations: ["Entièrement meublé et climatisé", "Résidence gardée", "Eau et groupe inclus", "Parking dans la cour", "Internet fibre installé", "Bail 1 an renouvelable"],
    docs: [{ label: "Titre foncier du bailleur", ok: true }, { label: "Contrat de bail type", ok: true }, { label: "État des lieux", ok: true }, { label: "Quittances de loyer", ok: true }],
    agent: "Afi Sodjinou", agentRole: "Négociatrice, périphérie nord" },
  { ref: "IN-2701", titre: "Immeuble de rapport, six appartements loués", ville: "Tokoin — Doumasséssé", type: "Investissement", statut: "Vente", prix: 145000000, surface: 380, pieces: 14, chambres: 8, config: "R+2, immeuble entier", annee: "2010", badge: "Titre foncier",
    description: "Immeuble entier de six appartements — quatre T2 et deux T3 — tous occupés, sans impayé sur les deux derniers exercices. Rendement brut constaté 9,2 %. Toiture et réseau électrique repris en 2022, compteurs séparés par logement. Vendu avec les baux en cours, l’état locatif et les quittances des douze derniers mois.",
    prestations: ["Six logements occupés", "Rendement brut 9,2 %", "Compteurs individuels", "Toiture et électricité 2022", "Baux et état locatif fournis", "Forage sur place"],
    docs: [{ label: "Titre foncier", ok: true }, { label: "État locatif", ok: true }, { label: "Baux en cours", ok: true }, { label: "Quitus fiscal", ok: true }],
    agent: "Kossi Amegan", agentRole: "Négociateur, Lomé centre" },
  { ref: "CO-1130", titre: "Local commercial d’angle, double vitrine", ville: "Bè — boulevard du 13 Janvier", type: "Commerce", statut: "Location", prix: 850000, surface: 110, pieces: 3, chambres: 0, config: "Rez-de-chaussée d’angle", annee: "2008", badge: "Bail commercial",
    description: "Cellule commerciale d’angle en rez-de-chaussée sur le boulevard du 13 Janvier, deux vitrines et une devanture de 12 mètres linéaires. 110 m² de surface de vente, réserve de 20 m² et sanitaires à l’arrière. Compteur CEET dédié, climatisation en place, toutes activités hors nuisances. Loyer mensuel hors charges, bail commercial de trois ans.",
    prestations: ["Double vitrine d’angle", "12 m de devanture", "Réserve de 20 m²", "Compteur CEET dédié", "Climatisation installée", "Bail commercial 3 ans"],
    docs: [{ label: "Titre foncier du bailleur", ok: true }, { label: "Bail commercial type", ok: true }, { label: "Attestation d’assurance", ok: true }, { label: "Autorisation d’enseigne", ok: false }],
    agent: "Kossi Amegan", agentRole: "Négociateur, Lomé centre" },
  { ref: "TE-0765", titre: "Terrain titré de 800 m², viabilisé et borné", ville: "Baguida — Kpogan", type: "Terrain", statut: "Vente", prix: 22000000, surface: 800, pieces: 0, chambres: 0, config: "Parcelle plate, deux lots de 400 m²", annee: "—", badge: "Titre foncier",
    description: "Deux lots contigus de 400 m² vendus ensemble, plats, bornés et titrés, à 900 mètres de la route de Kpogan. Raccordement CEET en bordure, forage réalisable, quartier en construction avec voirie ouverte. Vendu avec titre foncier, plan de bornage récent et quitus fiscal.",
    prestations: ["Titre foncier au nom du vendeur", "Bornage récent", "Deux lots de 400 m²", "CEET en bordure de parcelle", "Voirie ouverte", "Forage réalisable"],
    docs: [{ label: "Titre foncier", ok: true }, { label: "Plan de bornage", ok: true }, { label: "Quitus fiscal", ok: true }, { label: "Certificat de non-litige", ok: true }],
    agent: "Afi Sodjinou", agentRole: "Négociatrice, périphérie nord" }
];

class Component extends DCLogic {
  state = { page: "home", selRef: null, favs: [], q: "", fType: "Tous les types", fStatut: "Vente et location", fBudget: "0", fSort: "Les plus récents", favOnly: false, estSent: false, msgSent: false, visitSent: false,
    chatOpen: false, chatDraft: "", chatMsgs: [{ who: "Kossi — Alassani Immobilier", text: "Bonjour, Kossi à l’agence. Dites-moi le quartier et le budget qui vous intéressent, je vous oriente tout de suite.", mine: false }] };

  stickChat() {
    requestAnimationFrame(() => {
      const el = document.querySelector('[data-chat-list]');
      if (el) el.scrollTop = el.scrollHeight;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.chatMsgs.length !== this.state.chatMsgs.length || prevState.chatOpen !== this.state.chatOpen) this.stickChat();
  }

  reply(text) {
    const t = text.toLowerCase();
    let r = "C’est noté. Je regarde le portefeuille et je reviens vers vous dans la journée — souhaitez-vous que l’on vous rappelle ?";
    if (t.indexOf("prix") > -1 || t.indexOf("budget") > -1 || t.indexOf("fcfa") > -1) r = "Nos biens vont de 22 millions FCFA pour un terrain titré à Baguida jusqu’à 420 millions pour le bord de mer d’Avépozo. Donnez-moi votre enveloppe, je filtre pour vous.";
    else if (t.indexOf("visite") > -1 || t.indexOf("rendez") > -1) r = "Nous organisons les visites du lundi au samedi. Indiquez-moi deux créneaux et la référence du bien, je confirme avec le propriétaire.";
    else if (t.indexOf("titre") > -1 || t.indexOf("foncier") > -1 || t.indexOf("acd") > -1) r = "Chaque bien du portefeuille est contrôlé avant mise en vente : titre foncier, plan de bornage et quitus fiscal. Les originaux sont consultables à l’agence, à Coconut.";
    else if (t.indexOf("location") > -1 || t.indexOf("louer") > -1) r = "En location nous avons un meublé trois pièces à Nyékonakpoè à 450 000 FCFA par mois et un local commercial à Bè à 850 000 FCFA. Je vous envoie les fiches ?";
    else if (t.indexOf("vendre") > -1 || t.indexOf("estimation") > -1) r = "Pour une estimation, un négociateur passe 45 minutes sur place et vous remet une fourchette écrite sous 48 heures, sans engagement de mandat.";
    else if (t.indexOf("terrain") > -1) r = "Nous avons deux lots contigus de 400 m² titrés et bornés à Kpogan, vendus ensemble à 22 millions FCFA. Voirie ouverte et CEET en bordure.";
    return r;
  }

  send(text) {
    const t = (text || "").trim();
    if (!t) return;
    this.setState(s => ({ chatMsgs: s.chatMsgs.concat([{ who: "Vous", text: t, mine: true }]), chatDraft: "" }));
    const answer = this.reply(t);
    setTimeout(() => this.setState(s => ({ chatMsgs: s.chatMsgs.concat([{ who: "Kossi — Alassani Immobilier", text: answer, mine: false }]) })), 700);
  }

  nav(page, extra) { this.setState(Object.assign({ page: page }, extra || {})); window.scrollTo(0, 0); }

  fmt(b) {
    const n = new Intl.NumberFormat("fr-FR").format(b.prix).replace(/\u202f|\u00a0/g, " ");
    return b.statut === "Location" ? n + " FCFA / mois" : n + " FCFA";
  }

  decorate(b) {
    const fav = this.state.favs.indexOf(b.ref) > -1;
    return Object.assign({}, b, {
      prixFmt: this.fmt(b),
      slotId: "bien-" + b.ref,
      favLabel: fav ? "★ Retiré des favoris" : "☆ Ajouter aux favoris",
      isFav: fav,
      open: () => this.nav("fiche", { selRef: b.ref, visitSent: false }),
      toggleFav: () => this.toggleFav(b.ref)
    });
  }

  toggleFav(ref) {
    this.setState(s => ({ favs: s.favs.indexOf(ref) > -1 ? s.favs.filter(r => r !== ref) : s.favs.concat([ref]) }));
  }

  filtered() {
    const s = this.state;
    const q = s.q.trim().toLowerCase();
    const max = parseInt(s.fBudget, 10) || 0;
    let out = BIENS.filter(b => {
      if (q && (b.titre + " " + b.ville + " " + b.ref + " " + b.type + " " + b.description).toLowerCase().indexOf(q) === -1) return false;
      if (s.fType !== "Tous les types" && b.type !== s.fType) return false;
      if (s.fStatut !== "Vente et location" && b.statut !== s.fStatut) return false;
      if (max && b.statut === "Vente" && b.prix > max) return false;
      if (s.favOnly && s.favs.indexOf(b.ref) === -1) return false;
      return true;
    });
    if (s.fSort === "Prix croissant") out = out.slice().sort((a, b) => a.prix - b.prix);
    if (s.fSort === "Prix décroissant") out = out.slice().sort((a, b) => b.prix - a.prix);
    if (s.fSort === "Surface décroissante") out = out.slice().sort((a, b) => b.surface - a.surface);
    return out;
  }

  renderVals() {
    const s = this.state;
    const p = this.props;
    const sel = BIENS.filter(b => b.ref === s.selRef)[0] || null;
    const results = this.filtered().map(b => this.decorate(b));
    const favs = BIENS.filter(b => s.favs.indexOf(b.ref) > -1).map(b => this.decorate(b));

    let selVals = null;
    if (sel) {
      const d = this.decorate(sel);
      selVals = Object.assign(d, {
        slotMain: "bien-" + sel.ref + "-main",
        slotB: "bien-" + sel.ref + "-b",
        slotC: "bien-" + sel.ref + "-c",
        agentSlot: "agent-" + sel.agent.split(" ")[0].toLowerCase(),
        prixNote: sel.statut === "Location" ? "Hors charges · deux mois de caution" : "Honoraires 5 % à la charge de l’acquéreur",
        docsList: sel.docs.map(d => ({ label: d.label, mark: d.ok ? "Fourni" : "À régulariser", cls: d.ok ? "tag tag-neutral" : "tag tag-accent" })),
        specs: [
          { k: "Type", v: sel.type },
          { k: "Surface", v: sel.surface + " m² habitables" },
          { k: "Pièces", v: sel.pieces ? sel.pieces + " pièces, " + sel.chambres + " chambres" : "—" },
          { k: "Configuration", v: sel.config },
          { k: "Année", v: sel.annee },
          { k: "Situation juridique", v: sel.badge },
          { k: "Référence", v: sel.ref }
        ]
      });
    }

    const similar = sel
      ? BIENS.filter(b => b.ref !== sel.ref && (b.type === sel.type || b.statut === sel.statut)).slice(0, 3).map(b => this.decorate(b))
      : [];

    return {
      agencyName: p.agencyName ?? "Alassani Immobilier",
      tagline: p.tagline ?? "Vente, location et gestion à Lomé depuis 2009. Nous ne présentons qu’un bien que nous connaissons — visité, titre vérifié, estimé au prix du marché réel.",
      ctaLabel: p.ctaLabel ?? "Voir les biens disponibles",
      photoSrc: (window.__resources && window.__resources.photo) || "assets/photo.jpg",
      showDocs: p.showDocs ?? true,
      theme: (p.theme ?? "Noir & blanc") === "Vert profond" ? "green" : "bw",
      phone: p.phone ?? "+228 22 61 04 87",

      isHome: s.page === "home", isBiens: s.page === "biens", isFiche: s.page === "fiche" && !!sel,
      isAgence: s.page === "agence", isEstimation: s.page === "estimation", isContact: s.page === "contact", isFavoris: s.page === "favoris",

      goHome: () => this.nav("home"), goBiens: () => this.nav("biens"), goAgence: () => this.nav("agence"),
      goEstimation: () => this.nav("estimation"), goContact: () => this.nav("contact"), goFavoris: () => this.nav("favoris"),
      goHonoraires: () => this.nav("contact"),

      q: s.q, fType: s.fType, fStatut: s.fStatut, fBudget: s.fBudget, fSort: s.fSort,
      onQuery: e => this.setState({ q: e.target.value }),
      onType: e => this.setState({ fType: e.target.value }),
      onStatut: e => this.setState({ fStatut: e.target.value }),
      onBudget: e => this.setState({ fBudget: e.target.value }),
      onSort: e => this.setState({ fSort: e.target.value }),
      resetFilters: () => this.setState({ q: "", fType: "Tous les types", fStatut: "Vente et location", fBudget: "0", fSort: "Les plus récents", favOnly: false }),
      toggleFavOnly: () => this.setState(st => ({ favOnly: !st.favOnly })),
      favOnlyLabel: s.favOnly ? "★ Favoris seulement" : "☆ Favoris seulement",

      types: ["Tous les types", "Villa", "Maison", "Appartement", "Prestige", "Neuf", "Investissement", "Commerce", "Terrain"],
      statuts: ["Vente et location", "Vente", "Location"],
      sorts: ["Les plus récents", "Prix croissant", "Prix décroissant", "Surface décroissante"],
      budgets: [
        { value: "0", label: "Sans limite" },
        { value: "30000000", label: "Jusqu’à 30 M FCFA" },
        { value: "60000000", label: "Jusqu’à 60 M FCFA" },
        { value: "120000000", label: "Jusqu’à 120 M FCFA" },
        { value: "250000000", label: "Jusqu’à 250 M FCFA" }
      ],

      results: results,
      noResults: results.length === 0,
      resultLabel: results.length === 0 ? "Aucun résultat" : (results.length === 1 ? "1 bien correspond à votre recherche" : results.length + " biens correspondent à votre recherche"),
      totalCount: BIENS.length,
      featured: BIENS.filter(b => b.featured).map(b => this.decorate(b)),

      sel: selVals, similar: similar,
      selFavLabel: selVals && selVals.isFav ? "★ Retiré des favoris" : "☆ Ajouter aux favoris",
      toggleSelFav: () => sel && this.toggleFav(sel.ref),

      favCount: s.favs.length, favs: favs, hasFavs: favs.length > 0, noFavs: favs.length === 0,

      chatOpen: s.chatOpen,
      chatToggleLabel: s.chatOpen ? "Masquer le chat" : "Chat avec l’agence",
      chatStatus: "En ligne — réponse en quelques minutes",
      toggleChat: () => this.setState(st => ({ chatOpen: !st.chatOpen })),
      openChat: () => this.setState({ chatOpen: true }),
      closeChat: () => this.setState({ chatOpen: false }),
      chatDraft: s.chatDraft,
      onChatInput: e => this.setState({ chatDraft: e.target.value }),
      onChatSubmit: e => { e.preventDefault(); this.send(s.chatDraft); },
      chatMsgs: s.chatMsgs.map(m => ({
        who: m.who, text: m.text,
        align: m.mine ? "flex-end" : "flex-start",
        bg: m.mine ? "var(--color-accent-900)" : "var(--color-accent-100)",
        fg: m.mine ? "var(--color-bg)" : "var(--color-accent-900)",
        border: m.mine ? "2px solid var(--color-accent-900)" : "2px solid var(--color-accent-200)"
      })),
      chatQuick: [
        { label: "Voir les villas", send: () => this.send("Je cherche une villa") },
        { label: "Vendre mon bien", send: () => this.send("Je veux une estimation pour vendre") },
        { label: "Titre foncier", send: () => this.send("Le titre foncier est-il disponible ?") }
      ],

      visitSent: s.visitSent, visitOpen: !s.visitSent,
      onVisitSubmit: e => { e.preventDefault(); this.setState({ visitSent: true }); },
      estSent: s.estSent, estOpen: !s.estSent,
      onEstSubmit: e => { e.preventDefault(); this.setState({ estSent: true }); window.scrollTo(0, 0); },
      resetEst: () => this.setState({ estSent: false }),
      msgSent: s.msgSent, msgOpen: !s.msgSent,
      onMsgSubmit: e => { e.preventDefault(); this.setState({ msgSent: true }); },
      resetMsg: () => this.setState({ msgSent: false }),

      expertises: [
        { num: "01", titre: "Vente d’appartements et de maisons", texte: "Mandat suivi par un seul négociateur, visites accompagnées, comptes rendus après chaque visite et négociation menée sur pièces jusqu’à la signature." },
        { num: "02", titre: "Biens de prestige et bord de mer", texte: "Diffusion confidentielle possible, dossier photographique et technique complet, mise en relation avec notaires, géomètres et architectes de confiance." },
        { num: "03", titre: "Location et gestion locative", texte: "Sélection des dossiers, état des lieux détaillé, quittancement et suivi des travaux. Un interlocuteur unique pour le propriétaire comme pour le locataire." },
        { num: "04", titre: "Investissement, neuf, commerces et terrains", texte: "Étude de rendement avant offre, lecture des baux en cours, vérification du titre foncier et du bornage, accompagnement sur les programmes sur plan." }
      ],
      valeurs: [
        { num: "01", titre: "Peu de mandats", texte: "Une trentaine de biens au portefeuille, pas plus. Ce qui nous permet de connaître chaque dossier sans le relire." },
        { num: "02", titre: "Dossier vérifié", texte: "Titre foncier, bornage et quitus fiscal contrôlés avant la mise en vente. Aucun bien au litige foncier dans notre portefeuille." },
        { num: "03", titre: "Un seul interlocuteur", texte: "Le négociateur qui signe le mandat vous suit jusqu’à l’acte. Pas de transmission de dossier en cours de route." }
      ],
      equipe: [
        { nom: "Sofia Alassani", role: "Directrice", note: "Fondatrice de l’agence en 2009 à Coconut. Suit les biens de prestige et le bord de mer.", slot: "agent-sofia" },
        { nom: "Kossi Amegan", role: "Négociateur", note: "Lomé centre, Tokoin et Bè : appartements, immeubles de rapport et commerces.", slot: "agent-kossi" },
        { nom: "Afi Sodjinou", role: "Négociatrice", note: "Adidogomé, Agoè et Baguida : villas familiales et terrains titrés.", slot: "agent-afi" },
        { nom: "Marc Doumbia", role: "Gestion locative", note: "Suivi des baux, états des lieux et travaux pour 140 lots gérés.", slot: "agent-marc" }
      ],
      etapes: [
        { num: "01", titre: "Visite d’estimation", texte: "45 minutes sur place : état réel, exposition, nuisances, potentiel de travaux. Rien ne s’estime depuis un tableur." },
        { num: "02", titre: "Rapport écrit sous 48 h", texte: "Une fourchette de prix en FCFA, les trois à cinq biens comparables qui la justifient et le délai de vente attendu." },
        { num: "03", titre: "Décision libre", texte: "Vous gardez le rapport, avec ou sans mandat. Si vous nous confiez le bien, la stratégie de prix est fixée avec vous." }
      ]
    };
  }
}
