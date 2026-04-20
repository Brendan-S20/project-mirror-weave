import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { pillars, getServicesByPillar, type Service } from "@/data/services";
import { useInView } from "@/hooks/useInView";

export default function ServicesIndex() {
  const { ref, inView } = useInView();
  return (
    <Layout title="Services | The North" description="Growth Infrastructure, Automation, Creative, and Technology services that scale with your business.">
      <HeroSection
        tagline="Services"
        title={<>Build, scale, and automate <span className="heading-italic">your business systems</span></>}
        description="The North combines creative, technology, and operational systems to help companies scale faster and operate smarter. Four pillars. Forty-plus delivery services. One accountable team."
        variant="centered"
      />

      <LogoCloud />

      <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-20">
          {pillars.map((pillar, idx) => {
            const pillarServices = getServicesByPillar(pillar.slug as Service["pillar"]);
            return (
              <div key={pillar.slug} className={inView ? "animate-fade-up" : "opacity-0"} style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="badge-pill mb-4">{`0${idx + 1}`}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">{pillar.title}</h2>
                    <p className="text-muted-foreground mt-3 max-w-2xl text-lg">{pillar.description}</p>
                  </div>
                  <Link to={`/services/${pillar.slug}`} className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all shrink-0">
                    Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {pillarServices.map((s) => (
                    <div key={s.slug} className="card-elevated-hover p-7 group">
                      <Link to={`/${s.slug}`} className="block">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.subtitle}</p>
                      </Link>
                      <div className="space-y-1.5 border-t border-border/20 pt-4">
                        {s.microServices.slice(0, 4).map((m) => (
                          <Link
                            key={m.slug}
                            to={`/${s.slug}/${m.slug}`}
                            className="flex items-center justify-between gap-2 group/m text-xs text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            <span>{m.title}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover/m:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title={<>Not sure which service <span className="heading-italic">you need?</span></>}
        description="Book a strategy call. We'll diagnose where the bottleneck is and recommend the right starting point."
        variant="split"
      />
    </Layout>
  );
}
