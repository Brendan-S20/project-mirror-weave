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
      <section className="section-padding py-24 lg:py-32 relative" ref={ref}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          {title && (
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{title}</h2>
              {description && <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{description}</p>}
            </div>
          )}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ${inView ? 'stagger-children' : ''}`}>
            {stats.map((s, i) => (
              <div key={i} className={`text-center ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-gradient tracking-tight mb-3">
                  {s.value}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    return (
      <section className="section-padding py-16 lg:py-20 border-y border-border/30" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-wrap justify-center gap-12 lg:gap-20 ${inView ? 'stagger-children' : ''}`}>
            {stats.map((s, i) => (
              <div key={i} className={`text-center ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                <div className="text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
              <div className="text-4xl lg:text-5xl font-black text-primary tracking-tight mb-3 group-hover:scale-105 transition-transform">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
