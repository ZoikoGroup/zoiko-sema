import { Metadata } from "next";
export const metadat={
  title:"Sema + ZoikoTime: Verified Work Intelligence",
  description:"Connect Sema with ZoikoTime to transform conversations into verified work, improve accountability, and create transparent team collaboration"
}

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
