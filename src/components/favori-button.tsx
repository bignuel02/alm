"use client";

import { useFavoris } from "@/components/use-favoris";

interface FavoriButtonProps {
  bienRef: string;
  className?: string;
  /** "Retirer" on the favourites page, the full star label elsewhere. */
  compact?: boolean;
}

export function FavoriButton({
  bienRef,
  className = "btn btn-ghost",
  compact = false,
}: FavoriButtonProps) {
  const { has, toggle } = useFavoris();
  const isFav = has(bienRef);

  const label = compact
    ? "Retirer"
    : isFav
      ? "★ Retirer des favoris"
      : "☆ Ajouter aux favoris";

  return (
    <button
      type="button"
      className={className}
      onClick={() => toggle(bienRef)}
      aria-pressed={isFav}
    >
      {label}
    </button>
  );
}
