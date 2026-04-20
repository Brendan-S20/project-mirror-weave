export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "We stopped patching tools and started running on a real system. Marketing, sales, and ops finally see the same numbers, and the team spends time on growth instead of cleanup.",
    author: "Head of Operations",
    role: "Head of Operations",
    company: "B2B SaaS Company",
  },
  {
    quote: "The North rebuilt our funnel and CRM as one connected system. Pipeline reporting actually reflects reality now, and we launch new campaigns in days instead of weeks.",
    author: "VP Marketing",
    role: "VP of Marketing",
    company: "Growth-Stage SaaS",
  },
  {
    quote: "Their automation work removed entire categories of manual operational work. We doubled order volume without adding headcount, and the team is no longer firefighting.",
    author: "COO",
    role: "Chief Operating Officer",
    company: "Multi-Brand E-commerce",
  },
  {
    quote: "We had outgrown spreadsheets long before we admitted it. The internal tools they built saved hours per operator per day and made onboarding new analysts genuinely fast.",
    author: "Head of Finance Ops",
    role: "Head of Finance Operations",
    company: "Fintech Company",
  },
  {
    quote: "Working with The North feels less like hiring an agency and more like getting a senior systems team on demand. They think in architecture, not deliverables.",
    author: "Founder & CEO",
    role: "Founder and CEO",
    company: "Services Business",
  },
  {
    quote: "Our infrastructure was the silent constraint on every initiative. Replatforming with The North reduced cloud spend and unlocked the engineering velocity we needed.",
    author: "CTO",
    role: "Chief Technology Officer",
    company: "Growth-Stage Company",
  },
];
