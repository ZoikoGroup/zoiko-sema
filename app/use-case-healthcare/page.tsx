import type { Metadata } from "next";
import { HealthcareCoreSectionGroup, HealthcareHeroSection, HealthcareProductShowcase, HealthcareReportingCTASegment } from "@/components/use-case-healthcare";

export const metadata: Metadata = {
  title: "Secure Healthcare Communication | Zoiko Sema",
  description: "Secure healthcare communication with Zoiko Sema platform for care-team collaboration, handoffs, escalations, reviewed AI summaries and audit readiness.",
};
export default function page(){
    return (
        <main>
            <HealthcareHeroSection/>
            <HealthcareProductShowcase/>
            <HealthcareCoreSectionGroup/>
           <HealthcareReportingCTASegment/>
        
            </main>
    )
}