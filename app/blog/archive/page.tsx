import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BlogArchive, NewsletterCtaSection } from "@/components/blog";
import { getPostSummaries } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog Archive | Zoiko Sema",
  description:
    "Browse every Zoiko Sema article on AI communication, business messaging, video meetings, team collaboration, and customer engagement.",
  alternates: { canonical: "/blog/archive" },
};

export default function BlogArchivePage() {
  const posts = getPostSummaries();

  return (
    <main>
      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-[#C8C8C8]">
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">Archive</span>
          </nav>
          <span className="mb-5 inline-block rounded-full border border-white/15 bg-[#D8E2FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-[1px] text-[#3457E8]">
            BLOG ARCHIVE
          </span>
          <h1 className="max-w-180 text-4xl font-bold leading-tight text-white md:text-[42px]">
            Every article, guide, and insight in one place.
          </h1>
          <p className="mt-5 max-w-150 text-[18px] leading-relaxed text-[#C8C8C8]">
            Explore our full library on AI communication, business messaging,
            video collaboration, and connected team workflows.
          </p>
        </div>
      </section>

      <BlogArchive posts={posts} />
      <NewsletterCtaSection />
    </main>
  );
}
