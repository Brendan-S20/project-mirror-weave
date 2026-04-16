import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";

const reviewData = [
  { rating: 5, title: "Game-changer for our marketing team", text: "The quality and consistency have been incredible. The North feels like an extension of our team.", author: "VP Marketing, SaaS Company", platform: "G2" },
  { rating: 5, title: "Scaled our creative 5x", text: "We went from a 3-person design team to handling enterprise-level creative output. The AI-powered workflows are next level.", author: "Creative Director, Tech Startup", platform: "G2" },
  { rating: 5, title: "Best creative partner we've had", text: "After trying agencies and freelancers, The North is the first solution that actually scaled with our growth.", author: "CMO, E-commerce Brand", platform: "Trustpilot" },
  { rating: 5, title: "Consistent quality at speed", text: "Every deliverable meets our brand standards. The dedicated team really learns your brand.", author: "Head of Design, FinTech", platform: "G2" },
  { rating: 5, title: "ROI speaks for itself", text: "We cut our creative costs by 60% while tripling our output. The numbers don't lie.", author: "Director of Growth, DTC Brand", platform: "Trustpilot" },
  { rating: 4, title: "Excellent for high-volume needs", text: "Perfect for teams that need a lot of creative quickly without sacrificing quality.", author: "Marketing Manager, Enterprise", platform: "G2" },
];

export default function Reviews() {
  return (
    <Layout title="Reviews" description="See what 500+ enterprise clients say about working with The North.">
      <HeroSection
        tagline="Reviews"
        title={<>Don't take our word for it. <span className="heading-italic">Take theirs.</span></>}
        description="See what 500+ enterprise clients say about scaling their creative with The North."
        variant="centered"
      />
      <section className="section-padding py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewData.map((review, i) => (
            <div key={i} className="card-elevated p-8">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-primary text-sm">★</span>
                ))}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{review.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{review.author}</span>
                <span className="text-xs text-primary font-medium">{review.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <TestimonialSection title="Featured testimonials" />
      <CTASection title={<>Join 500+ happy <span className="heading-italic">customers</span></>} variant="banner" />
    </Layout>
  );
}
