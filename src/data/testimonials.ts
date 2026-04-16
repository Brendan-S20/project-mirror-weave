export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Superside has been a game-changer for our creative output. We've scaled our production 3x without adding headcount.",
    author: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechCorp",
  },
  {
    quote: "The quality and speed are unmatched. Our campaigns launch faster and perform better since partnering with Superside.",
    author: "Marcus Johnson",
    role: "Creative Director",
    company: "GrowthCo",
  },
  {
    quote: "We replaced three agencies with one Superside subscription. The consistency and speed are incredible.",
    author: "Elena Rodriguez",
    role: "Head of Brand",
    company: "ScaleUp Inc",
  },
  {
    quote: "Their AI-powered workflows have cut our production time in half while improving creative quality.",
    author: "David Park",
    role: "CMO",
    company: "NextWave",
  },
  {
    quote: "Superside feels like an extension of our team, not an outsourced vendor. That makes all the difference.",
    author: "Amanda Foster",
    role: "Director of Design",
    company: "Orbit Labs",
  },
  {
    quote: "From ideation to execution, they handle everything. Our internal team can finally focus on strategy.",
    author: "James Liu",
    role: "Marketing Lead",
    company: "Pinnacle",
  },
];

export const logoCloudCompanies = [
  "Amazon", "Google", "Meta", "Shopify", "Reddit", "Puma",
  "Roland", "Microsoft", "Vimeo", "Salesforce", "HubSpot", "Figma",
];
