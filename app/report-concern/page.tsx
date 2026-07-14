import { ChooseRouteSection, ReportConcernHero, ReportFormSection, ReportMovementSection, TrustCenterPage } from "@/components/report-concern";

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