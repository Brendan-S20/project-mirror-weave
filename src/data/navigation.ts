import {
  Globe, Layers, Settings2, Workflow, Database, Zap, Megaphone, Video, Sparkles,
  Server, Cpu, Wrench, TrendingUp, Users, Star, BookMarked, FileText, Calendar, Newspaper, BarChart3, Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  isNew?: boolean;
}

export interface NavGroup {
  title: string;
  titleHref?: string;
  items: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavGroup[];
  megaVariant?: "services" | "resources" | "whyus";
}

export const APP_LOGIN_URL = "https://app.thenorth.consulting";

export const mainNavItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    megaVariant: "services",
    children: [
      {
        title: "Growth Infrastructure",
        titleHref: "/services/growth-infrastructure",
        items: [
          { label: "Website development", href: "/website-development", description: "Production-grade sites engineered for growth", icon: Globe },
          { label: "Funnels & landing pages", href: "/funnels-landing-pages", description: "High-intent funnels for paid and organic", icon: Layers },
          { label: "Conversion systems", href: "/conversion-systems", description: "End-to-end conversion infrastructure", icon: TrendingUp },
        ],
      },
      {
        title: "Automation & Systems",
        titleHref: "/services/automation-systems",
        items: [
          { label: "CRM setup", href: "/crm-setup", description: "CRM as a revenue engine", icon: Database },
          { label: "Workflow automation", href: "/workflow-automation", description: "Automate the work between tools", icon: Workflow },
          { label: "Business process automation", href: "/business-process-automation", description: "Reengineer the operations that matter", icon: Settings2 },
          { label: "API integrations", href: "/api-integrations", description: "Connect every tool in your stack", icon: Zap },
        ],
      },
      {
        title: "Creative & Content",
        titleHref: "/services/creative-content",
        items: [
          { label: "Ads", href: "/ads", description: "Performance creative for paid channels", icon: Megaphone },
          { label: "Branding", href: "/branding", description: "Brand systems built to scale", icon: Sparkles },
          { label: "Media production", href: "/media-production", description: "Video, photo, and motion at scale", icon: Video },
        ],
      },
      {
        title: "Technology & IT",
        titleHref: "/services/technology-it",
        items: [
          { label: "System architecture", href: "/system-architecture", description: "Architect the stack you actually need", icon: Cpu },
          { label: "Infrastructure planning", href: "/infrastructure-planning", description: "Cloud and infrastructure for growth-stage teams", icon: Server },
          { label: "Internal tools", href: "/internal-tools", description: "Custom tools for ops, sales, and support", icon: Wrench },
          { label: "Scaling operations", href: "/scaling-operations", description: "Operational readiness for the next phase", icon: TrendingUp },
        ],
      },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  {
    label: "Why The North",
    href: "/about-us",
    megaVariant: "whyus",
    children: [
      {
        title: "Company",
        items: [
          { label: "About us", href: "/about-us", description: "Our story and approach" },
          { label: "Our team", href: "/our-creative-talent", description: "The systems and creative team behind The North" },
          { label: "Our technology", href: "/our-technology", description: "How we build and operate" },
          { label: "Enterprise", href: "/enterprise", description: "Multi-location, integrations, dedicated teams" },
          { label: "Reviews", href: "/reviews", description: "What clients say" },
        ],
      },
      {
        title: "Compare",
        items: [
          { label: "vs. Agencies", href: "/compare-thenorth-vs-agency", description: "Systems, not slideware" },
          { label: "vs. Freelancers", href: "/compare-thenorth-vs-freelancers", description: "One team, one accountability" },
          { label: "vs. In-house", href: "/compare-thenorth-vs-inhouse", description: "Scale without hiring" },
          { label: "Compare all", href: "/compare" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/learn",
    megaVariant: "resources",
    children: [
      {
        title: "Resources",
        items: [
          { label: "Blog", href: "/blog", description: "Perspectives on systems, automation, and growth", icon: Newspaper },
          { label: "Guides", href: "/guides", description: "In-depth guides for operators and founders", icon: BookMarked },
          { label: "Playbooks", href: "/playbooks", description: "Tactical playbooks you can run with", icon: FileText },
          { label: "Reports", href: "/reports", description: "Data and benchmarks", icon: BarChart3 },
          { label: "Events", href: "/events", description: "Sessions and summits", icon: Calendar },
          { label: "Customer stories", href: "/our-work", description: "How teams scale with The North", icon: Users },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
];

export const footerLinks = {
  services: {
    title: "Services",
    links: [
      { label: "Website Development", href: "/website-development" },
      { label: "Funnels & Landing Pages", href: "/funnels-landing-pages" },
      { label: "Conversion Systems", href: "/conversion-systems" },
      { label: "CRM Setup", href: "/crm-setup" },
      { label: "Workflow Automation", href: "/workflow-automation" },
      { label: "Business Process Automation", href: "/business-process-automation" },
      { label: "API Integrations", href: "/api-integrations" },
      { label: "Ads", href: "/ads" },
      { label: "Branding", href: "/branding" },
      { label: "Media Production", href: "/media-production" },
      { label: "System Architecture", href: "/system-architecture" },
      { label: "Infrastructure Planning", href: "/infrastructure-planning" },
      { label: "Internal Tools", href: "/internal-tools" },
      { label: "Scaling Operations", href: "/scaling-operations" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Work", href: "/our-work" },
      { label: "Our Team", href: "/our-creative-talent" },
      { label: "Our Technology", href: "/our-technology" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Reviews", href: "/reviews" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Playbooks", href: "/playbooks" },
      { label: "Reports", href: "/reports" },
      { label: "Knowledge Base", href: "/knowledge" },
      { label: "Events", href: "/events" },
    ],
  },
  compare: {
    title: "Compare",
    links: [
      { label: "vs. Agencies", href: "/compare-thenorth-vs-agency" },
      { label: "vs. Freelancers", href: "/compare-thenorth-vs-freelancers" },
      { label: "vs. In-House", href: "/compare-thenorth-vs-inhouse" },
      { label: "Compare All", href: "/compare" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Trust Center", href: "/trust-center" },
    ],
  },
};
