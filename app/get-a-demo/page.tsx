import { GetDemoPage, GetDemoCoverSection, GetDemoSpecialistSection, GetDemoWhatHappensSection, GetDemoFAQSection } from "@/components/get-a-demo";

export default function GetADemoPage() {
  return (
    <main className="min-h-screen">
      <div>
        <GetDemoPage />
        <GetDemoCoverSection />
        <GetDemoSpecialistSection />
        <GetDemoWhatHappensSection />
        <GetDemoFAQSection />
      </div>
    </main>
  );
}