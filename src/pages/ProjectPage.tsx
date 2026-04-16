import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { getProjectBySlug, projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <Layout title="Project Not Found">
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/our-work" className="text-primary hover:underline">Back to Our Work</Link>
        </div>
      </Layout>
    );
  }

  const related = projects.filter(p => p.slug !== project.slug && p.category === project.category).slice(0, 3);
  const { ref, inView } = useInView();

  return (
    <Layout title={project.title} description={project.summary}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-hero" />
        <div className="section-padding pt-32 lg:pt-44 pb-16 lg:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            <Link to="/our-work" className="text-sm text-primary hover:underline mb-8 inline-block">← Back to Our Work</Link>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="badge-pill">{project.category}</span>
                  <span className="text-xs text-muted-foreground">{project.type}</span>
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-6">{project.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.summary}</p>
              </div>
              <div className="lg:w-1/2">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border/30">
                  <img src={project.imageSrc} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Content */}
      <section className="section-padding py-16 lg:py-24" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-border/30">
            <h2 className="text-2xl font-bold text-foreground mb-8">Deliverables</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.deliverables.map((d, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[hsl(var(--surface-elevated))] border border-border/20">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-sm text-foreground/85">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          {project.galleryImages.length > 0 && (
            <div className="mt-16 grid grid-cols-2 gap-4">
              {project.galleryImages.map((img, i) => (
                <div key={i} className="aspect-[16/10] rounded-xl overflow-hidden border border-border/20">
                  <img src={img} alt={`${project.title} detail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 pt-16 border-t border-border/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">Outcome</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{project.outcome}</p>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding py-16 lg:py-24 bg-[hsl(var(--surface-subtle))]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-10">Related projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(p => (
                <Link key={p.slug} to={`/projects/${p.slug}`} className="group block">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden border border-border/30 mb-4 group-hover:border-primary/30 transition-colors">
                    <img src={p.imageSrc} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <span className="text-xs text-primary font-semibold">{p.type}</span>
                  <h3 className="text-base font-bold text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={<>Your brand could be <span className="heading-italic">next</span></>}
        description="Book a demo to see what The North can create for your team."
        variant="split"
      />
    </Layout>
  );
}
