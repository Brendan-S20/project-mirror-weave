import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import StatsSection from "@/components/sections/StatsSection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const comparisonItems = [
  { feature: "Dedicated creative team", superside: true, competitor: false },
  { feature: "AI-powered workflows", superside: true, competitor: false },
  { feature: "Enterprise-grade scalability", superside: true, competitor: false },
  { feature: "24/7 global coverage", superside: true, competitor: false },
  { feature: "Predictable subscription pricing", superside: true, competitor: false },
  { feature: "100+ creative specialties", superside: true, competitor: "Limited" as string | boolean },
  { feature: "Project management included", superside: true, competitor: "Extra cost" as string | boolean },
  { feature: "Quality guarantee & revisions", superside: true, competitor: "Varies" as string | boolean },
  { feature: "SOC 2 Type II compliance", superside: true, competitor: false },
  { feature: "Brand-trained AI output", superside: true, competitor: false },
];

interface ComparePageProps { competitorName: string; competitorSlug: string; headline: string; description: string; differentiators: string[]; }

function ComparePage({ competitorName, headline, description, differentiators }: ComparePageProps) {
  return (
    <Layout title={`Superside vs ${competitorName}`} description={description}>
      <HeroSection
        tagline={`Superside vs ${competitorName}`}
        title={<>{headline}</>}
        description={description}
        variant="centered"
      />

      <StatsSection
        stats={[
          { value: "471%", label: "Proven ROI (Forrester)" },
          { value: "3x", label: "Faster delivery" },
          { value: "500+", label: "Enterprise clients" },
          { value: "70%", label: "Lower costs" },
        ]}
        variant="inline"
      />

      <ComparisonSection
        title={<>How Superside <span className="heading-italic">compares</span></>}
        competitorName={competitorName}
        items={comparisonItems}
      />

      <ImageTextSplit
        tagline="The difference"
        title={<>Why teams <span className="heading-italic">switch to Superside</span></>}
        description={`Teams switch from ${competitorName.toLowerCase()} to Superside because they need more than basic creative execution. They need a partner that scales, delivers consistently, and drives measurable results.`}
        bullets={differentiators}
      />

      <TestimonialSection variant="single" />

      <CTASection
        title={<>See why teams choose <span className="heading-italic">Superside</span></>}
        description={`Book a demo to compare Superside vs ${competitorName.toLowerCase()} for your team.`}
        variant="banner"
      />
    </Layout>
  );
}

export function CompareIndex() {
  const comparisons = [
    { name: "Agencies", href: "/compare-superside-vs-agency", desc: "Better quality, faster delivery, 70% lower cost. Without the overhead, the long timelines, or the guesswork." },
    { name: "Freelancers", href: "/compare-superside-vs-freelancers", desc: "All the flexibility, none of the inconsistency. One team that scales with you." },
    { name: "In-House Teams", href: "/compare-superside-vs-inhouse", desc: "Expand your creative capacity without expanding your headcount or HR burden." },
    { name: "DesignPickle", href: "/compare-superside-vs-designpickle", desc: "Enterprise-grade creative production vs. basic graphic design support." },
    { name: "Designity", href: "/compare-superside-vs-designity", desc: "A dedicated team vs. a marketplace. Consistent quality vs. variable results." },
  ];

  return (
    <Layout title="Compare Superside" description="See how Superside compares to agencies, freelancers, and other creative solutions.">
      <HeroSection
        tagline="Compare"
        title={<>See how Superside <span className="heading-italic">stacks up</span></>}
        description="Whether you're using agencies, managing freelancers, or trying to scale in-house, see why 500+ enterprise teams switched to Superside."
        variant="centered"
      />
      <section className="section-padding py-16 lg:py-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          {comparisons.map((c) => (
            <Link key={c.href} to={c.href} className="card-elevated-hover p-8 block group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">vs. {c.name}</h3>
                <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <CTASection title={<>Ready to make the <span className="heading-italic">switch?</span></>} variant="banner" />
    </Layout>
  );
}

export function CompareVsAgency() {
  return <ComparePage competitorName="Agencies" competitorSlug="agency" headline={<>Why teams are <span className="heading-italic">leaving agencies</span></> as any} description="Better creative. Faster delivery. 70% lower cost. No more bloated retainers, slow timelines, or junior talent doing senior work." differentiators={["No account management overhead eating your budget", "AI-powered workflows deliver 3x faster than agency timelines", "Top 1% global talent, not junior staff learning on your dime", "Predictable pricing instead of scope creep and surprise invoices"]} />;
}
export function CompareVsFreelancers() {
  return <ComparePage competitorName="Freelancers" competitorSlug="freelancers" headline={<>More reliable than <span className="heading-italic">freelancers</span></> as any} description="Get the flexibility you love about freelancers with the reliability, quality control, and scale of an enterprise creative team." differentiators={["Dedicated team that learns your brand vs. re-onboarding every project", "Built-in QA and review processes vs. hoping for the best", "Scale to 100+ specialties instantly vs. sourcing individual contractors", "Project management included vs. managing freelancers yourself"]} />;
}
export function CompareVsInhouse() {
  return <ComparePage competitorName="In-House Teams" competitorSlug="inhouse" headline={<>Scale without <span className="heading-italic">hiring</span></> as any} description="Augment your team with on-demand creative capacity. No job postings, no interviews, no benefits overhead, no ramp-up time." differentiators={["Go from brief to delivery in days vs. months to hire and onboard", "Access 100+ specialties vs. limited in-house skill sets", "Scale up or down instantly vs. headcount planning cycles", "Focus your team on strategy vs. drowning in production tasks"]} />;
}
export function CompareVsDesignPickle() {
  return <ComparePage competitorName="DesignPickle" competitorSlug="designpickle" headline={<>Enterprise creative vs. <span className="heading-italic">basic design</span></> as any} description="Go beyond basic graphic design. Superside delivers full-service creative production with AI-powered workflows, dedicated teams, and enterprise-grade security." differentiators={["Full creative production vs. basic graphic design only", "Dedicated senior team vs. rotational designer assignments", "AI-powered workflows for enterprise speed and scale", "SOC 2 compliance and enterprise security standards"]} />;
}
export function CompareVsDesignity() {
  return <ComparePage competitorName="Designity" competitorSlug="designity" headline={<>Dedicated team vs. <span className="heading-italic">marketplace</span></> as any} description="Get a dedicated team that masters your brand instead of marketplace matching. Consistent quality, not variable results." differentiators={["Dedicated team that grows with your brand vs. marketplace matching", "Enterprise-grade QA processes vs. variable output quality", "AI-powered production workflows vs. manual processes", "500+ enterprise clients trust our model vs. marketplace uncertainty"]} />;
}
