import type { Metadata } from "next";
import {
  ProductUpdateHeroSection,
  ProductUpdateFeaturedReleaseSection,
  ProductUpdateTimelineSection,
  ProductUpdateCategoriesSection,
  ProductUpdateNewsletterSection,
  ProductUpdateFaqSection,
} from "@/components/product-update";

export const metadata: Metadata = {
  title: "Zoiko Sema Product Updates | Latest Releases",
  description:
    "Stay updated with Zoiko Sema product releases, new features, security enhancements, bug fixes and AI updates across the entire platform ecosystem.",
};

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
