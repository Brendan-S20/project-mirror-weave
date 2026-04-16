import { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface FeatureSectionProps {
  tagline?: string;
  title: ReactNode;
  description?: string;
  features: Feature[];
  variant?: "grid" | "list" | "alternating";
  columns?: 2 | 3 | 4;
}

export default function FeatureSection({
  tagline,
  title,
  description,
  features,
  variant = "grid",
  columns = 3,
}: FeatureSectionProps) {
  const colsClass = columns === 2 ? "lg:grid-cols-2" : columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  if (variant === "list") {
    return (
      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            {tagline && <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 block">{tagline}</span>}
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">{title}</h2>
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </div>
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 items-start pb-8 border-b border-border/30 last:border-0">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-lg">
                  {f.icon || (i + 1)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {tagline && <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 block">{tagline}</span>}
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">{title}</h2>
          {description && <p className="text-lg text-muted-foreground">{description}</p>}
        </div>
        <div className={`grid ${colsClass} gap-6`}>
          {features.map((f, i) => (
            <div key={i} className="card-elevated p-8">
              {f.icon && <div className="mb-4 text-primary">{f.icon}</div>}
              <h3 className="text-lg font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
