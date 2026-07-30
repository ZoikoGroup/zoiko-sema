import type { Metadata } from "next";
import {

  HeroSection,
  WhyChooseSection,
  EducationLifecycleSection,
  HighIntegrityLiveClasses,
  InstitutionalGovernanceSection,
  Visibility,
  FAQ,
} from "@/components/education";

export const metadata: Metadata = {
  title: "Education Communication & Collaboration | Zoiko Sema",
  description: "Improve education communication & collaboration with Zoiko Sema. Connect courses, live classes, learner support and secure AI tools in one platform.",
};
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