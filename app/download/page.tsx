import { AnalyticsAndSupportPage, DownloadSection, InstallationDashboardPage, PlatformDistribution, SmartPlatformDetection } from "@/components/download";

export default function page(){
    return(
        <main>
            <DownloadSection/>
            <SmartPlatformDetection/>
            <PlatformDistribution/>
            <InstallationDashboardPage/>
            <AnalyticsAndSupportPage/>
        </main>
    )
}