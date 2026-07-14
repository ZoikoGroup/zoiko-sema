import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema | Business Audio Calling Platform",
  description:
    "Zoiko Sema business audio calling platform offers secure voice calls, AI-powered summaries, action items, and workspace collaboration for modern teams.",
};


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