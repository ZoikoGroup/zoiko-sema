import type { Metadata } from "next";


import {
  SemaZoikoTimeHeroSection,
  SemaZoikoTimeIntegratedValueSection,
  SemaZoikoTimeWorkflowStepsSection,
  SemaZoikoTimeEvidenceMapSection,
  SemaZoikoTimeTrustDesignSection,
  SemaZoikoTimeAuditTrailSection,
  SemaZoikoTimeInsightsSection,
  SemaZoikoTimeRolesSection,
  SemaZoikoTimeTrustGridSection,
  SemaZoikoTimeDemoFormSection,
  SemaZoikoTimeFaqSection,
} from "@/components/sema-zoikotime";

export const metadata: Metadata = {
  title: "Sema + ZoikoTime: Verified Work Intelligence",
  description: "Connect Sema with ZoikoTime to transform conversations into verified work, improve accountability, and create transparent team collaboration.",
};

export default function SemaZoikoTimePage() {
  return (
    <main>
      <SemaZoikoTimeHeroSection />
      <SemaZoikoTimeIntegratedValueSection />
      <SemaZoikoTimeWorkflowStepsSection />
      <SemaZoikoTimeEvidenceMapSection />
      <SemaZoikoTimeTrustDesignSection />
      <SemaZoikoTimeAuditTrailSection />
      <SemaZoikoTimeInsightsSection />
      <SemaZoikoTimeRolesSection />
      <SemaZoikoTimeTrustGridSection />
      <SemaZoikoTimeDemoFormSection />
      <SemaZoikoTimeFaqSection />
    </main>
  );
}