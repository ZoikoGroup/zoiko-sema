import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Team Calendar & Meeting Scheduling | Zoiko Sema",
  description:
    "Manage schedules, meetings, and events with Zoiko Sema Calendar. Keep teams aligned with smart planning, collaboration, and connected workspace tools.",
};

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
