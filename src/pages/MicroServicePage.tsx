import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import FeatureSection from "@/components/sections/FeatureSection";
import { getServiceBySlug } from "@/data/services";
import { ArrowRight, Check } from "lucide-react";

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
    <Layout title={`${micro.title} | The North`} description={micro.description}>
      <HeroSection
        tagline={
          <Link to={`/${service.slug}`} className="hover:text-primary transition-colors">
            ← {service.title}
          </Link>
        }
        title={<>{micro.title}</>}
        description={micro.description}
        variant="centered"
      />

      <FeatureSection
        title={<>What's <span className="heading-italic">included</span></>}
        features={service.benefits.map((b) => ({ title: b.title, description: b.description }))}
        columns={3}
      />

      <section className="section-padding py-20 lg:py-28 relative">
        <div className="absolute inset-0 gradient-mesh-section" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="card-premium p-10 lg:p-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Outcomes you can <span className="heading-italic">measure</span>
            </h2>
            <p className="text-muted-foreground mb-8">Every engagement is delivered as a complete system, not a deliverable.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm text-foreground/80">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {otherMicros.length > 0 && (
        <section className="section-padding py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Other {service.title} services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherMicros.map((m) => (
                <Link
                  key={m.slug}
                  to={`/${service.slug}/${m.slug}`}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-border/30 hover:border-primary/30 hover:bg-[hsl(var(--surface-elevated))] transition-all"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{m.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary ml-auto shrink-0 transition-all mt-1" />
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
