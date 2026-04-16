import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ImageTextSplit from "@/components/sections/ImageTextSplit";
import { Link, useParams } from "react-router-dom";
import { guides, playbooks, knowledgeArticles, events, reports } from "@/data/blogPosts";

export function LearnIndex() {
  return (
    <Layout title="Learn" description="Resources, guides, and insights for creative teams.">
      <HeroSection tagline="Resources" title={<>Learn from the <span className="heading-italic">best</span></>} description="Explore our library of guides, playbooks, reports, and more." variant="centered" />
      <section className="section-padding py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Blog", href: "/blog", desc: "Insights and trends", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80" },
            { title: "Guides", href: "/guides", desc: "In-depth guides", img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&q=80" },
            { title: "Playbooks", href: "/playbooks", desc: "Tactical playbooks", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" },
            { title: "Reports", href: "/reports", desc: "Industry research", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
            { title: "Knowledge Base", href: "/knowledge", desc: "Tips and tutorials", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80" },
            { title: "Events", href: "/events", desc: "Webinars and summits", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" },
          ].map((r) => (
            <Link key={r.href} to={r.href} className="card-elevated-hover block overflow-hidden group">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img src={r.img} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

const resourceImages: Record<string, string> = {
  "creative-partnerships": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  "design-leadership": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  "video-marketing": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  "ai-for-creatives": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  "brand-building": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
  "social-media-design": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  "how-to-lower-cac": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "how-to-scale-ad-creative": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  "how-to-measure-creativity": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "kerning-in-illustrator": "https://images.unsplash.com/photo-1618005198919-d3d4b0a92ead?w=800&q=80",
  "kerning-in-ms-word": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
  "kerning-in-indesign": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
  "creative-efficiency-report": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "the-practical-ai-report": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
};

const resourceContent: Record<string, string[]> = {
  "creative-partnerships": [
    "Creative partnerships are the foundation of scalable marketing operations. When done right, they provide the flexibility to adapt to changing needs while maintaining the consistency that builds brand equity.",
    "The key to a successful creative partnership lies in alignment. Your creative partner needs to understand your brand, your audience, and your goals. This goes beyond sharing a brand guide. It requires ongoing communication, shared workflows, and mutual accountability.",
    "Start by defining clear expectations. What does success look like? How will work be briefed, reviewed, and delivered? What are the escalation paths when issues arise? These conversations upfront save significant time and friction later.",
    "The best partnerships evolve over time. As your partner learns your brand, they should get faster, produce higher-quality work, and proactively suggest improvements. If your partnership is not improving with time, something is misaligned.",
  ],
  "design-leadership": [
    "Design leadership is about more than managing designers. It is about creating the systems, culture, and strategic alignment that enable great creative work at scale.",
    "As design teams grow, the biggest challenge shifts from doing the work to enabling the work. Leaders need to build frameworks that maintain quality while increasing throughput. This means investing in design systems, clear processes, and talent development.",
    "Effective design leaders bridge the gap between business objectives and creative execution. They translate strategic goals into creative direction that inspires teams while staying grounded in measurable outcomes.",
    "The most successful design organizations operate with a mix of strategic oversight and creative autonomy. Leaders set the vision and guardrails, then trust their teams to execute with excellence.",
  ],
  "video-marketing": [
    "Video is the most engaging content format across every digital platform. Yet many teams struggle to produce video content consistently due to production complexity and cost.",
    "The key to scalable video marketing is building repeatable frameworks. Develop templates for common video types: product demos, testimonials, explainers, and social clips. Each template should define the visual style, pacing, and production requirements.",
    "Start with formats that deliver the highest impact with the lowest production overhead. Screen recordings with professional graphics, motion graphics, and repurposed long-form content can all produce high-quality video without a full production crew.",
    "Measure video performance holistically. Views matter, but watch time, engagement rate, and downstream conversion are the metrics that connect video investment to business outcomes.",
  ],
};

function ResourceListPage({ title, description, items, basePath, image }: { title: string; description: string; items: { slug: string; title: string; description: string }[]; basePath: string; image?: string }) {
  return (
    <Layout title={title} description={description}>
      <section className="section-padding py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-14">
            <div className="lg:w-1/2">
              <span className="badge-pill mb-6">{title}</span>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-4">{title}</h1>
              <p className="text-lg text-muted-foreground">{description}</p>
            </div>
            {image && (
              <div className="lg:w-1/2">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border/30">
                  <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            )}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link key={item.slug} to={`${basePath}/${item.slug}`} className="card-elevated-hover block overflow-hidden group">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={resourceImages[item.slug] || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={<>Want to learn more? <span className="heading-italic">Let's talk.</span></>} />
    </Layout>
  );
}

function ResourceDetailPage({ basePath, items, category }: { basePath: string; items: { slug: string; title: string; description: string }[]; category: string }) {
  const { slug } = useParams<{ slug: string }>();
  const item = items.find((i) => i.slug === slug);
  if (!item) return <Layout title="Not Found"><div className="section-padding py-32 text-center"><h1 className="text-4xl font-bold text-foreground">Not found</h1></div></Layout>;

  const content = resourceContent[item.slug] || [
    `${item.description} This ${category.toLowerCase()} explores the strategies, frameworks, and practical advice that creative teams need to operate at their best.`,
    "Strong creative operations require a balance of process and flexibility. Teams that invest in scalable systems early on find themselves better equipped to handle increased demand without sacrificing quality.",
    "The most effective creative teams share several characteristics: clear communication channels, well-defined approval workflows, consistent brand governance, and a culture that values both speed and craft.",
    "Whether you are building creative operations from scratch or optimizing an existing workflow, the principles in this resource will help you make informed decisions that drive better creative outcomes.",
  ];

  const heroImage = resourceImages[item.slug] || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80";

  return (
    <Layout title={item.title} description={item.description}>
      <section className="section-padding py-24 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <Link to={basePath} className="text-sm text-primary hover:underline mb-6 block">← Back to {category}</Link>
          <span className="badge-pill mb-4">{category}</span>
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">{item.title}</h1>
          <p className="text-lg text-muted-foreground mb-12">{item.description}</p>
          <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-12 border border-border/30">
            <img src={heroImage} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="space-y-6">
            {content.map((p, i) => (
              <p key={i} className="text-foreground/90 leading-relaxed text-lg">{p}</p>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={<>Put these insights into <span className="heading-italic">action</span></>} />
    </Layout>
  );
}

export function GuidesIndex() { return <ResourceListPage title="Guides" description="In-depth guides for creative teams." items={guides} basePath="/guides" image="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80" />; }
export function GuidePage() { return <ResourceDetailPage basePath="/guides" items={guides} category="Guides" />; }
export function PlaybooksIndex() { return <ResourceListPage title="Playbooks" description="Tactical playbooks to drive results." items={playbooks} basePath="/playbooks" image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" />; }
export function PlaybookPage() { return <ResourceDetailPage basePath="/playbooks" items={playbooks} category="Playbooks" />; }
export function KnowledgeIndex() { return <ResourceListPage title="Knowledge Base" description="Tips, tutorials, and how-tos." items={knowledgeArticles} basePath="/knowledge" image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" />; }
export function KnowledgePage() { return <ResourceDetailPage basePath="/knowledge" items={knowledgeArticles} category="Knowledge Base" />; }
export function ReportsIndex() { return <ResourceListPage title="Reports" description="Industry research and data." items={reports} basePath="/reports" image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" />; }
export function ReportPage() { return <ResourceDetailPage basePath="/reports" items={reports} category="Reports" />; }

export function EventsIndex() {
  const eventImages: Record<string, string> = {
    "creative-leadership-summit": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    "smart-tools-for-creative-teams": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
  };

  return (
    <Layout title="Events" description="Webinars, summits, and live events from The North.">
      <section className="section-padding py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="badge-pill mb-6">Events</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-4">Events</h1>
            <p className="text-lg text-muted-foreground">Webinars, summits, and live conversations with creative leaders.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <Link key={event.slug} to={`/events/${event.slug}`} className="card-elevated-hover block overflow-hidden group">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={eventImages[event.slug] || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1">{event.date}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

const eventDetails: Record<string, { audience: string; topics: string[]; overview: string; expect: string[] }> = {
  "creative-leadership-summit": {
    audience: "Creative directors, VPs of marketing, design leads, and creative operations managers at scaling companies.",
    overview: "The Creative Leadership Summit brings together creative and marketing leaders to share strategies for building high-performing creative organizations. Through panel discussions, case studies, and interactive workshops, attendees gain actionable frameworks for scaling creative operations, improving team performance, and navigating the evolving creative landscape.",
    topics: [
      "Building scalable creative operations from the ground up",
      "Managing creative quality at high volumes",
      "The future of creative production and smart workflows",
      "Hiring and retaining top creative talent globally",
      "Measuring creative impact on business outcomes",
    ],
    expect: [
      "Panel discussions with experienced creative leaders",
      "Interactive workshops on creative operations frameworks",
      "Networking with peers facing similar challenges",
      "Actionable takeaways you can implement immediately",
      "Access to recordings and supplementary materials",
    ],
  },
  "smart-tools-for-creative-teams": {
    audience: "Creative professionals, design managers, marketing teams, and anyone interested in how advanced tools are reshaping creative production.",
    overview: "This on-demand session explores how advanced tools are being used in real creative workflows today. No hype, no fear. Just practical insights on where technology adds genuine value to creative production, where human judgment remains essential, and how to adopt smart workflows without disrupting your team.",
    topics: [
      "Where smart tools genuinely accelerate creative work",
      "Common adoption pitfalls and how to avoid them",
      "Maintaining quality and brand consistency with technology",
      "Building team confidence with new creative tools",
      "Practical workflow integration strategies",
    ],
    expect: [
      "A grounded, honest look at technology in creative work",
      "Real examples from production teams using smart tools",
      "Framework for evaluating which tools to adopt",
      "Guidance on team training and change management",
      "Q&A section addressing common concerns",
    ],
  },
};

export function EventPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);
  if (!event) return <Layout title="Not Found"><div className="section-padding py-32 text-center"><h1 className="text-4xl font-bold text-foreground">Event not found</h1></div></Layout>;

  const details = eventDetails[event.slug];
  const eventImage = slug === "creative-leadership-summit"
    ? "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    : "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80";

  return (
    <Layout title={event.title} description={event.description}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-hero" />
        <div className="section-padding pt-32 lg:pt-44 pb-16 lg:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <span className="inline-flex items-center rounded-full bg-primary/20 text-primary text-xs font-semibold px-3 py-1 mb-6">{event.date}</span>
                <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-6">{event.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{event.description}</p>
                {details && <p className="text-sm text-muted-foreground"><strong className="text-foreground">Who should attend:</strong> {details.audience}</p>}
              </div>
              <div className="lg:w-1/2">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border/30">
                  <img src={eventImage} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {details && (
        <>
          <section className="section-padding py-16 lg:py-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Event Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-16">{details.overview}</p>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">Topics Covered</h3>
                  <ul className="space-y-4">
                    {details.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="text-foreground/85">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">What to Expect</h3>
                  <ul className="space-y-4">
                    {details.expect.map((e, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="text-foreground/85">{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <CTASection title={<>Don't miss our next <span className="heading-italic">event</span></>} description="Register to get notified about upcoming events and access recordings." />
    </Layout>
  );
}

export function FAQPage() {
  return (
    <Layout title="FAQ" description="Frequently asked questions about The North.">
      <section className="section-padding py-24"><div className="max-w-3xl mx-auto text-center"><span className="badge-pill mb-6">FAQ</span><h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4">Frequently asked questions</h1></div></section>
      <FAQSection items={[
        { question: "What is The North?", answer: "The North is an always-on creative service that combines top global creative talent with smart workflows to deliver enterprise-grade creative at scale." },
        { question: "How does pricing work?", answer: "The North offers subscription-based pricing with predictable monthly costs. Contact our team for a custom quote based on your needs." },
        { question: "What creative services do you offer?", answer: "We offer 20+ creative specialties including design, video, animation, branding, web design, presentations, and more." },
        { question: "How fast is delivery?", answer: "Most projects are delivered significantly faster than traditional agency timelines thanks to our streamlined workflows and dedicated teams." },
        { question: "Do I get a dedicated team?", answer: "Yes. Every client gets a dedicated team of creatives and a project manager who learn your brand inside out." },
        { question: "Is there a minimum commitment?", answer: "We offer flexible engagement terms. Contact our team to discuss the best option for your needs." },
        { question: "How do you ensure quality?", answer: "Multi-layer review processes, brand consistency checks, and structured quality assurance ensure every deliverable meets expectations." },
        { question: "Can I scale up or down?", answer: "Absolutely. The North is designed to flex with your needs. Scale creative capacity up during peak periods and back down when things quiet." },
      ]} />
      <CTASection title={<>Still have questions? <span className="heading-italic">Let's talk.</span></>} />
    </Layout>
  );
}

export function PrivacyPage() {
  return (
    <Layout title="Privacy Policy" description="The North privacy policy.">
      <section className="section-padding py-24 lg:py-32"><div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>Last updated: April 2026</p>
          <p>At The North, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our services and visit our website.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Information We Collect</h2>
          <p>We collect information you provide directly, such as when you create an account, request a demo, or contact us. This may include your name, email address, company name, and job title.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">How We Use Your Information</h2>
          <p>We use your information to provide and improve our services, communicate with you, and ensure the security of our platform.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Data Retention</h2>
          <p>We retain your data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You can also object to processing or request data portability where applicable.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us through our website.</p>
        </div>
      </div></section>
    </Layout>
  );
}

export function TermsPage() {
  return (
    <Layout title="Terms of Use" description="The North terms of use.">
      <section className="section-padding py-24 lg:py-32"><div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Use</h1>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>Last updated: April 2026</p>
          <p>These Terms of Use govern your access to and use of The North's website and services. By using our services, you agree to these terms.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Use of Services</h2>
          <p>You may use our services only in compliance with these terms and all applicable laws and regulations.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Intellectual Property</h2>
          <p>All content and materials on our website are protected by intellectual property laws. Creative work produced through our services is subject to the terms of your subscription agreement.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Limitation of Liability</h2>
          <p>The North shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Governing Law</h2>
          <p>These terms are governed by applicable law. Any disputes will be resolved through the appropriate legal channels.</p>
        </div>
      </div></section>
    </Layout>
  );
}

export function TrustCenterPage() {
  return (
    <Layout title="Trust Center" description="Learn about The North's commitment to security and compliance.">
      <HeroSection tagline="Trust Center" title={<>Security and compliance <span className="heading-italic">you can trust</span></>} description="The North is committed to protecting your data with enterprise-grade security measures." variant="centered" />
      <FeatureSection title={<>Our security <span className="heading-italic">commitments</span></>} features={[
        { title: "SOC 2 Type II", description: "We maintain SOC 2 Type II compliance, independently audited annually." },
        { title: "Data Encryption", description: "All data is encrypted at rest and in transit using industry-standard protocols." },
        { title: "Access Controls", description: "Role-based access controls and SSO integration for enterprise clients." },
        { title: "GDPR Compliant", description: "We comply with GDPR and other international data protection regulations." },
      ]} columns={2} />
      <CTASection title={<>Questions about security? <span className="heading-italic">Let's talk.</span></>} />
    </Layout>
  );
}

export function BugBountyPage() {
  return (
    <Layout title="Bug Bounty Program" description="The North's responsible disclosure and bug bounty program.">
      <section className="section-padding py-24 lg:py-32"><div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Bug Bounty Program</h1>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>We value the security community's efforts in helping keep The North and our customers safe. If you have found a security vulnerability, we want to hear from you.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Scope</h2>
          <p>Our bug bounty program covers vulnerabilities in our web applications and APIs.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Responsible Disclosure</h2>
          <p>Please report vulnerabilities responsibly. We ask that you give us reasonable time to address issues before public disclosure.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Recognition</h2>
          <p>We recognize and thank researchers who help us improve our security posture. Valid reports may be eligible for recognition in our security hall of fame.</p>
        </div>
      </div></section>
    </Layout>
  );
}
