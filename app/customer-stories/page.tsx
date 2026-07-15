import {
  Hero,
  Search,
  Features,
  FeaturedStories,
  ConsolidatedImpact,
  CtaSection,
  FaqSection,
} from "@/components/customer-stories";

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
