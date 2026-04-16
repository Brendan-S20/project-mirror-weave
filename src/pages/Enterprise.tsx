import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import heroImg from "@/assets/hero-abstract-1.jpg";
import FeatureSection from "@/components/sections/FeatureSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import CTASection from "@/components/sections/CTASection";

export default function Enterprise() {
  return (
    <Layout title="Enterprise" description="Enterprise-grade creative operations for the world's most demanding brands.">
      <HeroSection
        tagline="Enterprise"
        title={<>Enterprise creative <span className="heading-italic">without the enterprise overhead</span></>}
        description="Dedicated creative teams, AI-powered production, and SOC 2 compliance. Built for organizations that need quality at scale without adding headcount."
        variant="split"
      >
        <img src={heroImg} alt="Enterprise creative operations at scale" className="rounded-2xl w-full h-full object-cover" width={1280} height={960} />
      </HeroSection>

      <LogoCloud />

      <StatsSection
        stats={[
          { value: "471%", label: "ROI over 3 years (Forrester)" },
          { value: "500+", label: "Enterprise clients served" },
          { value: "99.9%", label: "Platform uptime SLA" },
          { value: "SOC 2", label: "Type II certified" },
        ]}
        variant="inline"
      />

      <FeatureSection
        tagline="Built for enterprise"
        title={<>Everything your creative org needs, <span className="heading-italic">nothing it doesn't</span></>}
        features={[
          { title: "Dedicated creative teams", description: "Senior creatives who learn your brand inside out and operate as a true extension of your in-house team. No onboarding lag, no context loss between projects." },
          { title: "AI-powered production", description: "Purpose-built AI workflows cut production time by 50% while maintaining the quality bar your brand demands. From ideation to final asset." },
          { title: "Enterprise-grade security", description: "SOC 2 Type II certified, SSO integration, advanced permissions, and data encryption at rest and in transit. Your brand assets stay protected." },
          { title: "Global 24/7 coverage", description: "Creative production that never stops. Talent across 120+ countries means your projects move forward across every time zone." },
          { title: "Seamless integrations", description: "Plugs into your existing DAM, project management tools, and workflows. No migration headaches, no disruption to your processes." },
          { title: "Strategic creative partnership", description: "Not just pixel-pushing. Strategic creative consulting that ties output directly to business outcomes and campaign performance." },
        ]}
      />

      <ImageTextSplit
        tagline="Proven ROI"
        title={<>471% ROI. <span className="heading-italic">Validated by Forrester.</span></>}
        description="An independent Forrester Total Economic Impact study found that Superside delivers 471% ROI over three years. Enterprise teams saw 70% lower design costs, 3x faster time to market, and payback in under 6 months."
        bullets={[
          "471% return on investment over three years",
          "70% reduction in creative production costs",
          "3x faster time to market on campaigns",
          "Full payback achieved in under 6 months",
        ]}
      />

      <TestimonialSection variant="featured" />

      <CTASection
        title={<>Ready for enterprise-grade <span className="heading-italic">creative?</span></>}
        description="Talk to our enterprise team about building a custom creative operation."
        variant="split"
      />
    </Layout>
  );
}
