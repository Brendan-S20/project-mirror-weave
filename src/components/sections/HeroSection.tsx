import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  tagline?: string;
  title: ReactNode;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  children?: ReactNode;
  variant?: "default" | "split" | "centered";
}

export default function HeroSection({
  tagline,
  title,
  description,
  ctaText = "Book a demo",
  ctaHref = "/pricing",
  secondaryCtaText,
  secondaryCtaHref,
  children,
  variant = "default",
}: HeroSectionProps) {
  if (variant === "centered") {
    return (
      <section className="section-dark section-padding py-24 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          {tagline && (
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              {tagline}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">{description}</p>
          <div className="flex items-center justify-center gap-4">
            <Link to={ctaHref} className="btn-lime">{ctaText}</Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link to={secondaryCtaHref} className="btn-outline-light">{secondaryCtaText}</Link>
            )}
          </div>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="section-dark section-padding py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${variant === "split" ? "lg:flex-row lg:items-center gap-12 lg:gap-20" : "gap-8"}`}>
          <div className={variant === "split" ? "lg:w-1/2" : "max-w-3xl"}>
            {tagline && (
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                {tagline}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10">{description}</p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link to={ctaHref} className="btn-lime">{ctaText}</Link>
              {secondaryCtaText && secondaryCtaHref && (
                <Link to={secondaryCtaHref} className="btn-outline-light">{secondaryCtaText}</Link>
              )}
            </div>
          </div>
          {variant === "split" && children && (
            <div className="lg:w-1/2">{children}</div>
          )}
        </div>
        {variant === "default" && children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  );
}
