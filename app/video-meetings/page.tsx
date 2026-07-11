import {
  VideoMeetingsHeroSection,
  VideoMeetingsContinuitySection,
  VideoMeetingsShowcaseSection,
  VideoMeetingsCoreCapabilitiesSection,
  VideoMeetingsCollaborationSection,
  VideoMeetingsAIIntelligenceSection,
UseCasesSection,
 TestimonialSection,
 PricingSection,
  FAQSection,
} from "@/components/video-meetings";

export default function VideoMeetingsPage() {
  return (
    <main>
      <VideoMeetingsHeroSection />
      <VideoMeetingsContinuitySection />
      <VideoMeetingsShowcaseSection />
      <VideoMeetingsCoreCapabilitiesSection />
      <VideoMeetingsCollaborationSection />
      <VideoMeetingsAIIntelligenceSection />
      <UseCasesSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection/>
    </main>
  );
}