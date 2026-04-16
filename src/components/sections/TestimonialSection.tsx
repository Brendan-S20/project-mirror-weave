import { testimonials, type Testimonial } from "@/data/testimonials";
import { useInView } from "@/hooks/useInView";

interface TestimonialSectionProps {
  title?: string;
  items?: Testimonial[];
  variant?: "grid" | "carousel" | "single";
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
      <section className="section-padding py-20 lg:py-28" ref={ref}>
        <div className={`max-w-4xl mx-auto text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="text-5xl text-primary/30 mb-6">"</div>
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
            {t.quote}
          </blockquote>
          <div>
            <p className="font-semibold text-foreground">{t.author}</p>
            <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">{title}</h2>
        )}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${inView ? "stagger-children" : ""}`}>
          {items.map((t, i) => (
            <div key={i} className={`card-elevated p-8 flex flex-col hover:border-primary/20 transition-all duration-300 ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div className="text-2xl text-primary/40 mb-3">"</div>
              <blockquote className="text-foreground/90 leading-relaxed flex-1 mb-6">
                {t.quote}
              </blockquote>
              <div className="pt-4 border-t border-border/30">
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
