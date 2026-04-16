import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { mainNavItems, type NavItem } from "@/data/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const MegaMenu = ({ item, onClose }: { item: NavItem; onClose: () => void }) => {
  if (!item.children) return null;
  return (
    <div className="absolute top-full left-0 w-full bg-card/98 backdrop-blur-2xl border-b border-border/30 shadow-[0_20px_60px_-15px_hsl(var(--dark-green)/0.5)] z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-3 gap-12">
          {item.children.map((group, i) => (
            <div key={i}>
              {group.title && (
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/60 mb-5">
                  {group.title}
                </h3>
              )}
              <ul className="space-y-1">
                {group.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className="group flex flex-col py-2 px-3 -mx-3 rounded-lg transition-all hover:bg-[hsl(var(--surface-elevated))]"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                      {link.description && (
                        <span className="text-xs text-muted-foreground/70 mt-0.5">{link.description}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-2xl border-b border-border/20 shadow-[0_1px_20px_hsl(var(--dark-green)/0.3)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            <span className="heading-italic">S</span>uperside
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + "/");
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-[13px] font-medium transition-colors rounded-full ${isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"}`}
                >
                  {item.label}
                  {item.children && <ChevronDown className={`w-3 h-3 opacity-40 transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`} />}
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/pricing" className="btn-lime text-[13px] px-6 py-2.5 group">
            Book a demo
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
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

      {/* Desktop Mega Menu */}
      {mainNavItems.map((item) =>
        item.children && openMenu === item.label ? (
          <div
            key={item.label}
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <MegaMenu item={item} onClose={() => setOpenMenu(null)} />
          </div>
        ) : null
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-border max-h-[80vh] overflow-y-auto animate-fade-in">
          <div className="px-6 py-8 space-y-5">
            {mainNavItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-semibold text-foreground py-2"
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
                        className="block text-sm text-muted-foreground py-1.5 hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-border">
              <Link to="/pricing" className="btn-lime w-full text-center text-sm" onClick={() => setMobileOpen(false)}>
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
