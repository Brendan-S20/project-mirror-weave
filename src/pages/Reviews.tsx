import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";

const reviewData = [
  { rating: 5, title: "Game-changer for our marketing team", text: "The quality and consistency have been incredible. The North feels like an extension of our team.", author: "VP Marketing, SaaS Company", platform: "Client Review" },
  { rating: 5, title: "Scaled our creative significantly", text: "We went from a small design team to handling much larger creative output. The streamlined workflows are a real advantage.", author: "Creative Director, Tech Startup", platform: "Client Review" },
  { rating: 5, title: "Best creative partner we have had", text: "After trying agencies and freelancers, The North is the first solution that actually scaled with our growth.", author: "CMO, E-commerce Brand", platform: "Client Review" },
  { rating: 5, title: "Consistent quality at speed", text: "Every deliverable meets our brand standards. The dedicated team really learns your brand.", author: "Head of Design, FinTech", platform: "Client Review" },
  { rating: 5, title: "Clear value for the investment", text: "We reduced our creative costs meaningfully while increasing our output. The numbers speak for themselves.", author: "Director of Growth, DTC Brand", platform: "Client Review" },
  { rating: 4, title: "Excellent for high-volume needs", text: "Perfect for teams that need a lot of creative quickly without sacrificing quality.", author: "Marketing Manager, Enterprise", platform: "Client Review" },
];

export default function Reviews() {
  return (
    <Layout title="Reviews" description="See what clients say about working with The North.">
      <HeroSection
        tagline="Reviews"
        title={<>Don't take our word for it. <span className="heading-italic">Take theirs.</span></>}
        description="See what clients say about scaling their creative with The North."
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
      <CTASection title={<>Join our growing list of <span className="heading-italic">happy clients</span></>} variant="banner" />
    </Layout>
  );
}
