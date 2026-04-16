import { Link } from "react-router-dom";
import { footerLinks } from "@/data/navigation";
import { ArrowUpRight } from "lucide-react";

// Restructured footer to match Superside's layout: Services (3 sub-columns) | Navigation (Main + Learn)
const serviceGroups = [
  {
    title: "Creative design services",
    titleHref: "/design-services",
    links: [
      { label: "Ad creative", href: "/ad-creative" },
      { label: "Social media creative", href: "/social-media-creative" },
      { label: "Presentation design", href: "/presentation-design" },
      { label: "Illustration design", href: "/illustration-design-services" },
      { label: "Branding services", href: "/branding-services" },
      { label: "eBooks & report design", href: "/ebook-digital-report-design" },
      { label: "Concept creation", href: "/concept-creation" },
      { label: "Print design", href: "/print-design" },
      { label: "Packaging & merchandise design", href: "/packaging-merchandise-design" },
    ],
  },
  {
    title: "Specialized production services",
    titleHref: "/video-production",
    links: [
      { label: "Video production", href: "/video-production" },
      { label: "Motion design", href: "/motion-design" },
      { label: "Email creation", href: "/email-design-services" },
      { label: "Web design", href: "/web-design-services" },
      { label: "Design Systems", href: "/design-systems" },
      { label: "Product Design", href: "/product-design" },
      { label: "Copywriting", href: "/copywriting" },
    ],
  },
  {
    title: "AI services",
    titleHref: "/ai-creative",
    links: [
      { label: "AI-powered creative", href: "/ai-creative" },
      { label: "AI consulting", href: "/ai-excellence" },
      { label: "Automation", href: "/ar-3d-design" },
      { label: "Data services", href: "/immersive-design-services" },
    ],
    extra: {
      title: "Marketing services",
      titleHref: "/marketing-strategy",
      links: [
        { label: "Campaign strategy", href: "/campaign-strategy-services" },
      ],
    },
  },
];

const mainLinks = [
  { label: "Our work", href: "/our-work" },
  { label: "Our people", href: "/our-creative-talent" },
  { label: "About us", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Trust center", href: "/trust-center" },
  { label: "Superside vs. Alternatives", href: "/compare" },
  { label: "Forrester TEI Report", href: "/reports" },
  { label: "BrandBrain", href: "/brandbrain" },
];

const learnLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Events & Summits", href: "/events" },
  { label: "Guides", href: "/guides" },
  { label: "Reports", href: "/reports" },
  { label: "Customer Stories", href: "/our-work" },
  { label: "Playbooks", href: "/playbooks" },
  { label: "Help Center", href: "/knowledge" },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--surface-subtle))] border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0">

            {/* Left: Services */}
            <div className="lg:pr-14">
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-8">Services</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8">
                {serviceGroups.map((group) => (
                  <div key={group.title}>
                    <Link
                      to={group.titleHref}
                      className="inline-flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary transition-colors mb-4 group/title"
                    >
                      <span className="heading-italic">{group.title}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/title:opacity-100 transition-opacity" />
                    </Link>
                    <ul className="space-y-2.5">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href} className="text-sm text-foreground/50 hover:text-primary transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {group.extra && (
                      <div className="mt-6">
                        <Link
                          to={group.extra.titleHref}
                          className="inline-flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary transition-colors mb-3 group/title"
                        >
                          <span className="heading-italic">{group.extra.title}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/title:opacity-100 transition-opacity" />
                        </Link>
                        <ul className="space-y-2.5">
                          {group.extra.links.map((link) => (
                            <li key={link.href}>
                              <Link to={link.href} className="text-sm text-foreground/50 hover:text-primary transition-colors">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block bg-border/20" />

            {/* Right: Navigation */}
            <div className="lg:pl-14">
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-8">Navigation</h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-4">Main</h4>
                  <ul className="space-y-2.5">
                    {mainLinks.map((link) => (
                      <li key={link.href}>
                        <Link to={link.href} className="text-sm text-foreground/50 hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-4">Learn</h4>
                  <ul className="space-y-2.5">
                    {learnLinks.map((link) => (
                      <li key={link.href}>
                        <Link to={link.href} className="text-sm text-foreground/50 hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              <span className="heading-italic text-[28px]">S</span>uperside
            </span>
          </div>
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Superside. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy policy</Link>
            <Link to="/terms-of-use" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of use</Link>
            <Link to="/trust-center" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Status page</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
