import type { Metadata } from "next";
import { IntegrationsHeroSection, OutcomeStripSection ,ConnectorCatalogSection, IntegrationControlCenterSection, IdentityWorkforceSection , PayrollFinanceSection ,ApisWebhooksSection ,SecurityPrivacySection ,ReliabilitySection ,ImplementationSection , IntegrationsFaqSection, IntegrationsCtaSection} from "@/components/zoikotime-integrations";

export const metadata: Metadata = {
  title: "ZoikoTime Integrations | Connect HR, Payroll & Attendance",
  description: "Connect ZoikoTime with HR, payroll, attendance, and business apps to automate workflows, sync employee data, and improve workforce efficiency.",
};
    

export default function IntegrationsPage() {
    return (
        <>
            <IntegrationsHeroSection />
            <OutcomeStripSection />
            <ConnectorCatalogSection />
            <IntegrationControlCenterSection />
            <IdentityWorkforceSection />
            <PayrollFinanceSection />
            <ApisWebhooksSection />
            <SecurityPrivacySection />
            <ReliabilitySection />
            <ImplementationSection />
            <IntegrationsFaqSection />
            <IntegrationsCtaSection />
        </>
    );
}