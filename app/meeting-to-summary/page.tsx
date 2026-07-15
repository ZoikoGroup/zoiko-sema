import { Metadata } from "next";
export const metadata = {
  title: "AI Meeting Summary Software | Zoiko Sema",
  description:
    "Create an accurate Meeting Summary with Zoiko Sema. AI captures discussions, decisions, action items, and key notes to help teams stay productive & aligned.",
}
import {
  MeetingSummaryHeroSection,
  MeetingSummaryWhySection,
  MeetingSummaryShowcaseSection,
  MeetingSummaryJourneySection,
  MeetingSummaryScenariosSection,
  MeetingSummaryGovernanceSection,
  MeetingSummaryReviewSection,
  MeetingSummaryTrackingSection,
  MeetingSummaryOutcomesSection,
  MeetingSummaryFAQSection,
  MeetingSummaryFinalCTASection
} from "@/components/meeting-to-summary";

export default function MeetingToSummaryPage() {
  return (
    <main>
      <MeetingSummaryHeroSection />
      <MeetingSummaryWhySection />
      <MeetingSummaryShowcaseSection />
      <MeetingSummaryJourneySection />
      <MeetingSummaryScenariosSection />
      <MeetingSummaryGovernanceSection />
      <MeetingSummaryReviewSection />
      <MeetingSummaryTrackingSection />
      <MeetingSummaryOutcomesSection />
      <MeetingSummaryFAQSection />
      <MeetingSummaryFinalCTASection />
    </main>
  );
}