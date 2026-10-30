import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ChevronRight, Clock } from "lucide-react";
import { BlogPostCard, PostBody, PostFaq } from "@/components/blog";
import {
  SITE_URL,
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostHeadings,
  getPostSummaries,
  getReadTime,
  type BlogPost,
} from "@/lib/blog/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function structuredData(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const org = { "@type": "Organization", name: "Zoiko Sema", url: `${SITE_URL}/` };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: "en-US",
        author: org,
        publisher: org,
        about: post.about.map((name) => ({ "@type": "Thing", name })),
        keywords: post.keywords,
        isPartOf: { "@type": "WebSite", name: "Zoiko Sema", url: `${SITE_URL}/` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url,
        name: `Frequently Asked Questions: ${post.metaTitle}`,
        inLanguage: "en-US",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = getPostHeadings(post);
  const related = getPostSummaries()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData(post)).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-[#C8C8C8]">
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog/archive" className="hover:text-white">
              Archive
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{post.category}</span>
          </nav>

          <span className="mb-5 inline-block rounded-full border border-white/15 bg-[#D8E2FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-[1px] text-[#3457E8]">
            {post.category}
          </span>
          <h1 className="text-3xl font-bold leading-tight text-white md:text-[42px]">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[18px] leading-relaxed text-[#C8C8C8]">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#C8C8C8]">
            <span className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F63F0] text-xs font-bold text-white">
                ZS
              </span>
              <span className="font-semibold text-white">{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays size={15} />
              <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} />
              {getReadTime(post)}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-[#EBE8F4] bg-[#F7F9FB] p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
                On this page
              </p>
              <ol className="max-h-[65vh] space-y-2.5 overflow-y-auto pr-1 text-sm">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="block leading-snug text-[#45464D] hover:text-[#4F63F0]">
                      {h.text}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="block leading-snug text-[#45464D] hover:text-[#4F63F0]">
                    Frequently Asked Questions
                  </a>
                </li>
              </ol>
            </div>
          </aside>

          <article className="min-w-0 max-w-3xl">
            <PostBody markdown={post.body} />

            <div id="faq" className="mt-16 scroll-mt-28">
              <h2 className="text-2xl font-bold leading-snug text-gray-900 sm:text-[28px]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-[17px] leading-relaxed text-[#45464D]">
                Direct answers to common questions about the topics in this article.
              </p>
              <PostFaq faqs={post.faqs} />
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#11163C] p-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold text-white">
                  See how Zoiko Sema connects your team&apos;s communication.
                </h2>
                <p className="mt-2 text-sm text-[#C8C8C8]">
                  Messaging, audio calls, video meetings, and channels in one secure workspace.
                </p>
              </div>
              <Link
                href="/get-a-demo"
                className="shrink-0 rounded-full bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3E51DE]"
              >
                Get a Demo
              </Link>
            </div>

            <Link
              href="/blog/archive"
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
            >
              <ArrowLeft size={14} />
              Back to all articles
            </Link>
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#F4F2FD] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-[28px]">Keep reading</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogPostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
