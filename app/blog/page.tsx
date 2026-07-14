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
