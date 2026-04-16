export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "We consolidated three vendor relationships into one partnership with The North. The creative quality improved, turnaround times dropped significantly, and our team finally has bandwidth for strategic work.",
    author: "Head of Marketing",
    role: "VP of Marketing",
    company: "SaaS Company",
  },
  {
    quote: "Our ad performance improved meaningfully after switching creative production to The North. They produce more variants in a week than our previous partners did in a month.",
    author: "Performance Marketing Lead",
    role: "Performance Marketing Director",
    company: "Growth-Stage Startup",
  },
  {
    quote: "The consistency is what sold us. Every deliverable, across every channel, looks and feels like our brand. That level of quality at this scale simply was not possible before.",
    author: "Brand Director",
    role: "Head of Brand",
    company: "Technology Company",
  },
  {
    quote: "Their workflows have cut our production timeline from weeks to days. The creative quality has not just been maintained, it has improved. That is the part that surprised us.",
    author: "Marketing Executive",
    role: "CMO",
    company: "Digital Platform",
  },
  {
    quote: "The North is the closest thing to having a world-class in-house team without the hiring, management, and overhead. They know our brand as well as we do.",
    author: "Creative Operations Lead",
    role: "Director of Creative Operations",
    company: "Tech Company",
  },
  {
    quote: "We went from concept to full campaign launch in under two weeks. Our internal team can finally focus on strategy instead of managing production details.",
    author: "Marketing Lead",
    role: "Global Marketing Lead",
    company: "Enterprise Brand",
  },
];

export const logoCloudCompanies = [
  "Trusted by ambitious brands worldwide",
];
