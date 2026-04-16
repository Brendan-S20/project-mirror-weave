import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import type { BlogPost } from "@/data/blogPosts";

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
  description?: string;
  columns?: 2 | 3;
  showViewAll?: boolean;
}

export default function BlogGrid({ posts, title, description, columns = 3, showViewAll = true }: BlogGridProps) {
  const { ref, inView } = useInView();
  const colClass = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-padding py-20 lg:py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{title}</h2>
              {description && <p className="text-muted-foreground mt-3 max-w-xl">{description}</p>}
            </div>
            {showViewAll && (
              <Link to="/blog" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all shrink-0">
                View all posts <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}
        <div className={`grid ${colClass} gap-6 ${inView ? 'stagger-children' : ''}`}>
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className={`group block ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
