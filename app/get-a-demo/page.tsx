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