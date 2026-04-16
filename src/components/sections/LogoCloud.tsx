import { logoCloudCompanies } from "@/data/testimonials";
import { useInView } from "@/hooks/useInView";

interface LogoCloudProps {
  title?: string;
  companies?: string[];
}

export default function LogoCloud({ title = "Trusted by 500+ ambitious brands worldwide", companies = logoCloudCompanies }: LogoCloudProps) {
  const { ref, inView } = useInView();
  const doubled = [...companies, ...companies];

  return (
    <section className="py-16 lg:py-20 overflow-hidden relative" ref={ref}>
      <div className="absolute inset-0 bg-[hsl(var(--surface-subtle))]" />
      <div className="relative z-10">
        <div className={`text-center mb-10 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">{title}</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[hsl(var(--surface-subtle))] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[hsl(var(--surface-subtle))] to-transparent z-10" />

          <div className="flex animate-marquee">
            {doubled.map((name, i) => (
              <div key={i} className="flex items-center justify-center px-12 lg:px-16 shrink-0">
                <span className="text-xl lg:text-2xl font-extrabold text-foreground/15 whitespace-nowrap tracking-tight select-none hover:text-foreground/30 transition-colors duration-500">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Second row, reversed */}
          <div className="flex animate-marquee-reverse mt-6">
            {[...doubled].reverse().map((name, i) => (
              <div key={i} className="flex items-center justify-center px-12 lg:px-16 shrink-0">
                <span className="text-lg lg:text-xl font-bold text-foreground/10 whitespace-nowrap tracking-tight select-none hover:text-foreground/20 transition-colors duration-500">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
