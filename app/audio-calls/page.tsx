import {
  AudioCallsHeroSection,
  AudioCallsWhyCallSection,
  AudioCallsCoreCallingSection,
  AudioCallsAIIntelligenceSection,
  AudioCallsAdminControlsSection,
  AudioCallsUseCasesSection,
  AudioCallsZoikoTimeSection,
  AudioCallsClosingCTASection,
} from "@/components/audio-calls";

export default function AudioCallsPage() {
  return (
    <main>
      <AudioCallsHeroSection />
      <AudioCallsWhyCallSection />
      <AudioCallsCoreCallingSection />
      <AudioCallsAIIntelligenceSection />
      <AudioCallsAdminControlsSection />
      <AudioCallsUseCasesSection />
      <AudioCallsZoikoTimeSection />
      <AudioCallsClosingCTASection />
    </main>
  );
}