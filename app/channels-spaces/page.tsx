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