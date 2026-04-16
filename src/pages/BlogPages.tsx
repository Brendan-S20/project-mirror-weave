import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts, authors } from "@/data/blogPosts";
import { BlogCard } from "@/components/sections/BlogGrid";
import CTASection from "@/components/sections/CTASection";

export function BlogIndex() {
  return (
    <Layout title="Blog" description="Insights, trends, and strategies from the Superside creative team.">
      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">Insights and strategies for modern creative teams.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title={<>Want more <span className="heading-italic">creative insights?</span></>} variant="minimal" />
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
      <article className="section-padding py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link to="/blog" className="text-sm text-primary hover:underline mb-4 block">← Back to blog</Link>
            <span className="text-xs font-medium text-primary">{post.category}</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {author && <Link to={`/authors/${author.slug}`} className="hover:text-primary">{author.name}</Link>}
              <span>{post.date}</span>
              <span>{post.readTime} read</span>
            </div>
          </div>
          <div className="aspect-[2/1] rounded-xl bg-surface-elevated mb-10" />
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/80 leading-relaxed text-lg mb-6">{post.excerpt}</p>
            <p className="text-muted-foreground leading-relaxed">This is a placeholder for the full blog post content. In a production environment, this would be populated with the complete article text, images, and embedded media.</p>
          </div>
        </div>
      </article>
      {related.length > 0 && (
        <section className="section-padding pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((p) => <BlogCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
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
      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-8 mb-16">
            <div className="w-20 h-20 rounded-full bg-surface-elevated shrink-0" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">{author.name}</h1>
              <p className="text-primary text-sm font-medium">{author.role}</p>
              <p className="text-muted-foreground mt-2">{author.bio}</p>
            </div>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-8">Articles by {author.name}</h2>
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
      <section className="section-padding py-20 lg:py-28">
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
