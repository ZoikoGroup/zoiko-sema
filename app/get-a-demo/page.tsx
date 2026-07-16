import { Metadata } from "next";
export const metadata = {
  title: "Get a Personalized Demo | Zoiko Sema",
  description:
    "Get a personalized demo from Zoiko Sema and explore Sema features tailored to your workflow, including AI communication, meetings, security, & collaboration.",
}
import { GetDemoPage, GetDemoRequestFormSection, GetDemoCoverSection, GetDemoSpecialistSection, GetDemoWhatHappensSection, GetDemoFAQSection, GetDemoFinalCTASection } from "@/components/get-a-demo";

export default function GetADemoPage() {
  return (
    <main className="min-h-screen">
      <div>
        <GetDemoPage />
        <GetDemoRequestFormSection />
        <GetDemoCoverSection />
        <GetDemoSpecialistSection />
        <GetDemoWhatHappensSection />
        <GetDemoFAQSection />
        <GetDemoFinalCTASection />
      </div>
    </main>
  );
}