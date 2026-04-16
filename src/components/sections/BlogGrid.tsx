import { Link } from "react-router-dom";
import { type BlogPost } from "@/data/blogPosts";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[16/10] rounded-xl bg-surface-elevated mb-4 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
          <span className="text-xs text-muted-foreground">{post.category}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-primary">{post.category}</span>
        <span className="text-xs text-muted-foreground">{post.readTime}</span>
      </div>
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
    </Link>
  );
}

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
  columns?: 2 | 3 | 4;
}

export default function BlogGrid({ posts, title, columns = 3 }: BlogGridProps) {
  const colsClass = columns === 2 ? "lg:grid-cols-2" : columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-padding py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{title}</h2>
            <Link to="/blog" className="text-sm text-primary font-medium hover:underline">View all</Link>
          </div>
        )}
        <div className={`grid ${colsClass} gap-8`}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
