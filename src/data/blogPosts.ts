export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  readTime: string;
  featured?: boolean;
  imageSrc?: string;
}

export const blogCategories = [
  "Automation", "Operations", "Systems", "Infrastructure", "Growth", "Technology", "Strategy",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "growth-infrastructure-explained",
    title: "Growth Infrastructure: The System Behind Compounding Revenue",
    excerpt: "Most companies treat growth as a series of campaigns. The ones that compound treat it as infrastructure. Here is what that means in practice.",
    category: "Growth",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-04-12",
    readTime: "8 min",
    featured: true,
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    slug: "automating-business-operations",
    title: "Automating Business Operations Without Breaking Them",
    excerpt: "Automation done badly creates more work than it removes. A practical framework for sequencing automation projects and avoiding common traps.",
    category: "Automation",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-04-08",
    readTime: "9 min",
    featured: true,
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  },
  {
    slug: "scaling-operations-without-headcount",
    title: "Scaling Operations Without Adding Headcount",
    excerpt: "How operators are using systems and automation to take on more work without proportionally growing the team.",
    category: "Operations",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-04-04",
    readTime: "7 min",
    imageSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
  },
  {
    slug: "crm-as-revenue-engine",
    title: "Your CRM Is Either a Revenue Engine or a Graveyard",
    excerpt: "What separates a CRM that drives revenue from one that quietly absorbs data. Architecture, adoption, and accountability.",
    category: "Systems",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-03-29",
    readTime: "8 min",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  {
    slug: "internal-tools-vs-spreadsheets",
    title: "When to Replace Spreadsheets With Internal Tools",
    excerpt: "Spreadsheets work until they don't. A clear framework for deciding when to invest in real internal tooling, and how to scope it.",
    category: "Technology",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-03-22",
    readTime: "7 min",
    imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=1200&q=80",
  },
  {
    slug: "stack-rationalization",
    title: "Stack Rationalization: Cutting Tools Without Cutting Capability",
    excerpt: "Most growth-stage companies are paying for tools they barely use. How to audit the stack and consolidate without losing critical capabilities.",
    category: "Technology",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-03-15",
    readTime: "6 min",
    imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  },
  {
    slug: "infrastructure-for-growth-stage",
    title: "Infrastructure Decisions That Hold Growth-Stage Companies Back",
    excerpt: "The architecture choices made early often become the constraints later. How to revisit infrastructure before it limits the next phase.",
    category: "Infrastructure",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-03-08",
    readTime: "8 min",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  },
  {
    slug: "connected-vs-disconnected-stack",
    title: "Connected Systems vs. Disconnected Tools",
    excerpt: "The real cost of running marketing, sales, and operations on disconnected tools. And what changes when they actually talk to each other.",
    category: "Systems",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-03-01",
    readTime: "7 min",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    slug: "agency-vs-internal-vs-partner",
    title: "Agencies, Internal Hires, or a Systems Partner: How to Choose",
    excerpt: "A practical framework for deciding when each model fits, and where each one quietly fails for growth-stage companies.",
    category: "Strategy",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-02-22",
    readTime: "9 min",
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
  },
  {
    slug: "operational-readiness",
    title: "Operational Readiness for the Next Phase of Growth",
    excerpt: "What it actually means to be operationally ready for the next stage. Tools, processes, and the people questions that matter most.",
    category: "Operations",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-02-15",
    readTime: "8 min",
    imageSrc: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1200&q=80",
  },
];

export const authors = [
  { slug: "the-north-team", name: "The North Team", role: "Systems & Strategy", bio: "Perspectives from The North on growth infrastructure, automation, and the systems behind scaling companies." },
];

export const guides = [
  { slug: "growth-infrastructure-playbook", title: "Growth Infrastructure Playbook", description: "How to design and build the systems behind compounding revenue." },
  { slug: "automation-roadmap", title: "Automation Roadmap Guide", description: "Sequencing automation projects so each one earns the next." },
  { slug: "crm-architecture", title: "CRM Architecture Guide", description: "Designing a CRM that revenue teams actually use and trust." },
  { slug: "stack-rationalization-guide", title: "Stack Rationalization Guide", description: "Cutting tools without cutting capability across the company." },
  { slug: "internal-tools-guide", title: "Internal Tools Guide", description: "When to invest in custom tooling and how to scope it." },
  { slug: "infrastructure-planning-guide", title: "Infrastructure Planning Guide", description: "Cloud and infrastructure decisions for growth-stage teams." },
];

export const playbooks = [
  { slug: "saas-revenue-stack", title: "The SaaS Revenue Stack", description: "Reference architecture for connecting site, CRM, billing, and product." },
  { slug: "ecommerce-ops-automation", title: "E-commerce Ops Automation", description: "Tactical playbook for automating order, fulfillment, and support flows." },
  { slug: "founder-to-operator", title: "Founder-to-Operator Playbook", description: "Removing the founder from day-to-day operations through systems." },
];

export const knowledgeArticles = [
  { slug: "what-is-growth-infrastructure", title: "What Is Growth Infrastructure?", description: "Definition, components, and why it matters for scaling companies." },
  { slug: "automation-vs-ai", title: "Automation vs. AI: What's the Difference?", description: "A grounded look at where automation ends and AI begins in operations." },
  { slug: "ipaas-vs-custom-integrations", title: "iPaaS vs. Custom Integrations", description: "When to use Zapier and Make versus building custom integrations." },
];

export const events = [
  { slug: "growth-infrastructure-summit", title: "Growth Infrastructure Summit", description: "A summit for founders and operators on the systems behind scalable growth.", date: "Coming Soon" },
  { slug: "automation-for-operators", title: "Automation for Operators", description: "Live session on practical automation strategies for growth-stage companies.", date: "On Demand" },
];

export const reports = [
  { slug: "state-of-growth-infrastructure", title: "State of Growth Infrastructure", description: "How growth-stage companies are building the systems behind their next phase." },
  { slug: "automation-roi-report", title: "Automation ROI Report", description: "A practical look at where automation investments produce real returns." },
];

export const tags = [
  "automation", "operations", "growth-infrastructure", "crm", "internal-tools",
  "infrastructure", "systems", "strategy", "scaling", "integrations",
];
