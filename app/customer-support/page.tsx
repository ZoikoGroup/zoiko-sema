import type { Metadata } from "next";
import { CommonQuestionsSection, CSLifecycle, CustomerSupportHero, PlansRolesSection, ReportingHealthSection, WhySupportBreaks, ZoikoWorkspaceFeatures } from "@/components/customer-support";

export const metadata: Metadata = {
  title: "Customer Support Platform | Zoiko Sema",
  description: "Resolve customer issues faster with Zoiko Sema. Connect conversations, tasks, files, knowledge and escalations in one governed support workspace.",
};
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