import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

const comparisonItems = [
  { feature: "Dedicated team", superside: true, competitor: false },
  { feature: "AI-powered workflows", superside: true, competitor: false },
  { feature: "Enterprise scalability", superside: true, competitor: false },
  { feature: "24/7 coverage", superside: true, competitor: false },
  { feature: "Predictable pricing", superside: true, competitor: false },
  { feature: "Multi-discipline creative", superside: true, competitor: "Limited" },
  { feature: "Project management included", superside: true, competitor: "Extra cost" },
  { feature: "Quality guarantee", superside: true, competitor: "Varies" },
];

interface ComparePageProps { competitorName: string; competitorSlug: string; headline: string; description: string; }

function ComparePage({ competitorName, headline, description }: ComparePageProps) {
  return (
    <Layout title={`Superside vs ${competitorName}`} description={description}>
      <HeroSection
        tagline={`Superside vs ${competitorName}`}
        title={<>{headline}</>}
        description={description}
        variant="centered"
      />
      <ComparisonSection
        title={<>How Superside <span className="heading-italic">compares</span></>}
        competitorName={competitorName}
        items={comparisonItems}
      />
      <TestimonialSection variant="single" />
      <CTASection title={<>See why teams switch to <span className="heading-italic">Superside</span></>} />
    </Layout>
  );
}

export function CompareIndex() {
  return (
    <Layout title="Compare Superside" description="See how Superside compares to agencies, freelancers, and in-house teams.">
      <HeroSection
        tagline="Compare"
        title={<>See how Superside <span className="heading-italic">compares</span></>}
        description="Whether you're using agencies, freelancers, or building in-house, see why 500+ companies chose Superside."
        variant="centered"
      />
      <section className="section-padding py-16 lg:py-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { name: "Agencies", href: "/compare-superside-vs-agency", desc: "Better quality, faster delivery, lower cost" },
            { name: "Freelancers", href: "/compare-superside-vs-freelancers", desc: "More reliable, scalable, and consistent" },
            { name: "In-House Teams", href: "/compare-superside-vs-inhouse", desc: "Scale without hiring overhead" },
            { name: "DesignPickle", href: "/compare-superside-vs-designpickle", desc: "Enterprise-grade vs. basic design" },
            { name: "Designity", href: "/compare-superside-vs-designity", desc: "Full-service vs. marketplace" },
          ].map((c) => (
            <a key={c.href} href={c.href} className="card-elevated p-8 hover:border-primary/30 transition-all block">
              <h3 className="text-lg font-semibold text-foreground mb-2">vs. {c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </a>
          ))}
        </div>
      </section>
      <CTASection title={<>Ready to make the <span className="heading-italic">switch?</span></>} variant="banner" />
    </Layout>
  );
}

export function CompareVsAgency() {
  return <ComparePage competitorName="Agencies" competitorSlug="agency" headline={<>Why teams are <span className="heading-italic">leaving agencies</span></> as any} description="Get better creative, faster delivery, and predictable pricing. No more agency overhead." />;
}
export function CompareVsFreelancers() {
  return <ComparePage competitorName="Freelancers" competitorSlug="freelancers" headline={<>More reliable than <span className="heading-italic">freelancers</span></> as any} description="Get the flexibility of freelancers with the reliability and quality of an enterprise creative team." />;
}
export function CompareVsInhouse() {
  return <ComparePage competitorName="In-House Teams" competitorSlug="inhouse" headline={<>Scale without <span className="heading-italic">hiring</span></> as any} description="Augment your in-house team with on-demand creative capacity that scales with your needs." />;
}
export function CompareVsDesignPickle() {
  return <ComparePage competitorName="DesignPickle" competitorSlug="designpickle" headline={<>Enterprise creative vs. <span className="heading-italic">basic design</span></> as any} description="Go beyond basic graphic design with full-service enterprise creative production." />;
}
export function CompareVsDesignity() {
  return <ComparePage competitorName="Designity" competitorSlug="designity" headline={<>Full-service vs. <span className="heading-italic">marketplace</span></> as any} description="Get a dedicated team instead of marketplace matching, with AI-powered workflows and enterprise support." />;
}
