import {
  SearchHeroSection,
  SearchWorkspaceSection,
  SearchAiAnswerSection,
  SearchContextRichSection,
  SearchPermissionsSection,
  SearchDecisionsSection,
  SearchFastSearchSection,
  SearchZoikoTimeBridgeSection,
  SearchUseCasesSection,
  SearchFaqSection,
  SearchFinalCtaSection
} from "@/components/search";

export default function SearchPage() {
  return (
    <main>
      <SearchHeroSection />
      <SearchWorkspaceSection />
      <SearchAiAnswerSection />
      <SearchContextRichSection />
      <SearchPermissionsSection />
      <SearchDecisionsSection />
      <SearchFastSearchSection />
      <SearchZoikoTimeBridgeSection />
      <SearchUseCasesSection />
      <SearchFaqSection />
      <SearchFinalCtaSection />
    </main>
  );
}