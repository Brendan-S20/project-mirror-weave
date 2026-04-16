import { Link } from "react-router-dom";
import { type Service } from "@/data/services";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  if (variant === "compact") {
    return (
      <Link to={`/${service.slug}`} className="card-elevated p-6 group hover:border-primary/30 transition-all duration-300 block">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground">{service.subtitle}</p>
      </Link>
    );
  }

  return (
    <Link to={`/${service.slug}`} className="card-elevated p-8 group hover:border-primary/30 transition-all duration-300 block relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
        <div className="w-5 h-5 rounded-full bg-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
      <p className="text-sm text-foreground/70 leading-relaxed mb-4">{service.description}</p>
      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}

interface ServiceGridProps {
  services: Service[];
  title?: string;
  description?: string;
  variant?: "default" | "compact";
  columns?: 2 | 3 | 4;
}

export default function ServiceGrid({ services, title, description, variant = "default", columns = 3 }: ServiceGridProps) {
  const { ref, inView } = useInView();
  const colsClass = columns === 2 ? "lg:grid-cols-2" : columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-padding py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">{title}</h2>}
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </div>
        )}
        <div className={`grid ${colsClass} gap-6 ${inView ? "stagger-children" : ""}`}>
          {services.map((s) => (
            <div key={s.slug} className={inView ? "animate-fade-up" : "opacity-0"}>
              <ServiceCard service={s} variant={variant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
