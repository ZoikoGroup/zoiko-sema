import {
  ProductUpdateHeroSection,
  ProductUpdateFeaturedReleaseSection,
  ProductUpdateTimelineSection,
  ProductUpdateCategoriesSection,
  ProductUpdateNewsletterSection,
  ProductUpdateFaqSection,
} from "@/components/product-update";

export default function ProductUpdatePage() {
  return (
    <main>
      <ProductUpdateHeroSection />
      <ProductUpdateFeaturedReleaseSection />
      <ProductUpdateTimelineSection />
      <ProductUpdateCategoriesSection />
      <ProductUpdateNewsletterSection />
      <ProductUpdateFaqSection />
    </main>
  );
}
