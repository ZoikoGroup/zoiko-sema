import { BenefitsSupportSection, CandidateFaqSection, CareersHeroSection, HiringProcessSection, OpenRolesSection, OperatingPrinciplesSection, TalentCommunitySection, WhyZoikoSection, WorkAreasSection } from '@/components/careers';

export default function CareersPage() {
  return (
    <main>
      <CareersHeroSection/>
      <WhyZoikoSection/>
      <WorkAreasSection/>
      <OpenRolesSection/>
      <OperatingPrinciplesSection/>
      <HiringProcessSection/>
      <BenefitsSupportSection/>
      <TalentCommunitySection/>
      <CandidateFaqSection/>
    </main>
  );
}