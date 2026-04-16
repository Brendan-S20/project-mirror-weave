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
  "Access to 20+ creative specialties on demand",
  "Smart creative workflows and tools",
  "Real-time project management platform",
  "Unlimited users and asset storage",
  "Integrated budget and project tracking",
  "Structured briefing and quality assurance",
  "Rollover of unused monthly budget",
  "Option to add short-term capacity bursts",
  "Creative reporting and insights",
];

const planBenefits = [
  { icon: Users, title: "Dedicated team", desc: "Experienced creatives who learn your brand and work as an extension of your team." },
  { icon: Brain, title: "Smart workflows", desc: "Streamlined production processes that reduce turnaround time significantly." },
  { icon: Zap, title: "Faster delivery", desc: "Most projects delivered faster than traditional agency timelines." },
  { icon: Shield, title: "Secure and reliable", desc: "Enterprise-grade security with structured access controls and processes." },
  { icon: BarChart3, title: "Creative insights", desc: "Reporting and tracking tied to your creative output and goals." },
  { icon: Layers, title: "Multi-discipline", desc: "One subscription covers every creative discipline you need." },
];

export default function Pricing() {
  const { ref: planRef, inView: planInView } = useInView();
  const { ref: benefitsRef, inView: benefitsInView } = useInView();
  const { openModal } = useCTAModal();

  return (
    <Layout title="Pricing" description="Predictable subscription pricing for scalable creative production.">
      <HeroSection
        tagline="Pricing"
        title={<>Take creative from backlog to brand-building, <span className="heading-italic">faster</span></>}
        description="One subscription replaces scattered freelancers, slow agencies, and hiring overhead. Predictable pricing and creative that actually moves the needle."
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

      <ComparisonSection />

      <CTASection
        title={<>Your creative budget deserves <span className="heading-italic">better results</span></>}
        description="See how The North delivers consistent, high-quality creative while reducing complexity."
        variant="banner"
      />

      <TestimonialSection variant="featured" />

      <FeatureSection
        tagline="How it works"
        title={<>From brief to brilliant <span className="heading-italic">in three steps</span></>}
        variant="list"
        features={[
          { title: "Scope your needs", description: "Work with our team to define your creative volume, specialties needed, and team structure. We build a plan that matches your real workload." },
          { title: "Meet your dedicated team", description: "Get matched with experienced creatives who learn your brand, guidelines, and workflows. They operate as a true extension of your in-house team." },
          { title: "Ship creative, continuously", description: "Submit projects, track progress in real-time, and receive polished deliverables. Scale up during launches, scale back when things are calm." },
        ]}
      />

      <FAQSection
        title={<>Got questions? <span className="heading-italic">We have answers.</span></>}
        description="Everything you need to know about working with The North."
        items={[
          { question: "How do I know what budget is right for me?", answer: "We'll work with you to determine the right level of investment based on your team's needs, output expectations, and growth goals. Every engagement is tailored to ensure you're getting the most value from your creative capacity." },
          { question: "What is the minimum commitment?", answer: "The North is built for ongoing creative partnerships. Most clients work with us on a monthly basis to maintain consistency, efficiency, and long-term performance across their creative output." },
          { question: "How does onboarding work?", answer: "Once you get started, we guide you through a structured onboarding process to understand your brand, workflows, and priorities. This allows our team to move quickly and deliver high-quality work with minimal back-and-forth." },
          { question: "What billing options do you offer?", answer: "We offer flexible billing options depending on your engagement, including monthly subscriptions and custom invoicing for larger or enterprise-level partnerships." },
          { question: "What happens if I don't use all of my monthly capacity?", answer: "We understand that needs can fluctuate. Unused capacity can be managed flexibly depending on your plan, ensuring you still get full value from your partnership with The North." },
          { question: "How much does a typical project cost?", answer: "Project scope, complexity, and turnaround time all influence pricing. Rather than fixed rates, we focus on delivering scalable creative support that adapts to your needs and grows with your business." },
          { question: "What makes The North different from agencies or freelancers?", answer: "The North combines the flexibility of freelancers, the structure of an in-house team, and the scalability of an agency. You get consistent quality, faster turnaround, and a team that understands your brand deeply." },
          { question: "Can you support large or enterprise teams?", answer: "Yes. The North is designed to support growing and enterprise-level teams that require consistent, high-volume creative output across multiple channels and markets." },
          { question: "How quickly can projects be completed?", answer: "Turnaround times depend on scope, but our systems are built for speed. Most deliverables are completed significantly faster than traditional agency timelines." },
          { question: "Do you use AI in your creative process?", answer: "We use advanced tools to improve speed, consistency, and output quality, while maintaining full creative oversight from our team. The goal is better results, not automation for its own sake." },
        ]}
      />

      <CTASection
        title={<>Start scaling your <span className="heading-italic">creative today</span></>}
        description="Get a custom quote and see why teams choose The North over agencies, freelancers, and hiring."
        variant="split"
      />
    </Layout>
  );
}
