import { GlowOrb } from "@/components/ui/GlowOrb";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { ReactNode } from "react";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <GlowOrb
        className="left-1/2 top-[-30%] h-[500px] w-[900px] -translate-x-1/2"
        intensity={0.22}
      />
      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <h1
          className="mt-6 font-semibold tracking-tight text-balance text-text-primary"
          style={{ fontSize: "clamp(2.25rem, 4vw + 1rem, 3.75rem)", lineHeight: 1.05 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
