import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const workItems = [
  { title: "Grubhub Brand Campaign", category: "Brand", client: "Grubhub", description: "Full brand campaign spanning digital, OOH, and social channels." },
  { title: "Microsoft Surface Launch", category: "Ad Creative", client: "Microsoft", description: "Launch creative for Surface product line across global markets." },
  { title: "Reddit Recap Campaign", category: "Social", client: "Reddit", description: "Year-in-review campaign with personalized user creative." },
  { title: "Shopify Partner Assets", category: "Design System", client: "Shopify", description: "Comprehensive partner marketing asset library and templates." },
  { title: "Puma Digital Campaign", category: "Performance", client: "Puma", description: "Cross-platform performance ad creative with 40+ variants." },
  { title: "Roland Product Launch", category: "Brand", client: "Roland", description: "Product launch creative for new instrument line worldwide." },
  { title: "Vimeo Brand Refresh", category: "Branding", client: "Vimeo", description: "Visual identity evolution for platform brand refresh." },
  { title: "Figma Community Assets", category: "Design", client: "Figma", description: "Community resource library with templates and visual assets." },
  { title: "Amazon Prime Creatives", category: "Performance", client: "Amazon", description: "High-volume ad creative for Prime seasonal campaigns." },
  { title: "HubSpot Content Series", category: "Content", client: "HubSpot", description: "Long-form content series with supporting visual assets." },
  { title: "Salesforce Event Branding", category: "Events", client: "Salesforce", description: "Complete event branding for Dreamforce and regional summits." },
  { title: "Meta Campaign Suite", category: "Ad Creative", client: "Meta", description: "Multi-format ad creative optimized for Meta platforms." },
];

const categories = ["All", "Brand", "Ad Creative", "Social", "Performance", "Design", "Content", "Events", "Branding", "Design System"];

export default function OurWork() {
  return (
    <Layout title="Our Work" description="See how the world's most ambitious brands scale creative with Superside.">
      <HeroSection
        tagline="Our work"
        title={<>Work that <span className="heading-italic">works</span></>}
        description="Enterprise brands trust Superside to deliver creative that drives real business outcomes. From global campaigns to performance ad systems, see what's possible when creative has no ceiling."
        variant="centered"
      />

      <LogoCloud />

      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.slice(0, 6).map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground border border-border/30 hover:border-foreground/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {workItems.map((item, i) => (
              <div key={i} className="group cursor-pointer animate-fade-up">
                <div className="aspect-[4/3] rounded-2xl bg-[hsl(var(--surface-elevated))] mb-5 overflow-hidden border border-border/30 group-hover:border-primary/30 transition-all relative">
                  <div className="absolute inset-0 gradient-mesh" />
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black text-foreground/[0.07] tracking-tight">{item.client}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-foreground/80">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-primary">{item.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-xs text-muted-foreground">{item.client}</span>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Your brand could be <span className="heading-italic">next</span></>}
        description="Book a demo to see what Superside can create for your team."
        variant="banner"
      />
    </Layout>
  );
}
