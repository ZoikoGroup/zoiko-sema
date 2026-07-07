import {
  AudioCallsHeroSection,
  AudioCallsWhyCallSection,
  AudioCallsShowcaseSection,
  AudioCallsCoreCallingSection,
  AudioCallsAIIntelligenceSection,
  AudioCallsAdminControlsSection,
  AudioCallsZoikoTimeSection,
  AudioCallsUseCasesSection,
  AudioCallsClosingCTASection,
} from "@/components/audio-calls";

export default function AudioCallsPage() {
  return (
    <main>
      <AudioCallsHeroSection />
      <AudioCallsWhyCallSection />
      <AudioCallsShowcaseSection />
      <AudioCallsCoreCallingSection />
      <AudioCallsAIIntelligenceSection />
      <AudioCallsAdminControlsSection />
      <AudioCallsZoikoTimeSection />
      <AudioCallsUseCasesSection />
      <AudioCallsClosingCTASection />
    </main>
  );
}