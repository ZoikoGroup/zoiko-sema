import { CommonQuestionsSection, CSLifecycle, CustomerSupportHero, PlansRolesSection, ReportingHealthSection, WhySupportBreaks, ZoikoWorkspaceFeatures } from "@/components/customer-support";

export default function page(){
    return(
        <main>
            <CustomerSupportHero/>
            <WhySupportBreaks/>
            <CSLifecycle/>
            <ZoikoWorkspaceFeatures/>
            <ReportingHealthSection/>
            <PlansRolesSection/>
            <CommonQuestionsSection/>
        </main>
    )
}