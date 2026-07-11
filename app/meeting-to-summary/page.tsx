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