import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import type { Service } from "@/data/services";

interface ServiceGridProps {
  services: Service[];
  title?: ReactNode;
  description?: string;
  variant?: "default" | "compact" | "featured";
  columns?: 2 | 3 | 4;
}

export default function ServiceGrid({ services: items, title, description, variant = "default", columns = 3 }: ServiceGridProps) {
  const { ref, inView } = useInView();
  const colClass = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  if (variant === "featured") {
    return (
      <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          {title && (
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{title}</h2>
                {description && <p className="text-muted-foreground mt-4 max-w-xl text-lg">{description}</p>}
              </div>
              <Link to="/design-services" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all shrink-0">
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
          <div className={`grid ${colClass} gap-5 lg:gap-6 ${inView ? 'stagger-children' : ''}`}>
            {items.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className={`card-premium p-8 lg:p-10 group block ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{s.title[0]}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "compact") {
    return (
      <section className="section-padding py-16 lg:py-24" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {title && <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10">{title}</h2>}
          <div className={`grid ${colClass} gap-4 ${inView ? 'stagger-children' : ''}`}>
            {items.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className={`group flex items-center gap-4 p-5 rounded-xl border border-border/30 hover:border-primary/30 hover:bg-[hsl(var(--surface-elevated))] transition-all ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">{s.title[0]}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.subtitle}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary ml-auto shrink-0 transition-all" />
              </Link>
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
            {description && <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">{description}</p>}
          </div>
        )}
        <div className={`grid ${colClass} gap-5 lg:gap-6 ${inView ? 'stagger-children' : ''}`}>
          {items.map((s) => (
            <Link key={s.slug} to={`/${s.slug}`} className={`card-elevated-hover p-8 lg:p-10 group block ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
              <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.subtitle}</p>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
