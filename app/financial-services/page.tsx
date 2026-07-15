import { AIGovernanceSection, FinancialChallengesSection, FinancialControlCenterSection, FinancialFunctionsSection, FinancialHeroSection, FinancialLifecycleSection, Supervisionretentionsection } from "@/components/financial-services";

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