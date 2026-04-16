import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import FeatureSection from "@/components/sections/FeatureSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import StatsSection from "@/components/sections/StatsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Users, Brain, Shield, BarChart3, Layers } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCTAModal } from "@/contexts/CTAContext";

const includedFeatures = [
  "Dedicated creative team and project manager",
  "Full creative, strategy, and production services",
  "Access to 100+ creative specialties on demand",
  "AI-expert creatives and AI-powered workflows",
  "Real-time project management platform",
  "Unlimited users and asset storage",
  "Integrated budget and project tracking",
  "AI-powered briefing and quality assurance",
  "Rollover of unused monthly budget",
  "Option to add short-term capacity bursts",
  "Creative analytics and performance reporting",
];

const planBenefits = [
  { icon: Users, title: "Dedicated team", desc: "Senior creatives who learn your brand and work as an extension of your team." },
  { icon: Brain, title: "AI-powered workflows", desc: "Cut production time by 50% with purpose-built AI tools." },
  { icon: Zap, title: "3x faster delivery", desc: "Most projects delivered 3x faster than traditional agency timelines." },
  { icon: Shield, title: "SOC 2 compliant", desc: "Enterprise-grade security with SSO, encryption, and access controls." },
  { icon: BarChart3, title: "Creative analytics", desc: "Performance tracking and insights tied to business outcomes." },
  { icon: Layers, title: "100+ specialties", desc: "One subscription covers every creative discipline you need." },
];

export default function Pricing() {
  const { ref: planRef, inView: planInView } = useInView();
  const { ref: benefitsRef, inView: benefitsInView } = useInView();
  const { openModal } = useCTAModal();

  return (
    <Layout title="Pricing" description="Predictable subscription pricing for enterprise creative at scale. Proven 471% ROI.">
      <HeroSection
        tagline="Pricing"
        title={<>Take creative from backlog to brand-building, <span className="heading-italic">3x faster</span></>}
        description="One subscription replaces scattered freelancers, slow agencies, and hiring overhead. Predictable pricing, proven ROI, and creative that actually moves the needle."
        ctaText="Get a custom quote"
        variant="centered"
      />

      <LogoCloud />

      <section className="section-padding py-20 lg:py-28 relative" ref={benefitsRef}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            <div className="lg:w-2/5 shrink-0">
              <span className="badge-pill mb-6">Why The North</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 leading-tight">
                One strategic partner. <span className="heading-italic">Every department covered.</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Stop juggling multiple vendors, freelancers, and hiring pipelines. One subscription gives you a complete creative team that scales with your ambitions.
              </p>
              <button onClick={openModal} className="btn-lime mt-8 group">
                Talk to sales
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className={`lg:w-3/5 grid sm:grid-cols-2 gap-5 ${benefitsInView ? 'stagger-children' : ''}`}>
              {planBenefits.map((b, i) => (
                <div key={i} className={`card-elevated-hover p-6 lg:p-7 group ${benefitsInView ? 'animate-fade-up' : 'opacity-0'}`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 lg:py-28 relative" ref={planRef}>
        <div className="absolute inset-0 bg-[hsl(var(--surface-subtle))]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`card-premium p-10 lg:p-14 ${planInView ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-bold px-3 py-1 mb-6">
                Included in plan
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Everything in <span className="heading-italic">your subscription</span>
              </h3>
              <p className="text-muted-foreground mb-8">No hidden costs. No surprise invoices. No per-project fees.</p>
              <div className="grid gap-3">
                {includedFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${planInView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                Custom pricing built around <span className="heading-italic">your creative volume</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Every team is different. Your subscription scales to match your creative demand, whether you need a focused team or a full creative department.
              </p>
              <ul className="space-y-3 mb-8">
                {["Monthly subscription, cancel anytime", "Scale up during peak periods", "Roll over unused budget", "No per-project surcharges"].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openModal} className="btn-lime-lg group">
                  Get a custom quote
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link to="/enterprise" className="btn-outline-light">
                  Enterprise plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection
        title="Proven results, not promises"
        stats={[
          { value: "471%", label: "ROI over 3 years (Forrester)" },
          { value: "70%", label: "Lower creative production costs" },
          { value: "3x", label: "Faster time to market" },
          { value: "<6mo", label: "Time to full payback" },
        ]}
        variant="large"
      />

      <ComparisonSection />

      <CTASection
        title={<>Your creative budget deserves <span className="heading-italic">better ROI</span></>}
        description="See how The North delivers 471% ROI while cutting production costs by 70%."
        variant="banner"
      />

      <TestimonialSection variant="featured" />

      <FeatureSection
        tagline="How it works"
        title={<>From brief to brilliant <span className="heading-italic">in three steps</span></>}
        variant="list"
        features={[
          { title: "Scope your needs", description: "Work with our team to define your creative volume, specialties needed, and team structure. We build a plan that matches your real workload." },
          { title: "Meet your dedicated team", description: "Get matched with senior creatives who learn your brand, guidelines, and workflows. They operate as a true extension of your in-house team." },
          { title: "Ship creative, continuously", description: "Submit projects, track progress in real-time, and receive polished deliverables. Scale up during launches, scale back when things are calm." },
        ]}
      />

      <FAQSection
        items={[
          { question: "How does The North's pricing work?", answer: "The North operates on a subscription model with predictable monthly pricing. Your subscription includes a dedicated creative team, project management, our full platform, and access to 100+ creative specialties. Pricing scales based on your volume." },
          { question: "What's included in my subscription?", answer: "Everything you need: dedicated creatives, a project manager, unlimited users, asset storage, AI-powered briefing and QA tools, creative analytics, and the ability to roll over unused budget month to month." },
          { question: "Can I scale up or down?", answer: "Yes. The North is built to flex. Increase capacity during product launches or peak campaign periods, then scale back when things slow down. You can also add short-term burst capacity for one-off projects." },
          { question: "How fast is delivery?", answer: "Most projects deliver 3x faster than traditional agencies. Turnaround depends on complexity, but our AI-powered workflows and always-on teams ensure consistently fast execution." },
          { question: "Is there a minimum commitment?", answer: "We offer flexible engagement terms designed to fit your needs. Contact our team to discuss the best option for your organization and creative volume." },
          { question: "Do you offer a trial or pilot?", answer: "We offer pilot programs so you can experience our quality, speed, and collaboration model before committing to a longer engagement. Most teams see value within the first two weeks." },
        ]}
      />

      <CTASection
        title={<>Start scaling your <span className="heading-italic">creative today</span></>}
        description="Get a custom quote and see why 500+ companies chose The North over agencies, freelancers, and hiring."
        variant="split"
      />
    </Layout>
  );
}
