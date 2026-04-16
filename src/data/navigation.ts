import {
  Paintbrush, MessageSquare, MonitorPlay, Presentation, PenTool, Settings2, BookOpen, Lightbulb,
  Video, Wand2, Mail, Globe, Layers, Package, Type, Megaphone, Send, Sparkles, Bot, Database,
  Zap, Flag, Users, Star, Monitor, Brain, BarChart3, BookMarked, FileText, Calendar, Newspaper,
  ArrowUpRight
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

export const mainNavItems: NavItem[] = [
  {
    label: "Services",
    href: "/design-services",
    megaVariant: "services",
    children: [
      {
        title: "Creative design services",
        titleHref: "/design-services",
        items: [
          { label: "Ad creative", href: "/ad-creative", description: "Eye-catching designs that perform", icon: Paintbrush },
          { label: "Social media creative", href: "/social-media-creative", description: "Engaging assets for all platforms", icon: MessageSquare },
          { label: "Presentation design", href: "/presentation-design", description: "Captivating slides that tell your story", icon: Presentation },
          { label: "Illustration design", href: "/illustration-design-services", description: "Visual storytelling for your brand", icon: PenTool },
          { label: "Branding services", href: "/branding-services", description: "Expertise & custom design services", icon: Settings2 },
          { label: "eBooks & report design", href: "/ebook-digital-report-design", description: "Your digital content supercharged", icon: BookOpen },
          { label: "Concept creation", href: "/concept-creation", description: "Big ideas crafted for maximum impact", icon: Lightbulb },
          { label: "Print design", href: "/print-design", description: "Tangible designs that leave a lasting impression", icon: FileText },
          { label: "Packaging & merchandise design", href: "/packaging-merchandise-design", description: "Bring your brand to life", icon: Package },
        ],
      },
      {
        title: "Specialized production services",
        titleHref: "/video-production",
        items: [
          { label: "Video production", href: "/video-production", description: "Effortless video production at scale", icon: Video },
          { label: "Motion design", href: "/motion-design", description: "For websites, ads, and presentations", icon: MonitorPlay },
          { label: "Email creation", href: "/email-design-services", description: "Click-worthy emails that drive engagement", icon: Mail },
          { label: "Web design", href: "/web-design-services", description: "Stunning websites and landing pages built to engage", icon: Globe },
          { label: "Design Systems", href: "/design-systems", description: "Robust design systems that drive visual consistency", icon: Layers, isNew: true },
          { label: "Product Design", href: "/product-design", description: "Engaging & intuitive experiences", icon: Settings2, isNew: true },
          { label: "Copywriting", href: "/copywriting", description: "Persuasive words for clarity and action", icon: Type, isNew: true },
        ],
      },
      {
        title: "AI services",
        titleHref: "/ai-creative",
        items: [
          { label: "AI-powered creative", href: "/ai-creative", description: "Human brilliance powered by AI", icon: Sparkles },
          { label: "AI consulting", href: "/ai-excellence", description: "Transform your team with AI", icon: Bot },
          { label: "Automation", href: "/ar-3d-design", description: "Move fast without compromising craft", icon: Zap, isNew: true },
          { label: "Data services", href: "/immersive-design-services", description: "Train your AI with creative data", icon: Database, isNew: true },
        ],
      },
      {
        title: "Marketing services",
        titleHref: "/marketing-strategy",
        items: [
          { label: "Campaign strategy", href: "/campaign-strategy-services", description: "Strategy, messaging, and concept for multi-market campaigns", icon: Flag, isNew: true },
        ],
      },
    ],
  },
  { label: "Our work", href: "/our-work" },
  {
    label: "Why us",
    href: "/about-us",
    megaVariant: "whyus",
    children: [
      {
        title: "Company",
        items: [
          { label: "Our creative talent", href: "/our-creative-talent", description: "Meet your dedicated team" },
          { label: "AI excellence", href: "/ai-excellence", description: "Your shortcut to AI's creative advantage" },
          { label: "Our technology", href: "/our-technology", description: "The tech powering your creative edge" },
          { label: "About us", href: "/about-us", description: "Our story and mission" },
          { label: "Enterprise", href: "/enterprise", description: "Enterprise-grade creative" },
          { label: "Reviews", href: "/reviews", description: "What clients say" },
        ],
      },
      {
        title: "Compare",
        items: [
          { label: "vs. Agencies", href: "/compare-superside-vs-agency", description: "Why teams switch" },
          { label: "vs. Freelancers", href: "/compare-superside-vs-freelancers", description: "More reliable" },
          { label: "vs. In-House", href: "/compare-superside-vs-inhouse", description: "Scale without hiring" },
          { label: "vs. DesignPickle", href: "/compare-superside-vs-designpickle" },
          { label: "vs. Designity", href: "/compare-superside-vs-designity" },
          { label: "Compare All", href: "/compare" },
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
        title: "Our resources",
        items: [
          { label: "Events & Summits", href: "/events", description: "Our upcoming events and recordings", icon: Calendar },
          { label: "Customer Stories", href: "/our-work", description: "Behind the successful partnerships", icon: Users },
          { label: "Guides", href: "/guides", description: "Insights from marketing leaders", icon: BookMarked },
          { label: "Reports", href: "/reports", description: "Data for smarter decisions", icon: BarChart3 },
          { label: "Blog", href: "/blog", description: "Long-form you can learn from", icon: Newspaper },
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
      { label: "Design Services", href: "/design-services" },
      { label: "Ad Creative", href: "/ad-creative" },
      { label: "Video Production", href: "/video-production" },
      { label: "AI Creative", href: "/ai-creative" },
      { label: "Branding", href: "/branding-services" },
      { label: "Web Design", href: "/web-design-services" },
      { label: "Social Media", href: "/social-media-creative" },
      { label: "Presentation Design", href: "/presentation-design" },
      { label: "Motion Design", href: "/motion-design" },
      { label: "Illustration", href: "/illustration-design-services" },
      { label: "Print Design", href: "/print-design" },
      { label: "Email Design", href: "/email-design-services" },
      { label: "Packaging & Merch", href: "/packaging-merchandise-design" },
      { label: "Copywriting", href: "/copywriting" },
      { label: "Marketing Strategy", href: "/marketing-strategy" },
      { label: "Campaign Strategy", href: "/campaign-strategy-services" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Work", href: "/our-work" },
      { label: "Our Talent", href: "/our-creative-talent" },
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
      { label: "Creative Brief", href: "/creative-brief" },
    ],
  },
  compare: {
    title: "Compare",
    links: [
      { label: "vs. Agencies", href: "/compare-superside-vs-agency" },
      { label: "vs. Freelancers", href: "/compare-superside-vs-freelancers" },
      { label: "vs. In-House", href: "/compare-superside-vs-inhouse" },
      { label: "vs. DesignPickle", href: "/compare-superside-vs-designpickle" },
      { label: "vs. Designity", href: "/compare-superside-vs-designity" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Trust Center", href: "/trust-center" },
      { label: "Bug Bounty", href: "/bug-bounty-program-policy" },
    ],
  },
};
