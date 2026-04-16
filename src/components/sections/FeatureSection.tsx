import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface FeatureSectionProps {
  tagline?: string;
  title?: ReactNode;
  description?: ReactNode;
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "grid" | "list" | "alternating";
}

export default function FeatureSection({
  tagline,
  title,
  description,
  features,
  columns = 3,
  variant = "grid",
}: FeatureSectionProps) {
  const { ref, inView } = useInView();

  if (variant === "list") {
    return (
      <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          {(tagline || title) && (
            <div className="max-w-3xl mb-16">
              {tagline && <span className="badge-pill mb-6">{tagline}</span>}
              {title && <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4">{title}</h2>}
              {description && <p className="text-lg text-muted-foreground mt-5">{description}</p>}
            </div>
          )}
          <div className="space-y-0">
            {features.map((f, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-border/30 last:border-0 group ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="md:w-1/3 shrink-0">
                  <span className="text-xs font-mono text-primary/60 mb-2 block">0{i + 1}</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "alternating") {
    return (
      <section className="section-padding py-20 lg:py-28" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {(tagline || title) && (
            <div className="text-center mb-20">
              {tagline && <span className="badge-pill mb-6">{tagline}</span>}
              {title && <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4">{title}</h2>}
            </div>
          )}
          <div className="space-y-20">
            {features.map((f, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl bg-[hsl(var(--surface-elevated))] border border-border/30 gradient-mesh" />
                </div>
                <div className="lg:w-1/2">
                  <span className="text-xs font-mono text-primary/60 mb-3 block">0{i + 1}</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const colClass = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
      <div className="absolute inset-0 gradient-mesh-section" />
      <div className="max-w-7xl mx-auto relative z-10">
        {(tagline || title) && (
          <div className="text-center mb-16">
            {tagline && <span className="badge-pill mb-6">{tagline}</span>}
            {title && <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4">{title}</h2>}
            {description && <p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        <div className={`grid ${colClass} gap-5 lg:gap-6 ${inView ? 'stagger-children' : ''}`}>
          {features.map((f, i) => (
            <div
              key={i}
              className={`card-elevated-hover p-8 lg:p-10 group ${inView ? 'animate-fade-up' : 'opacity-0'}`}
            >
              {f.icon && <div className="mb-5 text-primary">{f.icon}</div>}
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
