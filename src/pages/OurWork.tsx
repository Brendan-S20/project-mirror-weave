import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface WorkItem {
  title: string;
  category: string;
  type: string;
  description: string;
  size: "large" | "medium" | "small";
  imageSrc: string;
}

const workItems: WorkItem[] = [
  { title: "Multi-channel brand campaign spanning digital, social, and print", category: "Brand", type: "Brand Campaign", description: "Full-funnel brand campaign designed for maximum reach across digital and physical touchpoints.", size: "large", imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" },
  { title: "Product launch creative suite for global markets", category: "Ad Creative", type: "Product Launch", description: "Comprehensive launch creative with assets optimized for multiple regional markets and platforms.", size: "medium", imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { title: "Social media campaign with personalized creative variants", category: "Social", type: "Social Campaign", description: "Dynamic social campaign using personalized creative to drive engagement across platforms.", size: "medium", imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" },
  { title: "Partner marketing asset library and design system", category: "Design System", type: "Design System", description: "Comprehensive partner toolkit enabling consistent brand execution across partner networks.", size: "small", imageSrc: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80" },
  { title: "Cross-platform performance ads with rapid variant testing", category: "Performance", type: "Performance Ads", description: "High-velocity ad creative program designed to improve acquisition costs through rapid iteration.", size: "large", imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { title: "Product launch creative for new product line", category: "Brand", type: "Product Launch", description: "End-to-end launch campaign across digital and retail touchpoints.", size: "small", imageSrc: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" },
  { title: "Visual identity evolution for platform rebrand", category: "Branding", type: "Rebrand", description: "Brand refresh spanning identity system, marketing materials, and product UI alignment.", size: "medium", imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80" },
  { title: "Educational content series with design templates", category: "Design", type: "Content Design", description: "Educational content series and template library driving community engagement and adoption.", size: "small", imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" },
  { title: "Seasonal campaign creative at scale across formats", category: "Performance", type: "Seasonal Campaign", description: "High-volume seasonal ad creative with rapid iteration across multiple formats and channels.", size: "medium", imageSrc: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80" },
  { title: "Thought leadership content program with visual assets", category: "Content", type: "Content Program", description: "Strategic content program with integrated design elements driving organic growth.", size: "small", imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" },
  { title: "Complete event branding for flagship conference", category: "Events", type: "Event Branding", description: "Full event identity system from signage to digital experience for a major industry conference.", size: "large", imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
  { title: "Multi-format ad creative system with automated variants", category: "Ad Creative", type: "Ad System", description: "Performance creative system optimized across ad formats with streamlined variant generation.", size: "small", imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" },
];

const categories = ["All", "Brand", "Ad Creative", "Performance", "Social", "Branding", "Design System", "Design", "Content", "Events"];

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView();

  const filtered = activeCategory === "All" ? workItems : workItems.filter(w => w.category === activeCategory);

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
                <div key={`${item.type}-${i}`} className={`group cursor-pointer ${spanClass} ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
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
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                      <div className="mt-5 pt-5 border-t border-border/20">
                        <span className="text-primary text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                          View project <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
