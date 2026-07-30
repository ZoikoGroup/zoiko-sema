import type { Metadata } from "next";
import { ZoikoSemaAdminAndTrust, ZoikoSemaComparisonAndFaq, ZoikoSemaConfidentialMode, ZoikoSemaDisclosureAndCommunication, ZoikoSemaProtectionOverview } from "@/components/confidential-mode";

export const metadata: Metadata = {
  title: "Secure Confidential Mode Platform | Zoiko Sema",
  description: "Secure confidential mode platform by Zoiko Sema enables private communication with end-to-end encryption and stronger workspace privacy controls.",
};
export default function page(){
        return(
            <main>
            <ZoikoSemaConfidentialMode/>
            <ZoikoSemaProtectionOverview/>
            <ZoikoSemaDisclosureAndCommunication/>
            <ZoikoSemaAdminAndTrust/>
            <ZoikoSemaComparisonAndFaq/>
            </main>
        )
}