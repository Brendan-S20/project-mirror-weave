import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView();

  const filtered = activeCategory === "All" ? projects : projects.filter(w => w.category === activeCategory);

  return (
    <Layout title="Our Work" description="See how ambitious brands scale creative with The North.">
      <HeroSection
        tagline="Our work"
        title={<>Work that <span className="heading-italic">works</span></>}
        description="Ambitious brands trust The North to deliver creative that drives real business outcomes. Campaigns, brand systems, performance ads, and everything in between."
        variant="centered"
      />

      <LogoCloud title="Creative work across industries and formats" />

      <section className="section-padding py-20 lg:py-28" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2.5 mb-14 pb-8 border-b border-border/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--aurora-glow)/0.2)]'
                    : 'text-muted-foreground hover:text-foreground bg-[hsl(var(--surface-elevated))] border border-border/30 hover:border-foreground/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 ${inView ? 'stagger-children' : ''}`}>
            {filtered.map((item, i) => {
              const isLarge = item.size === "large";
              const isMedium = item.size === "medium";
              const spanClass = isLarge ? "lg:col-span-8" : isMedium ? "lg:col-span-6" : "lg:col-span-4";

              return (
                <Link to={`/projects/${item.slug}`} key={`${item.type}-${i}`} className={`group ${spanClass} ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
                  <div className="card-premium overflow-hidden h-full flex flex-col">
                    <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/9]' : isMedium ? 'aspect-[4/3]' : 'aspect-[3/2]'}`}>
                      <img src={item.imageSrc} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center rounded-full bg-background/70 backdrop-blur-md text-foreground text-xs font-medium px-3 py-1.5 border border-border/20">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.type}</span>
                      </div>
                      <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3 ${isLarge ? 'text-xl lg:text-2xl' : 'text-base lg:text-lg'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.summary}</p>
                      <div className="mt-5 pt-5 border-t border-border/20">
                        <span className="text-primary text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                          View project <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <StatsSection
        title="Creative output that moves the needle"
        stats={[
          { value: "20+", label: "Creative disciplines" },
          { value: "Fast", label: "Turnaround on most projects" },
          { value: "Dedicated", label: "Teams per engagement" },
          { value: "Scalable", label: "From startup to enterprise" },
        ]}
        variant="inline"
      />

      <TestimonialSection variant="single" />

      <CTASection
        title={<>Your brand could be <span className="heading-italic">next</span></>}
        description="Book a demo to see what The North can create for your team."
        variant="split"
      />
    </Layout>
  );
}
