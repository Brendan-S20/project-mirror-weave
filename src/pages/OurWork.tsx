import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import CTASection from "@/components/sections/CTASection";

const workItems = [
  { title: "Grubhub Brand Campaign", category: "Branding", client: "Grubhub" },
  { title: "Microsoft Surface Launch", category: "Ad Creative", client: "Microsoft" },
  { title: "Reddit Recap Campaign", category: "Social Media", client: "Reddit" },
  { title: "Shopify Partner Assets", category: "Design", client: "Shopify" },
  { title: "Puma Digital Campaign", category: "Ad Creative", client: "Puma" },
  { title: "Roland Product Launch", category: "Branding", client: "Roland" },
  { title: "Vimeo Brand Refresh", category: "Branding", client: "Vimeo" },
  { title: "Figma Community Assets", category: "Design", client: "Figma" },
  { title: "Amazon Prime Creatives", category: "Ad Creative", client: "Amazon" },
  { title: "HubSpot Content Series", category: "Content", client: "HubSpot" },
  { title: "Salesforce Event Branding", category: "Branding", client: "Salesforce" },
  { title: "Meta Campaign Suite", category: "Ad Creative", client: "Meta" },
];

export default function OurWork() {
  return (
    <Layout title="Our Work" description="See how the world's most ambitious brands scale their creative with Superside.">
      <HeroSection
        tagline="Our work"
        title={<>Work that <span className="heading-italic">works</span></>}
        description="See how the world's most ambitious brands scale their creative with Superside. From global campaigns to brand systems, explore what's possible."
        variant="centered"
      />

      <LogoCloud />

      <section className="section-padding py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workItems.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-xl bg-surface-elevated mb-4 overflow-hidden border border-border/30 group-hover:border-primary/30 transition-all">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-foreground/20">{item.client}</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-primary">{item.category}</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Your brand could be <span className="heading-italic">next</span></>}
        description="See what Superside can create for your team."
        variant="banner"
      />
    </Layout>
  );
}
