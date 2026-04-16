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
  imageSrc?: string;
}

export const blogCategories = [
  "Design", "AI", "Marketing", "Branding", "Strategy", "Creative Ops", "Technology",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "scaling-creative-output-without-hiring",
    title: "Scaling Creative Output Without Hiring Internally",
    excerpt: "How growing teams are expanding their creative capacity without the overhead of full-time hires. A practical look at subscription creative models.",
    category: "Strategy",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-04-10",
    readTime: "7 min",
    featured: true,
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    slug: "building-brand-consistency-across-channels",
    title: "Building Brand Consistency Across Every Channel",
    excerpt: "Why brand consistency matters more than ever and how to maintain it across digital, social, print, and beyond without slowing down your team.",
    category: "Branding",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-04-07",
    readTime: "6 min",
    featured: true,
    imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
  },
  {
    slug: "creative-workflows-for-growing-teams",
    title: "Creative Workflows for Growing Teams",
    excerpt: "As your team scales, your creative process needs to scale with it. Here are the workflow frameworks that keep quality high and timelines tight.",
    category: "Creative Ops",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-04-03",
    readTime: "8 min",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
  {
    slug: "when-to-use-agencies-vs-internal-teams",
    title: "When to Use Agencies vs. Internal Teams",
    excerpt: "The agency vs. in-house debate is not black and white. Here is a practical framework for deciding when each model works best.",
    category: "Strategy",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-03-28",
    readTime: "9 min",
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  },
  {
    slug: "improving-marketing-performance-with-better-creative",
    title: "How to Improve Marketing Performance with Better Creative",
    excerpt: "Creative quality directly impacts campaign performance. Learn how to improve ad performance, engagement, and conversion through strategic creative production.",
    category: "Marketing",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-03-21",
    readTime: "7 min",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    slug: "the-rise-of-designops",
    title: "The Rise of DesignOps and Why It Matters",
    excerpt: "DesignOps is transforming how creative teams operate. Here is why every scaling company needs to think about design operations.",
    category: "Creative Ops",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-03-14",
    readTime: "6 min",
    imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
  {
    slug: "content-operations-missing-piece",
    title: "Content Operations: The Missing Piece of Your Strategy",
    excerpt: "Why content operations is the key to scaling your content marketing efficiently. The systems and processes that separate good teams from great ones.",
    category: "Strategy",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-03-07",
    readTime: "7 min",
    imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  },
  {
    slug: "ai-in-creative-production-practical-guide",
    title: "AI in Creative Production: A Practical Guide",
    excerpt: "A grounded look at how advanced tools are actually being used in creative teams today, without the hype or the fear.",
    category: "AI",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-02-28",
    readTime: "8 min",
    imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
  },
  {
    slug: "cpg-packaging-design-examples",
    title: "CPG Packaging Design Examples That Stand Out",
    excerpt: "A showcase of innovative packaging designs and the principles behind shelf-stopping CPG creative.",
    category: "Design",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-02-21",
    readTime: "5 min",
    imageSrc: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
  },
  {
    slug: "brand-guidelines-that-actually-work",
    title: "Brand Guidelines That Actually Work at Scale",
    excerpt: "How to build brand guidelines that teams actually use. Practical advice on structure, detail level, and governance.",
    category: "Branding",
    author: "The North Team",
    authorSlug: "the-north-team",
    date: "2026-02-14",
    readTime: "9 min",
    imageSrc: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
  },
];

export const authors = [
  { slug: "the-north-team", name: "The North Team", role: "Creative Team", bio: "Perspectives on design, creativity, marketing, and the future of creative production from The North." },
];

export const guides = [
  { slug: "creative-partnerships", title: "Creative Partnerships Guide", description: "How to build and manage successful creative partnerships that scale." },
  { slug: "design-leadership", title: "Design Leadership Guide", description: "Leading design teams through growth and transformation." },
  { slug: "video-marketing", title: "Video Marketing Guide", description: "Comprehensive guide to video marketing strategy and production." },
  { slug: "ai-for-creatives", title: "Smart Tools for Creatives Guide", description: "How creative teams can leverage advanced tools effectively." },
  { slug: "brand-building", title: "Brand Building Guide", description: "Building a strong brand from the ground up." },
  { slug: "social-media-design", title: "Social Media Design Guide", description: "Creating engaging social media content that performs." },
];

export const playbooks = [
  { slug: "how-to-lower-cac", title: "How to Lower CAC with Creative", description: "Tactical playbook for reducing customer acquisition costs through better creative." },
  { slug: "how-to-scale-ad-creative", title: "How to Scale Ad Creative Production", description: "A step-by-step playbook for scaling ad creative without scaling your team." },
  { slug: "how-to-measure-creativity", title: "How to Measure Creative Performance", description: "Frameworks and metrics for measuring creative impact." },
];

export const knowledgeArticles = [
  { slug: "kerning-in-illustrator", title: "Kerning in Illustrator", description: "Master letter spacing in Adobe Illustrator." },
  { slug: "kerning-in-ms-word", title: "Kerning in MS Word", description: "How to adjust kerning in Microsoft Word." },
  { slug: "kerning-in-indesign", title: "Kerning in InDesign", description: "Typography tips for Adobe InDesign." },
];

export const events = [
  { slug: "creative-leadership-summit", title: "Creative Leadership Summit", description: "A summit for creative and marketing leaders on scaling production.", date: "Coming Soon" },
  { slug: "smart-tools-for-creative-teams", title: "Smart Tools for Creative Teams", description: "Live session on adopting advanced tools in creative workflows.", date: "On Demand" },
];

export const reports = [
  { slug: "creative-efficiency-report", title: "Creative Efficiency Report", description: "A look at how teams are improving creative output while reducing overhead." },
  { slug: "the-practical-ai-report", title: "The Practical AI Report", description: "A grounded look at how advanced tools are actually being used in creative teams." },
];

export const tags = [
  "presentation-design", "technology", "branding", "marketing", "design-ops",
  "creative-strategy", "video", "social-media", "packaging", "illustration", "ux-design",
];
