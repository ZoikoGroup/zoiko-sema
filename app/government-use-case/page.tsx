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
  title: 'Government Use Case | Zoiko Sema',
  description: 'Coordinate public-sector work with clarity, control, and evidence. Bring approved messages, meetings, interagency handoffs, and audit evidence into one governed workspace.',
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
