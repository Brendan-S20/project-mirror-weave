import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import FeatureSection from "@/components/sections/FeatureSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import StatsSection from "@/components/sections/StatsSection";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

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

export default function Pricing() {
  return (
    <Layout title="Pricing" description="Predictable subscription pricing for enterprise creative at scale. Proven 471% ROI.">
      <HeroSection
        tagline="Pricing"
        title={<>Creative from backlog to brand-building, <span className="heading-italic">3x faster</span></>}
        description="One subscription replaces scattered freelancers, slow agencies, and hiring overhead. Predictable pricing, proven ROI, and creative that actually moves the needle."
        ctaText="Get a custom quote"
        variant="centered"
      />

      <FeatureSection
        features={[
          { title: "Eliminate overhead", description: "One transparent subscription replaces salaries, benefits, freelancer invoices, and agency retainers. Know exactly what you're spending every month." },
          { title: "Free up your team", description: "Offload production so your in-house creatives focus on strategy, not resizing banner ads. Your best people should do their best work." },
          { title: "Scale without hiring", description: "Launch more campaigns, enter new channels, and test faster without posting a single job listing or waiting on recruiter timelines." },
        ]}
        title={<>Predictable pricing. <span className="heading-italic">Predictable results.</span></>}
        columns={3}
      />

      <LogoCloud />

      {/* Plans Section */}
      <section className="section-padding py-24 lg:py-32 relative">
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="badge-pill mb-6">What's included</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-5">
              One partner. <span className="heading-italic">Every creative need covered.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end creative operations with scale, speed, and strategic depth. No hidden costs, no surprise invoices.
            </p>
          </div>

          <div className="card-premium p-10 lg:p-16 max-w-3xl mx-auto relative">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Everything in <span className="heading-italic">your subscription</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {includedFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm text-foreground/80">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/pricing" className="btn-lime-lg">Get a custom quote</Link>
              <span className="text-sm text-muted-foreground">Custom pricing based on your creative volume</span>
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

      <TestimonialSection variant="featured" />

      <FAQSection
        items={[
          { question: "How does Superside's pricing work?", answer: "Superside operates on a subscription model with predictable monthly pricing. Your subscription includes a dedicated creative team, project management, our full platform, and access to 100+ creative specialties. Pricing scales based on your volume." },
          { question: "What's included in my subscription?", answer: "Everything you need: dedicated creatives, a project manager, unlimited users, asset storage, AI-powered briefing and QA tools, creative analytics, and the ability to roll over unused budget month to month." },
          { question: "Can I scale up or down?", answer: "Yes. Superside is built to flex. Increase capacity during product launches or peak campaign periods, then scale back when things slow down. You can also add short-term burst capacity for one-off projects." },
          { question: "How fast is delivery?", answer: "Most projects deliver 3x faster than traditional agencies. Turnaround depends on complexity, but our AI-powered workflows and always-on teams ensure consistently fast execution." },
          { question: "Is there a minimum commitment?", answer: "We offer flexible engagement terms designed to fit your needs. Contact our team to discuss the best option for your organization and creative volume." },
          { question: "Do you offer a trial or pilot?", answer: "We offer pilot programs so you can experience our quality, speed, and collaboration model before committing to a longer engagement. Most teams see value within the first two weeks." },
        ]}
      />

      <CTASection
        title={<>Start scaling your <span className="heading-italic">creative today</span></>}
        description="Get a custom quote and see why 500+ companies chose Superside over agencies, freelancers, and hiring."
      />
    </Layout>
  );
}
