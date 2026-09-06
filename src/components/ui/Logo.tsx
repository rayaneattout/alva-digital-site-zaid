import Link from "next/link";

/**
 * Monogramme "A" — reconstruction vectorielle fidèle à la charte fournie par le client
 * (A géométrique arrondi, accent bleu électrique en travers de la jambe droite, éclats
 * de mouvement). Fond transparent : conçu pour être posé directement sur le thème sombre
 * du site, sans le cadre noir arrondi de l'icône d'app d'origine.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Éclats de mouvement */}
      <g stroke="#F5F2EA" strokeWidth="5" strokeLinecap="round">
        <path d="M63 30 L69 19" />
        <path d="M71 36 L82 28" />
        <path d="M75 46 L88 42" />
      </g>
      {/* Jambes du A */}
      <path
        d="M30 86 L50 15 L70 86"
        stroke="#F5F2EA"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Accent bleu électrique */}
      <path d="M58 63 L83 63" stroke="#3D6BFF" strokeWidth="13" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  asLink = false,
  onClick,
}: {
  className?: string;
  markClassName?: string;
  asLink?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <>
      <LogoMark className={markClassName ?? "h-7 w-7"} />
      <span className="lowercase tracking-tight">alva digital</span>
    </>
  );

  if (asLink) {
    return (
      <Link href="/" className={className} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return <span className={className}>{content}</span>;
}
