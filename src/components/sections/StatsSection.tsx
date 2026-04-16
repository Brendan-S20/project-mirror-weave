import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  title?: ReactNode;
  description?: string;
  stats: Stat[];
  variant?: "cards" | "inline" | "large";
}

export default function StatsSection({ title, description, stats, variant = "cards" }: StatsSectionProps) {
  const { ref, inView } = useInView();

  if (variant === "large") {
    return (
      <section className="section-padding py-24 lg:py-36 relative overflow-hidden" ref={ref}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          {title && (
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{title}</h2>
              {description && <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">{description}</p>}
            </div>
          )}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 ${inView ? 'stagger-children' : ''}`}>
            {stats.map((s, i) => (
              <div key={i} className={`text-center relative ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                <div className="text-6xl md:text-7xl lg:text-2xl font-black text-gradient tracking-tighter mb-4 leading-none">
                  {s.value}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium max-w-[200px] mx-auto">{s.label}</div>
                {/* Vertical divider (except last) */}
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    return (
      <section className="section-padding py-16 lg:py-20 border-y border-border/20" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-wrap justify-center gap-12 lg:gap-20 ${inView ? 'stagger-children' : ''}`}>
            {stats.map((s, i) => (
              <div key={i} className={`text-center ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                <div className="text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // cards variant
  return (
    <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
      <div className="absolute inset-0 gradient-mesh-section" />
      <div className="max-w-7xl mx-auto relative z-10">
        {title && (
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{title}</h2>
            {description && <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{description}</p>}
          </div>
        )}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 ${inView ? 'stagger-children' : ''}`}>
          {stats.map((s, i) => (
            <div key={i} className={`card-premium p-8 lg:p-10 text-center group ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="text-4xl lg:text-5xl font-black text-primary tracking-tight mb-3 group-hover:scale-105 transition-transform">{s.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
