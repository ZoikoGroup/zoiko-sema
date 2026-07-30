import type { Metadata } from "next";


import {
  MeetingToWorkHeroSection,
  MeetingToWorkChallengeSection,
  MeetingToWorkSolutionSection,
  MeetingToWorkFeaturesSection,
} from "@/components/meeting-to-work";

export const metadata: Metadata = {
  title: "Zoiko Sema Meeting to Work Platform",
  description: "Zoiko Sema transforms meetings into verified work by connecting conversations, decisions, and tasks into actionable workflows for better collaboration.",
};

export default function MeetingToWorkPage() {
  return (
    <main>
      <MeetingToWorkHeroSection />
      <MeetingToWorkChallengeSection />
      <MeetingToWorkSolutionSection />
      <MeetingToWorkFeaturesSection />
    </main>
  );
}