import {
  DepartmentSolutionsHero,
  WorkflowCenter,
  AdminConsole,
  DepartmentWorkflows,
  IntegrationsAnalytics,
  TemplateLibrary,
  CommonInquiries,
} from "@/components/department-solutions";

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
