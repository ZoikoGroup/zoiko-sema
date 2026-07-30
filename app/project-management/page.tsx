import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Project Management Platform | Zoiko Sema",
  description: "Zoiko Sema simplifies project management by bringing messages, meetings, milestones, tasks, files, decisions, risks and AI summaries into one workspace.",
};
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