import {
  VideoMeetingsHeroSection,
  VideoMeetingsContinuitySection,
  VideoMeetingsShowcaseSection,
  VideoMeetingsCoreCapabilitiesSection,
  VideoMeetingsCollaborationSection,
  VideoMeetingsAIIntelligenceSection,
  VideoMeetingsAdministrationSection,
  VideoMeetingsSecuritySection,
  VideoMeetingsZoikoTimeSection,
  VideoMeetingsUseCasesSection,
  VideoMeetingsClosingCTASection,
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
      <VideoMeetingsAdministrationSection />
      <VideoMeetingsSecuritySection />
      <VideoMeetingsZoikoTimeSection />
      <VideoMeetingsUseCasesSection />
      <VideoMeetingsClosingCTASection />
    </main>
  );
}