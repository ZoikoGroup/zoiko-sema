import { 
    CalendarHeroSection,
    CalendarHowItWorksSection,
    CalendarWorkspaceSection,
    CalendarAvailabilitySection,
    CalendarSystemIntegrationSection,
    CalendarPolicyAwareSection,
    CalendarZoikoTimeBridgeSection,
    CalendarFaqSection,
    CalendarGetStartedSection
 } from "@/components/calendar";

export default function CalendarPage() {
  return (
    <main>
      <CalendarHeroSection />
      <CalendarHowItWorksSection />
      <CalendarWorkspaceSection />
      <CalendarAvailabilitySection />
      <CalendarSystemIntegrationSection />
      <CalendarPolicyAwareSection />
      <CalendarZoikoTimeBridgeSection />
      <CalendarFaqSection />
      <CalendarGetStartedSection />
    </main>
  );
}