import type { Metadata } from "next";
import { BenefitsSupportSection, CandidateFaqSection, CareersHeroSection, HiringProcessSection, OpenRolesSection, OperatingPrinciplesSection, TalentCommunitySection, WhyZoikoSection, WorkAreasSection } from '@/components/careers';

export const metadata: Metadata = {
  title: "Careers & Job Opportunities | Zoiko Sema",
  description: "Join Zoiko Sema team and build your career with a technology company focused on AI innovation, secure communication, and digital transformation.",
};
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