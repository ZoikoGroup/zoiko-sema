import type { Metadata } from "next";
import {  AdminGovernanceSection,SecurityCenterFAQ,SecurityReviewPathway,TrustAndConcernsSection,ZoikoSemaSecurityCenterHero, ZoikoSemaSecurityDomains, ZoikoSemaSecurityOverview, ZoikoSemaTrustResources } from "@/components/security-center";

export const metadata: Metadata = {
  title: "Security Center & Compliance | Zoiko Sema",
  description: "Discover Zoiko Sema security framework, including data protection, privacy controls, AI governance, and enterprise-ready communication safeguards.",
};
export default function  page(){
    return(
        <main>
            <ZoikoSemaSecurityCenterHero/>
            <ZoikoSemaTrustResources/>
            <ZoikoSemaSecurityOverview/>
            <ZoikoSemaSecurityDomains/>
            <AdminGovernanceSection/>
            <SecurityReviewPathway/>
            <TrustAndConcernsSection/>
            <SecurityCenterFAQ/>
        </main>
    )
}