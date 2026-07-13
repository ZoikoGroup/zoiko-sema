import {
  ZoikoTechHeroSection,
  WhatZoikoTechDoesSection,
  HowCompanyProductRelateSection,
  WhereEverythingConnectsSection,
  HowZoikoTechWorksSection,
  TrustGovernanceModelSection,
  StakeholderRoutesSection,
  CompanyTimelineSection,
  Team,
  EngageWithZoikoTechSection,
  AboutZoikoTechFaqSection,
} from "@/components/about-zoikotech";

export default function AboutZoikoTechPage() {
  return (
    <main>
      <ZoikoTechHeroSection />
      <WhatZoikoTechDoesSection />
      <HowCompanyProductRelateSection />
      <WhereEverythingConnectsSection />
      <HowZoikoTechWorksSection />
      <TrustGovernanceModelSection />
      <StakeholderRoutesSection />
      <CompanyTimelineSection />
      <Team />
      <EngageWithZoikoTechSection />
      <AboutZoikoTechFaqSection />
    </main>
  );
}
