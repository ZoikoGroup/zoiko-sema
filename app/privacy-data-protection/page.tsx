import React from "react";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Privacy & Data Protection Solutions | Zoiko Sema",
  description:
    "Explore Zoiko Sema’s privacy & data protection solutions designed to secure your information, protect data privacy, and support trusted digital experiences.",
};

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
