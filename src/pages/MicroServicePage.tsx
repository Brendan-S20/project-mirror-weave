import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { getServiceBySlug } from "@/data/services";
import { ArrowRight, Check, AlertTriangle, Wrench, Sparkles, Target, Users } from "lucide-react";

export default function MicroServicePage() {
  const { serviceSlug, microSlug } = useParams<{ serviceSlug: string; microSlug: string }>();
  const service = getServiceBySlug(serviceSlug || "");
  const micro = service?.microServices.find((m) => m.slug === microSlug);

  if (!service || !micro) {
    return (
      <Layout title="Service not found">
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service not found</h1>
          <Link to="/services" className="text-primary">Back to all services</Link>
        </div>
      </Layout>
    );
  }

  const otherMicros = service.microServices.filter((m) => m.slug !== micro.slug);

  return (
    <Layout title={micro.title} description={`${micro.description} ${micro.solves}`.slice(0, 158)}>
      <HeroSection
        tagline={service.title}
        title={<>{micro.title}</>}
        description={micro.description}
        variant="centered"
      />
      <div className="-mt-10 mb-2 text-center">
        <Link to={`/${service.slug}`} className="text-sm text-primary hover:underline">
          ← Back to {service.title}
        </Link>
      </div>

      {/* Problem */}
      <section className="section-padding py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="card-premium p-10 lg:p-14 border-l-4 border-l-primary/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">The problem</h2>
            </div>
            <p className="text-2xl lg:text-3xl font-semibold text-foreground leading-snug">
              {micro.problem}
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding py-16 lg:py-20 relative">
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              What we <span className="heading-italic">do</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {micro.whatWeDo.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-xl border border-border/30 bg-[hsl(var(--surface-elevated))]">
                <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                <span className="text-sm lg:text-base text-foreground/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this solves */}
      <section className="section-padding py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="card-premium p-10 lg:p-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">What this solves</h2>
            </div>
            <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed">
              {micro.solves}
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding py-16 lg:py-20 relative">
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Outcomes you can <span className="heading-italic">measure</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {micro.outcomes.map((o) => (
              <div key={o} className="card-elevated-hover p-6 lg:p-8">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base lg:text-lg font-medium text-foreground/90 leading-snug">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Who it's <span className="heading-italic">for</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {micro.whoFor.map((w) => (
              <div key={w} className="p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
                <p className="text-sm lg:text-base text-foreground/85">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related micro services */}
      {otherMicros.length > 0 && (
        <section className="section-padding py-16 lg:py-20 relative">
          <div className="absolute inset-0 gradient-mesh-section" />
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Related {service.title} services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherMicros.map((mm) => (
                <Link
                  key={mm.slug}
                  to={`/${service.slug}/${mm.slug}`}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-border/30 hover:border-primary/30 hover:bg-[hsl(var(--surface-elevated))] transition-all"
                >
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {mm.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{mm.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary shrink-0 transition-all mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={<>Start a <span className="heading-italic">{micro.title.toLowerCase()}</span> project</>}
        description="Tell us about your current setup and goals. We'll come back with a clear scope and plan."
        variant="banner"
      />
    </Layout>
  );
}
