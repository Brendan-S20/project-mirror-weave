import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import LogoCloud from "@/components/sections/LogoCloud";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import StatsSection from "@/components/sections/StatsSection";
import { getServiceBySlug, services } from "@/data/services";
import ServiceGrid from "@/components/sections/ServiceGrid";
import { ArrowRight, Check, AlertTriangle, Target, Users } from "lucide-react";

// Unique hero + split imagery for every service. Sourced from Unsplash with topic-specific photos.
const serviceImages: Record<string, { hero: string; split: string }> = {
  // Growth Infrastructure
  "website-development": {
    hero: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
  },
  "funnels-landing-pages": {
    hero: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  "conversion-systems": {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },

  // Automation & Systems
  "crm-setup": {
    hero: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  "workflow-automation": {
    hero: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&q=80",
  },
  "business-process-automation": {
    hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
  },
  "api-integrations": {
    hero: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  },

  // Creative & Content
  "ads": {
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
  },
  "branding": {
    hero: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&q=80",
  },
  "media-production": {
    hero: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
  },

  // Technology & IT
  "system-architecture": {
    hero: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  },
  "infrastructure-cloud": {
    hero: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
  },
  "managed-it-services": {
    hero: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
  },
  "internal-tools": {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  "scaling-operations": {
    hero: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
    split: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1200&q=80",
  },
};

// Per-service SEO meta + structured Problem / Solves / Who-for content.
const serviceContent: Record<string, {
  metaTitle: string;
  metaDescription: string;
  problem: string;
  solves: string;
  whoFor: string[];
}> = {
  "website-development": {
    metaTitle: "Website Development Services for B2B and SaaS Growth",
    metaDescription: "Production-grade websites built on modern stacks. Wired to your CRM, analytics, and marketing tools from day one.",
    problem: "Most marketing sites are slow, hard to update, and disconnected from the systems that generate revenue.",
    solves: "Replaces fragile WordPress and templated builds with a fast, reliable site your team ships from without engineering tickets.",
    whoFor: ["B2B and SaaS companies relaunching their site", "Marketing teams stuck on legacy CMS platforms", "Founders launching new positioning or products"],
  },
  "funnels-landing-pages": {
    metaTitle: "Landing Page & Funnel Development for Paid Acquisition",
    metaDescription: "High-intent funnels and landing page systems built for paid and organic traffic. Lower CPL, faster launches, clean attribution.",
    problem: "Most paid ads land on generic homepages or product pages that destroy conversion rate and inflate CAC.",
    solves: "Replaces ad-hoc one-off pages with a high-converting landing page system marketing can ship from weekly.",
    whoFor: ["Paid acquisition teams scaling spend", "B2B and DTC brands running always-on campaigns", "Founders launching new offers"],
  },
  "conversion-systems": {
    metaTitle: "Conversion Optimization & CRO Services",
    metaDescription: "End-to-end conversion infrastructure: audit, instrument, and optimize from first touch to closed revenue.",
    problem: "Conversion problems span pages, funnels, tracking, and lifecycle, so no single team sees the full picture.",
    solves: "Turns CRO from a one-off project into a continuous program that compounds revenue over time.",
    whoFor: ["CMOs and Heads of Growth", "Companies with high traffic but stagnant conversion", "Brands competing in mature paid markets"],
  },
  "crm-setup": {
    metaTitle: "CRM Implementation & Setup Services (HubSpot, Salesforce, GHL)",
    metaDescription: "Design, implement, and migrate CRMs so your data, pipelines, and reporting reflect how you actually sell.",
    problem: "Most CRMs are misconfigured: bloated properties, broken automations, and unreliable reporting.",
    solves: "Turns the CRM from a contact database into a real revenue operating system reps and leadership trust.",
    whoFor: ["B2B SaaS and services companies", "Teams scaling from founder-led to repeatable sales", "Companies migrating off spreadsheets or legacy CRMs"],
  },
  "workflow-automation": {
    metaTitle: "Workflow Automation Services | Zapier, Make, n8n",
    metaDescription: "Automations across Zapier, Make, n8n, and native APIs. Reliable handoffs with audit trails and error handling.",
    problem: "Most automation accounts grow into a tangle of fragile flows no one fully owns or understands.",
    solves: "Turns scattered no-code automations into a maintainable, monitored automation backbone.",
    whoFor: ["Ops teams running 50+ active automations", "Companies scaling from no-code into ops engineering", "Teams hitting plan limits on Zapier or Make"],
  },
  "business-process-automation": {
    metaTitle: "Business Process Automation Services for Operations Teams",
    metaDescription: "Map, redesign, and automate onboarding, billing, fulfillment, support, and reporting. Operations that scale without adding headcount.",
    problem: "Critical processes live in spreadsheets and Slack threads, depending on a few key people to push work forward.",
    solves: "Replaces ad-hoc operations with documented, automated, audit-ready processes that scale with the business.",
    whoFor: ["COOs and Heads of Operations", "Services and SaaS companies scaling client volume", "Teams preparing for due diligence or audit"],
  },
  "api-integrations": {
    metaTitle: "API Integration Services | Custom & SaaS Connectors",
    metaDescription: "Custom and SaaS API integrations between CRM, billing, product, and warehouse. Built for reliability, observability, and scale.",
    problem: "Disconnected systems force teams to copy data between tools and reconcile spreadsheets every week.",
    solves: "Connects your stack with reliable, observable integrations so data and events move automatically.",
    whoFor: ["RevOps and engineering leaders", "Companies with separate sales, support, and product tools", "Teams adopting a warehouse, CDP, or new core platform"],
  },
  "ads": {
    metaTitle: "Ad Creative Production at Scale for Paid Channels",
    metaDescription: "Performance-driven ad creative for Meta, Google, LinkedIn, and TikTok. Static, motion, and UGC built for paid scale.",
    problem: "Performance teams burn through creative faster than agencies and freelancers can produce it on-brand.",
    solves: "Provides an always-on creative pipeline tuned to the metrics each channel actually cares about.",
    whoFor: ["Performance marketing leaders", "DTC and B2C brands scaling Meta and TikTok spend", "B2B teams scaling LinkedIn and Google"],
  },
  "branding": {
    metaTitle: "Brand Identity & Brand System Design Services",
    metaDescription: "Brand strategy, identity, and design systems built for production at scale. Brand that survives a 10x in marketing volume.",
    problem: "Most brand systems break the moment marketing tries to scale production across channels and teams.",
    solves: "Delivers brand systems that hold up under real production volume, not just pitch decks.",
    whoFor: ["Founders rebranding for the next stage", "Marketing teams scaling content and ads", "Companies with multi-product or multi-region growth"],
  },
  "media-production": {
    metaTitle: "Video & Photography Production for Brand and Performance",
    metaDescription: "Brand video, product video, UGC, motion, and photography produced as an asset library, not one-off projects.",
    problem: "Most shoots over-invest in hero assets and under-invest in the variant volume marketing actually needs.",
    solves: "Maximizes the asset output of every production day across web, ads, social, and sales.",
    whoFor: ["Brands investing in video and photography", "Performance teams that need creator-style UGC", "Companies preparing for major launches"],
  },
  "system-architecture": {
    metaTitle: "Business System Architecture Services & Stack Design",
    metaDescription: "Independent system architecture, stack design, and tech roadmap services for scaling companies. Right-size your stack with a defensible architecture.",
    problem: "Most growing companies accumulate dozens of overlapping tools with no clear ownership, architecture, or roadmap.",
    solves: "Replaces accidental tech stacks with a designed, documented architecture aligned to how the business operates.",
    whoFor: ["Founders, CTOs, and COOs", "Companies past 50 employees", "Businesses preparing for due diligence or scale-up"],
  },
  "infrastructure-cloud": {
    metaTitle: "Cloud Infrastructure Management Services (AWS, GCP, Azure)",
    metaDescription: "Design, implementation, and ongoing management of cloud infrastructure across AWS, GCP, and Azure. Right-sized, secure, cost-optimized.",
    problem: "Cloud environments grow ad-hoc, becoming expensive, fragile, and difficult to secure as the company scales.",
    solves: "Replaces accidental cloud setups with intentional architecture that's reliable, secure, and cost-efficient.",
    whoFor: ["Engineering teams scaling cloud workloads", "Companies pursuing SOC 2, ISO, or HIPAA", "Businesses with $25k+ monthly cloud spend"],
  },
  "managed-it-services": {
    metaTitle: "Managed IT Services for Businesses | Full-Stack MSP",
    metaDescription: "End-to-end managed IT: networking, EDR, MDM, backup, identity, and helpdesk. Senior engineers, not a ticket mill.",
    problem: "Most growing companies operate IT reactively, with networks, devices, backups, and security held together by individual heroics.",
    solves: "Provides a senior, proactive IT department as a service — covering devices, network, security, and end-user support under one accountable team.",
    whoFor: ["Companies past 25 employees", "Hybrid and distributed teams", "Businesses pursuing SOC 2, ISO, or HIPAA"],
  },
  "internal-tools": {
    metaTitle: "Internal Tools & Admin Dashboard Development Services",
    metaDescription: "Custom internal apps, admin panels, and ops consoles built on Retool and React. Replace 20 spreadsheets with real software.",
    problem: "Engineering backlogs are full of internal tool requests that never beat customer-facing work to the top of the queue.",
    solves: "Delivers production-grade internal tools at a fraction of the cost and time of custom builds.",
    whoFor: ["Ops, support, and finance teams", "Companies blocked by long engineering backlogs", "Businesses past Series A with proprietary workflows"],
  },
  "scaling-operations": {
    metaTitle: "Operational Scaling Systems & Fractional CTO Services",
    metaDescription: "Advisory and hands-on work to prepare ops, systems, and tooling for the next stage of growth. Fractional CTO, stack rationalization, launch readiness.",
    problem: "Most companies launch new markets, products, or volume without checking whether ops and systems can absorb the load.",
    solves: "Prepares operations, systems, and tooling so the next phase of growth doesn't break the business.",
    whoFor: ["Founders, COOs, and CROs", "Companies preparing for major launches or expansions", "Businesses between full-time CTO hires"],
  },
};

const fallbackImages = {
  hero: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  split: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
};

export default function ServicePage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <Layout title="Service Not Found">
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service not found</h1>
          <p className="text-muted-foreground">The service you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }

  const images = serviceImages[slug] || fallbackImages;
  const content = serviceContent[slug];
  const related = services.filter((s) => service.relatedServices.includes(s.slug));

  return (
    <Layout
      title={content?.metaTitle || service.title}
      description={content?.metaDescription || service.description}
    >
      <HeroSection
        tagline={service.subtitle}
        title={<>{service.heroTagline}</>}
        description={service.description}
        variant="split"
      >
        <div className="aspect-[4/3] rounded-2xl bg-[hsl(var(--surface-elevated))] border border-border/30 relative overflow-hidden">
          <img
            src={images.hero}
            alt={`${service.title} — ${service.subtitle}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
        </div>
      </HeroSection>

      <LogoCloud title={`Trusted for ${service.title.toLowerCase()} by ambitious operators`} />

      {/* Problem */}
      {content && (
        <section className="section-padding py-16 lg:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="card-premium p-10 lg:p-14 border-l-4 border-l-primary/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">The problem</h2>
              </div>
              <p className="text-2xl lg:text-3xl font-semibold text-foreground leading-snug">{content.problem}</p>
            </div>
          </div>
        </section>
      )}

      <StatsSection
        stats={service.outcomes.slice(0, 4).map((o) => ({ value: "✓", label: o }))}
        variant="inline"
      />

      <FeatureSection
        title={<>Why teams choose The North for <span className="heading-italic">{service.title.toLowerCase()}</span></>}
        features={service.benefits.map((b) => ({ title: b.title, description: b.description }))}
        columns={3}
      />

      <ImageTextSplit
        tagline="What we deliver"
        title={<>Comprehensive <span className="heading-italic">{service.title.toLowerCase()}</span> coverage</>}
        description={content?.solves || `From discovery through ongoing operation, our ${service.title.toLowerCase()} team handles every layer of the system so your team focuses on outcomes.`}
        imageSrc={images.split}
        imageAlt={`${service.title} delivery`}
        bullets={service.features}
      />

      {/* Inside this service - micro-services */}
      <section className="section-padding py-16 lg:py-20 relative">
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Inside <span className="heading-italic">{service.title}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Each engagement is scoped to one of the focused offerings below. Click any to see the full delivery scope.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.microServices.map((micro) => (
              <Link
                key={micro.slug}
                to={`/${service.slug}/${micro.slug}`}
                className="card-elevated-hover p-6 group flex flex-col"
              >
                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {micro.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{micro.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Explore <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Outcomes you can <span className="heading-italic">measure</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {service.outcomes.map((o) => (
              <div key={o} className="card-elevated-hover p-6 lg:p-8">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base lg:text-lg font-medium text-foreground/90 leading-snug">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      {content && (
        <section className="section-padding py-16 lg:py-20 relative">
          <div className="absolute inset-0 gradient-mesh-section" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Who it's <span className="heading-italic">for</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {content.whoFor.map((w) => (
                <div key={w} className="p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-colors bg-[hsl(var(--surface-elevated))]">
                  <p className="text-sm lg:text-base text-foreground/85">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialSection variant="single" />

      {related.length > 0 && (
        <ServiceGrid services={related} title="Related services" variant="compact" columns={3} />
      )}

      <CTASection
        title={<>Ready to build {service.title.toLowerCase()} that <span className="heading-italic">compounds?</span></>}
        description={`Tell us about your current setup and goals. We'll come back with a clear scope for ${service.title.toLowerCase()} that fits your stage.`}
        variant="banner"
      />
    </Layout>
  );
}
