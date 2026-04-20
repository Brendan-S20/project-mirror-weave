import { useParams, useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import ServiceGrid from "@/components/sections/ServiceGrid";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import FeatureSection from "@/components/sections/FeatureSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { getPillar, getServicesByPillar, type Service } from "@/data/services";
import { AlertTriangle, Wrench, Sparkles, Target, Users, Check } from "lucide-react";

// Map alias paths to canonical pillar slugs
const aliasToPillar: Record<string, string> = {
  "/growth-infrastructure": "growth-infrastructure",
  "/automation-systems": "automation-systems",
  "/creative-content": "creative-content",
  "/technology-it": "technology-it",
  "/technology-it-services": "technology-it",
};

// Per-pillar SEO + content blocks
const pillarContent: Record<string, {
  metaTitle: string;
  metaDescription: string;
  problem: string;
  whatWeDo: string[];
  solves: string;
  whoFor: string[];
}> = {
  "growth-infrastructure": {
    metaTitle: "Growth Infrastructure Services | Funnels, CRO & Conversion Systems",
    metaDescription: "Build websites, funnels, and conversion systems that turn traffic into revenue. Engineered growth infrastructure for B2B and SaaS companies.",
    problem: "Most companies treat their website, funnels, and tracking as marketing assets — not as the revenue-producing infrastructure they actually are. The result is fragile pages, broken attribution, and growth that depends on heroic effort.",
    whatWeDo: [
      "Architect websites and funnels around your real revenue model",
      "Implement conversion tracking, attribution, and CRM sync end-to-end",
      "Run continuous CRO experiments tied to revenue metrics",
      "Build reusable page systems so marketing ships in days, not weeks",
    ],
    solves: "Replaces ad-hoc landing pages and broken tracking with a measurable acquisition system the whole revenue team can rely on.",
    whoFor: [
      "Series A–C SaaS and B2B companies",
      "CMOs and Heads of Growth scaling paid spend",
      "Founders launching new positioning, products, or markets",
    ],
  },
  "automation-systems": {
    metaTitle: "Business Automation Services | CRM, Workflow & Process Automation",
    metaDescription: "CRM, workflow, and integration systems that remove manual work and replace fragile spreadsheets. Audit-ready, scalable business operations.",
    problem: "Operations live in spreadsheets, Slack threads, and one-off Zaps that nobody fully owns. Manual handoffs, broken integrations, and missed follow-ups quietly cost teams thousands of hours per year.",
    whatWeDo: [
      "Implement and migrate CRMs (HubSpot, Salesforce, GoHighLevel, Pipedrive)",
      "Build automation across Zapier, Make, n8n, and native APIs",
      "Re-engineer onboarding, billing, fulfillment, and support processes",
      "Wire your stack together with reliable, monitored integrations",
    ],
    solves: "Eliminates the manual work, data sprawl, and silent failures that cap operational throughput as you scale.",
    whoFor: [
      "RevOps, ops, and finance leaders",
      "Companies running 20+ SaaS tools with no clear architecture",
      "Teams scaling past founder-led, spreadsheet-run operations",
    ],
  },
  "creative-content": {
    metaTitle: "Creative & Content Production Services for Performance Marketing",
    metaDescription: "Brand systems, ads, and media production engineered to feed your funnels and convert at scale. Always-on creative built for performance.",
    problem: "Most creative work is produced as one-off projects disconnected from the channels and metrics that actually drive revenue. Brands run out of fresh ad creative, content pipelines stall, and brand consistency erodes across surfaces.",
    whatWeDo: [
      "Build brand systems and design libraries for production at scale",
      "Produce paid ads, motion, UGC, and performance creative",
      "Run media production: brand video, product video, photography",
      "Stand up always-on content pipelines tied to acquisition and lifecycle",
    ],
    solves: "Turns creative from a bottleneck into a continuous, measurable input to your acquisition and brand programs.",
    whoFor: [
      "Performance marketing and growth teams",
      "DTC, B2B, and SaaS brands scaling paid channels",
      "Companies replacing fragmented agency and freelance work",
    ],
  },
  "technology-it": {
    metaTitle: "Technology & IT Services | Architecture, Cloud & Managed IT",
    metaDescription: "From system architecture to managed IT, we build and operate the technology backbone your business runs on. Cloud, MSP, internal tools, and operational scale.",
    problem: "Tech stacks grow ad-hoc: redundant tools, untested backups, accidental cloud architecture, and IT support that's reactive at best. Engineering ships slower, security risk piles up, and IT cost grows faster than the company.",
    whatWeDo: [
      "Design system architecture, data models, and integration patterns",
      "Build and manage cloud infrastructure on AWS, GCP, and Azure",
      "Operate managed IT: networking, EDR, MDM, backups, identity, and helpdesk",
      "Build internal tools and admin dashboards on Retool and custom React",
      "Advise on operational readiness, stack rationalization, and fractional CTO support",
    ],
    solves: "Replaces ad-hoc IT and accidental architecture with a designed, operated, and audit-ready technology backbone.",
    whoFor: [
      "Founders, CTOs, COOs, and CIOs",
      "Companies past 25 employees with growing IT and security needs",
      "Businesses pursuing SOC 2, ISO 27001, or HIPAA",
    ],
  },
};

export default function PillarPage() {
  const params = useParams<{ pillarSlug: string }>();
  const location = useLocation();
  const slug = params.pillarSlug || aliasToPillar[location.pathname] || "";
  const pillar = getPillar(slug);

  if (!pillar) {
    return (
      <Layout title="Pillar not found">
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Pillar not found</h1>
          <Link to="/services" className="text-primary">Back to all services</Link>
        </div>
      </Layout>
    );
  }

  const pillarServices = getServicesByPillar(pillar.slug as Service["pillar"]);
  const content = pillarContent[pillar.slug];

  return (
    <Layout title={content?.metaTitle || pillar.title} description={content?.metaDescription || pillar.description}>
      <HeroSection
        tagline={pillar.tagline}
        title={<>{pillar.title}</>}
        description={pillar.description}
        variant="centered"
      />

      <LogoCloud title={`Trusted by operators building ${pillar.title.toLowerCase()}`} />

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

      {/* What we do */}
      {content && (
        <section className="section-padding py-16 lg:py-20 relative">
          <div className="absolute inset-0 gradient-mesh-section" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                What we <span className="heading-italic">do</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {content.whatWeDo.map((item) => (
                <div key={item} className="flex items-start gap-3 p-5 rounded-xl border border-border/30 bg-[hsl(var(--surface-elevated))]">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm lg:text-base text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What this solves */}
      {content && (
        <section className="section-padding py-16 lg:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="card-premium p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">What this solves</h2>
              </div>
              <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed">{content.solves}</p>
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      <section className="section-padding py-16 lg:py-20 relative">
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Outcomes you can <span className="heading-italic">measure</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {pillar.outcomes.map((o) => (
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

      <ServiceGrid
        services={pillarServices}
        title={<>Services in <span className="heading-italic">{pillar.title}</span></>}
        description="Each service is delivered as a complete system, not a one-off project."
        variant="featured"
        columns={3}
      />

      {/* Who it's for */}
      {content && (
        <section className="section-padding py-16 lg:py-20">
          <div className="max-w-5xl mx-auto">
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
                <div key={w} className="p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
                  <p className="text-sm lg:text-base text-foreground/85">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FeatureSection
        tagline="How we engage"
        title={<>From diagnosis to <span className="heading-italic">working system</span></>}
        variant="list"
        features={[
          { title: "Diagnose", description: "We map current systems, bottlenecks, and growth gaps before recommending anything." },
          { title: "Build", description: "We design and implement the systems, integrations, and processes inside your stack." },
          { title: "Scale", description: "We hand off documented, monitored systems your team owns and extends." },
        ]}
      />

      <TestimonialSection variant="featured" />

      <CTASection
        title={<>Ready to build {pillar.title.toLowerCase()} that <span className="heading-italic">compounds?</span></>}
        description="Tell us where you are now and we'll show you the system that gets you to the next stage."
        variant="split"
      />
    </Layout>
  );
}
