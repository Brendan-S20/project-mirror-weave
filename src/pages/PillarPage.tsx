import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import ServiceGrid from "@/components/sections/ServiceGrid";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import FeatureSection from "@/components/sections/FeatureSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { getPillar, getServicesByPillar, type Service } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function PillarPage() {
  const { pillarSlug } = useParams<{ pillarSlug: string }>();
  const pillar = getPillar(pillarSlug || "");

  if (!pillar) {
    return (
      <Layout title="Pillar not found">
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Pillar not found</h1>
          <Link to="/services" className="text-primary">Back to all services</Link>
        </div>
      </Layout>
    );
  }

  const pillarServices = getServicesByPillar(pillar.slug as Service["pillar"]);

  return (
    <Layout title={pillar.title} description={pillar.description}>
      <HeroSection
        tagline={pillar.tagline}
        title={<>{pillar.title}</>}
        description={pillar.description}
        variant="centered"
      />

      <LogoCloud title={`Trusted by operators building ${pillar.title.toLowerCase()}`} />

      <StatsSection
        stats={pillar.outcomes.map((o) => ({ value: "✓", label: o }))}
        variant="inline"
      />

      <ServiceGrid
        services={pillarServices}
        title={<>Services in <span className="heading-italic">{pillar.title}</span></>}
        description="Each service is delivered as a complete system, not a one-off project."
        variant="featured"
        columns={3}
      />

      <FeatureSection
        tagline="How we engage"
        title={<>From diagnosis to <span className="heading-italic">working system</span></>}
        variant="list"
        features={[
          { title: "Diagnose", description: "We map current systems, bottlenecks, and growth gaps before recommending anything." },
          { title: "Build", description: "We design and implement the systems, integrations, and processes inside your stack." },
          { title: "Scale", description: "We hand off documented, monitored systems your team owns and extends." },
        ]}
      />

      <TestimonialSection variant="featured" />

      <CTASection
        title={<>Ready to build {pillar.title.toLowerCase()} that <span className="heading-italic">compounds?</span></>}
        description="Tell us where you are now and we'll show you the system that gets you to the next stage."
        variant="split"
      />
    </Layout>
  );
}
