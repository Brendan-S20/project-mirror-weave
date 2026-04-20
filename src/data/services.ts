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
  relatedServices: string[];
}

export const pillars = {
  "growth-infrastructure": {
    title: "Growth Infrastructure",
    description: "Websites, funnels, and conversion systems engineered to compound revenue.",
  },
  "automation-systems": {
    title: "Automation & Systems",
    description: "CRM, workflows, and integrations that remove manual work and reduce error.",
  },
  "creative-content": {
    title: "Creative & Content",
    description: "Brand, ads, and media production that turn attention into pipeline.",
  },
  "technology-it": {
    title: "Technology & IT Consulting",
    description: "Architecture, infrastructure, and internal tools built to scale with the business.",
  },
} as const;

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
    relatedServices: ["system-architecture", "infrastructure-planning", "business-process-automation"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillar: Service["pillar"]): Service[] {
  return services.filter((s) => s.pillar === pillar);
}
