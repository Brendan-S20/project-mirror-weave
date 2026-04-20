import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logoStacked from "@/assets/logo-stacked.png";
import { footerLinks, APP_LOGIN_URL } from "@/data/navigation";
import { pillars, getServicesByPillar, type Service } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--surface-subtle))] border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          {/* Services by pillar */}
          <div className="mb-14">
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-8">Services</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {pillars.map((pillar) => {
                const items = getServicesByPillar(pillar.slug as Service["pillar"]);
                return (
                  <div key={pillar.slug}>
                    <Link
                      to={`/services/${pillar.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary transition-colors mb-4 group/title"
                    >
                      <span>{pillar.title}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/title:opacity-100 transition-opacity" />
                    </Link>
                    <ul className="space-y-2.5">
                      {items.map((s) => (
                        <li key={s.slug}>
                          <Link to={`/${s.slug}`} className="text-sm text-foreground/55 hover:text-primary transition-colors">
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 pt-12 border-t border-border/20">
            {(["company", "resources", "compare", "legal"] as const).map((key) => {
              const group = footerLinks[key];
              return (
                <div key={key}>
                  <h4 className="text-sm font-bold text-foreground mb-4">{group.title}</h4>
                  <ul className="space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link to={link.href} className="text-sm text-foreground/55 hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoStacked} alt="The North" className="h-10 invert" />
          </div>
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} The North. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href={APP_LOGIN_URL} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Log in
            </a>
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms-of-use" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link to="/trust-center" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Trust</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
