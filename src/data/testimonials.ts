export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "We replaced three agencies and two full-time designers with one subscription. The output is higher quality, the turnaround is 3x faster, and our team finally has time to think strategically.",
    author: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechCorp",
  },
  {
    quote: "Our ROAS improved 40% after switching ad creative production to The North. They produce more variants in a week than our previous agency did in a month.",
    author: "Marcus Johnson",
    role: "Performance Marketing Director",
    company: "GrowthCo",
  },
  {
    quote: "The consistency is what sold us. Every deliverable, across every channel, looks and feels like our brand. That level of quality at this scale simply wasn't possible before.",
    author: "Elena Rodriguez",
    role: "Head of Brand",
    company: "ScaleUp Inc",
  },
  {
    quote: "Their AI workflows have cut our production timeline from weeks to days. The creative quality hasn't just been maintained, it's improved. That's the part that surprised us.",
    author: "David Park",
    role: "CMO",
    company: "NextWave",
  },
  {
    quote: "The North is the closest thing to having a world-class in-house team without the hiring, management, and overhead. They know our brand as well as we do.",
    author: "Amanda Foster",
    role: "Director of Creative Operations",
    company: "Orbit Labs",
  },
  {
    quote: "We went from concept to full campaign launch in 10 days. Our internal team can finally focus on strategy instead of resizing banners at midnight.",
    author: "James Liu",
    role: "Global Marketing Lead",
    company: "Pinnacle",
  },
];

export const logoCloudCompanies = [
  "Amazon", "Google", "Meta", "Shopify", "Reddit", "Puma",
  "Roland", "Microsoft", "Vimeo", "Salesforce", "HubSpot", "Figma",
];
