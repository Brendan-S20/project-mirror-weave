export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogCategories = [
  "Design", "AI", "Marketing", "Branding", "Strategy", "Creative Ops", "Technology", "Case Studies",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "quick-turnaround-design-for-brands",
    title: "Quick Turnaround Design for Brands That Move Fast",
    excerpt: "How leading brands are accelerating their creative production without sacrificing quality.",
    category: "Design",
    author: "Haley Grant",
    authorSlug: "haley-grant",
    date: "2026-04-07",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "great-creative-culture",
    title: "Building a Great Creative Culture at Scale",
    excerpt: "The frameworks and practices that foster exceptional creative work across distributed teams.",
    category: "Creative Ops",
    author: "Cassandra King",
    authorSlug: "cassandra-king",
    date: "2026-03-05",
    readTime: "8 min",
  },
  {
    slug: "capacity-and-bandwidth",
    title: "Solving Creative Capacity and Bandwidth Challenges",
    excerpt: "Strategic approaches to managing creative demand without burning out your team.",
    category: "Strategy",
    author: "Miguel Franco",
    authorSlug: "miguel-franco",
    date: "2026-04-07",
    readTime: "7 min",
    featured: true,
  },
  {
    slug: "cpg-packaging-design-examples",
    title: "CPG Packaging Design Examples That Stand Out",
    excerpt: "A showcase of innovative packaging designs driving shelf impact for CPG brands.",
    category: "Design",
    author: "Miles DePaul",
    authorSlug: "miles-depaul",
    date: "2026-04-07",
    readTime: "5 min",
  },
  {
    slug: "brand-guidelines-examples",
    title: "Brand Guidelines Examples From Top Companies",
    excerpt: "How industry leaders structure their brand guidelines for consistency at scale.",
    category: "Branding",
    author: "Haley Grant",
    authorSlug: "haley-grant",
    date: "2026-04-07",
    readTime: "9 min",
  },
  {
    slug: "content-operations",
    title: "Content Operations: The Missing Piece of Your Strategy",
    excerpt: "Why content operations is the key to scaling your content marketing efficiently.",
    category: "Strategy",
    author: "Cassandra King",
    authorSlug: "cassandra-king",
    date: "2026-04-07",
    readTime: "7 min",
  },
  {
    slug: "designops-professionals",
    title: "The Rise of DesignOps Professionals",
    excerpt: "How DesignOps is transforming creative teams and why every company needs it.",
    category: "Creative Ops",
    author: "Miguel Franco",
    authorSlug: "miguel-franco",
    date: "2026-03-05",
    readTime: "6 min",
  },
  {
    slug: "how-to-print-powerpoint-with-notes",
    title: "How to Print PowerPoint with Notes",
    excerpt: "A step-by-step guide to printing your presentations with speaker notes included.",
    category: "Design",
    author: "Miles DePaul",
    authorSlug: "miles-depaul",
    date: "2026-03-05",
    readTime: "4 min",
  },
];

export const authors = [
  { slug: "haley-grant", name: "Haley Grant", role: "Content Strategist", bio: "Writing about design, creativity, and the future of work." },
  { slug: "miguel-franco", name: "Miguel Franco", role: "Senior Editor", bio: "Covering creative operations, strategy, and industry trends." },
  { slug: "cassandra-king", name: "Cassandra King", role: "Head of Content", bio: "Leading content strategy with insights on creative culture and operations." },
  { slug: "miles-depaul", name: "Miles DePaul", role: "Content Writer", bio: "Exploring design trends, tools, and techniques for creative professionals." },
];

export const guides = [
  { slug: "creative-partnerships", title: "Creative Partnerships Guide", description: "How to build and manage successful creative partnerships." },
  { slug: "design-leadership", title: "Design Leadership Guide", description: "Leading design teams through growth and transformation." },
  { slug: "video-marketing", title: "Video Marketing Guide", description: "Comprehensive guide to video marketing strategy and production." },
  { slug: "ai-for-creatives", title: "AI for Creatives Guide", description: "How creative teams can leverage AI tools effectively." },
  { slug: "brand-building", title: "Brand Building Guide", description: "Building a strong brand from the ground up." },
  { slug: "social-media-design", title: "Social Media Design Guide", description: "Creating thumb-stopping social media content." },
];

export const playbooks = [
  { slug: "how-to-lower-cac", title: "How to Lower CAC with Creative", description: "Tactical playbook for reducing customer acquisition costs through better creative." },
  { slug: "how-to-score-1200-leads-ugc-video-ads", title: "How to Score 1,200 Leads with UGC Video Ads", description: "A step-by-step playbook for generating leads with user-generated video content." },
  { slug: "how-to-measure-creativity", title: "How to Measure Creativity", description: "Frameworks and metrics for measuring creative performance." },
];

export const knowledgeArticles = [
  { slug: "kerning-in-illustrator", title: "Kerning in Illustrator", description: "Master letter spacing in Adobe Illustrator." },
  { slug: "kerning-in-ms-word", title: "Kerning in MS Word", description: "How to adjust kerning in Microsoft Word." },
  { slug: "kerning-in-indesign", title: "Kerning in InDesign", description: "Typography tips for Adobe InDesign." },
];

export const events = [
  { slug: "u-march-shift-summit", title: "Shift Summit", description: "The annual creative leadership summit.", date: "March 2026" },
  { slug: "unfiltered-february-webinar-practical-guide-ai", title: "Practical Guide to AI for Creative Teams", description: "Live webinar on AI adoption in creative workflows.", date: "February 2026" },
];

export const reports = [
  { slug: "tei-report", title: "Total Economic Impact Report", description: "Forrester's analysis of the ROI of partnering with The North." },
  { slug: "the-no-hype-ai-report", title: "The No-Hype AI Report", description: "A practical look at how AI is actually being used in creative teams." },
];

export const tags = [
  "presentation-design", "technology", "ai-consulting", "branding", "marketing", "design-ops",
  "creative-strategy", "video", "social-media", "packaging", "illustration", "ux-design",
];
