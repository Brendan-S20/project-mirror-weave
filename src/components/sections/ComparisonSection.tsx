import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  superside: boolean | string;
  competitor: boolean | string;
}

interface ComparisonSectionProps {
  title?: ReactNode;
  description?: string;
  competitorName?: string;
  items?: ComparisonItem[];
}

interface MultiComparisonRow {
  feature: string;
  superside: boolean | string;
  agencies: boolean | string;
  freelancers: boolean | string;
  inHouse: boolean | string;
}

const defaultRows: MultiComparisonRow[] = [
  { feature: "Top 1% vetted creative talent", superside: true, agencies: true, freelancers: false, inHouse: false },
  { feature: "Dedicated team that learns your brand", superside: true, agencies: false, freelancers: false, inHouse: true },
  { feature: "AI-powered workflows", superside: true, agencies: false, freelancers: false, inHouse: false },
  { feature: "Predictable subscription pricing", superside: true, agencies: false, freelancers: false, inHouse: false },
  { feature: "100+ creative specialties", superside: true, agencies: true, freelancers: false, inHouse: false },
  { feature: "24/7 global coverage", superside: true, agencies: false, freelancers: false, inHouse: false },
  { feature: "Scale up or down instantly", superside: true, agencies: false, freelancers: true, inHouse: false },
  { feature: "Enterprise-grade security", superside: true, agencies: true, freelancers: false, inHouse: true },
];

const CellValue = ({ val }: { val: boolean | string }) => {
  if (typeof val === "string") return <span className="text-sm text-muted-foreground">{val}</span>;
  if (val) return <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-primary" /></div>;
  return <div className="w-6 h-6 rounded-full bg-muted/30 flex items-center justify-center mx-auto"><X className="w-3 h-3 text-muted-foreground/40" /></div>;
};

export default function ComparisonSection({ title, description, competitorName, items }: ComparisonSectionProps) {
  const { ref, inView } = useInView();

  if (competitorName && items) {
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
              <div className="p-5 lg:p-6"><span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Feature</span></div>
              <div className="p-5 lg:p-6 text-center border-l border-border/30"><span className="text-sm font-bold text-primary">The North</span></div>
              <div className="p-5 lg:p-6 text-center border-l border-border/30"><span className="text-sm font-semibold text-muted-foreground">{competitorName}</span></div>
            </div>
            {items.map((item, i) => (
              <div key={i} className="grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_160px_160px] items-center border-b border-border/20 last:border-0 hover:bg-[hsl(var(--surface-elevated)/0.5)] transition-colors">
                <div className="p-5 lg:p-6"><span className="text-sm text-foreground/90">{item.feature}</span></div>
                <div className="p-5 lg:p-6 flex justify-center border-l border-border/20"><CellValue val={item.superside} /></div>
                <div className="p-5 lg:p-6 flex justify-center border-l border-border/20"><CellValue val={item.competitor} /></div>
              </div>
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
        <div className="text-center mb-16">
          <span className="badge-pill mb-6">Compare</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4">
            {title || <>Why teams choose <span className="heading-italic">The North</span></>}
          </h2>
          <p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto">
            {description || "See how The North stacks up against the alternatives."}
          </p>
        </div>
        <div className={`overflow-x-auto ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left py-5 pr-6 text-sm font-medium text-muted-foreground w-[35%]" />
                <th className="py-5 px-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5">
                    <span className="text-sm font-bold text-primary">The North</span>
                  </div>
                </th>
                <th className="py-5 px-4 text-sm font-medium text-muted-foreground text-center">Agencies</th>
                <th className="py-5 px-4 text-sm font-medium text-muted-foreground text-center">Freelancers</th>
                <th className="py-5 px-4 text-sm font-medium text-muted-foreground text-center">In-House</th>
              </tr>
            </thead>
            <tbody>
              {defaultRows.map((row, i) => (
                <tr key={i} className="border-b border-border/15 hover:bg-[hsl(var(--surface-elevated)/0.3)] transition-colors">
                  <td className="py-4 pr-6 text-sm font-medium text-foreground/90">{row.feature}</td>
                  <td className="py-4 px-4 text-center"><CellValue val={row.superside} /></td>
                  <td className="py-4 px-4 text-center"><CellValue val={row.agencies} /></td>
                  <td className="py-4 px-4 text-center"><CellValue val={row.freelancers} /></td>
                  <td className="py-4 px-4 text-center"><CellValue val={row.inHouse} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
