import { useState } from "react";
import { Link } from "react-router-dom";
import { mainNavItems, type NavItem } from "@/data/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const MegaMenu = ({ item, onClose }: { item: NavItem; onClose: () => void }) => {
  if (!item.children) return null;
  return (
    <div className="absolute top-full left-0 w-full bg-card border-b border-border/50 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-3 gap-10">
          {item.children.map((group, i) => (
            <div key={i}>
              {group.title && (
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {group.title}
                </h3>
              )}
              <ul className="space-y-2">
                {group.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className="group flex flex-col py-1.5 rounded-lg transition-colors hover:text-primary"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                      {link.description && (
                        <span className="text-xs text-muted-foreground">{link.description}</span>
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            <span className="heading-italic">S</span>uperside
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainNavItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/pricing" className="btn-lime text-sm">
            Book a demo
          </Link>
          <Link
            to="#"
            className="btn-outline-light text-sm"
          >
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 space-y-4">
            {mainNavItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-foreground py-2"
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
                        className="block text-sm text-muted-foreground py-1 hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3 border-t border-border">
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
