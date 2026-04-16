import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ThankYou() {
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
              Thank you for reaching out
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '160ms' }}>
              We've received your request and a member of our team will be in contact within 24 hours. In the meantime, explore what we can do for you.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-up" style={{ animationDelay: '240ms' }}>
              <Link to="/our-work" className="btn-lime group">
                Explore our work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/blog" className="btn-outline-light">
                Read insights
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    </Layout>
  );
}
