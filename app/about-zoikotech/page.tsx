import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "About Zoiko Tech AI Innovation | Zoiko Sema",
  description: "Learn about Zoiko Tech, a technology company focused on AI innovation, advanced solutions, and building smarter experiences for businesses worldwide.",
};
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