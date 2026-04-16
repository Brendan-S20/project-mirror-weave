import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import LogoCloud from "@/components/sections/LogoCloud";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import { getServiceBySlug, services } from "@/data/services";
import ServiceGrid from "@/components/sections/ServiceGrid";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

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
        <div className="aspect-[4/3] rounded-2xl bg-surface-elevated flex items-center justify-center">
          <span className="text-muted-foreground text-sm">{service.title}</span>
        </div>
      </HeroSection>

      <LogoCloud />

      <FeatureSection
        title={<>Why choose Superside for <span className="heading-italic">{service.title.toLowerCase()}</span></>}
        features={service.benefits.map((b) => ({ title: b.title, description: b.description }))}
        columns={3}
      />

      <ImageTextSplit
        tagline="What we deliver"
        title={<>Everything you need for <span className="heading-italic">{service.title.toLowerCase()}</span></>}
        description={`Our ${service.title.toLowerCase()} service covers every aspect of creative production, from initial concept to final delivery.`}
        bullets={service.features}
      />

      <TestimonialSection variant="single" />

      {related.length > 0 && (
        <ServiceGrid services={related} title="Related services" variant="compact" columns={3} />
      )}

      <CTASection
        title={<>Ready to get started with <span className="heading-italic">{service.title.toLowerCase()}?</span></>}
        description={`Book a demo to see how Superside can handle your ${service.title.toLowerCase()} needs.`}
      />
    </Layout>
  );
}
