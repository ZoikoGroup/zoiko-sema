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
