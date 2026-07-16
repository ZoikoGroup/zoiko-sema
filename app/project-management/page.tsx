import React from 'react';
import { 
  ProjectManagementHeroSection, 
  ProjectManagementRolesSection,
  ProjectManagementComparisonSection,
  ProjectManagementShowcaseSection,
  ProjectManagementLifecycleSection,
  ProjectManagementPlanningSection,
  ProjectManagementMeetingsSection,
  ProjectManagementControlsSection,
  ProjectManagementFilesSection,
  ProjectManagementStakeholderSection,
  ProjectManagementAIGovernanceSection,
  ProjectManagementSecuritySection,
  ProjectManagementIntegrationsSection,
  ProjectManagementReportingSection,
  ProjectManagementCTASection,
  ProjectManagementFAQSection
} from '@/components/project-management';

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <ProjectManagementHeroSection />
      <ProjectManagementRolesSection />
      <ProjectManagementComparisonSection />
      <ProjectManagementShowcaseSection />
      <ProjectManagementLifecycleSection />
      <ProjectManagementPlanningSection />
      <ProjectManagementMeetingsSection />
      <ProjectManagementControlsSection />
      <ProjectManagementFilesSection />
      <ProjectManagementStakeholderSection />
      <ProjectManagementAIGovernanceSection />
      <ProjectManagementSecuritySection />
      <ProjectManagementIntegrationsSection />
      <ProjectManagementReportingSection />
      <ProjectManagementCTASection />
      <ProjectManagementFAQSection />
    </div>
  );
}
