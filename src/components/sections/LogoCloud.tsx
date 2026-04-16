import { logoCloudCompanies } from "@/data/testimonials";

interface LogoCloudProps {
  title?: string;
  companies?: string[];
}

export default function LogoCloud({ title = "Trusted by 500+ of the world's biggest brands", companies = logoCloudCompanies }: LogoCloudProps) {
  // Double the list for seamless marquee
  const doubled = [...companies, ...companies];

  return (
    <section className="py-12 lg:py-16 overflow-hidden">
      <p className="text-sm text-muted-foreground text-center mb-8">{title}</p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="inline-flex items-center justify-center mx-8 lg:mx-12 text-foreground/25 font-bold text-lg tracking-wide shrink-0 hover:text-foreground/40 transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
