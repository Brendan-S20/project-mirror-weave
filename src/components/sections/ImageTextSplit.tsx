import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface ImageTextSplitProps {
  tagline?: string;
  title: ReactNode;
  description: string;
  bullets?: string[];
  imagePosition?: "left" | "right";
  imagePlaceholder?: string;
  children?: ReactNode;
}

export default function ImageTextSplit({
  tagline,
  title,
  description,
  bullets,
  imagePosition = "right",
  imagePlaceholder = "Visual",
  children,
}: ImageTextSplitProps) {
  const { ref, inView } = useInView();

  const imageBlock = (
    <div className={`aspect-[4/3] rounded-2xl bg-[hsl(var(--surface-elevated))] flex items-center justify-center overflow-hidden relative group ${inView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: '200ms' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      {children || (
        <span className="text-muted-foreground text-sm relative z-10">{imagePlaceholder}</span>
      )}
    </div>
  );

  const textBlock = (
    <div className={`flex flex-col justify-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
      {tagline && <span className="text-xs font-semibold uppercase tracking-widest text-primary/80 mb-4">{tagline}</span>}
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">{title}</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      {bullets && (
        <ul className="space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="section-padding py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
