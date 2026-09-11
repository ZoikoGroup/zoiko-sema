import type { Metadata } from "next";
import { AIGovernanceSection, FinancialChallengesSection, FinancialControlCenterSection, FinancialFunctionsSection, FinancialHeroSection, FinancialLifecycleSection, Supervisionretentionsection } from "@/components/financial-services";

export const metadata: Metadata = {
  title: "Financial Communication Platform | Zoiko Sema",
  description: "Secure financial communication with Zoiko Sema. Manage meetings, approvals, AI summaries, retention, and compliance in one governed platform.",
};
export default function FinancialServicesPage() {
    return (
        <>
            <FinancialHeroSection />
            <FinancialChallengesSection />
            <FinancialLifecycleSection />
            <FinancialControlCenterSection />
            <Supervisionretentionsection />
            <AIGovernanceSection />
            <FinancialFunctionsSection /> 
        </>
    );
}