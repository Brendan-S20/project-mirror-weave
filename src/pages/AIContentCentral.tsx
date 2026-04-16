import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import BlogGrid from "@/components/sections/BlogGrid";
import CTASection from "@/components/sections/CTASection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const aiResources = [
  { title: "The Practical AI Report", description: "A grounded look at how advanced tools are actually being used in creative teams today.", href: "/reports/the-practical-ai-report", category: "Report" },
  { title: "Smart Tools for Creatives Guide", description: "How creative teams can leverage advanced tools effectively without losing the human touch.", href: "/guides/ai-for-creatives", category: "Guide" },
  { title: "Smart Tools for Creative Teams", description: "On-demand session on adopting advanced tools in creative workflows.", href: "/events/smart-tools-for-creative-teams", category: "Session" },
  { title: "Smart Briefing", description: "How structured brief creation captures requirements accurately the first time.", href: "/our-technology", category: "Feature" },
  { title: "BrandBrain", description: "Brand intelligence that keeps every creative deliverable perfectly on-brand.", href: "/brandbrain", category: "Product" },
  { title: "AI Excellence at The North", description: "How The North uses advanced tools in creative production.", href: "/ai-excellence", category: "Company" },
];

export default function AIContentCentral() {
  const aiPosts = blogPosts.filter(p => p.category === "AI" || p.title.toLowerCase().includes("ai"));

  return (
    <Layout title="AI Content Central" description="Everything you need to know about smart tools in creative production. Guides, reports, and insights.">
      <HeroSection
        tagline="AI Content Central"
        title={<>Your hub for <span className="heading-italic">smarter creative</span></>}
        description="Explore guides, reports, and insights on how advanced tools are transforming creative production. From practical how-tos to strategic frameworks."
        variant="centered"
        ctaText="Explore resources"
      />

      <ImageTextSplit
        tagline="The technology advantage"
        title={<>Technology does not replace creatives. It <span className="heading-italic">unleashes</span> them.</>}
        description="At The North, we combine advanced tools with talented human creatives. The result: better creative, faster delivery, and lower costs. Smart workflows are built into every project, from brief to final asset."
        imageSrc="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
        imageAlt="Smart creative tools in action"
        bullets={[
          "Accelerated ideation generates more concepts faster",
          "Automated asset variations save days of production time",
          "Smart quality checks ensure brand consistency at scale",
          "Human creative directors guide every output",
        ]}
      />

      <section id="resources" className="section-padding py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary/80 mb-4 block">Resources</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Resources for <span className="heading-italic">creative teams</span>
            </h2>
            <p className="text-lg text-muted-foreground">Curated reports, guides, and tools to help you navigate smarter creative production.</p>
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
        tagline="Smart workflows"
        title={<>Advanced tools across every <span className="heading-italic">creative workflow</span></>}
        description="From ideation to delivery, smart tools enhance every step of the creative process."
        features={[
          { title: "Smart Briefing", description: "Structured brief creation with intelligent suggestions that capture requirements accurately." },
          { title: "Rapid Concepting", description: "Generate and explore more creative directions faster with accelerated ideation." },
          { title: "Streamlined Production", description: "Efficient asset generation, variation creation, and production workflows." },
          { title: "Automated Review", description: "Quality checks, brand consistency validation, and optimization suggestions." },
          { title: "Personalization at Scale", description: "Create personalized creative variations for different audiences and markets." },
          { title: "Creative Analytics", description: "Performance insights and creative optimization powered by data." },
        ]}
      />

      {aiPosts.length > 0 && (
        <BlogGrid posts={aiPosts.slice(0, 3)} title="Latest insights" />
      )}

      <CTASection
        title={<>Ready to supercharge your creative with <span className="heading-italic">smart tools?</span></>}
        description="See how The North's streamlined workflows can transform your creative output."
      />
    </Layout>
  );
}
