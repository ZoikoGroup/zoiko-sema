import { HealthcareCoreSectionGroup, HealthcareHeroSection, HealthcareProductShowcase, HealthcareReportingCTASegment } from "@/components/use-case-healthcare";

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