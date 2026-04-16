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
    <Layout title="Enterprise" description="Enterprise-grade creative services with dedicated teams, AI-powered workflows, and proven ROI.">
      <HeroSection
        tagline="Enterprise"
        title={<>Enterprise creative, <span className="heading-italic">reimagined</span></>}
        description="Dedicated creative teams, AI-powered workflows, and enterprise-grade security. Built for the world's most demanding brands."
        variant="split"
      >
        <img src={heroImg} alt="Enterprise creative solutions" className="rounded-2xl w-full h-full object-cover" width={1280} height={960} />
      </HeroSection>

      <LogoCloud />

      <StatsSection
        stats={[
          { value: "471%", label: "ROI over 3 years" },
          { value: "500+", label: "Enterprise clients" },
          { value: "99.9%", label: "Uptime SLA" },
          { value: "SOC 2", label: "Compliant" },
        ]}
        variant="inline"
      />

      <FeatureSection
        tagline="Built for enterprise"
        title={<>Scale without <span className="heading-italic">compromise</span></>}
        features={[
          { title: "Dedicated Teams", description: "Get a team of senior creatives who learn your brand and become an extension of your organization." },
          { title: "AI-Powered Speed", description: "Industry-leading AI workflows deliver enterprise-quality creative at startup speed." },
          { title: "Enterprise Security", description: "SOC 2 compliant, SSO, advanced permissions, and enterprise-grade data protection." },
          { title: "Global Coverage", description: "24/7 creative production with talent across 120+ countries." },
          { title: "Custom Integrations", description: "Plugs into your existing tools, DAM, and workflows seamlessly." },
          { title: "Strategic Partnership", description: "Not just execution. Strategic creative consulting to drive business outcomes." },
        ]}
      />

      <ImageTextSplit
        tagline="Proven ROI"
        title={<>The Forrester Total Economic Impact<span className="heading-italic"> study</span></>}
        description="An independent Forrester study found that Superside delivers 471% ROI over three years, with significant reductions in creative costs and time to market."
        bullets={[
          "471% return on investment",
          "70% reduction in design costs",
          "3x faster time to market",
          "Payback in under 6 months",
        ]}
      />

      <TestimonialSection />

      <CTASection
        title={<>Ready for enterprise-grade <span className="heading-italic">creative?</span></>}
        description="Talk to our enterprise team about a custom solution."
      />
    </Layout>
  );
}
