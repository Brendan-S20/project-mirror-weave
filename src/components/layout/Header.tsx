import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { mainNavItems, type NavItem, type NavGroup } from "@/data/navigation";
import { ChevronDown, Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

/* ─── Services Mega Menu ─── */
const ServicesMega = ({ groups, onClose }: { groups: NavGroup[]; onClose: () => void }) => {
  // Split into columns: creative | specialized | AI + marketing
  const creative = groups.find(g => g.title.toLowerCase().includes("creative design"));
  const specialized = groups.find(g => g.title.toLowerCase().includes("specialized"));
  const ai = groups.find(g => g.title.toLowerCase().includes("ai"));
  const marketing = groups.find(g => g.title.toLowerCase().includes("marketing"));

  const renderGroup = (group: NavGroup | undefined) => {
    if (!group) return null;
    return (
      <div>
        <Link
          to={group.titleHref || "#"}
          onClick={onClose}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 text-primary px-4 py-2 text-sm font-semibold mb-6 hover:bg-primary/25 transition-colors group/pill"
        >
          <span className="heading-italic">{group.title}</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/pill:opacity-100 transition-opacity" />
        </Link>
        <div className="space-y-0">
          {group.items.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="group/item flex items-center justify-between py-3 border-b border-border/15 last:border-0 hover:border-border/30 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                    {link.label}
                  </span>
                  {link.isNew && (
                    <span className="inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground leading-none">
                      New
                    </span>
                  )}
                </div>
                {link.description && (
                  <span className="text-xs text-muted-foreground mt-0.5 block">{link.description}</span>
                )}
              </div>
              {link.icon && (
                <link.icon className="w-5 h-5 text-muted-foreground/40 group-hover/item:text-primary/60 transition-colors shrink-0 ml-4" />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-2xl border-b border-border/20 shadow-[0_30px_80px_-20px_hsl(var(--dark-green)/0.7)] z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-3 gap-14">
          {renderGroup(creative)}
          {renderGroup(specialized)}
          <div className="space-y-10">
            {renderGroup(ai)}
            {renderGroup(marketing)}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Why Us Mega Menu ─── */
const WhyUsMega = ({ groups, onClose }: { groups: NavGroup[]; onClose: () => void }) => {
  const featuredCards = [
    { title: "Our creative talent", desc: "Meet your dedicated team", href: "/our-creative-talent" },
    { title: "AI excellence", desc: "Your shortcut to AI's creative advantage", href: "/ai-excellence" },
    { title: "Our technology", desc: "The tech powering your creative edge", href: "/our-technology" },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-2xl border-b border-border/20 shadow-[0_30px_80px_-20px_hsl(var(--dark-green)/0.7)] z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Featured cards row */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {featuredCards.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              onClick={onClose}
              className="group/card block"
            >
              <div className="aspect-[16/9] rounded-xl bg-[hsl(var(--surface-elevated))] border border-border/30 mb-4 overflow-hidden relative group-hover/card:border-primary/30 transition-colors">
                <div className="absolute inset-0 gradient-mesh" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <h4 className="text-sm font-bold text-foreground group-hover/card:text-primary transition-colors">{card.title}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{card.desc}</p>
            </Link>
          ))}
        </div>

        {/* Additional links */}
        <div className="grid grid-cols-2 gap-x-14 gap-y-0 border-t border-border/20 pt-6">
          {groups.flatMap(g => g.items).filter(l => !featuredCards.some(c => c.href === l.href)).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="group/item flex items-center justify-between py-2.5 border-b border-border/10 last:border-0"
            >
              <span className="text-sm font-medium text-foreground/80 group-hover/item:text-primary transition-colors">{link.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover/item:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Resources Mega Menu ─── */
const ResourcesMega = ({ groups, onClose }: { groups: NavGroup[]; onClose: () => void }) => {
  const recentPosts = blogPosts.slice(0, 2);
  const links = groups[0]?.items || [];

  return (
    <div className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-2xl border-b border-border/20 shadow-[0_30px_80px_-20px_hsl(var(--dark-green)/0.7)] z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-2 gap-16">
          {/* Left: resource links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60 mb-5">Our resources</p>
            <div className="space-y-0">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className="group/item flex items-center justify-between py-3.5 border-b border-border/15 last:border-0"
                >
                  <div>
                    <span className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">{link.label}</span>
                    {link.description && (
                      <span className="text-xs text-muted-foreground block mt-0.5">{link.description}</span>
                    )}
                  </div>
                  {link.icon && (
                    <link.icon className="w-5 h-5 text-muted-foreground/30 group-hover/item:text-primary/60 transition-colors shrink-0" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: latest media */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60 mb-5">Latest media</p>
            <div className="grid grid-cols-2 gap-5">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  onClick={onClose}
                  className="group/post block"
                >
                  <div className="aspect-[16/10] rounded-lg bg-[hsl(var(--surface-elevated))] border border-border/30 mb-3 overflow-hidden relative group-hover/post:border-primary/30 transition-colors">
                    <div className="absolute inset-0 gradient-mesh" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground/20 text-xs font-semibold">{post.category}</span>
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground group-hover/post:text-primary transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Header ─── */
export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string, hasChildren: boolean) => {
    if (!hasChildren) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const renderMegaMenu = (item: NavItem) => {
    if (!item.children) return null;
    switch (item.megaVariant) {
      case "services":
        return <ServicesMega groups={item.children} onClose={() => setOpenMenu(null)} />;
      case "whyus":
        return <WhyUsMega groups={item.children} onClose={() => setOpenMenu(null)} />;
      case "resources":
        return <ResourcesMega groups={item.children} onClose={() => setOpenMenu(null)} />;
      default:
        return null;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-2xl border-b border-border/15 shadow-[0_1px_30px_hsl(var(--dark-green)/0.4)]' : 'bg-background/80 backdrop-blur-xl'}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-[22px] font-bold tracking-tight text-foreground">
            <span className="heading-italic text-[26px]">S</span>uperside
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {mainNavItems.map((item) => {
            const isOpen = openMenu === item.label;
            const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + "/");
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label, !!item.children)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-colors rounded-full ${isActive || isOpen ? "text-foreground" : "text-foreground/55 hover:text-foreground/80"}`}
                >
                  {item.label}
                  {item.children && <ChevronDown className={`w-3 h-3 opacity-40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />}
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link to="/pricing" className="btn-lime text-[13px] px-6 py-2.5 group">
            Book a demo
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center justify-center rounded-full border border-foreground/20 text-foreground/70 font-medium px-5 py-2.5 text-[13px] transition-all hover:bg-foreground/5 hover:text-foreground hover:border-foreground/40">
            Sign in
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Desktop Mega Menus */}
      {mainNavItems.map((item) =>
        item.children && openMenu === item.label ? (
          <div
            key={item.label}
            onMouseEnter={() => handleMouseEnter(item.label, true)}
            onMouseLeave={handleMouseLeave}
          >
            {renderMegaMenu(item)}
          </div>
        ) : null
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-border max-h-[85vh] overflow-y-auto animate-fade-in">
          <div className="px-6 py-8 space-y-5">
            {mainNavItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-bold text-foreground py-2"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1 mt-1">
                    {item.children.flatMap((g) => g.items).slice(0, 6).map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-muted-foreground py-1.5 hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-border/30 space-y-3">
              <Link to="/pricing" className="btn-lime w-full text-center text-sm" onClick={() => setMobileOpen(false)}>
                Book a demo
              </Link>
              <Link to="/pricing" className="btn-outline-light w-full text-center text-sm" onClick={() => setMobileOpen(false)}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
