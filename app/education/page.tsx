import {
  HeroSection,
  WhyChooseSection,
  EducationLifecycleSection,
  HighIntegrityLiveClasses,
  InstitutionalGovernanceSection,
  Visibility,
  FAQ,
} from "@/components/education";

export default function EducationPage() {
  return (
    <main>
      <HeroSection />
      <WhyChooseSection />
      <EducationLifecycleSection />
      <HighIntegrityLiveClasses />
      <InstitutionalGovernanceSection />
      <Visibility />
      <FAQ />
    </main>
  );
}
