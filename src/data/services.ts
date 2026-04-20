export interface MicroService {
  slug: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroTagline: string;
  pillar: "growth-infrastructure" | "automation-systems" | "creative-content" | "technology-it";
  features: string[];
  benefits: { title: string; description: string }[];
  outcomes: string[];
  microServices: MicroService[];
  relatedServices: string[];
}

export interface Pillar {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
}

export const pillars: Pillar[] = [
  {
    slug: "growth-infrastructure",
    title: "Growth Infrastructure",
    tagline: "The systems that turn traffic into revenue.",
    description: "Websites, funnels, and conversion systems engineered to compound revenue across every channel.",
    outcomes: [
      "Higher conversion on key pages",
      "Lower cost per qualified lead",
      "Repeatable, measurable funnel program",
    ],
  },
  {
    slug: "automation-systems",
    title: "Automation & Systems",
    tagline: "Operations that run without you in the loop.",
    description: "CRM, workflow, and integration systems that remove manual work and replace fragile spreadsheets.",
    outcomes: [
      "Hours back to your team every week",
      "Cleaner data across the stack",
      "Audit-ready, scalable operations",
    ],
  },
  {
    slug: "creative-content",
    title: "Creative & Content",
    tagline: "Brand and content built for performance.",
    description: "Brand systems, ads, and media production engineered to feed your funnels and convert at scale.",
    outcomes: [
      "Higher ROAS on paid channels",
      "Always-on content pipeline",
      "Consistent brand at production scale",
    ],
  },
  {
    slug: "technology-it",
    title: "Technology & IT Consulting",
    tagline: "Architecture that scales with the business.",
    description: "Architecture, infrastructure, and internal tools designed for the next stage of growth.",
    outcomes: [
      "Lower infrastructure cost",
      "Faster delivery on new initiatives",
      "Reduced execution risk on launches",
    ],
  },
];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

export const services: Service[] = [
  // ─── Growth Infrastructure ───
  {
    slug: "website-development",
    title: "Website Development",
    subtitle: "Production-grade sites engineered for growth",
    description: "We build fast, conversion-ready websites on modern stacks. Every site is wired to your CRM, analytics, and marketing tools from day one.",
    heroTagline: "Websites built as growth infrastructure",
    pillar: "growth-infrastructure",
    features: ["Headless and Jamstack builds", "CMS architecture", "CRM and analytics integration", "Performance and Core Web Vitals", "SEO foundations", "Component-driven design systems"],
    benefits: [
      { title: "Built to convert", description: "Information architecture, page templates, and CTAs designed around revenue, not vanity metrics." },
      { title: "Connected by default", description: "Forms, events, and identity flow into your CRM and warehouse with no manual cleanup." },
      { title: "Easy to maintain", description: "Editorial workflows your team can run without engineering tickets." },
    ],
    outcomes: ["Faster time to publish", "Higher conversion on key pages", "Cleaner data in your CRM"],
    microServices: [
      { slug: "marketing-site-build", title: "Marketing site build", description: "Full marketing site on a modern stack with CMS, components, and analytics." },
      { slug: "headless-cms-implementation", title: "Headless CMS implementation", description: "Sanity, Contentful, or Payload set up with a content model your team can actually run." },
      { slug: "site-replatforming", title: "Site replatforming", description: "Migrate from WordPress, Webflow, or legacy stacks without losing SEO equity." },
      { slug: "performance-and-seo", title: "Performance and SEO", description: "Core Web Vitals, technical SEO, and on-page architecture wired in from day one." },
      { slug: "design-systems-for-marketing", title: "Marketing design system", description: "Reusable components and templates so every page ships fast and on-brand." },
    ],
    relatedServices: ["funnels-landing-pages", "conversion-systems", "system-architecture"],
  },
  {
    slug: "funnels-landing-pages",
    title: "Funnels & Landing Pages",
    subtitle: "High-intent funnels for paid and organic",
    description: "Modular landing pages and full funnels built for speed, testing, and integration with your acquisition channels.",
    heroTagline: "Funnels engineered to capture and convert",
    pillar: "growth-infrastructure",
    features: ["Landing page systems", "Multi-step funnels", "A/B and multivariate testing", "Lead routing and qualification", "Pixel and event tracking", "Form and quiz logic"],
    benefits: [
      { title: "Lower cost per lead", description: "Pages are built and iterated against real conversion data, not assumptions." },
      { title: "Faster launches", description: "Reusable components let you launch new funnels in days, not weeks." },
      { title: "Clean attribution", description: "Tracking and routing wired correctly so every lead is attributable." },
    ],
    outcomes: ["Reduced CPL on paid channels", "Higher MQL-to-SQL conversion", "Repeatable funnel playbook"],
    microServices: [
      { slug: "paid-ads-landing-pages", title: "Paid ads landing pages", description: "High-converting pages built for Meta, Google, LinkedIn, and TikTok traffic." },
      { slug: "lead-magnet-funnels", title: "Lead magnet funnels", description: "Gated content funnels with email capture, scoring, and CRM sync." },
      { slug: "demo-and-sales-funnels", title: "Demo and sales funnels", description: "Qualification, routing, and booking flows wired to your sales process." },
      { slug: "ab-testing-program", title: "A/B testing program", description: "A continuous experimentation system instead of one-off tests." },
      { slug: "conversion-tracking-setup", title: "Conversion tracking setup", description: "Pixels, server-side events, and attribution built correctly the first time." },
    ],
    relatedServices: ["conversion-systems", "ads", "workflow-automation"],
  },
  {
    slug: "conversion-systems",
    title: "Conversion Systems",
    subtitle: "End-to-end conversion infrastructure",
    description: "Audit, instrument, and optimize the full path from first touch to closed revenue. We turn your funnel into a measurable system.",
    heroTagline: "Turn your funnel into a measurable system",
    pillar: "growth-infrastructure",
    features: ["Funnel audits", "Conversion tracking architecture", "CRO programs", "Lifecycle and nurture flows", "Attribution modeling", "Experimentation roadmaps"],
    benefits: [
      { title: "Measurable lift", description: "Every change is tied to a metric, not a hunch." },
      { title: "Compounding returns", description: "Wins are documented and rolled into your design system and playbook." },
      { title: "Cross-team alignment", description: "Marketing, sales, and product work from the same definitions and dashboards." },
    ],
    outcomes: ["Higher revenue per visitor", "Shorter sales cycles", "Defensible CRO program"],
    microServices: [
      { slug: "funnel-audit", title: "Funnel audit", description: "Diagnostic of every step from ad to revenue with prioritized fixes." },
      { slug: "cro-program", title: "Ongoing CRO program", description: "Continuous experimentation across pages, flows, and lifecycle." },
      { slug: "lifecycle-and-nurture", title: "Lifecycle and nurture", description: "Email and in-product flows that move leads to revenue." },
      { slug: "attribution-modeling", title: "Attribution modeling", description: "Multi-touch attribution your finance and marketing teams agree on." },
      { slug: "analytics-instrumentation", title: "Analytics instrumentation", description: "GA4, warehouse, and product analytics wired to a single event spec." },
    ],
    relatedServices: ["funnels-landing-pages", "crm-setup", "business-process-automation"],
  },

  // ─── Automation & Systems ───
  {
    slug: "crm-setup",
    title: "CRM Setup",
    subtitle: "CRM as a revenue engine",
    description: "We design, implement, and migrate CRMs (HubSpot, Salesforce, Pipedrive, GoHighLevel) so your data, pipelines, and reporting actually reflect how you sell.",
    heroTagline: "A CRM your revenue team will actually use",
    pillar: "automation-systems",
    features: ["CRM selection and architecture", "Data model and pipeline design", "Migration and deduplication", "Lead scoring and routing", "Reporting and dashboards", "Sales enablement automations"],
    benefits: [
      { title: "Pipeline you can trust", description: "Clean stages, exit criteria, and forecasting that match reality." },
      { title: "Less manual work", description: "Automations replace the spreadsheets, follow-ups, and copy-paste tasks." },
      { title: "Better decisions", description: "Reporting tied to revenue, not activity vanity metrics." },
    ],
    outcomes: ["Accurate pipeline reporting", "Higher rep productivity", "Faster onboarding for new hires"],
    microServices: [
      { slug: "hubspot-implementation", title: "HubSpot implementation", description: "Full HubSpot build from data model to automations and reporting." },
      { slug: "salesforce-implementation", title: "Salesforce implementation", description: "Sales Cloud setup, custom objects, flows, and reporting." },
      { slug: "gohighlevel-build", title: "GoHighLevel build", description: "Agency and SMB-grade GHL builds with snapshots and automations." },
      { slug: "crm-migration", title: "CRM migration", description: "Move between CRMs with clean data, deduping, and zero downtime." },
      { slug: "lead-scoring-and-routing", title: "Lead scoring and routing", description: "Score, route, and assign leads automatically based on fit and intent." },
    ],
    relatedServices: ["workflow-automation", "business-process-automation", "api-integrations"],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    subtitle: "Automate the work between tools",
    description: "We build automations across Zapier, Make, n8n, and native APIs. The result: handoffs that just happen, with audit trails and error handling.",
    heroTagline: "Stop running your business in spreadsheets",
    pillar: "automation-systems",
    features: ["Zapier, Make, n8n flows", "Native API automations", "Error handling and alerting", "Approval and review chains", "Notification systems", "Documentation and runbooks"],
    benefits: [
      { title: "Hours back to your team", description: "Repeated manual work moves to reliable automated flows." },
      { title: "Fewer errors", description: "Validation, retries, and alerts catch issues before customers do." },
      { title: "Scalable processes", description: "Workflows grow with the business instead of breaking under load." },
    ],
    outcomes: ["Reduced manual hours per week", "Faster cycle times", "Lower operational risk"],
    microServices: [
      { slug: "zapier-make-builds", title: "Zapier and Make builds", description: "Reliable no-code automations across your SaaS stack." },
      { slug: "n8n-self-hosted-automations", title: "n8n self-hosted automations", description: "Self-hosted automation infrastructure with full data control." },
      { slug: "ai-agent-workflows", title: "AI agent workflows", description: "LLM-powered agents wired into your real business processes." },
      { slug: "internal-notifications", title: "Internal notifications", description: "Slack, Teams, and email alerts tied to the events that matter." },
      { slug: "data-sync-pipelines", title: "Data sync pipelines", description: "Two-way sync between CRM, billing, product, and warehouse." },
    ],
    relatedServices: ["business-process-automation", "api-integrations", "crm-setup"],
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    subtitle: "Reengineer the operations that matter",
    description: "We map, redesign, and automate core business processes: onboarding, billing, fulfillment, support, and reporting.",
    heroTagline: "Operations that scale without adding headcount",
    pillar: "automation-systems",
    features: ["Process mapping and audit", "Standard operating procedures", "End-to-end automation", "Approval and exception handling", "KPI dashboards", "Change management support"],
    benefits: [
      { title: "Fewer bottlenecks", description: "Critical work no longer waits on a single person to push it forward." },
      { title: "Predictable output", description: "Processes run the same way every time, with full visibility." },
      { title: "Lower cost to serve", description: "Less time spent per customer, request, or transaction." },
    ],
    outcomes: ["Faster onboarding and fulfillment", "Reduced cost per transaction", "Audit-ready operations"],
    microServices: [
      { slug: "client-onboarding-automation", title: "Client onboarding automation", description: "Turn onboarding into a hands-off, branded, on-time process." },
      { slug: "billing-and-invoicing", title: "Billing and invoicing automation", description: "Stripe, QuickBooks, and Xero workflows that close the books faster." },
      { slug: "fulfillment-workflows", title: "Fulfillment workflows", description: "Order, project, and delivery workflows with full status visibility." },
      { slug: "support-ticket-automation", title: "Support ticket automation", description: "Routing, triage, and auto-response systems for support teams." },
      { slug: "ops-reporting-dashboards", title: "Ops reporting dashboards", description: "Live operational dashboards your leadership team will actually use." },
    ],
    relatedServices: ["workflow-automation", "internal-tools", "scaling-operations"],
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    subtitle: "Connect every tool in your stack",
    description: "Custom and off-the-shelf integrations that move data cleanly between your CRM, billing, product, support, and data warehouse.",
    heroTagline: "Make your stack behave like one system",
    pillar: "automation-systems",
    features: ["Custom REST and GraphQL integrations", "Webhook architecture", "iPaaS implementations", "Data warehouse pipelines", "Authentication and permissions", "Monitoring and observability"],
    benefits: [
      { title: "Single source of truth", description: "Customer, product, and revenue data stay aligned across tools." },
      { title: "No more swivel-chair work", description: "Eliminate the manual handoffs between disconnected systems." },
      { title: "Future-proof stack", description: "Architecture designed to absorb new tools without breaking existing flows." },
    ],
    outcomes: ["Cleaner data across systems", "Reduced tool sprawl cost", "Faster reporting and analytics"],
    microServices: [
      { slug: "custom-rest-graphql-integrations", title: "Custom REST and GraphQL builds", description: "Bespoke integrations between SaaS, internal tools, and APIs." },
      { slug: "webhook-architecture", title: "Webhook architecture", description: "Reliable, observable event-driven integration backbone." },
      { slug: "ipaas-implementation", title: "iPaaS implementation", description: "Workato, Tray, or Mulesoft set up around your real data flows." },
      { slug: "warehouse-etl-pipelines", title: "Warehouse ETL pipelines", description: "Fivetran, Airbyte, and dbt pipelines into Snowflake or BigQuery." },
      { slug: "integration-monitoring", title: "Integration monitoring", description: "Alerting, retries, and dashboards so failures never go unnoticed." },
    ],
    relatedServices: ["crm-setup", "workflow-automation", "system-architecture"],
  },

  // ─── Creative & Content ───
  {
    slug: "ads",
    title: "Ads",
    subtitle: "Performance creative for paid channels",
    description: "Concepts, production, and iteration of ad creative across Meta, Google, LinkedIn, TikTok, and YouTube. Built around your funnel, not just the platform.",
    heroTagline: "Ad creative built for the metrics that matter",
    pillar: "creative-content",
    features: ["Static and motion ads", "UGC-style creative", "Video and YouTube ads", "Creative testing frameworks", "Platform-specific variants", "Landing page alignment"],
    benefits: [
      { title: "Lower CAC", description: "Creative testing tied directly to channel performance." },
      { title: "Faster iteration", description: "Production cadence designed around weekly testing cycles." },
      { title: "Funnel-aware", description: "Creative built with the landing page and lifecycle flow in mind." },
    ],
    outcomes: ["Improved ROAS", "More winning ads per month", "Repeatable creative testing program"],
    microServices: [
      { slug: "meta-ads-creative", title: "Meta ads creative", description: "Static, motion, and video creative built for Meta performance." },
      { slug: "google-and-youtube-ads", title: "Google and YouTube ads", description: "Performance Max assets, YouTube ads, and search creative." },
      { slug: "linkedin-b2b-ads", title: "LinkedIn B2B ads", description: "Sponsored content and document ads for high-intent B2B audiences." },
      { slug: "tiktok-and-ugc-ads", title: "TikTok and UGC ads", description: "Native, creator-style ads built for TikTok and Reels." },
      { slug: "creative-testing-systems", title: "Creative testing systems", description: "Weekly testing cadence with reporting tied to channel performance." },
    ],
    relatedServices: ["funnels-landing-pages", "media-production", "branding"],
  },
  {
    slug: "branding",
    title: "Branding",
    subtitle: "Brand systems built to scale",
    description: "Identity, messaging, and brand systems that hold up across product, marketing, and sales. Built for teams, not just lookbooks.",
    heroTagline: "Brand systems your team can actually use",
    pillar: "creative-content",
    features: ["Brand strategy and positioning", "Visual identity and logo", "Messaging frameworks", "Brand guidelines", "Component and template libraries", "Brand governance"],
    benefits: [
      { title: "Consistent at scale", description: "Every team and partner ships on-brand work without bottlenecks." },
      { title: "Strategic foundation", description: "Brand decisions grounded in audience and business goals." },
      { title: "System over assets", description: "You get a working system, not a static PDF." },
    ],
    outcomes: ["Stronger brand recognition", "Faster creative production", "Aligned internal teams"],
    microServices: [
      { slug: "brand-strategy-and-positioning", title: "Brand strategy and positioning", description: "Audience, narrative, and positioning grounded in business goals." },
      { slug: "visual-identity-design", title: "Visual identity design", description: "Logo, type, color, and identity system built for digital-first scale." },
      { slug: "messaging-frameworks", title: "Messaging frameworks", description: "Voice, value props, and messaging your whole team writes from." },
      { slug: "brand-guidelines", title: "Brand guidelines", description: "Living guidelines paired with templates, not static PDFs." },
      { slug: "rebrand-and-refresh", title: "Rebrand and refresh", description: "End-to-end rebrand programs from strategy through rollout." },
    ],
    relatedServices: ["ads", "media-production", "website-development"],
  },
  {
    slug: "media-production",
    title: "Media Production",
    subtitle: "Video, photo, and motion at production scale",
    description: "End-to-end video, photo, and motion production. Studio quality, repeatable workflows, and assets engineered for every channel.",
    heroTagline: "Media production engineered for output",
    pillar: "creative-content",
    features: ["Brand and product video", "UGC and creator content", "Motion graphics and animation", "Photography and product shoots", "Multi-format edits", "Asset management"],
    benefits: [
      { title: "More from every shoot", description: "Plans designed to harvest dozens of assets per production day." },
      { title: "Channel-ready cuts", description: "Variants sized and timed for every paid and organic surface." },
      { title: "Operational continuity", description: "Repeatable production cycles instead of one-off projects." },
    ],
    outcomes: ["Higher creative output per dollar", "Always-on content pipeline", "Lower per-asset cost"],
    microServices: [
      { slug: "brand-video-production", title: "Brand video production", description: "Hero video, brand films, and recruitment content." },
      { slug: "product-and-explainer-video", title: "Product and explainer video", description: "Product walkthroughs and demo videos that actually convert." },
      { slug: "ugc-and-creator-content", title: "UGC and creator content", description: "Native creator content sourced and produced at scale." },
      { slug: "motion-graphics-and-animation", title: "Motion graphics and animation", description: "Brand motion, animated explainers, and ad motion design." },
      { slug: "photography-and-product-shoots", title: "Photography and product shoots", description: "Studio and on-location shoots optimized for asset volume." },
    ],
    relatedServices: ["ads", "branding", "conversion-systems"],
  },

  // ─── Technology & IT Consulting ───
  {
    slug: "system-architecture",
    title: "System Architecture",
    subtitle: "Architect the stack you actually need",
    description: "We design technology architecture that maps to your business model: tools, data flow, identity, security, and integration patterns.",
    heroTagline: "Architecture aligned to how you operate",
    pillar: "technology-it",
    features: ["Stack assessment and audit", "Reference architectures", "Data and identity model", "Integration and event design", "Build vs buy analysis", "Implementation roadmaps"],
    benefits: [
      { title: "Clarity before spend", description: "Decisions backed by an architectural view, not vendor pitches." },
      { title: "Lower long-term cost", description: "Avoid expensive rework caused by short-term tool choices." },
      { title: "Aligned to roadmap", description: "Architecture that supports the next two years, not just today." },
    ],
    outcomes: ["Reduced tool sprawl", "Cleaner data and reporting", "Faster delivery on new initiatives"],
    microServices: [
      { slug: "stack-audit", title: "Stack audit", description: "Independent review of your tools, data flow, and tech debt." },
      { slug: "reference-architecture-design", title: "Reference architecture design", description: "Target-state architecture for the next phase of growth." },
      { slug: "data-and-identity-model", title: "Data and identity model", description: "Customer, account, and identity model across the whole stack." },
      { slug: "build-vs-buy-analysis", title: "Build vs buy analysis", description: "Structured analysis to avoid expensive build mistakes." },
      { slug: "tech-roadmap-planning", title: "Tech roadmap planning", description: "Prioritized 12-month roadmap aligned to business outcomes." },
    ],
    relatedServices: ["infrastructure-planning", "internal-tools", "scaling-operations"],
  },
  {
    slug: "infrastructure-planning",
    title: "Infrastructure Planning",
    subtitle: "Cloud and infrastructure for growth-stage teams",
    description: "Planning and implementation of cloud infrastructure, environments, observability, and security that match your stage without overbuilding.",
    heroTagline: "Infrastructure that fits your stage",
    pillar: "technology-it",
    features: ["Cloud architecture (AWS, GCP, Azure)", "Environments and CI/CD", "Observability and logging", "Cost optimization", "Security baselines", "Disaster recovery planning"],
    benefits: [
      { title: "Right-sized for now", description: "Solutions calibrated to current scale with a clear path to grow." },
      { title: "Lower cloud spend", description: "Cost reviews and architectural changes that reduce monthly burn." },
      { title: "Operational confidence", description: "Reliability and recovery practices documented and tested." },
    ],
    outcomes: ["Lower infrastructure cost", "Faster deploys", "Reduced incident impact"],
    microServices: [
      { slug: "cloud-architecture", title: "Cloud architecture", description: "AWS, GCP, or Azure architecture sized to current and next-stage load." },
      { slug: "ci-cd-and-environments", title: "CI/CD and environments", description: "Branching, environments, and deploy pipelines for fast, safe releases." },
      { slug: "observability-and-logging", title: "Observability and logging", description: "Metrics, logs, and traces wired into Datadog, Grafana, or New Relic." },
      { slug: "cloud-cost-optimization", title: "Cloud cost optimization", description: "Cost reviews and architectural changes that lower monthly burn." },
      { slug: "security-and-compliance-baseline", title: "Security and compliance baseline", description: "SOC 2 and ISO-ready baselines without overbuilding." },
    ],
    relatedServices: ["system-architecture", "scaling-operations", "internal-tools"],
  },
  {
    slug: "internal-tools",
    title: "Internal Tools",
    subtitle: "Custom tools for ops, sales, and support",
    description: "Internal apps, dashboards, and admin panels built on Retool, custom React, and serverless. Replace spreadsheets and one-off scripts with real software.",
    heroTagline: "Internal tools that replace 20 spreadsheets",
    pillar: "technology-it",
    features: ["Admin dashboards", "Operational consoles", "Custom workflow apps", "Reporting interfaces", "Permission and audit systems", "Integration with core stack"],
    benefits: [
      { title: "Faster operations", description: "Teams perform critical actions in seconds, not minutes." },
      { title: "Fewer errors", description: "Guardrails, validation, and audit trails built in." },
      { title: "Owned by your team", description: "Lightweight stacks your engineers and ops team can extend." },
    ],
    outcomes: ["Hours saved per role per week", "Fewer ops errors", "Better visibility into operations"],
    microServices: [
      { slug: "retool-internal-apps", title: "Retool internal apps", description: "Admin panels and ops tools shipped in days, not quarters." },
      { slug: "custom-admin-dashboards", title: "Custom admin dashboards", description: "Bespoke React dashboards wired to your real data." },
      { slug: "ops-consoles", title: "Ops consoles", description: "Workflow consoles for support, success, and operations teams." },
      { slug: "reporting-interfaces", title: "Reporting interfaces", description: "Self-serve reporting layers on top of your warehouse." },
      { slug: "audit-and-permissions", title: "Audit and permissions", description: "Role-based access and audit trails baked into every internal tool." },
    ],
    relatedServices: ["business-process-automation", "api-integrations", "scaling-operations"],
  },
  {
    slug: "scaling-operations",
    title: "Scaling Operations",
    subtitle: "Operational readiness for the next phase",
    description: "Advisory and hands-on work to prepare ops, systems, and tooling for the next stage of growth. New markets, new product lines, more volume.",
    heroTagline: "Get operationally ready for what's next",
    pillar: "technology-it",
    features: ["Operational readiness audits", "Tooling and stack rationalization", "Process redesign", "Org and RACI design", "Integration roadmaps", "Fractional CTO and ops support"],
    benefits: [
      { title: "Scale without chaos", description: "Growth plans backed by operational and technical capacity." },
      { title: "Reduced execution risk", description: "Major launches and expansions de-risked through preparation." },
      { title: "Strategic + hands-on", description: "Senior advisory paired with implementation, not just slideware." },
    ],
    outcomes: ["Smoother launches and expansions", "Lower cost per new customer", "Reduced founder dependency"],
    microServices: [
      { slug: "ops-readiness-audit", title: "Ops readiness audit", description: "Audit of systems, process, and headcount before the next push." },
      { slug: "stack-rationalization", title: "Stack rationalization", description: "Consolidate redundant tools and lower SaaS spend." },
      { slug: "org-and-raci-design", title: "Org and RACI design", description: "Clear ownership and accountability across teams and processes." },
      { slug: "fractional-cto-services", title: "Fractional CTO services", description: "Senior technical leadership without a full-time hire." },
      { slug: "expansion-and-launch-readiness", title: "Expansion and launch readiness", description: "De-risk new markets, products, and major launches." },
    ],
    relatedServices: ["system-architecture", "infrastructure-planning", "business-process-automation"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillar: Service["pillar"]): Service[] {
  return services.filter((s) => s.pillar === pillar);
}

export function getMicroService(serviceSlug: string, microSlug: string): { service: Service; micro: MicroService } | undefined {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return undefined;
  const micro = service.microServices.find((m) => m.slug === microSlug);
  if (!micro) return undefined;
  return { service, micro };
}
