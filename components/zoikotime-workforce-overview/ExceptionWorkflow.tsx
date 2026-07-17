const steps = [
  {
    number: 1,
    label: "Detect",
    color: "#5B5FEF",
    description: "Rule, integration, or data-quality check identifies a deviation.",
    example: "Timer vs. schedule mismatch",
  },
  {
    number: 2,
    label: "Triage",
    color: "#14B8A6",
    description: "Priority set by operational impact, age, and policy.",
    example: "Priority: High · payroll risk",
  },
  {
    number: 3,
    label: "Assign",
    color: "#2563EB",
    description: "Routed to an authorized role with a due date.",
    example: "Owner: M. Alvarez · due 2d",
  },
  {
    number: 4,
    label: "Review",
    color: "#D97706",
    description: "Human considers source, context, and policy.",
    example: "Worker context attached",
  },
  {
    number: 5,
    label: "Resolve",
    color: "#16A34A",
    description: "Confirm, correct, dismiss, or escalate with rationale.",
    example: "Corrected · rationale logged",
  },
  {
    number: 6,
    label: "Learn",
    color: "#5B5FEF",
    description: "Analyze overrides and challenge outcomes to improve policy.",
    example: "Policy review scheduled",
  },
];

export default function ExceptionWorkflow() {
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
              Exception Workflow
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-[36px]">
              An exception is a review signal — never a verdict.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="fade-up overflow-hidden rounded-xl bg-[#171F38]"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="h-1" style={{ backgroundColor: step.color }} />

                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wide text-white">
                      {step.label}
                    </span>
                  </div>

                  <p className="mt-3 text-[13px] leading-6 text-[#9AA3C0]">
                    {step.description}
                  </p>

                  <span className="mt-4 inline-block rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-[#C8CEE6]">
                    {step.example}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="fade-up mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            style={{ animationDelay: ".6s" }}
          >
            <img
              src="/zoikotime/workforce-overview/exception-workflow.png"
              alt="Analyst reviewing exceptions across multiple monitors"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
