import {  AdminGovernanceSection,SecurityCenterFAQ,SecurityReviewPathway,TrustAndConcernsSection,ZoikoSemaSecurityCenterHero, ZoikoSemaSecurityDomains, ZoikoSemaSecurityOverview, ZoikoSemaTrustResources } from "@/components/security-center";

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