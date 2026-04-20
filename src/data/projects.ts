export interface Project {
  slug: string;
  title: string;
  category: string;
  type: string;
  summary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  outcome: string;
  imageSrc: string;
  galleryImages: string[];
  size: "large" | "medium" | "small";
}

export const projects: Project[] = [
  {
    slug: "saas-revenue-infrastructure",
    title: "Revenue infrastructure rebuild for a growth-stage SaaS",
    category: "Growth Infrastructure",
    type: "Website + CRM + Funnels",
    summary: "Rebuilt a growth-stage SaaS company's website, funnels, and CRM into a connected revenue system.",
    challenge: "The company was running marketing on a slow CMS, a half-configured CRM, and disconnected paid funnels. Lead data sat in three places. Pipeline reporting was unreliable, and the marketing team spent more time fixing data than running campaigns.",
    approach: "We rearchitected the marketing stack end to end. New site on a modern stack, restructured HubSpot CRM, fully tracked landing pages for paid, and integrations between site, CRM, billing, and the data warehouse. Every form, event, and conversion was instrumented and routed.",
    deliverables: [
      "New marketing site on modern stack",
      "HubSpot CRM redesign and migration",
      "Landing page system for paid acquisition",
      "Lead routing and scoring automations",
      "Site → CRM → warehouse data pipeline",
      "Reporting dashboards for marketing and sales",
    ],
    outcome: "Marketing and sales now operate on the same definitions and data. The team launches new campaigns and funnels in days instead of weeks, and pipeline reporting reflects what is actually happening in the business.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
    ],
    size: "large",
  },
  {
    slug: "ecommerce-automation-stack",
    title: "Operations automation stack for a multi-brand e-commerce group",
    category: "Automation & Systems",
    type: "Workflow Automation",
    summary: "Connected commerce, CRM, fulfillment, and support tools into a single operational system.",
    challenge: "A multi-brand e-commerce group was running each brand on its own stack with manual handoffs between Shopify, Klaviyo, the 3PL, and customer support. Orders, refunds, and customer issues were tracked in spreadsheets and Slack threads.",
    approach: "We mapped every operational workflow across brands and built a shared automation layer using n8n, native APIs, and a small set of internal tools. Standardized the data model across brands, then automated the order, fulfillment, and support flows on top of it.",
    deliverables: [
      "Cross-brand operational data model",
      "Order and fulfillment automation flows",
      "Refund and exception workflows",
      "Klaviyo and Gorgias integrations",
      "Internal ops dashboard",
      "Runbooks and team training",
    ],
    outcome: "The operations team handles significantly more order volume per person, with fewer errors and faster response times. Each new brand can be onboarded onto the shared system instead of being built from scratch.",
    imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80",
    ],
    size: "medium",
  },
  {
    slug: "fintech-internal-tooling",
    title: "Internal tooling platform for a fintech operations team",
    category: "Technology & IT",
    type: "Internal Tools",
    summary: "Replaced spreadsheets and ad-hoc scripts with a real internal tooling platform.",
    challenge: "A fintech company's operations team was running daily reconciliations, customer adjustments, and reporting through spreadsheets and one-off scripts. Each new analyst required weeks of training, and errors had real financial consequences.",
    approach: "We designed a small internal tooling platform on Retool with custom backends, wired into their core systems and data warehouse. Reconciliation, customer adjustments, and review workflows were rebuilt with validation, audit logs, and role-based permissions.",
    deliverables: [
      "Operational console for daily reconciliations",
      "Customer adjustment workflows with approvals",
      "Reporting and exception dashboards",
      "Role-based access control and audit trails",
      "API layer between core systems",
      "Onboarding playbook for new operators",
    ],
    outcome: "Operators complete daily workflows in a fraction of the previous time. New team members onboard in days, not weeks, and the audit trail meets compliance requirements without manual effort.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=900&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    ],
    size: "medium",
  },
  {
    slug: "b2b-paid-funnel-system",
    title: "Paid acquisition funnel system for a B2B services brand",
    category: "Growth Infrastructure",
    type: "Funnels + Ads",
    summary: "Built a repeatable B2B funnel system across paid social, search, and outbound.",
    challenge: "A B2B services company was spending heavily on paid channels with weak attribution and inconsistent landing pages. Each campaign required custom build work and rarely produced reusable assets.",
    approach: "We built a modular landing page system, a creative testing framework for ads, and a unified tracking and routing layer. Every new campaign now plugs into the same components, the same analytics, and the same lead handoff to sales.",
    deliverables: [
      "Modular landing page library",
      "Ad creative testing framework",
      "Unified pixel and event architecture",
      "Lead routing and SLA automations",
      "Channel performance dashboards",
      "Campaign launch playbook",
    ],
    outcome: "The team launches new paid campaigns in a fraction of the time, with clean attribution and a clear view of channel performance. Sales receives qualified leads with full context attached.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
    ],
    size: "large",
  },
  {
    slug: "creative-system-multi-market",
    title: "Brand and creative system for a multi-market launch",
    category: "Creative & Content",
    type: "Brand + Media",
    summary: "Built a brand and creative system used across product, marketing, and paid in multiple markets.",
    challenge: "A scaling consumer brand needed to launch in new markets with consistent identity and an always-on creative pipeline. Each market team was producing inconsistent assets and burning hours on rework.",
    approach: "We built a brand and creative system with reusable components, message frameworks, and templated asset libraries. Local teams customize within guardrails, and a central production cadence keeps the pipeline full across paid and organic.",
    deliverables: [
      "Brand identity and messaging system",
      "Component and template libraries",
      "Always-on creative production cadence",
      "Localized asset variations per market",
      "Brand governance workflow",
      "Asset management and handoff structure",
    ],
    outcome: "Every market launches with consistent brand presence and a steady stream of channel-ready creative. Production time per asset dropped meaningfully and brand quality stays high across regions.",
    imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=900&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    ],
    size: "medium",
  },
  {
    slug: "ops-platform-scaling-services",
    title: "Operations platform for a scaling services business",
    category: "Automation & Systems",
    type: "BPA + Internal Tools",
    summary: "Re-engineered onboarding, project delivery, and invoicing into a single operational system.",
    challenge: "A growing services firm was hitting an operational ceiling. Onboarding, project delivery, and invoicing were tracked across five tools with manual handoffs. Founders spent most of their time unblocking work instead of growing the business.",
    approach: "We mapped the end-to-end client journey and rebuilt it as a connected system: CRM, project management, billing, and reporting wired together with workflow automation and a thin internal app for ops to see and act on everything in one place.",
    deliverables: [
      "Client lifecycle process redesign",
      "CRM and project management integration",
      "Automated onboarding and invoicing flows",
      "Internal ops dashboard",
      "KPI and capacity reporting",
      "Standard operating procedures",
    ],
    outcome: "The company can take on substantially more clients with the same headcount. Founders are out of day-to-day operations, and the team has clear visibility into capacity, status, and revenue.",
    imageSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=900&q=80",
    ],
    size: "small",
  },
  {
    slug: "infra-replatform-growth",
    title: "Cloud infrastructure replatform for a growth-stage company",
    category: "Technology & IT",
    type: "Infrastructure",
    summary: "Replatformed cloud infrastructure to cut cost and unblock the next phase of growth.",
    challenge: "A growth-stage company had outgrown its initial cloud setup. Costs were climbing, deploys were slow, and the lack of structured environments made every release risky.",
    approach: "We assessed the existing infrastructure, designed a target architecture, and led the migration. Introduced proper environments, CI/CD, observability, and cost controls without overbuilding for hypothetical scale.",
    deliverables: [
      "Cloud architecture review and target design",
      "Environment and CI/CD overhaul",
      "Observability and alerting baseline",
      "Cost optimization recommendations",
      "Security hardening pass",
      "Runbooks and on-call documentation",
    ],
    outcome: "Cloud spend trended down, deploys became routine, and engineering can ship with confidence. The infrastructure now supports the company's next phase of growth instead of constraining it.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=900&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80",
    ],
    size: "medium",
  },
  {
    slug: "always-on-creative-program",
    title: "Always-on creative program for a performance brand",
    category: "Creative & Content",
    type: "Ads + Content",
    summary: "Built an always-on creative program tied directly to paid performance.",
    challenge: "A performance-driven brand needed a steady stream of fresh creative across Meta, TikTok, and YouTube. Their previous setup produced too few ads, too slowly, with no clear connection to media performance.",
    approach: "We built an always-on production cadence wired into their media team's testing roadmap. Concepts, scripts, edits, and variants are produced on a weekly rhythm, with creative briefs informed by what is winning in market.",
    deliverables: [
      "Weekly creative production cadence",
      "Concept-to-asset workflow",
      "Variant systems for paid platforms",
      "Performance feedback loop with media team",
      "Asset library and naming conventions",
      "Creative reporting dashboards",
    ],
    outcome: "Media has a reliable supply of fresh creative every week. Winning concepts are scaled quickly and weak ones are retired, leading to a more efficient and predictable acquisition program.",
    imageSrc: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=900&q=80",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
    ],
    size: "small",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
