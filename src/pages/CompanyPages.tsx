import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import CTASection from "@/components/sections/CTASection";
import LogoCloud from "@/components/sections/LogoCloud";
import heroAI from "@/assets/hero-ai.jpg";

export function OurCreativeTalent() {
  return (
    <Layout title="Our Creative Talent" description="Meet the top 1% of global creative talent that powers Superside.">
      <HeroSection tagline="Our talent" title={<>The top 1% of <span className="heading-italic">global talent</span></>} description="Superside hires the most talented creatives from around the world. Rigorously vetted, deeply experienced, and ready to elevate your brand." variant="centered" />
      <LogoCloud />
      <FeatureSection title={<>Why our talent is <span className="heading-italic">different</span></>} features={[
        { title: "Rigorous Vetting", description: "Less than 1% of applicants make it through our multi-stage selection process." },
        { title: "Global Diversity", description: "Talent from 120+ countries bringing diverse perspectives and cultural insight." },
        { title: "Continuous Training", description: "Ongoing skill development in AI tools, trends, and creative techniques." },
        { title: "Dedicated Teams", description: "Your team learns your brand and becomes an extension of your organization." },
        { title: "Multi-Disciplinary", description: "Specialists across 100+ creative disciplines, from design to strategy." },
        { title: "AI-Augmented", description: "Every creative is trained on AI tools to deliver faster, better work." },
      ]} />
      <CTASection title={<>Work with the <span className="heading-italic">best</span></>} />
    </Layout>
  );
}

export function OurTechnology() {
  return (
    <Layout title="Our Technology" description="Superside's AI-powered creative platform.">
      <HeroSection tagline="Our technology" title={<>AI-powered <span className="heading-italic">creative platform</span></>} description="Purpose-built technology that combines AI with human creativity to deliver better work faster." variant="split">
        <img src={heroAI} alt="AI-powered creative platform" className="rounded-2xl w-full h-full object-cover" width={1280} height={960} loading="lazy" />
      </HeroSection>
      <FeatureSection title={<>Built for <span className="heading-italic">creative teams</span></>} features={[
        { title: "AI-Powered Briefing", description: "Smart brief creation that captures requirements accurately the first time." },
        { title: "Creative Project Management", description: "Full visibility into every project with real-time tracking and communication." },
        { title: "Asset Management", description: "Unlimited storage with smart organization and search." },
        { title: "Quality Assurance", description: "AI-powered quality checks ensure brand consistency across every deliverable." },
        { title: "Analytics & Insights", description: "Track creative performance and optimize your creative operations." },
        { title: "Integrations", description: "Connects with your existing tools and workflows seamlessly." },
      ]} />
      <CTASection title={<>See the platform in <span className="heading-italic">action</span></>} />
    </Layout>
  );
}

export function AIExcellence() {
  return (
    <Layout title="AI Excellence" description="How Superside leads with AI in creative production.">
      <HeroSection tagline="AI Excellence" title={<>Leading the <span className="heading-italic">AI creative revolution</span></>} description="Superside is at the forefront of AI-powered creative production, combining human expertise with cutting-edge AI to deliver breakthrough results." variant="centered" />
      <ImageTextSplit tagline="Our approach" title={<>AI that <span className="heading-italic">amplifies</span> human creativity</>} description="We don't replace creatives with AI. We give our world-class talent the most powerful AI tools available, enabling them to produce better work faster than ever before." bullets={["AI-accelerated ideation and concepting", "Automated production workflows", "Smart quality assurance", "Brand-consistent AI output"]} />
      <FeatureSection title={<>AI across every <span className="heading-italic">workflow</span></>} features={[
        { title: "AI Briefing", description: "Smart brief creation with AI-powered suggestions." },
        { title: "AI Concepting", description: "Generate and explore more creative directions faster." },
        { title: "AI Production", description: "Automated asset generation and variation creation." },
        { title: "AI Review", description: "Automated quality and brand consistency checks." },
      ]} columns={2} />
      <CTASection title={<>Experience AI-powered <span className="heading-italic">creative</span></>} />
    </Layout>
  );
}

export function BrandBrain() {
  return (
    <Layout title="BrandBrain" description="AI brand intelligence that keeps every creative on-brand.">
      <HeroSection tagline="BrandBrain" title={<>AI brand intelligence <span className="heading-italic">that learns</span></>} description="BrandBrain uses AI to understand your brand deeply, ensuring every creative deliverable is perfectly on-brand, every time." variant="centered" />
      <FeatureSection title={<>How BrandBrain <span className="heading-italic">works</span></>} features={[
        { title: "Brand Learning", description: "BrandBrain ingests your brand guidelines, assets, and past work to build a deep understanding of your brand." },
        { title: "Consistency Checks", description: "Every deliverable is automatically checked against your brand standards before delivery." },
        { title: "Smart Suggestions", description: "AI-powered suggestions help creatives make on-brand decisions faster." },
      ]} columns={3} />
      <CTASection title={<>Keep your brand <span className="heading-italic">consistent</span></>} />
    </Layout>
  );
}

export function CreativeBrief() {
  return (
    <Layout title="Creative Brief" description="Start your creative project with Superside.">
      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Start your <span className="heading-italic">creative brief</span></h1>
          <p className="text-muted-foreground mb-10">Tell us about your project and we'll get started.</p>
          <div className="card-elevated p-10 text-left space-y-6">
            <div><label className="block text-sm font-medium text-foreground mb-2">Company name</label><div className="w-full h-10 rounded-lg bg-surface-overlay border border-border" /></div>
            <div><label className="block text-sm font-medium text-foreground mb-2">Project type</label><div className="w-full h-10 rounded-lg bg-surface-overlay border border-border" /></div>
            <div><label className="block text-sm font-medium text-foreground mb-2">Description</label><div className="w-full h-24 rounded-lg bg-surface-overlay border border-border" /></div>
            <button className="btn-lime w-full">Submit brief</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
