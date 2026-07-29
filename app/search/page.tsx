import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Zoiko Sema Search | AI Search for Work Context",
  description:
    "Zoiko Sema Search helps you quickly find work knowledge, conversations, documents, and insights with powerful AI-driven search technology.",
};

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
