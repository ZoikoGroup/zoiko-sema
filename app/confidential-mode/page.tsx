import { ZoikoSemaAdminAndTrust, ZoikoSemaComparisonAndFaq, ZoikoSemaConfidentialMode, ZoikoSemaDisclosureAndCommunication, ZoikoSemaProtectionOverview } from "@/components/confidential-mode";

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