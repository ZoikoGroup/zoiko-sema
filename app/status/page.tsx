import type { Metadata } from "next";
import { CommonQuestions, CTASection, CurrentIncidents, LiveComponentStatus, PlannedMaintenance, StatusNotifications, SupportRouting, SystemStatusHero, UptimeHistory } from "@/components/status";

export const metadata: Metadata = {
  title: "System Status & Service Updates | Zoiko Sema",
  description: "Stay informed with Zoiko Sema system status for real-time service updates, active incidents, planned maintenance, uptime history, and platform health.",
};
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