const metrics = [
  {
    title: "Workers in scope",
    description:
      "Distinct workers included by approved population, role, period, and source coverage.",
    source: "HRIS",
    freshness: "Daily",
  },
  {
    title: "Verified hours",
    description:
      "Reviewed or system-verified time within the period under configured rules.",
    source: "Time & Attendance",
    freshness: "15 min",
  },
  {
    title: "Approval readiness",
    description:
      "Share of records complete enough for the configured approval/export process.",
    source: "Approvals",
    freshness: "15 min",
  },
  {
    title: "Needs human review",
    description:
      "Open exceptions requiring authorized review under policy — not proof of wrongdoing.",
    source: "Exception engine",
    freshness: "Real-time*",
  },
  {
    title: "Data quality",
    description:
      "Coverage, freshness, conflict, duplicate, and mapping health across sources.",
    source: "Integration layer",
    freshness: "5 min",
  },
];

export default function MetricDefinitions() {
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

        .metric-row{ transition: background-color .2s ease; }
        .metric-row:hover{ background-color: #FAFAFF; }
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              Metric Definitions
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Every number has a definition, a source, and a drill-down.
            </h2>
          </div>

          <div className="fade-up mt-14 rounded-2xl border border-[#ECECF4]" style={{ animationDelay: ".1s" }}>
            {metrics.map((metric, index) => (
              <div
                key={metric.title}
                className={`metric-row grid grid-cols-1 gap-4 px-6 py-6 sm:grid-cols-[1fr_2fr_auto] sm:items-center ${
                  index !== metrics.length - 1 ? "border-b border-[#ECECF4]" : ""
                }`}
              >
                <h3 className="text-base font-semibold text-[#1F2937]">
                  {metric.title}
                </h3>

                <p className="text-sm leading-6 text-[#6B7280]">
                  {metric.description}
                </p>

                <div className="flex gap-8 sm:justify-end">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
                      Source
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#1F2937]">
                      {metric.source}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
                      Freshness
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#16A34A]">
                      {metric.freshness}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
