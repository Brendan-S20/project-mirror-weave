import { testimonials, type Testimonial } from "@/data/testimonials";

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
  if (variant === "single" && items.length > 0) {
    const t = items[0];
    return (
      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
            "{t.quote}"
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
    <section className="section-padding py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">{title}</h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="card-elevated p-8 flex flex-col">
              <blockquote className="text-foreground/90 leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>
              <div>
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
