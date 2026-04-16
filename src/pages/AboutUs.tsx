import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import FeatureSection from "@/components/sections/FeatureSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";

export default function AboutUs() {
  return (
    <Layout title="About Us" description="The North is the creative partner behind ambitious, growing brands.">
      <HeroSection
        tagline="About The North"
        title={<>The creative force behind <span className="heading-italic">ambitious brands</span></>}
        description="We built a new model for creative production. One where dedicated talent, powered by smart workflows, plugs directly into your team and delivers at the speed your business demands."
        variant="split"
      >
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="The North creative team at work" className="rounded-2xl w-full h-full object-cover" width={800} height={600} />
      </HeroSection>

      <LogoCloud />

      <StatsSection
        stats={[
          { value: "20+", label: "Creative disciplines covered" },
          { value: "Global", label: "Talent from multiple countries" },
          { value: "Dedicated", label: "Teams for every client" },
          { value: "Growing", label: "Client base year over year" },
        ]}
        variant="inline"
      />

      <ImageTextSplit
        tagline="Our mission"
        title={<>We exist to <span className="heading-italic">unlock creative potential</span></>}
        description="Every ambitious marketing team hits the same wall: too many ideas, not enough capacity to execute them. The North exists to remove that wall entirely. We combine talented creatives with purpose-built technology to deliver a faster, more reliable, and higher-quality creative experience."
        imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
        imageAlt="Team collaborating on creative strategy"
        bullets={[
          "Not an agency. Not freelancers. A new model entirely.",
          "A creative team that operates as your own",
          "Purpose-built technology for seamless collaboration",
          "Smart workflows for speed without compromise",
        ]}
      />

      <FeatureSection
        tagline="What makes us different"
        title={<>A creative partner that <span className="heading-italic">actually delivers</span></>}
        features={[
          { title: "Vetted global talent", description: "We hire talented creative professionals worldwide, then train them on the latest tools. Your team gets experienced output from day one." },
          { title: "Your dedicated team", description: "Every client gets a hand-picked team that learns your brand guidelines, tone, and preferences. They get better the longer you work together." },
          { title: "Smart platform", description: "Our technology platform streamlines every step: briefing, production, quality assurance, and asset management. Faster cycles, fewer errors." },
          { title: "Consistent delivery", description: "Multi-layer reviews, brand consistency processes, and rigorous QA ensure every deliverable meets the standards your brand requires." },
        ]}
        variant="list"
      />

      <ImageTextSplit
        tagline="Our values"
        title={<>Built on trust, <span className="heading-italic">transparency, and ambition</span></>}
        description="We believe great creative partnerships require radical transparency. Our clients see real-time progress, know exactly what they are paying, and have direct access to the people doing the work. No layers of account management. No hidden costs. No surprises."
        imagePosition="left"
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
        imageAlt="Transparent collaboration and trust"
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
