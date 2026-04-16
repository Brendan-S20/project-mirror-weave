import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { Check } from "lucide-react";

interface ImageTextSplitProps {
  tagline?: string;
  title: ReactNode;
  description: string;
  bullets?: string[];
  imagePosition?: "left" | "right";
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export default function ImageTextSplit({
  tagline,
  title,
  description,
  bullets,
  imagePosition = "right",
  imageSrc,
  imageAlt,
  children,
}: ImageTextSplitProps) {
  const { ref, inView } = useInView();

  const imageBlock = (
    <div className={`relative ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt || ""} className="rounded-2xl w-full h-auto object-cover" loading="lazy" />
      ) : children ? (
        <div className="relative">{children}</div>
      ) : (
        <div className="aspect-[4/3] rounded-2xl bg-[hsl(var(--surface-elevated))] border border-border/30 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>
      )}
      <div className={`absolute -z-10 w-3/4 h-3/4 rounded-full bg-primary/[0.06] blur-[80px] ${imagePosition === 'left' ? '-left-10 top-10' : '-right-10 top-10'}`} />
    </div>
  );

  const textBlock = (
    <div className={`flex flex-col justify-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
      {tagline && <span className="badge-pill mb-6">{tagline}</span>}
      <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mt-2">{title}</h2>
      <p className="text-muted-foreground mt-6 text-lg leading-relaxed">{description}</p>
      {bullets && (
        <ul className="mt-8 space-y-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </span>
              <span className="text-foreground/85 text-sm lg:text-base">{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {imagePosition === "left" ? (
            <>{imageBlock}{textBlock}</>
          ) : (
            <>{textBlock}{imageBlock}</>
          )}
        </div>
      </div>
    </section>
  );
}
