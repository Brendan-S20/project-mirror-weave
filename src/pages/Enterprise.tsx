import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import heroImg from "@/assets/hero-abstract-1.jpg";
import FeatureSection from "@/components/sections/FeatureSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Users, Brain, Zap, Lock } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const enterpriseCapabilities = [
  { icon: Users, title: "Dedicated creative teams", desc: "Senior creatives embedded in your brand. No onboarding lag, no context loss. They learn your guidelines, voice, and visual language and operate as your team." },
  { icon: Brain, title: "AI-powered production", desc: "Purpose-built AI workflows cut production time by 50% while maintaining the quality bar your brand demands. From ideation through final asset." },
  { icon: Shield, title: "SOC 2 Type II certified", desc: "Enterprise-grade security with SSO, advanced permissions, data encryption at rest and in transit, and full audit trails." },
  { icon: Globe, title: "24/7 global coverage", desc: "Creative production across 120+ countries means your projects move forward in every time zone. No downtime, no delays." },
  { icon: Zap, title: "Seamless integrations", desc: "Plugs into your DAM, project management tools, and existing workflows. No migration, no disruption to established processes." },
  { icon: Lock, title: "Custom workflows", desc: "Bespoke creative processes designed around your approval chains, compliance requirements, and brand governance structure." },
];

export default function Enterprise() {
  const { ref: capRef, inView: capInView } = useInView();
  const { ref: proofRef, inView: proofInView } = useInView();

  return (
    <Layout title="Enterprise" description="Enterprise-grade creative operations for the world's most demanding brands.">
      {/* Hero */}
      <HeroSection
        tagline="Enterprise"
        title={<>Enterprise creative <span className="heading-italic">without the enterprise overhead</span></>}
        description="Dedicated creative teams, AI-powered production, and SOC 2 compliance. Built for organizations that need quality at scale without adding headcount."
        variant="split"
      >
        <img src={heroImg} alt="Enterprise creative operations at scale" className="rounded-2xl w-full h-full object-cover" width={1280} height={960} />
      </HeroSection>

      <LogoCloud />

      {/* Inline stats */}
      <StatsSection
        stats={[
          { value: "471%", label: "ROI over 3 years (Forrester)" },
          { value: "500+", label: "Enterprise clients served" },
          { value: "99.9%", label: "Platform uptime SLA" },
          { value: "SOC 2", label: "Type II certified" },
        ]}
        variant="inline"
      />

      {/* Enterprise capabilities - asymmetric layout */}
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
              <Link to="/pricing" className="btn-lime mt-8 group">
                Talk to enterprise sales
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
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

      {/* ROI Section */}
      <ImageTextSplit
        tagline="Proven ROI"
        title={<>471% ROI. <span className="heading-italic">Validated by Forrester.</span></>}
        description="An independent Forrester Total Economic Impact study found that Superside delivers 471% ROI over three years. Enterprise teams saw 70% lower design costs, 3x faster time to market, and payback in under 6 months."
        bullets={[
          "471% return on investment over three years",
          "70% reduction in creative production costs",
          "3x faster time to market on campaigns",
          "Full payback achieved in under 6 months",
        ]}
      />

      {/* Mid CTA */}
      <CTASection
        title={<>Take your creative to new heights. <span className="heading-italic">Cut overhead faster than ever.</span></>}
        description="See how enterprise teams are scaling creative output while reducing costs."
        variant="banner"
      />

      {/* Proof section */}
      <section className="section-padding py-20 lg:py-28 relative" ref={proofRef}>
        <div className="absolute inset-0 bg-[hsl(var(--surface-subtle))]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="badge-pill mb-6">Enterprise proof</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4">
              Creative experts or AI power? <span className="heading-italic">Both.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto">
              "Either/or" is over. Enterprise teams use Superside to combine world-class human creativity with AI-powered production at a scale no internal team can match.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 ${proofInView ? 'stagger-children' : ''}`}>
            {[
              { metric: "70%", label: "Lower creative costs", detail: "vs. building equivalent in-house capacity" },
              { metric: "3x", label: "Faster to market", detail: "from brief to deployed assets" },
              { metric: "50%", label: "Less revision cycles", detail: "with AI-powered quality assurance" },
            ].map((item, i) => (
              <div key={i} className={`card-premium p-10 text-center ${proofInView ? 'animate-fade-up' : 'opacity-0'}`}>
                <div className="text-5xl lg:text-6xl font-black text-gradient tracking-tighter mb-3">{item.metric}</div>
                <div className="text-base font-bold text-foreground mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection variant="featured" />

      <FAQSection
        title={<>Frequently asked <span className="heading-italic">questions</span></>}
        items={[
          { question: "What makes Superside different from a traditional agency?", answer: "Superside operates as a dedicated creative team extension, not a project-based vendor. You get consistent talent, AI-powered workflows, and subscription pricing rather than unpredictable retainers and project fees." },
          { question: "How do you handle brand consistency at scale?", answer: "Your dedicated team learns your brand guidelines, voice, and visual language. Combined with AI-powered quality assurance, every deliverable stays on-brand across channels and markets." },
          { question: "What security certifications do you hold?", answer: "Superside is SOC 2 Type II certified. We support SSO integration, advanced role-based permissions, data encryption at rest and in transit, and maintain comprehensive audit trails." },
          { question: "How quickly can we get started?", answer: "Most enterprise teams are fully onboarded within 2 weeks. Your dedicated team begins learning your brand immediately, and many teams see their first deliverables within the first week." },
          { question: "Can Superside integrate with our existing tools?", answer: "Yes. Superside integrates with popular DAM systems, project management tools, and communication platforms. We adapt to your workflows rather than forcing new ones." },
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
