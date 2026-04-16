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
    <Layout title="About Us" description="Superside is the creative force behind the world's most ambitious brands.">
      <HeroSection
        tagline="About Superside"
        title={<>The creative force behind <span className="heading-italic">the world's boldest brands</span></>}
        description="We built a new model for creative production. One where the best talent in the world, powered by AI, plugs directly into your team and delivers at the speed your business demands."
        variant="split"
      >
        <img src={heroImg} alt="Superside global creative team" className="rounded-2xl w-full h-full object-cover" width={1280} height={960} />
      </HeroSection>

      <LogoCloud />

      <StatsSection
        stats={[
          { value: "750+", label: "Creative professionals worldwide" },
          { value: "120+", label: "Countries represented" },
          { value: "500+", label: "Enterprise clients served" },
          { value: "2015", label: "Year founded" },
        ]}
        variant="inline"
      />

      <ImageTextSplit
        tagline="Our mission"
        title={<>We exist to <span className="heading-italic">unlock creative potential</span></>}
        description="Every ambitious marketing team hits the same wall: too many ideas, not enough capacity to execute them. Superside exists to remove that wall entirely. We combine the world's best creative talent with purpose-built technology to deliver a fundamentally faster, more affordable, and higher-quality creative experience."
        bullets={[
          "Not an agency. Not freelancers. A new model entirely.",
          "A world-class creative team that operates as your own",
          "Purpose-built technology for seamless collaboration",
          "AI-powered workflows for speed without compromise",
        ]}
      />

      <FeatureSection
        tagline="What makes us different"
        title={<>A creative partner that <span className="heading-italic">actually delivers</span></>}
        features={[
          { title: "Top global talent", description: "We hire the top 1% of creative talent worldwide, then train them on the latest AI tools. Your team gets senior-level output from day one." },
          { title: "Your dedicated team", description: "Every client gets a hand-picked team that learns your brand guidelines, tone, and preferences. They get better the longer you work together." },
          { title: "AI-native platform", description: "Our technology platform uses AI at every step: briefing, production, quality assurance, and asset management. Faster cycles, fewer errors." },
          { title: "Enterprise-grade delivery", description: "Multi-layer reviews, brand consistency automation, and rigorous QA ensure every deliverable meets the standards your brand requires." },
        ]}
        variant="list"
      />

      <ImageTextSplit
        tagline="Our values"
        title={<>Built on trust, <span className="heading-italic">transparency, and ambition</span></>}
        description="We believe great creative partnerships require radical transparency. Our clients see real-time progress, know exactly what they're paying, and have direct access to the people doing the work. No layers of account management. No hidden costs. No surprises."
        imagePosition="left"
      />

      <TestimonialSection variant="featured" />

      <CTASection
        title={<>Join the brands that <span className="heading-italic">chose better</span></>}
        description="See what happens when your creative operation has no ceiling."
        variant="split"
      />
    </Layout>
  );
}
