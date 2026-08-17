import React from 'react';
import {
  GovHeroSection,
  GovOutcomeStrip,
  GovCoordinationHub,
  GovWorkflowMap,
  GovPatterns,
  GovBoundaries,
  GovContractorCoordination,
  GovAccessibility,
  GovIntegrationsReporting,
  GovFAQSection,
  GovGetStarted
} from '@/components/government-use-case';

export const metadata = {
  title: 'Government Coordination Platform | Zoiko Sema',
  description: 'Zoiko Sema helps government teams coordinate communication, meetings, tasks and interagency handoffs with governed workflows, AI summaries & audit evidence.',
};

export default function GovernmentUseCasePage() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex-1">
        <GovHeroSection />
        <GovOutcomeStrip />
        <GovCoordinationHub />
        <GovWorkflowMap />
        <GovPatterns />
        <GovContractorCoordination />
        <GovBoundaries />
        <GovAccessibility />
        <GovIntegrationsReporting />
        <GovFAQSection />
        <GovGetStarted />
      </div>
    </div>
  );
}
