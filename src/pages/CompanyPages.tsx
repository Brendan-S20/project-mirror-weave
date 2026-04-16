import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import CTASection from "@/components/sections/CTASection";
import LogoCloud from "@/components/sections/LogoCloud";

export function OurCreativeTalent() {
  return (
    <Layout title="Our Creative Talent" description="Meet the global creative talent that powers The North.">
      <HeroSection tagline="Our talent" title={<>Vetted <span className="heading-italic">global talent</span></>} description="The North hires talented creatives from around the world. Rigorously vetted, deeply experienced, and ready to elevate your brand." variant="split">
        <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80" alt="Creative professionals at work" className="rounded-2xl w-full h-full object-cover" width={800} height={600} loading="lazy" />
      </HeroSection>
      <LogoCloud title="Creative talent from around the world" />
      <FeatureSection title={<>Why our talent is <span className="heading-italic">different</span></>} features={[
        { title: "Rigorous Vetting", description: "A selective, multi-stage process ensures only experienced, high-quality creatives join our team." },
        { title: "Global Diversity", description: "Talent from multiple countries bringing diverse perspectives and cultural insight." },
        { title: "Continuous Training", description: "Ongoing skill development in the latest tools, trends, and creative techniques." },
        { title: "Dedicated Teams", description: "Your team learns your brand and becomes an extension of your organization." },
        { title: "Multi-Disciplinary", description: "Specialists across 20+ creative disciplines, from design to strategy." },
        { title: "Tool-Augmented", description: "Every creative uses advanced tools to deliver faster, better work." },
      ]} />
      <ImageTextSplit
        tagline="Our people"
        title={<>Creative professionals who <span className="heading-italic">care about craft</span></>}
        description="We hire experienced creatives who are passionate about their craft and driven to deliver exceptional work. Every team member undergoes continuous training on the latest tools and techniques, ensuring your brand benefits from cutting-edge creative execution."
        imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
        imageAlt="Creative team collaboration"
        bullets={[
          "Multi-stage vetting process for every hire",
          "Continuous skills development program",
          "Deep brand immersion for every client engagement",
          "Cross-disciplinary collaboration built into every team",
        ]}
      />
      <CTASection title={<>Work with the <span className="heading-italic">best</span></>} />
    </Layout>
  );
}

export function OurTechnology() {
  return (
    <Layout title="Our Technology" description="The North's creative production platform.">
      <HeroSection tagline="Our technology" title={<>Smart <span className="heading-italic">creative platform</span></>} description="Purpose-built technology that combines smart workflows with human creativity to deliver better work faster." variant="split">
        <img src="https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=800&q=80" alt="Creative production platform" className="rounded-2xl w-full h-full object-cover" width={800} height={600} loading="lazy" />
      </HeroSection>
      <FeatureSection title={<>Built for <span className="heading-italic">creative teams</span></>} features={[
        { title: "Smart Briefing", description: "Structured brief creation that captures requirements accurately the first time." },
        { title: "Creative Project Management", description: "Full visibility into every project with real-time tracking and communication." },
        { title: "Asset Management", description: "Organized storage with smart search and retrieval." },
        { title: "Quality Assurance", description: "Built-in quality checks ensure brand consistency across every deliverable." },
        { title: "Analytics and Insights", description: "Track creative output and optimize your creative operations." },
        { title: "Integrations", description: "Connects with your existing tools and workflows seamlessly." },
      ]} />
      <ImageTextSplit
        tagline="Built for scale"
        title={<>Technology that <span className="heading-italic">grows with you</span></>}
        description="Our platform is designed to handle the complexity of enterprise creative operations. From structured briefing to automated quality checks, every step of the creative process is optimized for speed, consistency, and collaboration."
        imageSrc="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=800&q=80"
        imageAlt="Technology platform for creative teams"
        imagePosition="left"
        bullets={[
          "Handles high-volume creative production",
          "Real-time collaboration and feedback tools",
          "Automated brand consistency checks",
          "Integrates with existing marketing stacks",
        ]}
      />
      <CTASection title={<>See the platform in <span className="heading-italic">action</span></>} />
    </Layout>
  );
}

export function AIExcellence() {
  return (
    <Layout title="AI Excellence" description="How The North uses advanced tools in creative production.">
      <HeroSection tagline="AI Excellence" title={<>Leading the <span className="heading-italic">creative evolution</span></>} description="The North uses advanced tools and smart workflows to enhance creative production, combining human expertise with technology for better results." variant="centered" />
      <ImageTextSplit tagline="Our approach" title={<>Technology that <span className="heading-italic">amplifies</span> human creativity</>} description="We do not replace creatives with tools. We give our talented team the most advanced resources available, enabling them to produce better work faster than ever before." imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" imageAlt="Smart creative tools in action" bullets={["Accelerated ideation and concepting", "Streamlined production workflows", "Smart quality assurance", "Brand-consistent output at scale"]} />
      <FeatureSection title={<>Smart tools across every <span className="heading-italic">workflow</span></>} features={[
        { title: "Smart Briefing", description: "Structured brief creation with intelligent suggestions." },
        { title: "Rapid Concepting", description: "Generate and explore more creative directions faster." },
        { title: "Streamlined Production", description: "Efficient asset generation and variation creation." },
        { title: "Automated Review", description: "Quality and brand consistency checks built into every project." },
      ]} columns={2} />
      <CTASection title={<>Experience smarter <span className="heading-italic">creative production</span></>} />
    </Layout>
  );
}

export function BrandBrain() {
  return (
    <Layout title="BrandBrain" description="Brand intelligence that keeps every creative on-brand.">
      <HeroSection tagline="BrandBrain" title={<>Brand intelligence <span className="heading-italic">that learns</span></>} description="BrandBrain uses smart technology to understand your brand deeply, ensuring every creative deliverable is perfectly on-brand, every time." variant="centered" />
      <FeatureSection title={<>How BrandBrain <span className="heading-italic">works</span></>} features={[
        { title: "Brand Learning", description: "BrandBrain ingests your brand guidelines, assets, and past work to build a deep understanding of your brand." },
        { title: "Consistency Checks", description: "Every deliverable is automatically checked against your brand standards before delivery." },
        { title: "Smart Suggestions", description: "Intelligent suggestions help creatives make on-brand decisions faster." },
      ]} columns={3} />
      <ImageTextSplit
        tagline="Brand consistency at scale"
        title={<>Never worry about <span className="heading-italic">off-brand</span> work again</>}
        description="BrandBrain acts as your always-on brand guardian. It understands your visual language, tone of voice, and design principles, then applies that understanding to every piece of creative your team produces."
        imageSrc="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80"
        imageAlt="Brand intelligence platform"
        bullets={[
          "Learns from your existing brand assets",
          "Provides real-time consistency scoring",
          "Catches brand violations before delivery",
          "Gets smarter with every project",
        ]}
      />
      <CTASection title={<>Keep your brand <span className="heading-italic">consistent</span></>} />
    </Layout>
  );
}

export function CreativeBrief() {
  return (
    <Layout title="Creative Brief" description="Start your creative project with The North.">
      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Start your <span className="heading-italic">creative brief</span></h1>
          <p className="text-muted-foreground mb-10">Tell us about your project and we will get started.</p>
          <div className="card-elevated p-10 text-left space-y-6">
            <div><label className="block text-sm font-medium text-foreground mb-2">Company name</label><div className="w-full h-10 rounded-lg bg-[hsl(var(--surface-overlay))] border border-border" /></div>
            <div><label className="block text-sm font-medium text-foreground mb-2">Project type</label><div className="w-full h-10 rounded-lg bg-[hsl(var(--surface-overlay))] border border-border" /></div>
            <div><label className="block text-sm font-medium text-foreground mb-2">Description</label><div className="w-full h-24 rounded-lg bg-[hsl(var(--surface-overlay))] border border-border" /></div>
            <button className="btn-lime w-full">Submit brief</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
