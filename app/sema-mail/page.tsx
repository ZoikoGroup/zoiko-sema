import { AiAssistanceSection, CoreExperienceSection, MailWorkflowSection, SearchContextSection, SecurityGovernanceSection, ZoikoSemaFeatures, ZoikoSemaGetStarted, ZoikoSemaMailHero } from "@/components/sema-mail";

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