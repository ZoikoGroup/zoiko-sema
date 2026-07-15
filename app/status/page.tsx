import { CommonQuestions, CTASection, CurrentIncidents, LiveComponentStatus, PlannedMaintenance, StatusNotifications, SupportRouting, SystemStatusHero, UptimeHistory } from "@/components/status";

export default function page(){
    return(
        <main>
            <SystemStatusHero/>
            <LiveComponentStatus/>
            <CurrentIncidents/>
            <PlannedMaintenance/>
            <UptimeHistory/>
            <StatusNotifications/>
            <SupportRouting/>
            <CommonQuestions/>
            <CTASection/>
        </main>
    )
}