import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { formatPostDate, type BlogPostSummary } from "@/lib/blog/posts";

export function PostCover({
  post,
  className = "",
}: {
  post: Pick<BlogPostSummary, "title" | "category" | "coverImage">;
  className?: string;
}) {
  if (post.coverImage) {
    return (
      <img
        src={post.coverImage}
        alt={post.title}
        className={`w-full object-cover ${className}`}
      />
    );
  }

  // Branded fallback cover when a post has no image yet.
  return (
    <div
      aria-hidden="true"
      className={`relative flex w-full items-end overflow-hidden bg-[#11163C] p-6 ${className}`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#4F63F0]/40 blur-2xl" />
      <div className="absolute -bottom-12 left-1/4 h-36 w-36 rounded-full bg-[#4F3CE0]/40 blur-2xl" />
      <p className="relative line-clamp-3 max-w-[85%] text-lg font-bold leading-snug text-white/90">
        {post.title}
      </p>
    </div>
  );
}

export default function BlogPostCard({ post }: { post: BlogPostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#EBE8F4] bg-white transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-[#FFFFFFE5] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-700 shadow-sm">
          {post.category}
        </span>
        <PostCover post={post} className="h-52" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-[#45464D]">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={14} />
            <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900 group-hover:text-[#4F63F0]">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
          {post.excerpt}
        </p>

        <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-[#4F63F0]">
          Read Article
          <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
