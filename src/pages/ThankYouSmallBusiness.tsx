import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ThankYouSmallBusiness() {
  return (
    <Layout title="Thank You" description="We've received your request and will be in touch shortly.">
      <section className="relative overflow-hidden gradient-mesh-hero min-h-[80vh] flex items-center">
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="section-padding py-28 lg:py-44 relative z-10 w-full">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-8 animate-fade-up">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-display text-foreground mb-6 animate-fade-up" style={{ animationDelay: '80ms' }}>
              We'll be in contact shortly
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed animate-fade-up" style={{ animationDelay: '160ms' }}>
              Great things start small. We help growing businesses get access to the same quality creative that larger teams rely on, without the overhead. Let's find the right fit for your team.
            </p>
            <p className="text-base text-muted-foreground max-w-md mx-auto mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Expect to hear from us within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-up" style={{ animationDelay: '240ms' }}>
              <Link to="/our-work" className="btn-lime group">
                Explore our work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/pricing" className="btn-outline-light">View pricing</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    </Layout>
  );
}
