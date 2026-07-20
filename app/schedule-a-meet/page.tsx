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
