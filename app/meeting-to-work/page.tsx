import { Metadata } from "next";
export const metadat={
  title:"Zoiko Sema Meeting to Work Platform",
  description:"Zoiko Sema transforms meetings into verified work by connecting conversations, decisions, and tasks into actionable workflows for better collaboration."
}

import {
  MeetingToWorkHeroSection,
  MeetingToWorkChallengeSection,
  MeetingToWorkSolutionSection,
  MeetingToWorkFeaturesSection,
} from "@/components/meeting-to-work";

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
