import {
  ZoikoTechHeroSection,
  WhatZoikoTechDoesSection,
  HowCompanyProductRelateSection,
  WhereEverythingConnectsSection,
  HowZoikoTechWorksSection
} from "@/components/about-zoikotech";

export default function AboutZoikoTechPage() {
  return (
    <main>
      <ZoikoTechHeroSection />
      <WhatZoikoTechDoesSection />
      <HowCompanyProductRelateSection/>
      <WhereEverythingConnectsSection/>
      <HowZoikoTechWorksSection/>
    </main>
  );
}
