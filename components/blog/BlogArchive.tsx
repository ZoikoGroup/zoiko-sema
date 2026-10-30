"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import BlogPostCard from "./BlogPostCard";
import type { BlogPostSummary } from "@/lib/blog/posts";

type SortOrder = "newest" | "oldest";

export default function BlogArchive({ posts }: { posts: BlogPostSummary[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState<SortOrder>("newest");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );

  const visiblePosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => activeCategory === "All" || p.category === activeCategory)
      .filter(
        (p) =>
          !q ||
          [p.title, p.excerpt, p.category, ...p.keywords].some((field) =>
            field.toLowerCase().includes(q)
          )
      )
      .sort((a, b) =>
        sort === "newest"
          ? b.datePublished.localeCompare(a.datePublished)
          : a.datePublished.localeCompare(b.datePublished)
      );
  }, [posts, query, activeCategory, sort]);

  return (
    <section className="bg-white px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="h-12 w-full rounded-xl border border-gray-200 bg-[#F7F9FB] pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#4F63F0] focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="whitespace-nowrap">Sort by:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOrder)}
                aria-label="Sort articles"
                className="h-11 appearance-none rounded-xl border border-gray-200 bg-[#F7F9FB] pl-4 pr-9 text-sm text-gray-700 outline-none focus:border-[#4F63F0]"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 transition ${
                activeCategory === category
                  ? "bg-[#0058BE] text-white"
                  : "bg-[#ECEEF0] text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#45464D]">
          {visiblePosts.length} {visiblePosts.length === 1 ? "article" : "articles"}
        </p>

        {visiblePosts.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-2xl border border-dashed border-gray-200 bg-[#F7F9FB] px-6 py-16 text-center">
            <p className="font-semibold text-gray-900">No articles match your search.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
              className="mt-3 text-sm font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
