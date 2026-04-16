import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  superside: string | boolean;
  competitor: string | boolean;
}

interface ComparisonSectionProps {
  title: ReactNode;
  description?: string;
  competitorName: string;
  items: ComparisonItem[];
}

export default function ComparisonSection({ title, description, competitorName, items }: ComparisonSectionProps) {
  const { ref, inView } = useInView();

  const renderValue = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20"><Check className="w-4 h-4 text-primary" /></span>
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted/50"><X className="w-4 h-4 text-muted-foreground" /></span>
      );
    }
    return <span className="text-sm text-muted-foreground">{val}</span>;
  };

  return (
    <section className="section-padding py-20 lg:py-28" ref={ref}>
      <div className={`max-w-4xl mx-auto ${inView ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{title}</h2>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        <div className="card-elevated overflow-hidden">
          <div className="grid grid-cols-3 p-4 bg-[hsl(var(--surface-overlay))] border-b border-border/50">
            <div className="text-sm font-medium text-muted-foreground">Feature</div>
            <div className="text-sm font-semibold text-primary text-center">Superside</div>
            <div className="text-sm font-medium text-muted-foreground text-center">{competitorName}</div>
          </div>
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-3 p-4 border-b border-border/30 last:border-0 hover:bg-[hsl(var(--surface-overlay)/0.3)] transition-colors">
              <div className="text-sm text-foreground">{item.feature}</div>
              <div className="text-center flex justify-center">{renderValue(item.superside)}</div>
              <div className="text-center flex justify-center">{renderValue(item.competitor)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
