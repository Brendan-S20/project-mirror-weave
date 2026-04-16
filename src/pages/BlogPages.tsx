import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts, authors } from "@/data/blogPosts";
import BlogGrid from "@/components/sections/BlogGrid";
import CTASection from "@/components/sections/CTASection";

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[16/10] rounded-xl bg-[hsl(var(--surface-elevated))] mb-5 overflow-hidden border border-border/30 group-hover:border-primary/30 transition-all relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground/20 text-sm font-semibold">{post.category}</span>
        </div>
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
    <Layout title="Blog" description="Insights, trends, and strategies from the Superside creative team.">
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

  return (
    <Layout title={post.title} description={post.excerpt}>
      <article className="section-padding py-24 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <Link to="/blog" className="text-sm text-primary hover:underline mb-6 block">← Back to blog</Link>
            <span className="badge-pill mb-4">{post.category}</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {author && <Link to={`/authors/${author.slug}`} className="hover:text-primary font-medium">{author.name}</Link>}
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{post.readTime} read</span>
            </div>
          </div>
          <div className="aspect-[2/1] rounded-2xl bg-[hsl(var(--surface-elevated))] mb-12 relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh" />
          </div>
          <div className="space-y-6">
            <p className="text-foreground/90 leading-relaxed text-lg">{post.excerpt}</p>
            <p className="text-muted-foreground leading-relaxed">Full article content would be rendered here in production, including rich formatting, embedded media, and structured data.</p>
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
            <div className="w-20 h-20 rounded-full bg-[hsl(var(--surface-elevated))] border border-border/30 shrink-0" />
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
