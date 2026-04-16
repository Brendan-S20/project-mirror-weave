import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts, authors } from "@/data/blogPosts";
import BlogGrid from "@/components/sections/BlogGrid";
import CTASection from "@/components/sections/CTASection";

const blogContent: Record<string, string[]> = {
  "scaling-creative-output-without-hiring": [
    "Every growing company hits the same inflection point: creative demand outpaces the team's capacity to deliver. The instinct is to hire, but adding headcount introduces new challenges. Recruiting takes months, onboarding takes weeks, and managing a larger team requires additional overhead.",
    "The alternative is to build a scalable creative model that grows with your needs without the fixed costs and management complexity of full-time hires. Subscription creative services provide dedicated teams that operate as an extension of your organization, with the flexibility to scale up during launches and scale back during quieter periods.",
    "The key is finding the right partner. Look for teams that invest in learning your brand, maintain consistent quality through structured processes, and offer transparent communication throughout every project. The best creative partnerships feel indistinguishable from an in-house team, but with the flexibility and breadth that internal hiring alone cannot achieve.",
    "Companies that adopt this model often find they can increase creative output significantly while reducing the overhead and complexity associated with growing internal teams. The economics are straightforward: predictable monthly costs, no recruiting fees, no benefits overhead, and no gaps in coverage when team members leave.",
  ],
  "building-brand-consistency-across-channels": [
    "Brand consistency is one of the most underappreciated competitive advantages in marketing. When your brand shows up the same way across every touchpoint, from social media to sales presentations to product packaging, it builds recognition and trust that compounds over time.",
    "Yet maintaining consistency gets harder as organizations grow. More people create content, more channels need attention, and more agencies or freelancers produce work. Without the right systems, brand drift is inevitable.",
    "The solution starts with robust brand guidelines that go beyond logo placement. Effective guidelines cover tone of voice, photography style, illustration principles, color application, typography hierarchy, and layout patterns. They should be specific enough to guide decisions but flexible enough to allow creative expression.",
    "The real challenge is governance. Who ensures brand standards are maintained? How are exceptions handled? The most successful organizations invest in brand stewardship, whether through dedicated roles, systematic review processes, or creative partners who internalize the brand deeply enough to self-govern.",
  ],
  "creative-workflows-for-growing-teams": [
    "As creative teams scale, the informal processes that worked with three people break down with thirty. What used to be a quick conversation becomes a bottleneck. What used to be obvious becomes ambiguous. The solution is intentional workflow design.",
    "Start with the brief. A well-structured brief reduces revision cycles dramatically. It captures objectives, audience, deliverables, brand requirements, and success criteria before any creative work begins. The time invested upfront saves multiples in downstream corrections.",
    "Next, standardize your review process. Define who reviews what, at which stage, and with what authority. Creative reviews without clear ownership become subjective debates that slow everything down. Establish clear approval chains and empower reviewers to make final decisions.",
    "Finally, invest in your feedback culture. The quality of feedback directly impacts the quality of creative output. Train stakeholders to provide specific, actionable feedback tied to the brief and brand guidelines rather than subjective preferences. Teams that master this skill see faster turnaround and higher-quality work.",
  ],
};

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[16/10] rounded-xl bg-[hsl(var(--surface-elevated))] mb-5 overflow-hidden border border-border/30 group-hover:border-primary/30 transition-all relative">
        {post.imageSrc ? (
          <img src={post.imageSrc} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        ) : (
          <>
            <div className="absolute inset-0 gradient-mesh" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground/20 text-sm font-semibold">{post.category}</span>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-primary">{post.category}</span>
        <span className="w-1 h-1 rounded-full bg-border" />
        <span className="text-xs text-muted-foreground">{post.readTime}</span>
      </div>
      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg leading-snug mb-2">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
    </Link>
  );
}

export function BlogIndex() {
  return (
    <Layout title="Blog" description="Insights, trends, and strategies from The North creative team.">
      <section className="section-padding py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="badge-pill mb-6">Blog</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-4">Creative intelligence for ambitious teams</h1>
            <p className="text-lg text-muted-foreground">Strategies, insights, and perspectives to help marketing leaders scale creative operations and drive measurable outcomes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title={<>Want more <span className="heading-italic">creative insights?</span></>} description="Subscribe for weekly perspectives on scaling creative." />
    </Layout>
  );
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout title="Post Not Found">
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">Back to blog</Link>
        </div>
      </Layout>
    );
  }

  const author = authors.find((a) => a.slug === post.authorSlug);
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const content = blogContent[post.slug] || [
    post.excerpt,
    "Strong creative operations require a balance of process and flexibility. Teams that invest in scalable systems early on find themselves better equipped to handle increased demand without sacrificing quality or consistency across channels.",
    "The most effective creative teams share several characteristics: clear communication channels, well-defined approval workflows, consistent brand governance, and a culture that values both speed and craft. Building these foundations takes intention, but the payoff is significant.",
    "Whether you are building creative operations from scratch or optimizing an existing workflow, the principles covered here will help you make informed decisions that drive better creative outcomes and support sustainable growth.",
  ];

  return (
    <Layout title={post.title} description={post.excerpt}>
      <article className="section-padding py-24 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <Link to="/blog" className="text-sm text-primary hover:underline mb-6 block">← Back to blog</Link>
            <span className="badge-pill mb-4">{post.category}</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {author && <span className="font-medium">{author.name}</span>}
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{post.readTime} read</span>
            </div>
          </div>
          <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-12 border border-border/30">
            {post.imageSrc ? (
              <img src={post.imageSrc} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <div className="w-full h-full gradient-mesh" />
            )}
          </div>
          <div className="space-y-6">
            {content.map((p, i) => (
              <p key={i} className="text-foreground/90 leading-relaxed text-lg">{p}</p>
            ))}
          </div>
        </div>
      </article>
      {related.length > 0 && (
        <BlogGrid posts={related} title="Related articles" showViewAll={false} />
      )}
    </Layout>
  );
}

export function AuthorPage() {
  const { slug } = useParams<{ slug: string }>();
  const author = authors.find((a) => a.slug === slug);
  const authorPosts = blogPosts.filter((p) => p.authorSlug === slug);

  if (!author) {
    return (
      <Layout title="Author Not Found">
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground">Author not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={author.name} description={author.bio}>
      <section className="section-padding py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-8 mb-16">
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-border/30 shrink-0 flex items-center justify-center">
              <span className="text-primary text-xl font-bold">{author.name[0]}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{author.name}</h1>
              <p className="text-primary text-sm font-semibold mt-1">{author.role}</p>
              <p className="text-muted-foreground mt-3 max-w-xl">{author.bio}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-10">Articles by {author.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function TagPage() {
  const { slug } = useParams<{ slug: string }>();
  const tagName = slug?.replace(/-/g, " ") || "";
  return (
    <Layout title={`${tagName} articles`}>
      <section className="section-padding py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4 capitalize">{tagName}</h1>
          <p className="text-muted-foreground mb-12">Articles tagged with "{tagName}"</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
}
