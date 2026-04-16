import { Link } from "react-router-dom";
import { type BlogPost } from "@/data/blogPosts";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[16/10] rounded-xl bg-[hsl(var(--surface-elevated))] mb-4 overflow-hidden relative">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
          <span className="text-xs text-muted-foreground">{post.category}</span>
        </div>
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
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
  const { ref, inView } = useInView();
  const colsClass = columns === 2 ? "lg:grid-cols-2" : columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-padding py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{title}</h2>
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
        <div className={`grid ${colsClass} gap-8 ${inView ? "stagger-children" : ""}`}>
          {posts.map((post) => (
            <div key={post.slug} className={inView ? "animate-fade-up" : "opacity-0"}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
