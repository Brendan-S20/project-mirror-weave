import { testimonials, type Testimonial } from "@/data/testimonials";
import { useInView } from "@/hooks/useInView";

interface TestimonialSectionProps {
  title?: string;
  items?: Testimonial[];
  variant?: "grid" | "carousel" | "single" | "featured";
}

export default function TestimonialSection({
  title = "What our clients say",
  items = testimonials.slice(0, 3),
  variant = "grid",
}: TestimonialSectionProps) {
  const { ref, inView } = useInView();

  if (variant === "single" && items.length > 0) {
    const t = items[0];
    return (
      <section className="section-padding py-24 lg:py-32 relative" ref={ref}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className={`max-w-4xl mx-auto text-center relative z-10 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl text-primary font-serif">"</span>
          </div>
          <blockquote className="text-2xl lg:text-4xl font-medium text-foreground leading-snug mb-10 tracking-tight">
            "{t.quote}"
          </blockquote>
          <div>
            <p className="font-bold text-foreground text-lg">{t.author}</p>
            <p className="text-sm text-muted-foreground mt-1">{t.role}, {t.company}</p>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "featured" && items.length > 0) {
    const featured = items[0];
    const rest = items.slice(1, 3);
    return (
      <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-14 text-center">{title}</h2>}
          <div className="grid lg:grid-cols-5 gap-6">
            <div className={`lg:col-span-3 card-premium p-10 lg:p-14 flex flex-col justify-between ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl text-primary font-serif">"</span>
                </div>
                <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
                  "{featured.quote}"
                </blockquote>
              </div>
              <div className="pt-8 mt-8 border-t border-border/30">
                <p className="font-bold text-foreground">{featured.author}</p>
                <p className="text-sm text-muted-foreground">{featured.role}, {featured.company}</p>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-6">
              {rest.map((t, i) => (
                <div key={i} className={`card-elevated-hover p-8 flex-1 flex flex-col justify-between ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                  <blockquote className="text-foreground/90 leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <div className="pt-6 mt-6 border-t border-border/30">
                    <p className="font-semibold text-foreground text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-14 text-center">{title}</h2>
        )}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 ${inView ? "stagger-children" : ""}`}>
          {items.map((t, i) => (
            <div key={i} className={`card-elevated-hover p-8 lg:p-10 flex flex-col ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <span className="text-lg text-primary font-serif">"</span>
              </div>
              <blockquote className="text-foreground/90 leading-relaxed flex-1 mb-8">
                "{t.quote}"
              </blockquote>
              <div className="pt-6 border-t border-border/30">
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
