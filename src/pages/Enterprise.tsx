import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import FeatureSection from "@/components/sections/FeatureSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { ArrowRight, Shield, Globe, Users, Workflow, Lock, HeadphonesIcon, Layers, Building2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCTAModal } from "@/contexts/CTAContext";

const enterpriseCapabilities = [
  { icon: Building2, title: "Multi-location and multi-brand", desc: "Architecture and operations designed for businesses running multiple locations, brands, or business units from one stack." },
  { icon: Workflow, title: "Deep system integrations", desc: "Custom integrations across your CRM, ERP, billing, support, and warehouse so every team operates on the same data." },
  { icon: Users, title: "Dedicated cross-functional team", desc: "A named team across strategy, engineering, automation, and creative, embedded as an extension of your in-house teams." },
  { icon: Shield, title: "SLA and structured support", desc: "Defined response times, named escalation paths, scheduled reviews, and a clear roadmap reviewed every quarter." },
  { icon: Globe, title: "Global delivery coverage", desc: "Distributed delivery across time zones means projects move forward across regions, with a single accountable team in the middle." },
  { icon: Lock, title: "Security and compliance", desc: "SSO, role-based access, signed DPAs and NDAs, and security reviews built into the engagement." },
];

const enterpriseProgram = [
  { phase: "Discovery", description: "Joint workshops with stakeholders to map systems, data, and operational constraints across the business." },
  { phase: "Architecture", description: "Reference architecture and roadmap covering systems, automation, integrations, and operating model." },
  { phase: "Build", description: "Phased implementation with milestones, environments, and structured QA across every workstream." },
  { phase: "Operate", description: "Ongoing operating partner with quarterly reviews, SLA-backed support, and continuous optimization." },
];

export default function Enterprise() {
  const { ref: capRef, inView: capInView } = useInView();
  const { ref: progRef, inView: progInView } = useInView();
  const { openModal } = useCTAModal();

  return (
    <Layout title="Enterprise" description="Multi-location, multi-system Growth Infrastructure for enterprise teams. Dedicated team, SLAs, and structured support.">
      <HeroSection
        tagline="Enterprise"
        title={<>Growth Infrastructure for <span className="heading-italic">multi-system, multi-location businesses</span></>}
        description="Dedicated team. Deep integrations. Structured SLAs. Built for enterprise organizations that need systems, automation, and creative under one accountable partner."
        variant="split"
      >
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Enterprise growth infrastructure" className="rounded-2xl w-full h-full object-cover" width={800} height={600} />
      </HeroSection>

      <LogoCloud title="Trusted by enterprise teams" />

      <StatsSection
        stats={[
          { value: "1", label: "Accountable team across the engagement" },
          { value: "4", label: "Pillars: systems, automation, creative, IT" },
          { value: "SLA", label: "Defined response and uptime targets" },
          { value: "Quarterly", label: "Roadmap reviews with leadership" },
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
                Everything an enterprise needs. <span className="heading-italic">Nothing it doesn't.</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Most enterprise problems aren't a single tool problem. They're a systems problem. The North operates as the integration layer across your stack, your teams, and your operating model.
              </p>
              <button onClick={openModal} className="btn-lime mt-8 group">
                Talk to enterprise
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className={`lg:w-3/5 grid sm:grid-cols-2 gap-5 ${capInView ? "stagger-children" : ""}`}>
              {enterpriseCapabilities.map((cap, i) => (
                <div key={i} className={`card-elevated-hover p-6 lg:p-7 group ${capInView ? "animate-fade-up" : "opacity-0"}`}>
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
        tagline="Multi-location"
        title={<>One operating system across <span className="heading-italic">every location and brand</span></>}
        description="Whether you run multiple physical locations, regions, or sub-brands, The North centralizes the systems, data, and automation while preserving local autonomy where it matters."
        imageSrc="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80"
        imageAlt="Multi-location operations"
        bullets={[
          "Centralized CRM, reporting, and data warehouse",
          "Local autonomy on creative, content, and offers",
          "Standardized onboarding and operating procedures",
          "Cross-location reporting and benchmarking",
        ]}
      />

      <section className="section-padding py-24 lg:py-32 relative" ref={progRef}>
        <div className="absolute inset-0 bg-[hsl(var(--surface-subtle))]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="badge-pill mb-4">How enterprise engagements run</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4">From <span className="heading-italic">discovery</span> to <span className="heading-italic">ongoing operation</span></h2>
          </div>
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-5 ${progInView ? "stagger-children" : ""}`}>
            {enterpriseProgram.map((p, i) => (
              <div key={p.phase} className={`card-elevated-hover p-7 group ${progInView ? "animate-fade-up" : "opacity-0"}`}>
                <span className="text-xs font-mono font-bold text-primary/70">{`0${i + 1}`}</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-3">{p.phase}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        title={<>Support and <span className="heading-italic">SLA structure</span></>}
        features={[
          { title: "Named team and escalation", description: "A named delivery lead, technical lead, and account lead with documented escalation paths." },
          { title: "Defined response targets", description: "Tiered response time SLAs by issue severity, with reporting against targets." },
          { title: "Quarterly business reviews", description: "Structured QBR with leadership covering roadmap, KPIs, and capacity." },
          { title: "On-call coverage", description: "Coverage for production-critical systems and integrations, including out-of-hours options." },
          { title: "Documentation and runbooks", description: "Every system handed over with documentation your internal team can run from." },
          { title: "Security and procurement", description: "SSO, RBAC, signed DPAs and security questionnaires handled as part of onboarding." },
        ]}
        columns={3}
      />

      <CTASection
        title={<>Build the systems your <span className="heading-italic">next phase requires</span></>}
        description="Talk to our enterprise team about a tailored Growth Infrastructure program for your organization."
        variant="banner"
      />

      <TestimonialSection variant="featured" />

      <FAQSection
        title={<>Enterprise <span className="heading-italic">questions</span></>}
        items={[
          { question: "How is The North different from a traditional consulting firm?", answer: "Traditional consulting delivers strategy and slideware. The North delivers strategy, then builds and operates the systems. One accountable team, end to end." },
          { question: "Do you support our existing stack?", answer: "Yes. We work natively across HubSpot, Salesforce, Pipedrive, GoHighLevel, Zapier, Make, n8n, AWS, GCP, Azure, Retool, and the major data warehouses. We rarely recommend ripping out what's working." },
          { question: "How do you handle security and procurement?", answer: "We support SSO, role-based access, audit logs, and sign DPAs, MSAs, and NDAs as a standard part of onboarding. We complete security questionnaires for enterprise procurement." },
          { question: "Can you embed with our internal teams?", answer: "Yes. The default model is an embedded cross-functional team that works alongside your internal teams in your tools (Slack, Teams, Jira, Linear)." },
          { question: "What does an SLA cover?", answer: "Tiered response time targets by issue severity for production-critical systems, scheduled review cadences, and on-call coverage options for systems we operate." },
          { question: "How quickly can we start?", answer: "Most enterprise engagements move from intro call to scoped statement of work in 2–4 weeks, with implementation starting immediately after sign-off." },
        ]}
      />

      <CTASection
        title={<>Talk to <span className="heading-italic">enterprise</span></>}
        description="Tell us about your organization. We'll come back with a tailored Growth Infrastructure program and a clear plan."
        variant="split"
      />
    </Layout>
  );
}
