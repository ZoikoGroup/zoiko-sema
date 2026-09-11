import type { Metadata } from "next";
import { AnalyticsAndSupportPage, DownloadSection, InstallationDashboardPage, PlatformDistribution, SmartPlatformDetection } from "@/components/download";

export const metadata: Metadata = {
  title: "Download Zoiko Sema App | Secure Communication Platform",
  description: "Download Zoiko Sema for Windows, macOS, Android, iOS, Linux, and web. Install secure communication apps for seamless team collaboration anywhere.",
};
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