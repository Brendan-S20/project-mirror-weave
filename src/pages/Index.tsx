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
      {/* ─── Hero ─── */}
      <HeroSection
        variant="split"
        title={
          <>
            Your <span className="heading-italic">creative team's</span>{" "}
            creative team
          </>
        }
        description="Replace creative bottlenecks with limitless output. Top global talent and AI-powered workflows deliver enterprise-grade creative at startup speed."
        secondaryCtaText="See our work"
        secondaryCtaHref="/our-work"
      >
        <div className="grid grid-cols-2 gap-3 stagger-children">
          {[
            { label: "Brand Campaigns", metric: "3x faster" },
            { label: "Performance Ads", metric: "500+ brands" },
            { label: "Video & Motion", metric: "24/7 coverage" },
            { label: "Web & Digital", metric: "100+ specialties" },
            { label: "Social Content", metric: "Top 1% talent" },
            { label: "Presentations", metric: "AI-powered" },
          ].map((item) => (
            <div key={item.label} className="card-elevated-hover p-5 lg:p-6 flex flex-col justify-between aspect-[4/3] animate-fade-up cursor-pointer group">
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
              <span className="text-xs font-semibold text-primary/60 mt-auto">{item.metric}</span>
            </div>
          ))}
        </div>
      </HeroSection>

      {/* ─── Logo Cloud ─── */}
      <LogoCloud />

      {/* ─── Stats ─── */}
      <StatsSection
        title="The numbers speak for themselves"
        stats={[
          { value: "471%", label: "ROI over 3 years (Forrester)" },
          { value: "3x", label: "Faster than traditional agencies" },
          { value: "100+", label: "Creative specialties covered" },
          { value: "24/7", label: "Always-on global coverage" },
        ]}
        variant="large"
      />

      {/* ─── Why Superside: Split ─── */}
      <ImageTextSplit
        tagline="Why Superside"
        title={<>Stop choosing between <span className="heading-italic">speed, quality, and cost</span></>}
        description="Traditional creative models force trade-offs. Superside eliminates them. Get the creative depth of a top agency, the flexibility of freelancers, and the brand consistency of an in-house team. All in one subscription."
        bullets={[
          "Top 1% creative talent, vetted from 120+ countries",
          "AI-enhanced workflows that cut production time in half",
          "Dedicated teams that master your brand guidelines",
          "Predictable subscription pricing with proven 471% ROI",
        ]}
      />

      {/* ─── How It Works: List variant ─── */}
      <FeatureSection
        tagline="How it works"
        title={<>From brief to brilliant <span className="heading-italic">in three steps</span></>}
        variant="list"
        features={[
          { title: "Brief it", description: "Submit your project through our platform. AI-powered briefing tools ensure your team captures every detail upfront, reducing revision cycles by 40%." },
          { title: "Build it", description: "Your dedicated creative team gets to work immediately. Real-time collaboration, transparent timelines, and multi-layer quality reviews keep everything on track." },
          { title: "Ship it", description: "Receive polished, brand-consistent deliverables ready to deploy. Most projects land 3x faster than traditional agency timelines." },
        ]}
      />

      {/* ─── Mid-page CTA banner ─── */}
      <CTASection
        title={<>Your brand deserves <span className="heading-italic">better creative</span></>}
        description="See why 500+ companies trust Superside to deliver world-class creative at scale."
        variant="banner"
      />

      {/* ─── Services ─── */}
      <ServiceGrid
        services={services.slice(0, 6)}
        title="Every creative discipline, one subscription"
        description="From performance ads to brand systems, one team handles it all."
        variant="featured"
        columns={3}
      />

      {/* ─── AI Split (reversed) ─── */}
      <ImageTextSplit
        tagline="AI-Powered Creative"
        title={<>Human creativity <span className="heading-italic">amplified by AI</span></>}
        description="Our teams use the most advanced AI tools in the industry. Not as a replacement for human creativity, but as an accelerator. The result: better concepts, faster production, and more room for the strategic thinking that drives real business outcomes."
        imagePosition="left"
        bullets={[
          "AI-assisted ideation generates 10x more concepts",
          "Automated asset generation and variant production",
          "Intelligent quality assurance catches issues before you do",
          "Brand-trained AI ensures consistency at scale",
        ]}
      />

      {/* ─── Comparison ─── */}
      <ComparisonSection />

      {/* ─── Testimonials ─── */}
      <TestimonialSection variant="featured" />

      {/* ─── Blog ─── */}
      <BlogGrid posts={blogPosts.slice(0, 3)} title="Latest thinking" description="Perspectives from the team behind 500+ enterprise creative partnerships." />

      {/* ─── Final CTA ─── */}
      <CTASection
        title={<>Ready to scale your <span className="heading-italic">creative?</span></>}
        description="Book a demo to see how Superside replaces creative bottlenecks with limitless output."
        variant="split"
      />
    </Layout>
  );
}
