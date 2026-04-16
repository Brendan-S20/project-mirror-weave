import { Link } from "react-router-dom";
import { type Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  if (variant === "compact") {
    return (
      <Link to={`/${service.slug}`} className="card-elevated p-6 group hover:border-primary/30 transition-all block">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground">{service.subtitle}</p>
      </Link>
    );
  }

  return (
    <Link to={`/${service.slug}`} className="card-elevated p-8 group hover:border-primary/30 transition-all block">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
        <div className="w-5 h-5 rounded-full bg-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
      <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
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
  const colsClass = columns === 2 ? "lg:grid-cols-2" : columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-padding py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">{title}</h2>}
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </div>
        )}
        <div className={`grid ${colsClass} gap-6`}>
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
}
