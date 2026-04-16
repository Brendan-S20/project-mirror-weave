import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import FeatureSection from "@/components/sections/FeatureSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { ArrowRight, Shield, Globe, Users, Brain, Zap, Lock } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCTAModal } from "@/contexts/CTAContext";

const enterpriseCapabilities = [
  { icon: Users, title: "Dedicated creative teams", desc: "Experienced creatives embedded in your brand. No onboarding lag, no context loss. They learn your guidelines, voice, and visual language and operate as your team." },
  { icon: Brain, title: "Smart production workflows", desc: "Purpose-built workflows reduce production time while maintaining the quality bar your brand demands. From ideation through final asset." },
  { icon: Shield, title: "Enterprise-grade security", desc: "Structured security practices with SSO support, role-based permissions, data encryption, and audit trails." },
  { icon: Globe, title: "Global coverage", desc: "Creative production across multiple time zones means your projects move forward around the clock. No downtime, no delays." },
  { icon: Zap, title: "Seamless integrations", desc: "Plugs into your project management tools and existing workflows. No migration, no disruption to established processes." },
  { icon: Lock, title: "Custom workflows", desc: "Bespoke creative processes designed around your approval chains, compliance requirements, and brand governance structure." },
];

export default function Enterprise() {
  const { ref: capRef, inView: capInView } = useInView();
  const { openModal } = useCTAModal();

  return (
    <Layout title="Enterprise" description="Enterprise-grade creative operations for teams that need quality at scale.">
      <HeroSection
        tagline="Enterprise"
        title={<>Enterprise creative <span className="heading-italic">without the enterprise overhead</span></>}
        description="Dedicated creative teams, streamlined production, and structured security. Built for organizations that need quality at scale without adding headcount."
        variant="split"
      >
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Enterprise creative operations" className="rounded-2xl w-full h-full object-cover" width={800} height={600} />
      </HeroSection>

      <LogoCloud title="Designed for growing and enterprise-level teams" />

      <StatsSection
        stats={[
          { value: "20+", label: "Creative disciplines" },
          { value: "Dedicated", label: "Teams per client" },
          { value: "Reliable", label: "Platform uptime" },
          { value: "Secure", label: "Enterprise-grade" },
        ]}
        variant="inline"
      />

      <section className="section-padding py-24 lg:py-32 relative" ref={capRef}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mb-16">
            <div className="lg:w-2/5 shrink-0">
              <span className="badge-pill mb-6">Built for enterprise</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 leading-tight">
                Everything your creative org needs. <span className="heading-italic">Nothing it doesn't.</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Purpose-built for marketing and creative teams at scale. Not a marketplace. Not a staffing agency. A true creative partnership.
              </p>
              <button onClick={openModal} className="btn-lime mt-8 group">
                Talk to enterprise sales
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className={`lg:w-3/5 grid sm:grid-cols-2 gap-5 ${capInView ? 'stagger-children' : ''}`}>
              {enterpriseCapabilities.map((cap, i) => (
                <div key={i} className={`card-elevated-hover p-6 lg:p-7 group ${capInView ? 'animate-fade-up' : 'opacity-0'}`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <cap.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ImageTextSplit
        tagline="Scalable creative"
        title={<>Creative capacity that <span className="heading-italic">grows with you</span></>}
        description="Enterprise teams need consistent, high-quality creative output across channels and markets. The North provides dedicated teams, structured workflows, and the flexibility to scale up or down based on demand."
        imageSrc="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80"
        imageAlt="Scalable creative production"
        bullets={[
          "Dedicated teams that understand your brand deeply",
          "Structured workflows designed for high-volume output",
          "Faster time to market on campaigns and launches",
          "Flexible capacity that adapts to your needs",
        ]}
      />

      <CTASection
        title={<>Take your creative to new heights. <span className="heading-italic">Reduce overhead.</span></>}
        description="See how enterprise teams are scaling creative output while simplifying operations."
        variant="banner"
      />

      <TestimonialSection variant="featured" />

      <FAQSection
        title={<>Frequently asked <span className="heading-italic">questions</span></>}
        items={[
          { question: "What makes The North different from a traditional agency?", answer: "The North operates as a dedicated creative team extension, not a project-based vendor. You get consistent talent, streamlined workflows, and subscription pricing rather than unpredictable retainers and project fees." },
          { question: "How do you handle brand consistency at scale?", answer: "Your dedicated team learns your brand guidelines, voice, and visual language. Combined with structured quality assurance processes, every deliverable stays on-brand across channels and markets." },
          { question: "What security practices do you follow?", answer: "The North follows enterprise-grade security practices. We support SSO integration, role-based permissions, data encryption at rest and in transit, and maintain comprehensive audit trails." },
          { question: "How quickly can we get started?", answer: "Most enterprise teams are fully onboarded within a few weeks. Your dedicated team begins learning your brand immediately, and many teams see their first deliverables within the first week." },
          { question: "Can The North integrate with our existing tools?", answer: "Yes. The North integrates with popular project management tools and communication platforms. We adapt to your workflows rather than forcing new ones." },
        ]}
      />

      <CTASection
        title={<>Your creative team's <span className="heading-italic">creative team</span></>}
        description="Talk to our enterprise team about building a custom creative operation that scales with your ambitions."
        variant="split"
      />
    </Layout>
  );
}
