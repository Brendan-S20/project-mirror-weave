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
import { services } from "@/data/services";
import { blogPosts } from "@/data/blogPosts";

export default function Index() {
  return (
    <Layout>
      <HeroSection
        title={
          <>
            Your <span className="heading-italic">creative team's</span>{" "}
            creative team™
          </>
        }
        description="Scale your in-house creative team with top global talent powered by industry-leading AI workflows, delivering anything you can imagine fast and affordably."
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {["Brand Campaign", "Social Ads", "Product Launch", "Video Content", "Web Design", "Packaging", "Motion Graphics", "Presentations"].map((item) => (
            <div key={item} className="aspect-square rounded-xl bg-surface-elevated flex items-center justify-center p-4 hover:border-primary/30 border border-border/30 transition-all">
              <span className="text-xs text-muted-foreground text-center">{item}</span>
            </div>
          ))}
        </div>
      </HeroSection>

      <LogoCloud />

      <StatsSection
        title="Built for scale"
        stats={[
          { value: "500+", label: "Enterprise clients" },
          { value: "3x", label: "Faster delivery" },
          { value: "100+", label: "Creative specialties" },
          { value: "24/7", label: "Global coverage" },
        ]}
        variant="cards"
      />

      <ImageTextSplit
        tagline="Why Superside"
        title={<>A smarter way to <span className="heading-italic">scale creative</span></>}
        description="Superside replaces creative bottlenecks with limitless creative output, empowering you to bring bold visions to life faster. Our AI-powered workflows and top global talent deliver enterprise-quality creative at startup speed."
        bullets={[
          "Top 1% global creative talent, vetted and ready",
          "AI-powered workflows for faster turnaround",
          "Dedicated teams that learn your brand",
          "Subscription model with predictable pricing",
        ]}
      />

      <FeatureSection
        tagline="How it works"
        title={<>Creative that <span className="heading-italic">just clicks</span></>}
        description="From brief to final asset, we handle everything."
        features={[
          { title: "Top Global Talent", description: "Superside hires highly-skilled, deeply-vetted creatives and project managers from around the world." },
          { title: "Your Dedicated Team", description: "Get a dedicated creative team that learns your brand and becomes an extension of your in-house team." },
          { title: "AI-Powered Workflows", description: "Industry-leading AI tools and workflows accelerate every step from ideation to final delivery." },
          { title: "Built-In Quality", description: "Multi-layer review processes ensure every deliverable meets your standards." },
          { title: "Full Transparency", description: "Real-time project tracking, communication, and asset management in one platform." },
          { title: "Enterprise Scale", description: "Handle any volume across any creative type without scaling headcount." },
        ]}
      />

      <ServiceGrid
        services={services.slice(0, 6)}
        title="Creative services for every need"
        description="From ad creative to brand systems, we cover every creative discipline your team needs."
        variant="default"
        columns={3}
      />

      <ImageTextSplit
        tagline="AI Excellence"
        title={<>Human creativity, <span className="heading-italic">amplified by AI</span></>}
        description="Our creative teams use the most advanced AI tools in the industry to deliver better work faster. From AI-assisted ideation to automated production workflows, we combine human expertise with AI power."
        imagePosition="left"
        bullets={[
          "AI-accelerated ideation and concepting",
          "Automated asset generation and variations",
          "Smart quality assurance workflows",
          "Brand-consistent AI output",
        ]}
      />

      <TestimonialSection />

      <BlogGrid posts={blogPosts.slice(0, 3)} title="Latest from the blog" />

      <CTASection
        title={<>Ready to scale your <span className="heading-italic">creative?</span></>}
        description="Join 500+ companies that trust Superside to deliver world-class creative at scale."
        variant="default"
      />
    </Layout>
  );
}
