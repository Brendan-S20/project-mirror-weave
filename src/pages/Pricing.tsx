import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import FeatureSection from "@/components/sections/FeatureSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Layers, Repeat, Briefcase, Users, Shield, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCTAModal } from "@/contexts/CTAContext";

const engagementModels = [
  {
    icon: Briefcase,
    name: "Project",
    summary: "Defined scope, clear deliverable.",
    description: "Best for one-off systems builds, audits, or focused implementations with a fixed end state.",
    examples: ["CRM implementation", "Funnel rebuild", "Architecture audit", "Internal tool MVP"],
    pricing: "Fixed-fee, scoped on a per-project basis.",
  },
  {
    icon: Repeat,
    name: "Retainer",
    summary: "Ongoing capacity, monthly engagement.",
    description: "Best for teams that need a continuous systems, automation, and creative partner across multiple workstreams.",
    examples: ["Always-on automation team", "Ongoing CRO + funnel program", "Continuous ad creative", "Fractional ops support"],
    pricing: "Monthly retainer sized to your roadmap.",
  },
  {
    icon: Layers,
    name: "Hybrid",
    summary: "Project + retainer, in one engagement.",
    description: "Build a system as a project, then transition into an ongoing retainer to operate, optimize, and extend it.",
    examples: ["Website build → ongoing CRO", "CRM build → ongoing ops", "Architecture → fractional CTO"],
    pricing: "Combined project fee + reduced ongoing retainer.",
  },
];

const includedFeatures = [
  "Senior strategist and dedicated project lead",
  "Cross-functional team across systems, automation, creative, and IT",
  "Architecture, scope, and roadmap before implementation",
  "Documented systems, runbooks, and handover",
  "Integrated with your CRM, stack, and warehouse",
  "Weekly working sessions and async updates",
  "Performance reporting tied to business KPIs",
  "Post-launch support window included on every build",
];

const planBenefits = [
  { icon: Users, title: "One accountable team", desc: "Strategy, design, engineering, and ops in a single team. No vendor pile-up." },
  { icon: Layers, title: "Systems, not deliverables", desc: "Every engagement leaves a working, documented system your team can run." },
  { icon: Shield, title: "Clear scope and price", desc: "Fixed-fee projects or transparent retainers. No surprise hourly invoices." },
  { icon: BarChart3, title: "Tied to outcomes", desc: "Reporting connected to revenue, cost, or operational KPIs from day one." },
];

export default function Pricing() {
  const { ref: planRef, inView: planInView } = useInView();
  const { ref: benefitsRef, inView: benefitsInView } = useInView();
  const { ref: modelRef, inView: modelInView } = useInView();
  const { openModal } = useCTAModal();

  return (
    <Layout title="Pricing" description="Project, retainer, and hybrid engagement models for systems, automation, creative, and IT work.">
      <HeroSection
        tagline="Pricing"
        title={<>Engagement models built around <span className="heading-italic">how you actually work</span></>}
        description="Project, retainer, or hybrid. Every engagement is scoped against the system we're building, not the hours we'll log."
        variant="centered"
      />

      <LogoCloud />

      <section className="section-padding py-20 lg:py-28 relative" ref={modelRef}>
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="badge-pill mb-4">Engagement models</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4">Three ways to <span className="heading-italic">work with us</span></h2>
            <p className="text-lg text-muted-foreground mt-5">Most clients start with a project and move into a retainer once the first system is live.</p>
          </div>

          <div className={`grid md:grid-cols-3 gap-5 lg:gap-6 ${modelInView ? "stagger-children" : ""}`}>
            {engagementModels.map((m, i) => (
              <div key={m.name} className={`card-elevated-hover p-8 lg:p-9 group flex flex-col ${modelInView ? "animate-fade-up" : "opacity-0"}`}>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <m.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{m.name}</h3>
                <p className="text-sm font-medium text-primary/80 mb-4">{m.summary}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{m.description}</p>
                <div className="border-t border-border/20 pt-5 mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-3">Examples</p>
                  <ul className="space-y-1.5 mb-5">
                    {m.examples.map((e) => (
                      <li key={e} className="flex items-start gap-2 text-sm text-foreground/75">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground italic">{m.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 lg:py-28 relative" ref={benefitsRef}>
        <div className="absolute inset-0 bg-[hsl(var(--surface-subtle))]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            <div className="lg:w-2/5 shrink-0">
              <span className="badge-pill mb-6">Why it works</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 leading-tight">
                Pricing anchored to <span className="heading-italic">outcomes</span>, not hours.
              </h2>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                We price every engagement against the system we're building and the outcome it drives. Not a timesheet, not a per-asset fee.
              </p>
              <button onClick={openModal} className="btn-lime mt-8 group">
                Get a custom scope
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className={`lg:w-3/5 grid sm:grid-cols-2 gap-5 ${benefitsInView ? "stagger-children" : ""}`}>
              {planBenefits.map((b, i) => (
                <div key={i} className={`card-elevated-hover p-6 lg:p-7 group ${benefitsInView ? "animate-fade-up" : "opacity-0"}`}>
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
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`card-premium p-10 lg:p-14 ${planInView ? "animate-fade-up" : "opacity-0"}`}>
              <div className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-bold px-3 py-1 mb-6">
                Included in every engagement
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                What you always get with <span className="heading-italic">The North</span>
              </h3>
              <p className="text-muted-foreground mb-8">No matter which engagement model you choose, this is the standard.</p>
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

            <div className={`${planInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                How a typical engagement <span className="heading-italic">gets priced</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We start with a short discovery call to understand the system and the outcome. Then we send a one-page scope with a fixed price, timeline, and team.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Discovery call (free): 30–45 minutes",
                  "Written scope and price within 3 business days",
                  "Most projects start within 2 weeks of scope sign-off",
                  "Retainers reviewed quarterly against outcomes",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openModal} className="btn-lime-lg group">
                  Start a Project
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
        title={<>Get a clear scope and <span className="heading-italic">a clear price</span></>}
        description="One short call. Written scope back within three business days. No long sales cycle."
        variant="banner"
      />

      <TestimonialSection variant="featured" />

      <FAQSection
        title={<>Pricing <span className="heading-italic">questions</span></>}
        description="The most common things operators ask before starting an engagement."
        items={[
          { question: "Do you publish fixed prices?", answer: "Pricing is scoped against the system we're building, so we don't publish flat rates. Most operators get a written scope and price back within three business days of an intro call." },
          { question: "What's the minimum engagement size?", answer: "Most projects start in the low five-figure range for focused builds and scale up from there. Retainers are sized to the roadmap, not a flat tier." },
          { question: "Can we start small and expand?", answer: "Yes. Most clients start with a single project (a CRM build, a funnel rebuild, an audit), then move to a hybrid or retainer once the first system is live." },
          { question: "How does a retainer work?", answer: "A monthly retainer gives you a dedicated team across systems, automation, creative, and IT for the agreed scope. Reviewed quarterly against outcomes, not hours logged." },
          { question: "Do you do hourly work?", answer: "We don't bill hourly. Every engagement is fixed-fee or fixed-monthly so you know exactly what you're paying for and what the system you're getting looks like." },
          { question: "What happens after a project goes live?", answer: "Every project includes a post-launch support window. Most clients then transition into a lightweight retainer to operate and extend the system." },
          { question: "Do you sign NDAs and security agreements?", answer: "Yes. We routinely sign NDAs, MSAs, DPAs, and security questionnaires. Enterprise clients get a structured procurement and security review." },
          { question: "How is this different from an agency or freelancer?", answer: "We deliver complete systems with a single accountable team. Agencies typically deliver assets; freelancers cover one discipline. We cover strategy, build, and ongoing operation." },
        ]}
      />

      <CTASection
        title={<>Ready to scope a <span className="heading-italic">project?</span></>}
        description="Tell us where the bottleneck is. We'll come back with a plan."
        variant="split"
      />
    </Layout>
  );
}
