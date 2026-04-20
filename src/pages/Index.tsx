import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import StatsSection from "@/components/sections/StatsSection";
import FeatureSection from "@/components/sections/FeatureSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import ComparisonSection from "@/components/sections/ComparisonSection";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Workflow, Megaphone, Server } from "lucide-react";
import { useCTAModal } from "@/contexts/CTAContext";

const pillars = [
  { icon: Globe, title: "Growth Infrastructure", desc: "Websites, funnels, and conversion systems engineered for revenue.", href: "/website-development" },
  { icon: Workflow, title: "Automation & Systems", desc: "CRM, workflows, and integrations that remove manual work.", href: "/workflow-automation" },
  { icon: Megaphone, title: "Creative & Content", desc: "Brand, ads, and media production tied to performance.", href: "/ads" },
  { icon: Server, title: "Technology & IT", desc: "Architecture, infrastructure, and internal tools built to scale.", href: "/system-architecture" },
];

export default function Index() {
  const { openModal } = useCTAModal();

  return (
    <Layout>
      <HeroSection
        variant="split"
        title={<>Build, scale, and <span className="heading-italic">automate</span> your business systems</>}
        description="The North combines creative, technology, and operational systems to help companies scale faster and operate smarter."
        ctaText="Start a Project"
        secondaryCtaText="Book a Strategy Call"
        secondaryCtaHref="#strategy-call"
      >
        <div className="grid grid-cols-2 gap-3 stagger-children">
          {pillars.map((p) => (
            <Link key={p.title} to={p.href} className="card-elevated-hover p-5 lg:p-6 flex flex-col justify-between aspect-[4/3] animate-fade-up group">
              <p.icon className="w-6 h-6 text-primary" />
              <div>
                <span className="text-sm font-bold text-foreground block">{p.title}</span>
                <span className="text-xs text-muted-foreground">{p.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </HeroSection>

      {/* Who we work with */}
      <section className="section-padding py-16 lg:py-20 border-y border-border/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6">Who we work with</p>
          <p className="text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto">
            Founders, operators, and CTOs at growth-stage companies who need creative, systems, and infrastructure to move as one.
          </p>
        </div>
      </section>

      {/* Core capabilities */}
      <FeatureSection
        tagline="Core capabilities"
        title={<>One partner across <span className="heading-italic">creative, systems, and infrastructure</span></>}
        description="Most companies stitch together agencies, freelancers, and consultants. We unify the work into a single operating system for growth."
        features={[
          { title: "Growth Infrastructure", description: "Websites, funnels, and conversion systems built as compounding assets, not one-off projects." },
          { title: "Automation & Systems", description: "CRM, workflow automation, BPA, and integrations that turn your stack into one connected system." },
          { title: "Creative & Content", description: "Performance ads, brand systems, and media production tied directly to channel performance." },
          { title: "Technology & IT", description: "System architecture, infrastructure planning, and internal tools designed for the next phase of growth." },
        ]}
        columns={2}
      />

      {/* Proof / outcomes */}
      <StatsSection
        title="Built for measurable outcomes"
        stats={[
          { value: "4", label: "Disciplines under one roof" },
          { value: "Connected", label: "Systems, not siloed deliverables" },
          { value: "Senior", label: "Operators on every engagement" },
          { value: "Outcome", label: "Pricing tied to business impact" },
        ]}
        variant="large"
      />

      {/* Process */}
      <FeatureSection
        tagline="How it works"
        title={<>Diagnose. Build. <span className="heading-italic">Scale.</span></>}
        variant="list"
        features={[
          { title: "Diagnose", description: "We analyze current systems, bottlenecks, and growth gaps. You get a clear view of what is working, what is not, and where the leverage is." },
          { title: "Build", description: "We design and implement systems, platforms, and workflows. Senior operators do the work, not slides about the work." },
          { title: "Scale", description: "We optimize and expand infrastructure as the business grows. The systems we build compound instead of breaking under load." },
        ]}
      />

      {/* Systems explanation */}
      <ImageTextSplit
        tagline="Connected systems"
        title={<>Everything connected. <span className="heading-italic">Nothing wasted.</span></>}
        description="Your website, CRM, marketing tools, and operations should behave like one system. We design and build the integrations, automations, and architecture that make that real."
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
        imageAlt="Connected systems diagram"
        bullets={[
          "Website, CRM, and marketing wired together end to end",
          "Operations, billing, and reporting connected to the source of truth",
          "Automations replace manual handoffs between teams and tools",
          "One architecture instead of fifteen disconnected SaaS subscriptions",
        ]}
      />

      {/* Value prop */}
      <ImageTextSplit
        tagline="Why The North"
        title={<>Stop managing <span className="heading-italic">disconnected tools and teams</span></>}
        description="Most growth-stage companies are paying for tool sprawl, agency overhead, and operational drag. The North unifies systems across the business so creative, technology, and operations move as one."
        imagePosition="left"
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        imageAlt="Unified business systems"
        bullets={[
          "One accountable partner across systems, creative, and IT",
          "Senior operators embedded in your business",
          "Outcome-focused engagements, not deliverable lists",
          "Built for founders, operators, and CTOs",
        ]}
      />

      <CTASection
        title={<>Build the system behind <span className="heading-italic">your next phase</span></>}
        description="Talk to The North about how creative, automation, and infrastructure can work as one."
        ctaText="Start a Project"
        variant="banner"
      />

      <ComparisonSection />

      <TestimonialSection variant="featured" title="What operators say" />

      <CTASection
        title={<>Ready to operate <span className="heading-italic">smarter?</span></>}
        description="Start a project with The North or book a strategy call to map your next phase."
        ctaText="Start a Project"
        variant="split"
      />
    </Layout>
  );
}
