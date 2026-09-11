import type { Metadata } from "next";
import {

  Hero,
  Search,
  Features,
  FeaturedStories,
  ConsolidatedImpact,
  CtaSection,
  FaqSection,
} from "@/components/customer-stories";

export const metadata: Metadata = {
  title: "Customer Stories & Success Stories | Zoiko Sema",
  description: "Read customer success stories highlighting how organizations use Zoiko Sema to improve productivity, streamline communication, and work smarter.",
};
export default function page() {
  return (
    <main>
      <Hero />
      <Search />
      <Features />
      <FeaturedStories />
      <ConsolidatedImpact />
      <CtaSection />
      <FaqSection />
    </main>
  );
}