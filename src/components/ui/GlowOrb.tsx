import { cn } from "@/lib/utils";

/**
 * Lueur radiale bleu électrique décorative, purement CSS (pas de canvas/three.js —
 * léger, performant, aria-hidden). Utilisée avec parcimonie en fond de section.
 */
export function GlowOrb({
  className,
  intensity = 0.22,
}: {
  className?: string;
  intensity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{
        background: `radial-gradient(closest-side, rgba(46,92,255,${intensity}), transparent 70%)`,
      }}
    />
  );
}
