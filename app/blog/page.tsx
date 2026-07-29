import { Metadata } from "next";
export const metadat={
  title:"AI Communication Insights & Trends | Zoiko Sema",
  description:"Stay informed with the latest AI communication insights, workplace collaboration trends, productivity tips, and business technology updates from Zoiko Sema."
}

import {
  Hero,
  SearchFilterBarSection,
  FeaturedArticleSection,
  LatestFromBlogSection,
  DeepDivesByTopicSection,
  MasterThePlatformSection,
  ArticlePreviewSection,
  ExploreMoreGridSection,
  NewsletterCtaSection,
  FaqSection
} from "@/components/blog";

export default function BlogPage() {
  return (
    <main>
      <Hero />
      <SearchFilterBarSection />
      <FeaturedArticleSection />
      <LatestFromBlogSection />
      <DeepDivesByTopicSection />
      <MasterThePlatformSection />
      <ArticlePreviewSection />
      <ExploreMoreGridSection />
      <NewsletterCtaSection />
      <FaqSection />
    </main>
  );
}
