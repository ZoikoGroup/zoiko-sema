import type { Metadata } from "next";
import { AiAssistanceSection, CoreExperienceSection, MailWorkflowSection, SearchContextSection, SecurityGovernanceSection, ZoikoSemaFeatures, ZoikoSemaGetStarted, ZoikoSemaMailHero } from "@/components/sema-mail";

export const metadata: Metadata = {
  title: "Sema Mail | Secure AI Business Email Platform",
  description:
    "Zoiko Sema Mail brings AI-powered business email with smart follow-ups, connected workflows, and a unified workspace to help teams work faster.",
};

export default function page(){
    return(
        <main>
        <ZoikoSemaMailHero/>
        <MailWorkflowSection/>
        <CoreExperienceSection/>
        <AiAssistanceSection/>
        <SearchContextSection/>
        <SecurityGovernanceSection/>
        <ZoikoSemaFeatures/>
        <ZoikoSemaGetStarted/>
        </main>
    )
}
