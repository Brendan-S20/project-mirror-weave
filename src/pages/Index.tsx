import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import StatsSection from "@/components/sections/StatsSection";
import FeatureSection from "@/components/sections/FeatureSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import BlogGrid from "@/components/sections/BlogGrid";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import ServiceGrid from "@/components/sections/ServiceGrid";
import ComparisonSection from "@/components/sections/ComparisonSection";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blogPosts";

export default function Index() {
  return (
    <Layout>
      <HeroSection
        variant="split"
        title={
          <>
            Your <span className="heading-italic">creative team's</span>{" "}
            creative team
          </>
        }
        description="Replace creative bottlenecks with reliable, high-quality output. Dedicated talent and smart workflows deliver the creative your brand deserves, on time and on budget."
        secondaryCtaText="See our work"
        secondaryCtaHref="/our-work"
      >
        <div className="grid grid-cols-2 gap-3 stagger-children">
          {[
            { label: "Brand Campaigns", metric: "Full-service" },
            { label: "Performance Ads", metric: "Multi-platform" },
            { label: "Video & Motion", metric: "End-to-end" },
            { label: "Web & Digital", metric: "Responsive" },
            { label: "Social Content", metric: "Always-on" },
            { label: "Presentations", metric: "On-brand" },
          ].map((item) => (
            <div key={item.label} className="card-elevated-hover p-5 lg:p-6 flex flex-col justify-between aspect-[4/3] animate-fade-up cursor-pointer group">
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
              <span className="text-xs font-semibold text-primary/60 mt-auto">{item.metric}</span>
            </div>
          ))}
        </div>
      </HeroSection>

      <LogoCloud />

      <StatsSection
        title="Built to deliver real results"
        stats={[
          { value: "20+", label: "Creative disciplines covered" },
          { value: "Fast", label: "Turnaround built into every workflow" },
          { value: "24/7", label: "Always-on global coverage" },
          { value: "Dedicated", label: "Teams that learn your brand" },
        ]}
        variant="large"
      />

      <ImageTextSplit
        tagline="Why The North"
        title={<>Stop choosing between <span className="heading-italic">speed, quality, and cost</span></>}
        description="Traditional creative models force trade-offs. The North eliminates them. Get the creative depth of a top agency, the flexibility of freelancers, and the brand consistency of an in-house team. All in one subscription."
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
        imageAlt="Creative team collaborating on brand project"
        bullets={[
          "Vetted creative talent from around the world",
          "Smart workflows that reduce production time",
          "Dedicated teams that master your brand guidelines",
          "Predictable subscription pricing with clear value",
        ]}
      />

      <FeatureSection
        tagline="How it works"
        title={<>From brief to brilliant <span className="heading-italic">in three steps</span></>}
        variant="list"
        features={[
          { title: "Brief it", description: "Submit your project through our platform. Smart briefing tools ensure your team captures every detail upfront, reducing revision cycles." },
          { title: "Build it", description: "Your dedicated creative team gets to work immediately. Real-time collaboration, transparent timelines, and multi-layer quality reviews keep everything on track." },
          { title: "Ship it", description: "Receive polished, brand-consistent deliverables ready to deploy. Most projects are completed significantly faster than traditional agency timelines." },
        ]}
      />

      <CTASection
        title={<>Your brand deserves <span className="heading-italic">better creative</span></>}
        description="See how The North can help your team move faster without sacrificing quality."
        variant="banner"
      />

      <ServiceGrid
        services={services.slice(0, 6)}
        title="Every creative discipline, one subscription"
        description="From performance ads to brand systems, one team handles it all."
        variant="featured"
        columns={3}
      />

      <ImageTextSplit
        tagline="Smart Creative Workflows"
        title={<>Human creativity <span className="heading-italic">amplified by technology</span></>}
        description="Our teams use advanced tools to work smarter, not harder. The result: stronger concepts, faster production, and more room for the strategic thinking that drives real business outcomes."
        imagePosition="left"
        imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
        imageAlt="Modern digital workspace with creative tools"
        bullets={[
          "Smart ideation workflows for faster concepting",
          "Streamlined asset generation and variant production",
          "Built-in quality assurance before every delivery",
          "Brand-trained processes ensure consistency at scale",
        ]}
      />

      <ComparisonSection />

      <TestimonialSection variant="featured" />

      <BlogGrid posts={blogPosts.slice(0, 3)} title="Latest thinking" description="Perspectives from the team on creative production, branding, and marketing strategy." />

      <CTASection
        title={<>Ready to scale your <span className="heading-italic">creative?</span></>}
        description="Book a demo to see how The North replaces creative bottlenecks with reliable, high-quality output."
        variant="split"
      />
    </Layout>
  );
}
