import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight " +
  "transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "active:scale-[0.97] will-change-transform select-none";

const sizes = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-7 py-3.5 text-base",
};

const variants = {
  primary:
    "bg-accent text-white shadow-[0_0_0_1px_rgba(46,92,255,0.4)_inset] " +
    "hover:bg-accent-strong hover:shadow-[0_12px_40px_-8px_rgba(46,92,255,0.65)] hover:-translate-y-0.5",
  secondary:
    "border border-line-strong text-text-primary hover:border-accent/60 hover:bg-accent-soft hover:-translate-y-0.5",
  ghost: "text-text-secondary hover:text-text-primary",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  onClick,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
