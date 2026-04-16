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

  return (
    <section className="section-padding py-20 lg:py-28" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {title && (
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{title}</h2>
            {description && <p className="text-muted-foreground mt-4">{description}</p>}
          </div>
        )}
        <div className="space-y-0">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border-b border-border/30 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                    {item.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                  <p className="text-muted-foreground leading-relaxed pr-12">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
