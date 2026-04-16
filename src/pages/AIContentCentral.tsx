import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import BlogGrid from "@/components/sections/BlogGrid";
import CTASection from "@/components/sections/CTASection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const aiResources = [
  { title: "The No-Hype AI Report", description: "A practical look at how AI is actually being used in creative teams today.", href: "/reports/the-no-hype-ai-report", category: "Report" },
  { title: "AI for Creatives Guide", description: "How creative teams can leverage AI tools effectively without losing the human touch.", href: "/guides/ai-for-creatives", category: "Guide" },
  { title: "Practical Guide to AI for Creative Teams", description: "Live webinar recording on AI adoption in creative workflows.", href: "/events/unfiltered-february-webinar-practical-guide-ai", category: "Webinar" },
  { title: "AI-Powered Briefing", description: "How smart brief creation captures requirements accurately the first time.", href: "/our-technology", category: "Feature" },
  { title: "BrandBrain AI", description: "AI brand intelligence that keeps every creative deliverable perfectly on-brand.", href: "/brandbrain", category: "Product" },
  { title: "AI Excellence at The North", description: "How The North leads with AI in creative production.", href: "/ai-excellence", category: "Company" },
];

export default function AIContentCentral() {
  const aiPosts = blogPosts.filter(p => p.category === "AI" || p.title.toLowerCase().includes("ai"));

  return (
    <Layout title="AI Content Central" description="Everything you need to know about AI in creative production. Guides, reports, tools, and insights.">
      <HeroSection
        tagline="AI Content Central"
        title={<>Your hub for <span className="heading-italic">AI in creative</span></>}
        description="Explore guides, reports, tools, and insights on how AI is transforming creative production. From practical how-tos to strategic frameworks."
        variant="centered"
        ctaText="Explore resources"
      />

      <ImageTextSplit
        tagline="The AI advantage"
        title={<>AI doesn't replace creatives. It <span className="heading-italic">unleashes</span> them.</>}
        description="At The North, we combine the most advanced AI tools with world-class human talent. The result: better creative, faster delivery, and lower costs. Our AI-powered workflows are built into every project, from brief to final asset."
        bullets={[
          "AI-accelerated ideation generates 10x more concepts",
          "Automated asset variations save days of production time",
          "Smart quality checks ensure brand consistency at scale",
          "Human creative directors guide every AI-assisted output",
        ]}
      />

      <section id="resources" className="section-padding py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary/80 mb-4 block">Resources</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              AI resources for <span className="heading-italic">creative teams</span>
            </h2>
            <p className="text-lg text-muted-foreground">Curated reports, guides, and tools to help you navigate AI in creative production.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiResources.map((r) => (
              <Link key={r.href} to={r.href} className="card-elevated p-8 hover:border-primary/20 transition-all duration-300 group block">
                <span className="text-xs font-medium text-primary mb-3 block">{r.category}</span>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        tagline="AI capabilities"
        title={<>AI across every <span className="heading-italic">creative workflow</span></>}
        description="From ideation to delivery, AI enhances every step of the creative process."
        features={[
          { title: "AI Briefing", description: "Smart brief creation with AI-powered suggestions that capture requirements accurately." },
          { title: "AI Concepting", description: "Generate and explore more creative directions faster with AI-assisted ideation." },
          { title: "AI Production", description: "Automated asset generation, variation creation, and production workflows." },
          { title: "AI Review", description: "Automated quality checks, brand consistency validation, and optimization suggestions." },
          { title: "AI Personalization", description: "Create personalized creative variations at scale for different audiences and markets." },
          { title: "AI Analytics", description: "Performance predictions and creative optimization powered by machine learning." },
        ]}
      />

      {aiPosts.length > 0 && (
        <BlogGrid posts={aiPosts.slice(0, 3)} title="Latest AI insights" />
      )}

      <CTASection
        title={<>Ready to supercharge your creative with <span className="heading-italic">AI?</span></>}
        description="See how The North's AI-powered workflows can transform your creative output."
      />
    </Layout>
  );
}
