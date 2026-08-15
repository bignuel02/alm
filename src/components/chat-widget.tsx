"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

import {
  AGENT,
  CHAT_STATUS,
  MESSAGE_ACCUEIL,
  QUESTIONS_RAPIDES,
  repondre,
  type ChatMessage,
} from "@/lib/chat";

/** Délai avant la réponse — assez pour lire comme une frappe, pas plus. */
const DELAI_REPONSE = 700;

function IconeBulle() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.9 9.9 0 0 1-3.2-.5L3 21l1.7-4.6A8.1 8.1 0 0 1 3.6 11.5 8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4Z" />
      <path d="M8.5 10.5h7M8.5 13.8h4.5" />
    </svg>
  );
}

function IconeFermer() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/** Ouvre le chat depuis n'importe où : window.dispatchEvent(OUVRIR_CHAT). */
export const EVENEMENT_OUVRIR_CHAT = "alassani:ouvrir-chat";

export function ChatWidget() {
  const [ouvert, setOuvert] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([MESSAGE_ACCUEIL]);
  const [brouillon, setBrouillon] = useState("");
  const [enTrainDecrire, setEnTrainDecrire] = useState(false);

  const listeRef = useRef<HTMLDivElement>(null);
  const champRef = useRef<HTMLInputElement>(null);
  const minuteurs = useRef<ReturnType<typeof setTimeout>[]>([]);
  const compteur = useRef(0);
  const titreId = useId();

  // Purge les réponses en attente si le composant disparaît.
  useEffect(() => {
    const encours = minuteurs.current;
    return () => {
      for (const t of encours) clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const ouvrir = () => setOuvert(true);
    window.addEventListener(EVENEMENT_OUVRIR_CHAT, ouvrir);
    return () => window.removeEventListener(EVENEMENT_OUVRIR_CHAT, ouvrir);
  }, []);

  // Colle au dernier message.
  useEffect(() => {
    const el = listeRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, enTrainDecrire, ouvert]);

  // Échap ferme, et le focus part dans le champ à l'ouverture.
  useEffect(() => {
    if (!ouvert) return;
    champRef.current?.focus();
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(false);
    };
    window.addEventListener("keydown", surTouche);
    return () => window.removeEventListener("keydown", surTouche);
  }, [ouvert]);

  const envoyer = useCallback((texte: string) => {
    const t = texte.trim();
    if (!t) return;

    compteur.current += 1;
    const question: ChatMessage = {
      id: `q${compteur.current}`,
      who: "Vous",
      text: t,
      mine: true,
    };
    setMessages((m) => [...m, question]);
    setBrouillon("");
    setEnTrainDecrire(true);

    const reponse = repondre(t);
    const minuteur = setTimeout(() => {
      compteur.current += 1;
      setEnTrainDecrire(false);
      setMessages((m) => [
        ...m,
        { id: `r${compteur.current}`, who: AGENT, text: reponse, mine: false },
      ]);
    }, DELAI_REPONSE);
    minuteurs.current.push(minuteur);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "clamp(12px, 3vw, 24px)",
        bottom: "clamp(12px, 3vw, 24px)",
        zIndex: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 12,
        maxWidth: "calc(100vw - 24px)",
      }}
    >
      {ouvert ? (
        <section
          role="dialog"
          aria-labelledby={titreId}
          style={{
            width: "min(360px, calc(100vw - 24px))",
            height: "min(560px, calc(100dvh - 130px))",
            background: "var(--color-bg)",
            border: "2px solid var(--color-accent-900)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <header
            style={{
              background: "var(--color-accent-900)",
              color: "var(--color-bg)",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flex: "0 0 auto",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <p
                id={titreId}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-heading-weight)",
                  fontSize: 19,
                  margin: 0,
                }}
              >
                Alassani en direct
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-300)",
                }}
              >
                {CHAT_STATUS}
              </p>
            </div>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setOuvert(false)}
              style={{
                color: "var(--color-bg)",
                borderColor: "color-mix(in srgb, var(--color-bg) 55%, transparent)",
                padding: "6px 12px",
                flex: "0 0 auto",
              }}
            >
              Fermer
            </button>
          </header>

          <div
            ref={listeRef}
            aria-live="polite"
            style={{
              padding: 18,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              overflowY: "auto",
              flex: "1 1 0",
              minHeight: 0,
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  maxWidth: "88%",
                  padding: "11px 15px",
                  borderRadius: "var(--radius-md)",
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  alignSelf: m.mine ? "flex-end" : "flex-start",
                  background: m.mine ? "var(--color-accent-900)" : "var(--color-accent-100)",
                  color: m.mine ? "var(--color-bg)" : "var(--color-accent-900)",
                  border: `1px solid ${m.mine ? "var(--color-accent-900)" : "var(--color-accent-200)"}`,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    opacity: 0.62,
                    marginBottom: 6,
                  }}
                >
                  {m.who}
                </span>
                {m.text}
              </div>
            ))}

            {enTrainDecrire ? (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "11px 15px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-accent-100)",
                  border: "1px solid var(--color-accent-200)",
                  fontSize: 13,
                  letterSpacing: "0.14em",
                  color: "var(--color-accent-900)",
                }}
              >
                <span className="sr-only">Kossi est en train d’écrire</span>
                <span aria-hidden="true">• • •</span>
              </div>
            ) : null}
          </div>

          <div
            style={{
              borderTop: "1px solid var(--color-divider)",
              padding: "10px 18px",
              display: "flex",
              gap: 8,
              overflowX: "auto",
              flex: "0 0 auto",
            }}
          >
            {QUESTIONS_RAPIDES.map((q) => (
              <button
                key={q.label}
                type="button"
                className="btn btn-ghost"
                onClick={() => envoyer(q.envoi)}
                style={{ padding: "6px 12px", fontSize: 10.5, whiteSpace: "nowrap" }}
              >
                {q.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              envoyer(brouillon);
            }}
            style={{
              borderTop: "1px solid var(--color-divider)",
              padding: "12px 18px",
              display: "flex",
              gap: 10,
              flex: "0 0 auto",
            }}
          >
            <input
              ref={champRef}
              className="input"
              type="text"
              value={brouillon}
              onChange={(e) => setBrouillon(e.target.value)}
              placeholder="Écrivez votre message…"
              aria-label="Votre message"
              style={{ flex: "1 1 auto", minWidth: 0 }}
            />
            <button type="submit" className="btn btn-primary" style={{ flex: "0 0 auto" }}>
              Envoyer
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="chat-fab"
        onClick={() => setOuvert((o) => !o)}
        aria-expanded={ouvert}
        aria-label={ouvert ? "Masquer le chat" : "Chat avec l’agence"}
        title={ouvert ? "Masquer le chat" : "Chat avec l’agence"}
      >
        {ouvert ? <IconeFermer /> : <IconeBulle />}
        {/* Pastille d'état : l'agence annonce être joignable. */}
        {ouvert ? null : <span className="chat-fab-pastille" aria-hidden="true" />}
      </button>
    </div>
  );
}
