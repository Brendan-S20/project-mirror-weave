import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { useCTAModal } from "@/contexts/CTAContext";

interface HeroSectionProps {
  tagline?: string;
  title: ReactNode;
  description: string;
  ctaText?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  children?: ReactNode;
  variant?: "default" | "split" | "centered";
}

export default function HeroSection({
  tagline,
  title,
  description,
  ctaText = "Start a Project",
  secondaryCtaText = "Book a Strategy Call",
  secondaryCtaHref,
  children,
  variant = "default",
}: HeroSectionProps) {
  const { openModal } = useCTAModal();

  const renderCTA = (large = false, additionalClasses = "") => (
    <div className={`flex items-center gap-4 flex-wrap ${additionalClasses}`}>
      <button onClick={openModal} className={`${large ? 'btn-lime-lg' : 'btn-lime'} animate-pulse-glow group`}>
        {ctaText}
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
      {secondaryCtaText && (
        secondaryCtaHref ? (
          <a href={secondaryCtaHref} className="btn-outline-light">{secondaryCtaText}</a>
        ) : (
          <button onClick={openModal} className="btn-outline-light">{secondaryCtaText}</button>
        )
      )}
    </div>
  );

  if (variant === "centered") {
    return (
      <section className="relative overflow-hidden gradient-mesh-hero">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="section-padding py-28 lg:py-44 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {tagline && <span className="badge-pill mb-8 animate-fade-up">{tagline}</span>}
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl heading-display text-foreground mb-8 animate-fade-up" style={{ animationDelay: '80ms' }}>
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '160ms' }}>
              {description}
            </p>
            <div className="animate-fade-up flex justify-center" style={{ animationDelay: '240ms' }}>
              {renderCTA(true, "justify-center")}
            </div>
            {children && <div className="mt-20 animate-fade-up" style={{ animationDelay: '320ms' }}>{children}</div>}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-hero" />
        <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(var(--emerald)/0.08)] blur-[100px]" />
        <div className="section-padding pt-32 lg:pt-44 pb-20 lg:pb-28 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-[55%] shrink-0 flex flex-col justify-center">
                {tagline && <span className="badge-pill mb-8 animate-fade-up">{tagline}</span>}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] heading-display text-foreground mb-8 animate-fade-up leading-[1.05]" style={{ animationDelay: '80ms' }}>
                  {title}
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '160ms' }}>
                  {description}
                </p>
                <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
                  {renderCTA(true)}
                </div>
              </div>
              {children && (
                <div className="lg:w-[45%] animate-fade-up" style={{ animationDelay: '300ms' }}>
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden gradient-mesh-hero">
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
      <div className="section-padding pt-32 lg:pt-44 pb-20 lg:pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {tagline && <span className="badge-pill mb-8 animate-fade-up">{tagline}</span>}
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl heading-display text-foreground mb-8 animate-fade-up" style={{ animationDelay: '80ms' }}>
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '160ms' }}>
              {description}
            </p>
            <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
              {renderCTA(true)}
            </div>
          </div>
          {children && <div className="mt-20 animate-fade-up" style={{ animationDelay: '400ms' }}>{children}</div>}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
