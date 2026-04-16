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

const serviceImages: Record<string, { hero: string; split: string }> = {
  "design-services": {
    hero: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    split: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
  },
  "ad-creative": {
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    split: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  },
  "video-production": {
    hero: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    split: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
  },
  "ai-creative": {
    hero: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    split: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  },
  "branding-services": {
    hero: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    split: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
  },
  "web-design-services": {
    hero: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    split: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  "social-media-creative": {
    hero: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    split: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
  },
  "presentation-design": {
    hero: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    split: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  "motion-design": {
    hero: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    split: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
  },
  "illustration-design-services": {
    hero: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    split: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
  },
  "print-design": {
    hero: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    split: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800&q=80",
  },
  "email-design-services": {
    hero: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    split: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
  },
  "landing-page-design": {
    hero: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    split: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
  },
  "packaging-merchandise-design": {
    hero: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    split: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
  "ebook-digital-report-design": {
    hero: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
    split: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
  },
  "copywriting": {
    hero: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    split: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80",
  },
  "marketing-strategy": {
    hero: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
    split: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  "campaign-strategy-services": {
    hero: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    split: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&q=80",
  },
  "concept-creation": {
    hero: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    split: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80",
  },
  "design-systems": {
    hero: "https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=800&q=80",
    split: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=800&q=80",
  },
  "product-design": {
    hero: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
    split: "https://images.unsplash.com/photo-1512486130939-2c4f79e731ef?w=800&q=80",
  },
  "ar-3d-design": {
    hero: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    split: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  "immersive-design-services": {
    hero: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80",
    split: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
  },
};

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

  const images = serviceImages[slug] || { hero: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", split: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80" };
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
            src={images.hero}
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
        imageSrc={images.split}
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
