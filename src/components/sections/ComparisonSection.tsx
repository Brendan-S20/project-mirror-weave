import { ReactNode } from "react";
import { Check, X } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface ComparisonItem {
  feature: string;
  superside: boolean | string;
  competitor: boolean | string;
}

interface ComparisonSectionProps {
  title?: ReactNode;
  description?: string;
  competitorName: string;
  items: ComparisonItem[];
}

function RenderValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-primary" />;
  if (value === false) return <X className="w-5 h-5 text-muted-foreground/40" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export default function ComparisonSection({ title, description, competitorName, items }: ComparisonSectionProps) {
  const { ref, inView } = useInView();

  return (
    <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
      <div className="absolute inset-0 gradient-mesh-section" />
      <div className="max-w-4xl mx-auto relative z-10">
        {title && (
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{title}</h2>
            {description && <p className="text-muted-foreground mt-4">{description}</p>}
          </div>
        )}
        <div className={`card-premium overflow-hidden ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_160px_160px] items-center border-b border-border/40 bg-primary/[0.03]">
            <div className="p-5 lg:p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Feature</span>
            </div>
            <div className="p-5 lg:p-6 text-center border-l border-border/30">
              <span className="text-sm font-bold text-primary">Superside</span>
            </div>
            <div className="p-5 lg:p-6 text-center border-l border-border/30">
              <span className="text-sm font-semibold text-muted-foreground">{competitorName}</span>
            </div>
          </div>
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_160px_160px] items-center border-b border-border/20 last:border-0 hover:bg-[hsl(var(--surface-elevated)/0.5)] transition-colors">
              <div className="p-5 lg:p-6">
                <span className="text-sm text-foreground/90">{item.feature}</span>
              </div>
              <div className="p-5 lg:p-6 flex justify-center border-l border-border/20">
                <RenderValue value={item.superside} />
              </div>
              <div className="p-5 lg:p-6 flex justify-center border-l border-border/20">
                <RenderValue value={item.competitor} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
