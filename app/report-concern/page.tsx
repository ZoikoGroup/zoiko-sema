import type { Metadata } from "next";
import { ChooseRouteSection, ReportConcernHero, ReportFormSection, ReportMovementSection, TrustCenterPage } from "@/components/report-concern";

export const metadata: Metadata = {
  title: "Report a Concern Securely | Zoiko Sema",
  description: "Report your concerns securely with Zoiko Sema. Submit confidential workplace, ethics, and compliance reports through a safe and reliable reporting platform.",
};
export default function page(){
    return(
        <main>

            <ReportConcernHero/>
            <ChooseRouteSection/>
            <ReportFormSection/>
        <ReportMovementSection/>
        <TrustCenterPage/>
        </main>
    )
}