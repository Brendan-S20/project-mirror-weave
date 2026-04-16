import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

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
  const { ref, inView } = useInView();

  if (variant === "banner") {
    return (
      <section className="section-padding py-12" ref={ref}>
        <div className={`max-w-7xl mx-auto ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="bg-primary rounded-3xl px-8 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(72,100%,55%,0.3)] to-transparent opacity-50" />
            <h2 className="text-2xl lg:text-4xl font-bold text-primary-foreground leading-tight relative z-10">{title}</h2>
            <Link to={ctaHref} className="inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary font-semibold px-8 py-3.5 text-sm transition-all hover:opacity-90 shrink-0 relative z-10">
              {ctaText}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "minimal") {
    return (
      <section className="section-padding py-16 lg:py-24 text-center" ref={ref}>
        <div className={`max-w-2xl mx-auto ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{title}</h2>
          {description && <p className="text-muted-foreground mb-8">{description}</p>}
          <Link to={ctaHref} className="btn-lime">{ctaText}</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding py-20 lg:py-28 section-medium relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className={`max-w-7xl mx-auto text-center relative z-10 ${inView ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{title}</h2>
        {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">{description}</p>}
        <Link to={ctaHref} className="btn-lime animate-pulse-glow">{ctaText}</Link>
      </div>
    </section>
  );
}
