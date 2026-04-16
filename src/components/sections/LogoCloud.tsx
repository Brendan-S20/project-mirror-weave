import { logoCloudCompanies } from "@/data/testimonials";
import { useInView } from "@/hooks/useInView";

interface LogoCloudProps {
  title?: string;
  companies?: string[];
}

export default function LogoCloud({ title = "Trusted by the world's most ambitious brands", companies = logoCloudCompanies }: LogoCloudProps) {
  const { ref, inView } = useInView();
  const doubled = [...companies, ...companies];

  return (
    <section className="py-14 lg:py-20 overflow-hidden border-y border-border/20" ref={ref}>
      <div className={`text-center mb-10 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">{title}</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubled.map((name, i) => (
            <div key={i} className="flex items-center justify-center px-10 lg:px-14 shrink-0">
              <span className="text-lg lg:text-xl font-bold text-foreground/20 whitespace-nowrap tracking-tight select-none hover:text-foreground/40 transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
