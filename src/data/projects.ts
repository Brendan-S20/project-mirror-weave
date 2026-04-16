export interface Project {
  slug: string;
  title: string;
  category: string;
  type: string;
  summary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  outcome: string;
  imageSrc: string;
  galleryImages: string[];
  size: "large" | "medium" | "small";
}

export const projects: Project[] = [
  {
    slug: "multi-channel-brand-campaign",
    title: "Multi-channel brand campaign spanning digital, social, and print",
    category: "Brand",
    type: "Brand Campaign",
    summary: "Full-funnel brand campaign designed for maximum reach across digital and physical touchpoints.",
    challenge: "The client needed a cohesive brand presence across digital, social, and print channels while maintaining visual consistency and adapting messaging for each platform's unique audience behavior.",
    approach: "We built a comprehensive creative strategy starting with a unified visual system, then produced platform-specific executions. Our dedicated team developed modular assets that could flex across formats while keeping the core brand narrative intact.",
    deliverables: ["Campaign visual identity system", "Social media creative suite (50+ assets)", "Digital display ads across 8 formats", "Print collateral including brochures and posters", "Email marketing templates", "Landing page designs"],
    outcome: "The campaign launched across all channels simultaneously, creating a unified brand presence that reinforced recognition and engagement at every touchpoint.",
    imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=600&q=80",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    ],
    size: "large",
  },
  {
    slug: "product-launch-creative-suite",
    title: "Product launch creative suite for global markets",
    category: "Ad Creative",
    type: "Product Launch",
    summary: "Comprehensive launch creative with assets optimized for multiple regional markets and platforms.",
    challenge: "A product launch required localized creative across multiple regions, each with unique cultural considerations and platform preferences, while maintaining a unified global brand identity.",
    approach: "We created a master creative toolkit with adaptable elements, then produced region-specific variations. Each market received customized messaging and imagery while the core visual language remained consistent.",
    deliverables: ["Master creative toolkit", "Region-specific ad sets for 5 markets", "Social media launch kits per region", "Landing pages with localized content", "Product photography direction", "Launch video storyboards"],
    outcome: "The product launch achieved coordinated creative execution across all target markets, with each region receiving tailored assets that felt locally relevant while maintaining global brand cohesion.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80",
    ],
    size: "medium",
  },
  {
    slug: "social-media-personalized-campaign",
    title: "Social media campaign with personalized creative variants",
    category: "Social",
    type: "Social Campaign",
    summary: "Dynamic social campaign using personalized creative to drive engagement across platforms.",
    challenge: "The team needed to scale their social presence with personalized content variants for different audience segments without multiplying production costs.",
    approach: "We designed a modular creative system with interchangeable components, allowing rapid generation of audience-specific variants. Each variant was tailored for platform behavior and audience preferences.",
    deliverables: ["Modular design system for social", "120+ personalized variants", "Platform-specific templates (Instagram, LinkedIn, TikTok)", "Content calendar integration", "Performance tracking dashboards"],
    outcome: "The campaign delivered highly personalized content at scale, enabling the team to speak directly to each audience segment while maintaining production efficiency.",
    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80",
      "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=600&q=80",
    ],
    size: "medium",
  },
  {
    slug: "partner-marketing-design-system",
    title: "Partner marketing asset library and design system",
    category: "Design System",
    type: "Design System",
    summary: "Comprehensive partner toolkit enabling consistent brand execution across partner networks.",
    challenge: "A growing partner ecosystem needed brand-consistent marketing materials, but partners varied widely in their design capabilities. The company needed a system that ensured quality regardless of who was creating the final assets.",
    approach: "We built a comprehensive design system with clear guidelines, pre-built templates, and smart constraints that made it easy for partners to create on-brand materials without design expertise.",
    deliverables: ["Component-based design system", "50+ marketing templates", "Brand guidelines documentation", "Co-branding toolkit", "Asset management structure", "Partner onboarding guide"],
    outcome: "Partners gained self-service access to brand-consistent templates, reducing creative requests to the core team while maintaining visual quality across the entire partner network.",
    imageSrc: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
      "https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=600&q=80",
    ],
    size: "small",
  },
  {
    slug: "cross-platform-performance-ads",
    title: "Cross-platform performance ads with rapid variant testing",
    category: "Performance",
    type: "Performance Ads",
    summary: "High-velocity ad creative program designed to improve acquisition costs through rapid iteration.",
    challenge: "Acquisition costs were rising across paid channels. The team needed a high-velocity creative testing program to identify top-performing ad variants faster and reduce cost-per-acquisition.",
    approach: "We established a rapid creative testing framework, producing multiple ad variants per week across formats and platforms. Each iteration was informed by performance data, creating a continuous improvement loop.",
    deliverables: ["Ad creative testing framework", "200+ ad variants across platforms", "Performance-driven creative briefs", "Weekly creative optimization reports", "Cross-platform asset library", "A/B testing roadmap"],
    outcome: "The rapid iteration program identified high-performing creative patterns quickly, enabling the team to concentrate spend on proven formats and reduce wasted ad budget.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    ],
    size: "large",
  },
  {
    slug: "visual-identity-evolution",
    title: "Visual identity evolution for platform rebrand",
    category: "Branding",
    type: "Rebrand",
    summary: "Brand refresh spanning identity system, marketing materials, and product UI alignment.",
    challenge: "The company had outgrown its original visual identity. They needed a brand evolution that felt modern and confident while retaining the equity built with existing customers.",
    approach: "We conducted a thorough brand audit, then developed an evolved identity system that modernized the visual language while maintaining recognizable brand elements. The new system was applied across all touchpoints.",
    deliverables: ["Updated logo and identity system", "Comprehensive brand guidelines", "Marketing collateral redesign", "Product UI alignment recommendations", "Social media brand kit", "Presentation templates"],
    outcome: "The refreshed brand identity positioned the company for its next growth phase while maintaining continuity with existing brand equity.",
    imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&q=80",
      "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=600&q=80",
    ],
    size: "medium",
  },
  {
    slug: "educational-content-series",
    title: "Educational content series with design templates",
    category: "Design",
    type: "Content Design",
    summary: "Educational content series and template library driving community engagement and adoption.",
    challenge: "The team wanted to build a content-driven community but lacked the design infrastructure to produce visually compelling educational materials consistently.",
    approach: "We created a scalable content design system with modular templates, enabling the team to produce educational content at volume while maintaining a premium, cohesive look across all materials.",
    deliverables: ["Content design system", "30+ educational templates", "Infographic template library", "eBook and guide layouts", "Social media educational content kit", "Interactive worksheet designs"],
    outcome: "The content program launched with a full library of professionally designed materials, enabling consistent production cadence and elevated visual quality.",
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    ],
    size: "small",
  },
  {
    slug: "seasonal-campaign-creative",
    title: "Seasonal campaign creative at scale across formats",
    category: "Performance",
    type: "Seasonal Campaign",
    summary: "High-volume seasonal ad creative with rapid iteration across multiple formats and channels.",
    challenge: "Peak seasonal periods demanded massive creative volume with tight deadlines. The team needed to produce hundreds of assets across formats without compromising quality or missing launch windows.",
    approach: "We pre-built modular creative frameworks before peak season, enabling rapid production when volume demands spiked. Smart templating allowed quick format adaptation while maintaining creative quality.",
    deliverables: ["Seasonal creative framework", "300+ seasonal ad assets", "Multi-format adaptation system", "Email marketing seasonal suite", "Social media content calendar", "In-store/digital signage designs"],
    outcome: "All seasonal assets were delivered ahead of deadline, providing the team with a comprehensive creative library ready for deployment across all channels.",
    imageSrc: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    ],
    size: "medium",
  },
  {
    slug: "event-branding-flagship",
    title: "Complete event branding for flagship conference",
    category: "Events",
    type: "Event Branding",
    summary: "Full event identity system from signage to digital experience for a major industry conference.",
    challenge: "A flagship industry conference needed a complete visual identity that would create a cohesive, premium experience across physical and digital touchpoints.",
    approach: "We developed a full event identity system starting with a unique visual concept, then systematically applied it across every touchpoint from digital marketing to on-site signage, creating an immersive brand experience.",
    deliverables: ["Event visual identity", "Conference website design", "Attendee app UI concepts", "Stage and signage design system", "Printed materials suite", "Digital promotional assets", "Social media event kit"],
    outcome: "The event launched with a cohesive, premium visual identity that created a memorable experience for attendees and elevated the brand's position in the industry.",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    ],
    size: "large",
  },
  {
    slug: "thought-leadership-program",
    title: "Thought leadership content program with visual assets",
    category: "Content",
    type: "Content Program",
    summary: "Strategic content program with integrated design elements driving organic growth.",
    challenge: "The company needed to establish thought leadership in a competitive space through a sustained content program with strong visual identity.",
    approach: "We designed a comprehensive content program with integrated visual assets, creating a recognizable visual language for the thought leadership series that stood out in feeds and search results.",
    deliverables: ["Content series visual identity", "Blog post design templates", "Social distribution assets", "eBook layouts for deep-dive content", "Infographic series", "Newsletter design templates"],
    outcome: "The thought leadership program launched with a distinctive visual identity, positioning the company as an authoritative voice in their space with visually compelling content.",
    imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80",
    ],
    size: "small",
  },
  {
    slug: "product-launch-new-line",
    title: "Product launch creative for new product line",
    category: "Brand",
    type: "Product Launch",
    summary: "End-to-end launch campaign across digital and retail touchpoints.",
    challenge: "Launching a new product line required coordinated creative across digital marketing, retail environments, and social channels with a tight timeline.",
    approach: "We created a unified launch creative system with assets designed for rapid deployment across all channels. The modular approach enabled the team to adapt messaging for different audiences while maintaining visual consistency.",
    deliverables: ["Launch creative system", "Digital ad campaign assets", "Retail point-of-sale materials", "Product photography art direction", "Social media launch kit", "Press kit design"],
    outcome: "The product line launched with polished, coordinated creative across all planned channels, creating strong first impressions and cohesive brand presence.",
    imageSrc: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80",
    ],
    size: "small",
  },
  {
    slug: "multi-format-ad-creative-system",
    title: "Multi-format ad creative system with automated variants",
    category: "Ad Creative",
    type: "Ad System",
    summary: "Performance creative system optimized across ad formats with streamlined variant generation.",
    challenge: "Managing ad creative across multiple formats and platforms was consuming too much design time and creating inconsistent output quality.",
    approach: "We built a systematic ad creative framework with smart templating that enabled rapid variant generation across formats. The system balanced creative quality with production efficiency.",
    deliverables: ["Ad creative framework", "Template system across 12 formats", "Automated variant generation guidelines", "Creative performance tracking setup", "Platform-specific optimization guides", "Monthly creative refresh cadence"],
    outcome: "The new system reduced ad creative production time significantly while improving consistency and enabling faster creative testing across platforms.",
    imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&q=80",
    ],
    size: "small",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
