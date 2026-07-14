"use client";

interface Step {
  number: string;
  color: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    color: "bg-blue-500",
    title: "Report submitted",
    description:
      "Describe the barrier and the area affected — email is optional.",
  },
  {
    number: "2",
    color: "bg-[#6C5CE7]",
    title: "Triage",
    description:
      "The accessibility team reviews severity and affected surfaces.",
  },
  {
    number: "3",
    color: "bg-teal-500",
    title: "Remediation",
    description:
      "Confirmed issues are tracked and fixed alongside the roadmap.",
  },
  {
    number: "4",
    color: "bg-green-500",
    title: "Follow-up",
    description: "If you shared contact info, we let you know what changed.",
  },
];

export default function BarrierReportingFlowSection() {
  return (
    <section className="bg-[#F3F1FA] px-6 py-16 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-section { animation: fadeInUp 0.7s ease-out both; }
        .fade-in-item { animation: fadeInUp 0.6s ease-out both; }
      `}</style>

      <div className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Barrier reporting flow
        </p>
        <h2 className="max-w-xl text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          What happens after you report.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[65%_35%]">
          <div className="flex flex-col gap-6">
            {steps.map(({ number, color, title, description }, i) => (
              <div
                key={title}
                className="fade-in-item flex gap-5"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Timeline */}
                <div className="relative flex flex-col items-center">
                  <span
                    className={`z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${color}`}
                  >
                    {number}
                  </span>

                  {i !== steps.length - 1 && (
                    <div className="absolute top-10 h-[calc(100%+24px)] w-0.5 bg-gray-200" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="text-[18px] font-bold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="fade-in-item overflow-hidden rounded-2xl"
            style={{ animationDelay: "200ms" }}
          >
            <img
              src="/accessibility/barrier.png"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
