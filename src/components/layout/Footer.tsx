import { Link } from "react-router-dom";
import { footerLinks } from "@/data/navigation";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const linkGroups = Object.values(footerLinks);

  return (
    <footer className="bg-[hsl(var(--surface-subtle))] border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-20 lg:py-28 border-b border-border/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Ready to fuel your <span className="heading-italic">creative growth?</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Join 500+ companies scaling their creative with Superside.
              </p>
            </div>
            <Link to="/pricing" className="btn-lime-lg group shrink-0">
              Book a demo
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Link Grid */}
        <div className="py-14 lg:py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70 mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors"
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
        <div className="py-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground tracking-tight">
              <span className="heading-italic">S</span>uperside
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms-of-use" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link to="/trust-center" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Trust Center</Link>
          </div>
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Superside. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
