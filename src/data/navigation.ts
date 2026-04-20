import {
  Globe, Layers, Settings2, Workflow, Database, Zap, Megaphone, Video, Sparkles,
  Server, Cpu, Wrench, TrendingUp, Users, BookMarked, FileText, Calendar, Newspaper, BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services, pillars, type Service } from "./services";

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

const serviceIcons: Record<string, LucideIcon> = {
  "website-development": Globe,
  "funnels-landing-pages": Layers,
  "conversion-systems": TrendingUp,
  "crm-setup": Database,
  "workflow-automation": Workflow,
  "business-process-automation": Settings2,
  "api-integrations": Zap,
  "ads": Megaphone,
  "branding": Sparkles,
  "media-production": Video,
  "system-architecture": Cpu,
  "infrastructure-planning": Server,
  "internal-tools": Wrench,
  "scaling-operations": TrendingUp,
};

const pillarToServiceLinks = (pillarSlug: Service["pillar"]): NavLink[] =>
  services
    .filter((s) => s.pillar === pillarSlug)
    .map((s) => ({
      label: s.title,
      href: `/${s.slug}`,
      description: s.subtitle,
      icon: serviceIcons[s.slug],
    }));

export const servicesNavGroups: NavGroup[] = pillars.map((p) => ({
  title: p.title,
  titleHref: `/services/${p.slug}`,
  items: pillarToServiceLinks(p.slug as Service["pillar"]),
}));

export const mainNavItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    megaVariant: "services",
    children: servicesNavGroups,
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
    links: services.map((s) => ({ label: s.title, href: `/${s.slug}` })),
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
  pillars: {
    title: "Pillars",
    links: pillars.map((p) => ({ label: p.title, href: `/services/${p.slug}` })),
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
