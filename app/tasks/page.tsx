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

export const metadata: Metadata = {
  title: "AI Task Management Platform | Zoiko Sema",
  description: "Manage workflows efficiently with AI task management tools from Zoiko Sema, designed to automate tasks, improve productivity & streamline business operations.",
};
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