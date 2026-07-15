import { Metadata } from "next";
export const metadata = {
  title: "Team Communication Software | Zoiko Sema",
  description:
    "Improve collaboration with Zoiko Sema team communication software. Create organized channels, shared spaces, and seamless conversations for your team.",
};

import {
  ChannelsSpacesHeroSection,
  ChannelsSpacesProblemSection,
  ChannelsSpacesStructureSection,
  ChannelsSpacesCollaborationSection,
  ChannelsSpacesAiSearchSection,
  ChannelsSpacesKnowledgeSection,
  ChannelsSpacesGovernanceSection,
  ChannelsSpacesZoikoTimeSection,
  ChannelsSpacesUseCasesSection,
  ChannelsSpacesClosingCtaSection
} from "@/components/channels-spaces";

export default function ChannelsSpacesPage() {
  return (
    <main>
      <ChannelsSpacesHeroSection />
      <ChannelsSpacesProblemSection />
      <ChannelsSpacesStructureSection />
      <ChannelsSpacesCollaborationSection />
      <ChannelsSpacesAiSearchSection />
      <ChannelsSpacesKnowledgeSection />
      <ChannelsSpacesGovernanceSection />
      <ChannelsSpacesZoikoTimeSection />
      <ChannelsSpacesUseCasesSection />
      <ChannelsSpacesClosingCtaSection />
    </main>
  );
}