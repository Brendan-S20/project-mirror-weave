export interface NavItem {
  label: string;
  href: string;
  children?: NavGroup[];
}

export interface NavGroup {
  title?: string;
  items: { label: string; href: string; description?: string }[];
}

export const mainNavItems: NavItem[] = [
  {
    label: "Services",
    href: "/design-services",
    children: [
      {
        title: "Creative Services",
        items: [
          { label: "Design Services", href: "/design-services", description: "End-to-end creative production" },
          { label: "Ad Creative", href: "/ad-creative", description: "Performance-driven ad design" },
          { label: "Video Production", href: "/video-production", description: "Motion and video at scale" },
          { label: "AI Creative", href: "/ai-creative", description: "AI-powered creative workflows" },
          { label: "Branding Services", href: "/branding-services", description: "Brand identity and systems" },
          { label: "Web Design", href: "/web-design-services", description: "Websites and landing pages" },
          { label: "Social Media Creative", href: "/social-media-creative", description: "Scroll-stopping social content" },
          { label: "Presentation Design", href: "/presentation-design", description: "Pitch decks and presentations" },
        ],
      },
      {
        title: "More Services",
        items: [
          { label: "Motion Design", href: "/motion-design", description: "Animation and motion graphics" },
          { label: "Illustration", href: "/illustration-design-services", description: "Custom illustration" },
          { label: "Print Design", href: "/print-design", description: "Print and packaging design" },
          { label: "Email Design", href: "/email-design-services", description: "Email templates and campaigns" },
          { label: "Landing Pages", href: "/landing-page-design", description: "High-converting landing pages" },
          { label: "Packaging & Merch", href: "/packaging-merchandise-design", description: "Product packaging" },
          { label: "eBook & Report Design", href: "/ebook-digital-report-design", description: "Digital publications" },
          { label: "Copywriting", href: "/copywriting", description: "Strategic copywriting" },
        ],
      },
      {
        title: "Strategic",
        items: [
          { label: "Marketing Strategy", href: "/marketing-strategy", description: "Full-funnel strategy" },
          { label: "Campaign Strategy", href: "/campaign-strategy-services", description: "Campaign planning" },
          { label: "Concept Creation", href: "/concept-creation", description: "Creative concepting" },
          { label: "Design Systems", href: "/design-systems", description: "Scalable design systems" },
          { label: "Product Design", href: "/product-design", description: "Product and UX design" },
          { label: "AR & 3D Design", href: "/ar-3d-design", description: "Immersive experiences" },
          { label: "Immersive Design", href: "/immersive-design-services", description: "Interactive design" },
        ],
      },
    ],
  },
  { label: "Our work", href: "/our-work" },
  {
    label: "Why us",
    href: "/about-us",
    children: [
      {
        title: "Company",
        items: [
          { label: "About Us", href: "/about-us", description: "Our story and mission" },
          { label: "Our Creative Talent", href: "/our-creative-talent", description: "Meet our global team" },
          { label: "Our Technology", href: "/our-technology", description: "AI-powered platform" },
          { label: "AI Excellence", href: "/ai-excellence", description: "Leading with AI" },
          { label: "Enterprise", href: "/enterprise", description: "Enterprise-grade creative" },
          { label: "Reviews", href: "/reviews", description: "What clients say" },
          { label: "BrandBrain", href: "/brandbrain", description: "AI brand intelligence" },
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
    children: [
      {
        title: "Learn",
        items: [
          { label: "Blog", href: "/blog", description: "Insights and trends" },
          { label: "Guides", href: "/guides", description: "In-depth guides" },
          { label: "Playbooks", href: "/playbooks", description: "Tactical playbooks" },
          { label: "Reports", href: "/reports", description: "Industry reports" },
          { label: "Knowledge Base", href: "/knowledge", description: "Tips and tutorials" },
          { label: "Events", href: "/events", description: "Webinars and summits" },
          { label: "AI Content Central", href: "/ai-content-central", description: "AI resources" },
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
