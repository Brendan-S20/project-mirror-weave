import { logoCloudCompanies } from "@/data/testimonials";

interface LogoCloudProps {
  title?: string;
  companies?: string[];
}

export default function LogoCloud({ title = "Trusted by 500+ of the world's biggest brands", companies = logoCloudCompanies }: LogoCloudProps) {
  return (
    <section className="section-padding py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-muted-foreground text-center mb-8">{title}</p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {companies.map((company) => (
            <div key={company} className="text-foreground/30 font-bold text-lg tracking-wide">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
