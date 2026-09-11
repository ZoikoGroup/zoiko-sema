import type { Metadata } from "next";
import {

  DepartmentSolutionsHero,
  WorkflowCenter,
  AdminConsole,
  DepartmentWorkflows,
  IntegrationsAnalytics,
  TemplateLibrary,
  CommonInquiries,
} from "@/components/department-solutions";

export const metadata: Metadata = {
  title: "Department Solutions Platform | Zoiko Sema",
  description: "Manage every department with Zoiko Sema solutions platform featuring tailored workflows, AI governance, compliance controls, and secure collaboration.",
};
export default function DepartmentSolutionsPage() {
  return (
    <main>
      <DepartmentSolutionsHero />
      <WorkflowCenter />
      <AdminConsole />
      <DepartmentWorkflows />
      <IntegrationsAnalytics />
      <TemplateLibrary />
      <CommonInquiries />
    </main>
  );
}