import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import FeatureSection from "@/components/sections/FeatureSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import StatsSection from "@/components/sections/StatsSection";
import { Link } from "react-router-dom";

const includedFeatures = [
  "Global team & coverage",
  "Full creative, strategy and production services",
  "On-demand specialists",
  "Access to AI-expert creatives",
  "Creative project management platform",
  "Unlimited users & asset storage",
  "Integrated budget & project tools",
  "AI-powered briefing",
  "Rollover of unused budget",
  "Option to add short-term spend",
  "Creative analytics subscription",
];

export default function Pricing() {
  return (
    <Layout title="Pricing" description="Superside offers subscription-based creative services at scale with proven ROI.">
      <HeroSection
        tagline="Pricing model"
        title={<>Take creative from backlog to brand-building <span className="heading-italic">3x faster.</span></>}
        description="Superside offers subscription-based creative services at scale with proven ROI."
        ctaText="Get started"
        variant="centered"
      />

      <FeatureSection
        features={[
          { title: "Clear overhead", description: "One transparent subscription replaces scattered freelancers, salaries, and unexpected costs." },
          { title: "Free up bandwidth", description: "Offload execution so your team can focus on what's next, not what's overdue." },
          { title: "Scale output + growth", description: "Drive more campaigns, channels, and experiments without scaling internal headcount." },
        ]}
        title={<>Predictable pricing, <span className="heading-italic">predictable results</span></>}
        columns={3}
      />

      <LogoCloud />

      {/* Plans Section */}
      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              One strategic partner. <span className="heading-italic">Every department covered.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end enterprise creative with scale and speed, for true cross-functional support.
            </p>
          </div>

          <div className="card-elevated p-10 lg:p-14 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Included in <span className="heading-italic">all plans:</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-3 mb-10">
              {includedFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <Link to="/pricing" className="btn-lime">Book a demo</Link>
          </div>
        </div>
      </section>

      <StatsSection
        title="Proven results"
        stats={[
          { value: "471%", label: "ROI over 3 years" },
          { value: "70%", label: "Reduction in design costs" },
          { value: "3x", label: "Faster time to market" },
          { value: "50%", label: "Less creative overhead" },
        ]}
        variant="cards"
      />

      <TestimonialSection />

      <FAQSection
        items={[
          { question: "How does Superside's pricing work?", answer: "Superside operates on a subscription model with predictable monthly pricing. Your subscription gives you access to a dedicated creative team, project management, and our full suite of creative services. Pricing scales based on your volume needs." },
          { question: "What's included in my subscription?", answer: "Every plan includes access to top global creative talent, a dedicated project manager, our creative project management platform, unlimited asset storage, AI-powered briefing tools, and creative analytics." },
          { question: "Can I scale up or down?", answer: "Yes. Superside is designed to flex with your needs. You can increase your creative capacity during peak periods and scale back when things quiet down, all within your subscription." },
          { question: "How fast is delivery?", answer: "Most projects are delivered 3x faster than traditional agencies. Turnaround times depend on project complexity, but our AI-powered workflows and dedicated teams ensure consistently fast delivery." },
          { question: "Is there a minimum commitment?", answer: "Contact our team to discuss the best plan for your needs. We offer flexible terms designed to fit your creative demands." },
          { question: "Do you offer a trial or pilot?", answer: "We offer pilot programs so you can experience the quality and speed firsthand before committing to a longer engagement." },
        ]}
      />

      <CTASection
        title={<>Start scaling your <span className="heading-italic">creative today</span></>}
        description="Get started with a demo to see how Superside can transform your creative output."
      />
    </Layout>
  );
}
