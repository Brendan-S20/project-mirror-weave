import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { Link, useParams } from "react-router-dom";
import { guides, playbooks, knowledgeArticles, events, reports } from "@/data/blogPosts";

export function LearnIndex() {
  return (
    <Layout title="Learn" description="Resources, guides, and insights for creative teams.">
      <HeroSection tagline="Resources" title={<>Learn from the <span className="heading-italic">best</span></>} description="Explore our library of guides, playbooks, reports, and more." variant="centered" />
      <section className="section-padding py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Blog", href: "/blog", desc: "Insights and trends" },
            { title: "Guides", href: "/guides", desc: "In-depth guides" },
            { title: "Playbooks", href: "/playbooks", desc: "Tactical playbooks" },
            { title: "Reports", href: "/reports", desc: "Industry research" },
            { title: "Knowledge Base", href: "/knowledge", desc: "Tips and tutorials" },
            { title: "Events", href: "/events", desc: "Webinars and summits" },
          ].map((r) => (
            <Link key={r.href} to={r.href} className="card-elevated-hover p-8 block">
              <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function ResourceListPage({ title, description, items, basePath }: { title: string; description: string; items: { slug: string; title: string; description: string }[]; basePath: string }) {
  return (
    <Layout title={title} description={description}>
      <section className="section-padding py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="badge-pill mb-6">{title}</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link key={item.slug} to={`${basePath}/${item.slug}`} className="card-elevated-hover p-8 block">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
  return (
    <Layout title={item.title} description={item.description}>
      <section className="section-padding py-24 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <Link to={basePath} className="text-sm text-primary hover:underline mb-6 block">← Back to {category}</Link>
          <span className="badge-pill mb-4">{category}</span>
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">{item.title}</h1>
          <p className="text-lg text-muted-foreground mb-12">{item.description}</p>
          <div className="aspect-[2/1] rounded-2xl bg-[hsl(var(--surface-elevated))] mb-12 relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh" />
          </div>
          <p className="text-muted-foreground leading-relaxed">Full content for this resource would appear here in production.</p>
        </div>
      </section>
      <CTASection title={<>Put these insights into <span className="heading-italic">action</span></>} />
    </Layout>
  );
}

export function GuidesIndex() { return <ResourceListPage title="Guides" description="In-depth guides for creative teams." items={guides} basePath="/guides" />; }
export function GuidePage() { return <ResourceDetailPage basePath="/guides" items={guides} category="Guides" />; }
export function PlaybooksIndex() { return <ResourceListPage title="Playbooks" description="Tactical playbooks to drive results." items={playbooks} basePath="/playbooks" />; }
export function PlaybookPage() { return <ResourceDetailPage basePath="/playbooks" items={playbooks} category="Playbooks" />; }
export function KnowledgeIndex() { return <ResourceListPage title="Knowledge Base" description="Tips, tutorials, and how-tos." items={knowledgeArticles} basePath="/knowledge" />; }
export function KnowledgePage() { return <ResourceDetailPage basePath="/knowledge" items={knowledgeArticles} category="Knowledge Base" />; }
export function ReportsIndex() { return <ResourceListPage title="Reports" description="Industry research and data." items={reports} basePath="/reports" />; }
export function ReportPage() { return <ResourceDetailPage basePath="/reports" items={reports} category="Reports" />; }

export function EventsIndex() {
  return (
    <Layout title="Events" description="Webinars, summits, and live events from Superside.">
      <section className="section-padding py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="badge-pill mb-6">Events</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-4">Events</h1>
            <p className="text-lg text-muted-foreground">Webinars, summits, and live conversations with creative leaders.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <Link key={event.slug} to={`/events/${event.slug}`} className="card-elevated-hover p-8 block">
                <span className="text-xs text-primary font-semibold">{event.date}</span>
                <h3 className="text-xl font-bold text-foreground mt-3 mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function EventPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);
  if (!event) return <Layout title="Not Found"><div className="section-padding py-32 text-center"><h1 className="text-4xl font-bold text-foreground">Event not found</h1></div></Layout>;
  return (
    <Layout title={event.title} description={event.description}>
      <HeroSection tagline={event.date} title={<>{event.title}</>} description={event.description} variant="centered" />
      <CTASection title={<>Don't miss our next <span className="heading-italic">event</span></>} />
    </Layout>
  );
}

export function FAQPage() {
  return (
    <Layout title="FAQ" description="Frequently asked questions about Superside.">
      <section className="section-padding py-24"><div className="max-w-3xl mx-auto text-center"><span className="badge-pill mb-6">FAQ</span><h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4">Frequently asked questions</h1></div></section>
      <FAQSection items={[
        { question: "What is Superside?", answer: "Superside is an always-on creative service that combines top global creative talent with AI-powered workflows to deliver enterprise-grade creative at scale." },
        { question: "How does pricing work?", answer: "Superside offers subscription-based pricing with predictable monthly costs. Contact our team for a custom quote based on your needs." },
        { question: "What creative services do you offer?", answer: "We offer 100+ creative specialties including design, video, animation, branding, web design, presentations, and more." },
        { question: "How fast is delivery?", answer: "Most projects are delivered 3x faster than traditional agencies thanks to our AI-powered workflows and dedicated teams." },
        { question: "Do I get a dedicated team?", answer: "Yes. Every client gets a dedicated team of creatives and a project manager who learn your brand inside out." },
        { question: "Is there a minimum commitment?", answer: "We offer flexible engagement terms. Contact our team to discuss the best option for your needs." },
        { question: "How do you ensure quality?", answer: "Multi-layer review processes, brand consistency checks, and AI-powered quality assurance ensure every deliverable exceeds expectations." },
        { question: "Can I scale up or down?", answer: "Absolutely. Superside is designed to flex with your needs. Scale creative capacity up during peak periods and back down when things quiet." },
      ]} />
      <CTASection title={<>Still have questions? <span className="heading-italic">Let's talk.</span></>} />
    </Layout>
  );
}

export function PrivacyPage() {
  return (
    <Layout title="Privacy Policy" description="Superside privacy policy.">
      <section className="section-padding py-24 lg:py-32"><div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>Last updated: April 2026</p>
          <p>At Superside, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our services and visit our website.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Information We Collect</h2>
          <p>We collect information you provide directly, such as when you create an account, request a demo, or contact us. This may include your name, email address, company name, and job title.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">How We Use Your Information</h2>
          <p>We use your information to provide and improve our services, communicate with you, and ensure the security of our platform.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us through our website.</p>
        </div>
      </div></section>
    </Layout>
  );
}

export function TermsPage() {
  return (
    <Layout title="Terms of Use" description="Superside terms of use.">
      <section className="section-padding py-24 lg:py-32"><div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Use</h1>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>Last updated: April 2026</p>
          <p>These Terms of Use govern your access to and use of Superside's website and services. By using our services, you agree to these terms.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Use of Services</h2>
          <p>You may use our services only in compliance with these terms and all applicable laws and regulations.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Intellectual Property</h2>
          <p>All content and materials on our website are protected by intellectual property laws. Creative work produced through our services is subject to the terms of your subscription agreement.</p>
        </div>
      </div></section>
    </Layout>
  );
}

export function TrustCenterPage() {
  return (
    <Layout title="Trust Center" description="Learn about Superside's commitment to security and compliance.">
      <HeroSection tagline="Trust Center" title={<>Security and compliance <span className="heading-italic">you can trust</span></>} description="Superside is committed to protecting your data with enterprise-grade security measures." variant="centered" />
      <FeatureSection title={<>Our security <span className="heading-italic">commitments</span></>} features={[
        { title: "SOC 2 Type II", description: "We maintain SOC 2 Type II compliance, independently audited annually." },
        { title: "Data Encryption", description: "All data is encrypted at rest and in transit using industry-standard protocols." },
        { title: "Access Controls", description: "Role-based access controls and SSO integration for enterprise clients." },
        { title: "GDPR Compliant", description: "We comply with GDPR and other international data protection regulations." },
      ]} columns={2} />
    </Layout>
  );
}

export function BugBountyPage() {
  return (
    <Layout title="Bug Bounty Program" description="Superside's responsible disclosure and bug bounty program.">
      <section className="section-padding py-24 lg:py-32"><div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Bug Bounty Program</h1>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>We value the security community's efforts in helping keep Superside and our customers safe. If you've found a security vulnerability, we want to hear from you.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Scope</h2>
          <p>Our bug bounty program covers vulnerabilities in our web applications and APIs.</p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Responsible Disclosure</h2>
          <p>Please report vulnerabilities responsibly. We ask that you give us reasonable time to address issues before public disclosure.</p>
        </div>
      </div></section>
    </Layout>
  );
}
