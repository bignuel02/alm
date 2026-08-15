"use client";

import { EVENEMENT_OUVRIR_CHAT } from "@/components/chat-widget";

/** Déclenche le widget de chat depuis n'importe quelle page. */
export function OuvrirChat({
  className = "btn btn-secondary",
  children = "Ouvrir le chat",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(EVENEMENT_OUVRIR_CHAT))}
    >
      {children}
    </button>
  );
}
