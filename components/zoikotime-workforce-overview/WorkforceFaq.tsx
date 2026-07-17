const faqGroups = [
  {
    category: "Product & Metrics",
    items: [
      {
        question: "What is ZoikoTime Workforce Overview?",
        answer:
          "A role-scoped dashboard for verified time, status, approvals, exceptions, policy health, data quality, and evidence.",
      },
      {
        question: "Does Workforce Overview show employees live?",
        answer:
          "It shows approved source records with timestamps and status definitions. A recorded session is not proof of productivity or exact presence.",
      },
      {
        question: "How are workforce metrics calculated?",
        answer:
          "Every metric has a definition, numerator/denominator, period, source coverage, exclusions, freshness, and drill-down.",
      },
    ],
  },
  {
    category: "Fairness & Governance",
    items: [
      {
        question: "Does ZoikoTime rank workers or teams?",
        answer:
          "No default public leaderboard or universal productivity score. Comparisons require an approved purpose, method, and safeguards.",
      },
      {
        question: "What happens when ZoikoTime finds an exception?",
        answer:
          "Source disclosure, human review, correction, worker context/challenge, rationale, and audit — never an automatic verdict.",
      },
      {
        question: "Can workers see or correct their own records?",
        answer:
          "Yes — personal view, notice, source, correction, challenge, and support according to deployment and law.",
      },
    ],
  },
  {
    category: "Payroll & Security",
    items: [
      {
        question: "Can Workforce Overview support payroll readiness?",
        answer:
          "It shows approved/pending/correction/export blockers and integrates with payroll rather than making automatic pay decisions.",
      },
      {
        question: "How does ZoikoTime protect sensitive workforce data?",
        answer:
          "Roles, purpose limitation, minimization, security controls, retention, access logging, and worker transparency.",
      },
      {
        question: "Is AI used in Workforce Overview?",
        answer:
          "For classification/prioritization support only, with sources, confidence, human-in-command review, and manual fallback.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "Can we integrate HRIS, time, payroll, scheduling, and project tools?",
        answer:
          "Yes, by category, with clear source-of-truth, permissions, mapping, and freshness — validated per connector.",
      },
      {
        question: "Can we start with one team?",
        answer:
          "Yes — start free or pilot with one team, then scale through the setup checklist, policy, and source connections.",
      },
      {
        question: "Is the page real-time?",
        answer:
          "Data is as current as configured source sync and coverage — we use precise latency and freshness language, not 'real-time' claims.",
      },
    ],
  },
];

export default function WorkforceFaq() {
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
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#5B5FEF]">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Common questions answered.
            </h2>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {faqGroups.map((group, groupIndex) => (
              <div key={group.category}>
                <p className="text-xs font-bold uppercase tracking-[2px] text-[#5B5FEF]">
                  {group.category}
                </p>

                <div className="mt-5 space-y-4">
                  {group.items.map((item, index) => (
                    <div
                      key={item.question}
                      className="fade-up rounded-2xl border border-[#E8EAF4] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                      style={{ animationDelay: `${groupIndex * 0.1 + index * 0.06}s` }}
                    >
                      <h3 className="text-[15px] font-semibold text-[#1F2937]">
                        {item.question}
                      </h3>
                      <p className="mt-2.5 text-sm leading-6 text-[#6B7280]">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
