const integrations = [
  { label: "HRIS / workforce system", detail: "Identity, manager, employment type", color: "#22C55E" },
  { label: "Time & attendance", detail: "Sessions, clock events, approvals", color: "#22C55E" },
  { label: "Scheduling / leave", detail: "Planned shift, approved leave", color: "#22C55E" },
  { label: "Payroll / finance", detail: "Export readiness, reconciliation", color: "#D97706" },
  { label: "Project / PSA / billing", detail: "Allocation and billable classification", color: "#22C55E" },
  { label: "Identity / security", detail: "SSO, MFA, SCIM, device context", color: "#22C55E" },
  { label: "APIs / webhooks", detail: "Approved read/write events", color: "#9CA3AF" },
];

export default function IntegrationsDataQuality() {
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

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#5EEAD4]">
              Integrations & Data Quality
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-[36px]">
              Systems of record stay authoritative. Quality stays visible.
            </h2>
          </div>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
            <div className="fade-up divide-y divide-white/10 rounded-2xl border border-white/10">
              {integrations.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 px-6 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[15px] font-medium text-white">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-right text-sm text-[#9AA3C0]">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="fade-up overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              style={{ animationDelay: ".2s" }}
            >
              <img
                src="/zoikotime/workforce-overview/integrations.png"
                alt="Team reviewing integration flow diagram"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
