import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: ReactNode;
  description?: string;
  items: FAQItem[];
}

export default function FAQSection({ title = "Frequently asked questions", description, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView();

  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  const renderItem = (item: FAQItem, globalIndex: number, localIndex: number) => {
    const isOpen = openIndex === globalIndex;
    return (
      <div
        key={globalIndex}
        className={`border-b border-border/30 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        style={{ animationDelay: `${localIndex * 80}ms` }}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
          className="w-full flex items-center justify-between py-5 lg:py-6 text-left group"
        >
          <span className="text-[15px] lg:text-base font-semibold text-foreground group-hover:text-primary transition-colors pr-6 leading-snug">
            {item.question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
          />
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5 lg:pb-6' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed pr-10">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section-padding py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{title}</h2>
            {description && <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        <div className="grid lg:grid-cols-2 gap-x-12 lg:gap-x-20">
          <div>
            {leftItems.map((item, i) => renderItem(item, i, i))}
          </div>
          <div>
            {rightItems.map((item, i) => renderItem(item, midpoint + i, i))}
          </div>
        </div>
      </div>
    </section>
  );
}
