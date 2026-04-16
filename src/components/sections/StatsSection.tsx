import { useInView } from "@/hooks/useInView";

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  title?: string;
  stats: Stat[];
  variant?: "default" | "inline" | "cards";
}

export default function StatsSection({ title, stats, variant = "default" }: StatsSectionProps) {
  const { ref, inView } = useInView();

  if (variant === "inline") {
    return (
      <section className="section-padding py-12 border-y border-border/30" ref={ref}>
        <div className={`max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12 lg:gap-20 ${inView ? "stagger-children" : ""}`}>
          {stats.map((s, i) => (
            <div key={i} className={`text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div className="text-3xl lg:text-4xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "cards") {
    return (
      <section className="section-padding py-16 lg:py-24" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">{title}</h2>}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${inView ? "stagger-children" : ""}`}>
            {stats.map((s, i) => (
              <div key={i} className={`card-elevated p-6 text-center hover:border-primary/20 transition-all ${inView ? "animate-fade-up" : "opacity-0"}`}>
                <div className="text-3xl lg:text-5xl font-bold text-primary mb-2">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding py-16 lg:py-24 section-medium" ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        {title && <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">{title}</h2>}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${inView ? "stagger-children" : ""}`}>
          {stats.map((s, i) => (
            <div key={i} className={inView ? "animate-fade-up" : "opacity-0"}>
              <div className="text-4xl lg:text-6xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
