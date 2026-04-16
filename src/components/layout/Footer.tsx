import { Link } from "react-router-dom";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  const linkGroups = Object.values(footerLinks);

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-16 lg:py-20 border-b border-border/30">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to fuel your <span className="heading-italic">creative growth?</span>
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Join 500+ companies scaling their creative with Superside.
              </p>
            </div>
            <Link to="/pricing" className="btn-lime shrink-0">
              Book a demo
            </Link>
          </div>
        </div>

        {/* Link Grid */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              <span className="heading-italic">S</span>uperside
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Superside. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
