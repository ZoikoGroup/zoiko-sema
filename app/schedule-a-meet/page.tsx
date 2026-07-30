import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {
  ScheduleMeetHero,
  ScheduleMeetWhy,
  ScheduleMeetJourney,
  ScheduleMeetScreen,
  ScheduleMeetAvailability,
  ScheduleMeetRecurrence,
} from "@/components/schedule-a-meet";

export const metadata: Metadata = {
  title: "Governed Meeting Scheduling | Zoiko Sema",
  description:
    "Schedule governed meetings with Zoiko Sema. Coordinate calendars, time zones, and guests while applying policy controls before sending invitations.",
};

export default function ScheduleAMeetPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ScheduleMeetHero />
      <ScheduleMeetWhy />
      <ScheduleMeetJourney />
      <ScheduleMeetScreen />
      <ScheduleMeetAvailability />
      <ScheduleMeetRecurrence />
      <Footer />
    </main>
  );
}
