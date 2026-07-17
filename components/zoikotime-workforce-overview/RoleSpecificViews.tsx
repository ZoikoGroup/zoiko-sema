const roles = [
  {
    title: "Executive / Board",
    color: "#7C3AED",
    description: "Aggregated coverage, approval readiness, and risk trend.",
    action: "Open aggregate drill-down",
  },
  {
    title: "Organization Owner",
    color: "#2563EB",
    description: "Org health, roles, plan, policy, and audit.",
    action: "Configure & approve",
  },
  {
    title: "Workforce Admin",
    color: "#16A34A",
    description: "Population, records, queues, and source health.",
    action: "Assign & correct",
  },
  {
    title: "Manager",
    color: "#D97706",
    description: "Own team status, approvals, and exceptions.",
    action: "Approve within scope",
  },
  {
    title: "HR / Legal",
    color: "#7C3AED",
    description: "Authorized cases, policy, and challenges.",
    action: "Review & decide",
  },
  {
    title: "Finance / Payroll",
    color: "#2563EB",
    description: "Approval readiness, hours, and export blockers.",
    action: "Approve finance step",
  },
  {
    title: "Security / Privacy",
    color: "#DC2626",
    description: "Access, sessions, and integration incidents.",
    action: "Investigate case",
  },
  {
    title: "Worker",
    color: "#6B7280",
    description: "Own records, status, corrections, and challenge.",
    action: "Correct & submit",
  },
];

export default function RoleSpecificViews() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <section className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#D97706]">
              Role-Specific Views
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Same governed record layer. Different scope for every role.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role, index) => (
              <div
                key={role.title}
                className="fade-up overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="h-1" style={{ backgroundColor: role.color }} />

                <div className="p-5">
                  <h3 className="text-[14px] font-semibold text-[#1F2937]">
                    {role.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#6B7280]">
                    {role.description}
                  </p>

                  <span
                    className="mt-4 inline-block text-xs font-semibold"
                    style={{ color: role.color }}
                  >
                    {role.action}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="fade-up mt-10 overflow-hidden rounded-2xl shadow-lg"
            style={{ animationDelay: ".55s" }}
          >
            <img
              src="/zoikotime/workforce-overview/role-views-banner.png"
              alt="Abstract collage of role-scoped dashboards"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
