import Image from "next/image";

interface ImageSlotProps {
  /** Real photo once the agency supplies one. Falls back to the placeholder. */
  src?: string;
  alt?: string;
  placeholder?: string;
  /** CSS aspect-ratio, e.g. "4 / 3". Omit when the parent sets the height. */
  ratio?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

/**
 * Stand-in for the design's <image-slot>.
 *
 * The bundle shipped no listing photography, so every slot renders an empty
 * frame with its caption until real files land in /public. Swapping in a
 * photo is just passing `src`.
 */
export function ImageSlot({
  src,
  alt = "",
  placeholder = "Photo à venir",
  ratio,
  className = "",
  fill = false,
  priority = false,
}: ImageSlotProps) {
  const style: React.CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%" }
    : { width: "100%", aspectRatio: ratio ?? "4 / 3" };

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={style}>
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" />
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
          color: "color-mix(in srgb, var(--color-text) 45%, transparent)",
        }}
      >
        {placeholder}
      </span>
    </div>
  );
}
