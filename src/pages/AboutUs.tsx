import Layout from "@/components/layout/Layout";
import heroImg from "@/assets/hero-abstract-2.jpg";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import FeatureSection from "@/components/sections/FeatureSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";

export default function AboutUs() {
  return (
    <Layout title="About Us" description="The only creative service where enterprise teams get the top 1% of global talent, powered by AI.">
      <HeroSection
        tagline="About Superside"
        title={<>The creative force <span className="heading-italic">behind world-leading brands</span></>}
        description="The only creative service where enterprise teams get the top 1% of global talent, powered by AI, plugged directly into their workflows."
        variant="split"
      >
        <img src={heroImg} alt="About Superside creative team" className="rounded-2xl w-full h-full object-cover" width={1280} height={960} />
      </HeroSection>

      <LogoCloud />

      <ImageTextSplit
        tagline="Our mission"
        title={<>A <span className="heading-italic">smarter</span> way to scale your creative</>}
        description="Superside replaces creative bottlenecks with limitless creative output, empowering you to bring your bold visions to life faster. We combine the best creative talent from around the world with purpose-built technology to deliver a significantly faster, more affordable, and better customer experience than traditional agencies."
        bullets={[
          "Not an agency, not a bunch of freelancers",
          "A world-class creative team ready to support you",
          "Purpose-built tech for creative collaboration",
          "AI-powered workflows for maximum efficiency",
        ]}
      />

      <StatsSection
        stats={[
          { value: "750+", label: "Creative professionals" },
          { value: "120+", label: "Countries represented" },
          { value: "500+", label: "Enterprise clients" },
          { value: "2015", label: "Founded" },
        ]}
        variant="inline"
      />

      <FeatureSection
        tagline="Creative that works"
        title={<>A creative partner that <span className="heading-italic">just clicks</span></>}
        features={[
          { title: "Top global creative talent", description: "Superside hires highly-skilled, deeply-vetted creatives and project managers then pairs them with the best creative collaboration technology and AI tools." },
          { title: "Your dedicated team", description: "Every client gets a dedicated team that learns your brand inside out, becoming a true extension of your in-house creative team." },
          { title: "AI-powered platform", description: "Our technology platform uses AI at every step to accelerate delivery, maintain quality, and streamline communication." },
          { title: "Enterprise-grade quality", description: "Multi-layer review processes, brand consistency checks, and quality assurance ensure every deliverable exceeds expectations." },
        ]}
        variant="list"
      />

      <ImageTextSplit
        tagline="Our values"
        title={<>Built on <span className="heading-italic">trust and transparency</span></>}
        description="We believe great creative partnerships are built on trust, transparency, and shared ambition. Our clients see us as an extension of their team because we operate with the same dedication and accountability."
        imagePosition="left"
      />

      <TestimonialSection />

      <CTASection
        title={<>Join 500+ brands scaling with <span className="heading-italic">Superside</span></>}
        description="See how we can transform your creative operations."
      />
    </Layout>
  );
}
