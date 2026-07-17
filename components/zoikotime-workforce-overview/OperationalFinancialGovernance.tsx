import { ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Operational",
    description: "Coverage, approval readiness, and exception aging — without a productivity score.",
    color: "#2563EB",
    bg: "light",
  },
  {
    title: "Financial",
    description: "Payroll readiness, reconciliation, and export blockers before period close.",
    color: "#D97706",
    bg: "white",
  },
  {
    title: "Governance",
    description: "Policy health, jurisdiction coverage, and audit-ready evidence.",
    color: "#7C3AED",
    bg: "light",
  },
  {
    title: "Worker trust",
    description: "A personal view, a correction path, and a challenge route for every worker.",
    color: "#5EEAD4",
    bg: "dark",
  },
];

export default function OperationalFinancialGovernance() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const isDark = item.bg === "dark";

        return (
          <div
            key={item.title}
            className={`px-8 py-10 transition duration-300 hover:-translate-y-0.5 ${
              isDark ? "bg-[#11163C]" : item.bg === "white" ? "bg-white" : "bg-[#F8F7FD]"
            }`}
          >
            <ShieldCheck size={26} style={{ color: item.color }} strokeWidth={2} />

            <h3
              className={`mt-4 text-base font-semibold ${
                isDark ? "text-white" : "text-[#1F2937]"
              }`}
            >
              {item.title}
            </h3>

            <p
              className={`mt-2.5 text-sm leading-6 ${
                isDark ? "text-[#9AA3C0]" : "text-[#6B7280]"
              }`}
            >
              {item.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}
