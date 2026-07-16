import { Metadata } from "next";
export const metadata = {
  title: "Video Meeting Software | Zoiko Sema",
  description:
"Host smarter meetings with Zoiko Sema video meeting software featuring secure HD calls, AI insights, decision capture, and workspace collaboration."
};


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