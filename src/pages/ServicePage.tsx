import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import LogoCloud from "@/components/sections/LogoCloud";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import StatsSection from "@/components/sections/StatsSection";
import { getServiceBySlug, services } from "@/data/services";
import ServiceGrid from "@/components/sections/ServiceGrid";
import { ArrowRight } from "lucide-react";

export default function ServicePage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <Layout title="Service Not Found">
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service not found</h1>
          <p className="text-muted-foreground">The service you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  const related = services.filter((s) => service.relatedServices.includes(s.slug));

  return (
    <Layout title={service.title} description={service.description}>
      <HeroSection
        tagline={service.subtitle}
        title={<>{service.heroTagline}</>}
        description={service.description}
        variant="split"
      >
        <div className="aspect-[4/3] rounded-2xl bg-[hsl(var(--surface-elevated))] border border-border/30 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">{service.title[0]}</span>
              </div>
              <span className="text-muted-foreground/40 text-sm font-semibold">{service.title}</span>
            </div>
          </div>
        </div>
      </HeroSection>

      <LogoCloud />

      <StatsSection
        stats={[
          { value: "3x", label: "Faster than agencies" },
          { value: "Top 1%", label: "Global creative talent" },
          { value: "471%", label: "Proven ROI (Forrester)" },
          { value: "24/7", label: "Always-on production" },
        ]}
        variant="inline"
      />

      <FeatureSection
        title={<>Why teams choose Superside for <span className="heading-italic">{service.title.toLowerCase()}</span></>}
        features={service.benefits.map((b) => ({ title: b.title, description: b.description }))}
        columns={3}
      />

      <ImageTextSplit
        tagline="What we deliver"
        title={<>Comprehensive <span className="heading-italic">{service.title.toLowerCase()}</span> coverage</>}
        description={`From initial concept to final delivery, our ${service.title.toLowerCase()} team handles every aspect of production. Your in-house team stays focused on strategy while we handle execution.`}
        bullets={service.features}
      />

      <TestimonialSection variant="single" />

      {related.length > 0 && (
        <ServiceGrid services={related} title="Related services" variant="compact" columns={3} />
      )}

      <CTASection
        title={<>Ready to elevate your <span className="heading-italic">{service.title.toLowerCase()}?</span></>}
        description={`See how Superside's ${service.title.toLowerCase()} team can scale your creative output.`}
        variant="banner"
      />
    </Layout>
  );
}
