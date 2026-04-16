import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface CTASectionProps {
  title: ReactNode;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "default" | "banner" | "minimal";
}

export default function CTASection({
  title,
  description,
  ctaText = "Book a demo",
  ctaHref = "/pricing",
  variant = "default",
}: CTASectionProps) {
  if (variant === "banner") {
    return (
      <section className="section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-3xl px-8 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-primary-foreground leading-tight">{title}</h2>
            <Link to={ctaHref} className="inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary font-semibold px-8 py-3.5 text-sm transition-all hover:opacity-90 shrink-0">
              {ctaText}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "minimal") {
    return (
      <section className="section-padding py-16 lg:py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{title}</h2>
          {description && <p className="text-muted-foreground mb-8">{description}</p>}
          <Link to={ctaHref} className="btn-lime">{ctaText}</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding py-20 lg:py-28 section-medium">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{title}</h2>
        {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">{description}</p>}
        <Link to={ctaHref} className="btn-lime">{ctaText}</Link>
      </div>
    </section>
  );
}
