import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts, authors } from "@/data/blogPosts";
import { blogArticles } from "@/data/blogArticles";
import BlogGrid from "@/components/sections/BlogGrid";
import CTASection from "@/components/sections/CTASection";

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

  const article = blogArticles[post.slug];

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
          {article ? (
            <div className="space-y-10">
              {article.intro.map((p, i) => (
                <p key={`intro-${i}`} className="text-foreground/90 leading-relaxed text-lg">{p}</p>
              ))}
              {article.sections.map((section, i) => (
                <div key={`sec-${i}`} className="space-y-5">
                  {section.heading && (
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-4">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-foreground/90 leading-relaxed text-lg">{p}</p>
                  ))}
                </div>
              ))}
              <div className="rounded-2xl border border-border/40 bg-[hsl(var(--surface-elevated))] p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Key takeaways</h3>
                <ul className="space-y-2.5">
                  {article.takeaways.map((t, i) => (
                    <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                      <span className="text-primary shrink-0">→</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {article.relatedServices.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70 mb-4">Related services</p>
                  <div className="flex flex-wrap gap-2.5">
                    {article.relatedServices.map((s) => (
                      <Link key={s.href} to={s.href} className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors">
                        {s.label} <span aria-hidden>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-foreground/80 leading-relaxed text-lg">{post.excerpt}</p>
          )}
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
