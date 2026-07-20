import React from "react";
import {
  PrivacyHero,
  PrivacyProofStrip,
  PrivacyArchitecture,
  PrivacyCommandCenter,
  PrivacyDataInventory,
  PrivacyPurpose,
  PrivacyWorkerTransparency,
  PrivacyRightsWorkflow,
  PrivacyResidency,
  PrivacyAIGovernance,
  PrivacyRolesGates,
  PrivacyFAQ,
  PrivacyCTA
} from "@/components/privacy-data-protection";

export default function PrivacyDataProtectionPage() {
  return (
    <main className="min-h-screen bg-white font-['Inter']">
      <PrivacyHero />
      <PrivacyProofStrip />
      <PrivacyArchitecture />
      <PrivacyCommandCenter />
      <PrivacyDataInventory />
      <PrivacyPurpose />
      <PrivacyWorkerTransparency />
      <PrivacyRightsWorkflow />
      <PrivacyResidency />
      <PrivacyAIGovernance />
      <PrivacyRolesGates />
      <PrivacyFAQ />
      <PrivacyCTA />
    </main>
  );
}
