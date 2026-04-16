import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface WorkItem {
  title: string;
  category: string;
  client: string;
  description: string;
  results?: string;
  size: "large" | "medium" | "small";
}

const workItems: WorkItem[] = [
  { title: "Global brand campaign spanning digital, OOH, and social", category: "Brand", client: "Grubhub", description: "Full-funnel brand campaign that drove 2.3x lift in brand recall across 12 markets.", results: "2.3x brand recall lift", size: "large" },
  { title: "Surface product launch creative for global markets", category: "Ad Creative", client: "Microsoft", description: "Launch creative suite with 200+ assets optimized for 8 global markets.", results: "200+ assets delivered", size: "medium" },
  { title: "Year-in-review campaign with personalized creative", category: "Social", client: "Reddit", description: "Personalized recap campaign reaching 52M users with dynamic creative.", results: "52M users reached", size: "medium" },
  { title: "Partner marketing asset library and design system", category: "Design System", client: "Shopify", description: "Comprehensive partner toolkit enabling consistent brand execution across 4,000+ partners.", results: "4,000+ partners enabled", size: "small" },
  { title: "Cross-platform performance ads with 40+ variants", category: "Performance", client: "Puma", description: "High-velocity ad creative program that reduced CPA by 35% across Meta and Google.", results: "35% CPA reduction", size: "large" },
  { title: "Product launch creative for new instrument line", category: "Brand", client: "Roland", description: "End-to-end launch campaign for flagship product line across digital and retail.", results: "Full product launch", size: "small" },
  { title: "Visual identity evolution for platform rebrand", category: "Branding", client: "Vimeo", description: "Brand refresh spanning identity system, marketing materials, and product UI alignment.", results: "Complete rebrand", size: "medium" },
  { title: "Community resource library with templates", category: "Design", client: "Figma", description: "Educational content series and template library driving community engagement.", results: "10K+ downloads", size: "small" },
  { title: "Prime seasonal campaign ad creative at scale", category: "Performance", client: "Amazon", description: "High-volume seasonal ad creative with rapid iteration across 15+ formats.", results: "15+ formats delivered", size: "medium" },
  { title: "Long-form content series with visual assets", category: "Content", client: "HubSpot", description: "Thought leadership content program with integrated design driving 3x organic traffic.", results: "3x organic traffic", size: "small" },
  { title: "Complete event branding for flagship conference", category: "Events", client: "Salesforce", description: "Full event identity system from signage to digital experience for 40K+ attendees.", results: "40K+ attendees", size: "large" },
  { title: "Multi-format ad creative for platform ecosystem", category: "Ad Creative", client: "Meta", description: "Performance creative system optimized for Meta's ad formats with automated variant generation.", results: "60% faster production", size: "small" },
];

const categories = ["All", "Brand", "Ad Creative", "Performance", "Social", "Branding", "Design System", "Design", "Content", "Events"];

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView();

  const filtered = activeCategory === "All" ? workItems : workItems.filter(w => w.category === activeCategory);

  return (
    <Layout title="Our Work" description="See how the world's most ambitious brands scale creative with Superside.">
      <HeroSection
        tagline="Our work"
        title={<>Work that <span className="heading-italic">works</span></>}
        description="Enterprise brands trust Superside to deliver creative that drives real business outcomes. Campaigns, brand systems, performance ads, and everything in between."
        variant="centered"
      />

      <LogoCloud />

      {/* Portfolio Section */}
      <section className="section-padding py-20 lg:py-28" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2.5 mb-14 pb-8 border-b border-border/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--lime-glow)/0.2)]'
                    : 'text-muted-foreground hover:text-foreground bg-[hsl(var(--surface-elevated))] border border-border/30 hover:border-foreground/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mixed Layout Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 ${inView ? 'stagger-children' : ''}`}>
            {filtered.map((item, i) => {
              // Determine grid span based on size and position
              const isLarge = item.size === "large";
              const isMedium = item.size === "medium";
              const spanClass = isLarge
                ? "lg:col-span-8"
                : isMedium
                ? "lg:col-span-6"
                : "lg:col-span-4";

              return (
                <div
                  key={`${item.client}-${i}`}
                  className={`group cursor-pointer ${spanClass} ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                >
                  {/* Card */}
                  <div className="card-premium overflow-hidden h-full flex flex-col">
                    {/* Visual Area */}
                    <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/9]' : isMedium ? 'aspect-[4/3]' : 'aspect-[3/2]'}`}>
                      <div className="absolute inset-0 bg-[hsl(var(--surface-elevated))]" />
                      <div className="absolute inset-0 gradient-mesh" />
                      <div className="absolute inset-0 grid-pattern opacity-15" />

                      {/* Client watermark */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`font-black text-foreground/[0.04] tracking-tighter select-none ${isLarge ? 'text-7xl lg:text-9xl' : 'text-5xl lg:text-7xl'}`}>
                          {item.client}
                        </span>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center rounded-full bg-background/70 backdrop-blur-md text-foreground text-xs font-medium px-3 py-1.5 border border-border/20">
                          {item.category}
                        </span>
                      </div>

                      {/* Results badge */}
                      {item.results && (
                        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                          <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground text-xs font-bold px-3.5 py-1.5">
                            {item.results}
                          </span>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.client}</span>
                      </div>
                      <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3 ${isLarge ? 'text-xl lg:text-2xl' : 'text-base lg:text-lg'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {item.description}
                      </p>
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

      {/* Stats proof */}
      <StatsSection
        title="Creative output that moves the needle"
        stats={[
          { value: "500+", label: "Enterprise brands served" },
          { value: "3x", label: "Faster than traditional agencies" },
          { value: "1M+", label: "Assets delivered annually" },
          { value: "471%", label: "ROI (Forrester validated)" },
        ]}
        variant="inline"
      />

      <TestimonialSection variant="single" />

      <CTASection
        title={<>Your brand could be <span className="heading-italic">next</span></>}
        description="Book a demo to see what Superside can create for your team."
        variant="split"
      />
    </Layout>
  );
}
