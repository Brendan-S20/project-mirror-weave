import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCTAModal } from "@/contexts/CTAContext";

interface CTASectionProps {
  title: ReactNode;
  description?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  variant?: "default" | "banner" | "split";
}

export default function CTASection({
  title,
  description = "Talk to The North about your next phase of growth.",
  ctaText = "Start a Project",
  variant = "default",
}: CTASectionProps) {
  const { ref, inView } = useInView();
  const { openProjectModal, openStrategyModal } = useCTAModal();

  if (variant === "banner") {
    return (
      <section className="section-padding py-12 lg:py-16" ref={ref}>
        <div className={`max-w-7xl mx-auto ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="card-premium p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh-cta" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.05] rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold text-foreground">{title}</h2>
                {description && <p className="text-muted-foreground mt-3 max-w-lg">{description}</p>}
              </div>
              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <button onClick={openProjectModal} className="btn-lime group">
                  {ctaText}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button onClick={openStrategyModal} className="btn-outline-light">Book a Strategy Call</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
        <div className="absolute inset-0 gradient-mesh-cta" />
        <div className={`max-w-7xl mx-auto relative z-10 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-[1.1]">{title}</h2>
              {description && <p className="text-lg text-muted-foreground mt-5 max-w-lg">{description}</p>}
            </div>
            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <button onClick={openModal} className="btn-lime-lg group">
                {ctaText}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={openModal} className="btn-outline-light">Book a Strategy Call</button>
            </div>
          </div>
        </div>
        <div className="divider-gradient mt-20" />
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-mesh-cta" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />

      <div className="section-padding py-24 lg:py-36 relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]">{title}</h2>
          {description && (
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto mb-10">{description}</p>
          )}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button onClick={openModal} className="btn-lime-lg animate-pulse-glow group">
              {ctaText}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={openModal} className="btn-outline-light">Book a Strategy Call</button>
          </div>
        </div>
      </div>
    </section>
  );
}
