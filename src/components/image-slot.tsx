import Image from "next/image";

import type { Photo } from "@/data/photos";

interface ImageSlotProps {
  /** Photo créditée du registre — pose src, alt et le crédit d'un coup. */
  photo?: Photo;
  /** Échappatoire pour une image sans crédit (photo fournie par l'agence). */
  src?: string;
  alt?: string;
  placeholder?: string;
  /** Ratio CSS, ex. "4 / 3". Ignoré quand le parent fixe la hauteur. */
  ratio?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

/**
 * Emplacement d'image du design.
 *
 * Sans `photo` ni `src`, affiche un cadre vide légendé : le portefeuille de
 * démonstration n'a pas de photographies propres, et un cadre honnête vaut
 * mieux qu'une image d'agence générique présentée comme le bien.
 */
export function ImageSlot({
  photo,
  src,
  alt,
  placeholder = "Photo à venir",
  ratio,
  className = "",
  fill = false,
  priority = false,
  sizes,
}: ImageSlotProps) {
  const url = photo?.src ?? src;
  const texte = alt ?? photo?.sujet ?? "";

  const style: React.CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%" }
    : { width: "100%", aspectRatio: ratio ?? "4 / 3" };

  if (url) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={style}>
        <Image
          src={url}
          alt={texte}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 900px) 100vw, 50vw"}
          className="object-cover"
        />
        {photo ? <PhotoCredit photo={photo} /> : null}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        ...style,
        background: "var(--color-surface)",
        border: "1px solid var(--color-divider)",
      }}
    >
      <span
        style={{
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "color-mix(in srgb, var(--color-text) 42%, transparent)",
        }}
      >
        {placeholder}
      </span>
    </div>
  );
}

/**
 * Crédit d'attribution. CC BY et CC BY-SA l'exigent à chaque affichage —
 * ce n'est pas une politesse, c'est la condition de la licence.
 */
export function PhotoCredit({ photo }: { photo: Photo }) {
  return (
    <figcaption
      className="above-stretched"
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        maxWidth: "100%",
        padding: "5px 10px",
        fontSize: 9.5,
        lineHeight: 1.45,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "rgba(255, 255, 255, 0.88)",
        background: "rgba(26, 24, 21, 0.55)",
        backdropFilter: "blur(3px)",
      }}
    >
      <a
        href={photo.source}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit" }}
      >
        {photo.auteur}
      </a>
      {" · "}
      <a
        href={photo.licenceUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit" }}
      >
        {photo.licence}
      </a>
    </figcaption>
  );
}
