import { useLocation } from "react-router-dom";
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

export default function ServicePage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <Layout title="Service Not Found">
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service not found</h1>
          <p className="text-muted-foreground">The service you are looking for does not exist.</p>
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
          <img
            src={`https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80`}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-start p-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-background/70 backdrop-blur-md flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-lg">{service.title[0]}</span>
              </div>
              <span className="text-foreground/80 text-sm font-semibold">{service.title}</span>
            </div>
          </div>
        </div>
      </HeroSection>

      <LogoCloud title={`Trusted for ${service.title.toLowerCase()} by ambitious brands`} />

      <StatsSection
        stats={[
          { value: "Fast", label: "Turnaround built into every project" },
          { value: "Dedicated", label: "Teams that learn your brand" },
          { value: "Scalable", label: "Capacity that grows with you" },
          { value: "24/7", label: "Always-on production support" },
        ]}
        variant="inline"
      />

      <FeatureSection
        title={<>Why teams choose The North for <span className="heading-italic">{service.title.toLowerCase()}</span></>}
        features={service.benefits.map((b) => ({ title: b.title, description: b.description }))}
        columns={3}
      />

      <ImageTextSplit
        tagline="What we deliver"
        title={<>Comprehensive <span className="heading-italic">{service.title.toLowerCase()}</span> coverage</>}
        description={`From initial concept to final delivery, our ${service.title.toLowerCase()} team handles every aspect of production. Your in-house team stays focused on strategy while we handle execution.`}
        imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
        imageAlt={`${service.title} production`}
        bullets={service.features}
      />

      <TestimonialSection variant="single" />

      {related.length > 0 && (
        <ServiceGrid services={related} title="Related services" variant="compact" columns={3} />
      )}

      <CTASection
        title={<>Ready to elevate your <span className="heading-italic">{service.title.toLowerCase()}?</span></>}
        description={`See how The North's ${service.title.toLowerCase()} team can scale your creative output.`}
        variant="banner"
      />
    </Layout>
  );
}
