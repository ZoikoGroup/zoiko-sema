import type { Metadata } from "next";
import {

  TimeTrackingHero,
  WhyEnterpriseTeams,
  VerifiedTimeJourney,
  AuditReadyRecords,
} from "@/components/zoikotime-time-tracking";

export const metadata: Metadata = {
  title: "ZoikoTime Employee Time Tracking | Zoiko Sema",
  description: "Get accurate employee time tracking with ZoikoTime from Zoiko Sema. Monitor hours, manage attendance, and maintain reliable workforce records easily.",
};
export default function ZoikoTimeTrackingPage() {
  return (
    <main>
      <TimeTrackingHero />
      <WhyEnterpriseTeams />
      <VerifiedTimeJourney />
      <AuditReadyRecords />
    </main>
  );
}