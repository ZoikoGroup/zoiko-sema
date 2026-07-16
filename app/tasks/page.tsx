import type { Metadata } from "next";
import {
  TasksBenefitsSection,
  TasksCtaSection,
  TasksFaqSection,
  TasksHeroSection,
  TasksPlansSection,
  TasksRecordsSection,
  TasksShowcaseSection,
  TasksSurfaceSection,
  TasksWorkflowSection,
} from "@/components/tasks";


export default function Page() {
  return (
    <>
         <TasksHeroSection />
        <TasksBenefitsSection />
        <TasksRecordsSection />
        <TasksShowcaseSection />
        <TasksWorkflowSection />
        <TasksSurfaceSection />
        <TasksPlansSection />
        <TasksFaqSection />
        <TasksCtaSection />
      
    </>
  );
}
