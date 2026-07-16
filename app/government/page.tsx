import React from 'react';

import {
  GovernmentHeroSection,
  SelectEnvironmentSection,
  WhyGovernedSection,
  ProductShowcaseSection,
  MissionWorkflowsSection,
  InteragencyCollaborationSection,
  IdentityZeroTrustSection,
  RecordsManagementSection,
  ResponsibleAISection,
  SecurityResilienceSection,
  ProcurementReadinessSection,
  IntegrationsSection,
  ReportingSection,
  TrustSection,
  CTABannerSection,
  GovernmentFAQSection
} from '@/components/government';

export const metadata = {
  title: 'Government & Public Sector | Zoiko Sema',
  description: 'Zoiko Sema helps government and public-sector teams coordinate messages, meetings, decisions, tasks, records, and external participants through one governed communication layer with controlled AI and auditable administration.',
};

export default function GovernmentPage() {
  return (
    <div className="flex flex-col bg-slate-50">
      <div className="flex-1">
        <GovernmentHeroSection />
        <SelectEnvironmentSection />
        <WhyGovernedSection />
        <ProductShowcaseSection />
        <MissionWorkflowsSection />
        <InteragencyCollaborationSection />
        <IdentityZeroTrustSection />
        <RecordsManagementSection />
        <ResponsibleAISection />
        <SecurityResilienceSection />
        <ProcurementReadinessSection />
        <IntegrationsSection />
        <ReportingSection />
        <TrustSection />
        <CTABannerSection />
        <GovernmentFAQSection />
      </div>
    </div>
  );
}
