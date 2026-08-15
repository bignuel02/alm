/**
 * Portrait de substitution : les initiales du négociateur.
 *
 * L'agence n'a pas fourni de photographies d'équipe, et prêter le visage
 * d'une personne réelle — même sous licence libre — à un membre inventé
 * serait une fausse représentation. Le monogramme tient la place jusqu'aux
 * vrais portraits.
 */
export function Monogramme({
  nom,
  ratio = "4 / 5",
  className = "",
}: {
  nom: string;
  ratio?: string;
  className?: string;
}) {
  const initiales = nom
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((mot) => mot[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        width: "100%",
        aspectRatio: ratio,
        background:
          "linear-gradient(150deg, var(--color-surface) 0%, color-mix(in srgb, var(--color-accent-200) 55%, var(--color-surface)) 100%)",
        borderBottom: "1px solid var(--color-divider)",
      }}
      aria-hidden="true"
    >
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 500,
          fontSize: "clamp(46px, 6vw, 68px)",
          letterSpacing: "0.06em",
          lineHeight: 1,
          color: "color-mix(in srgb, var(--color-accent) 62%, transparent)",
        }}
      >
        {initiales}
      </span>
    </div>
  );
}
