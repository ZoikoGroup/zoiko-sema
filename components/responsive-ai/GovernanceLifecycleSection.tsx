interface LifecycleStep {
  title: string;
  description: string;
  color: string;
}

const steps: LifecycleStep[] = [
  {
    title: "Define",
    description: "Feature scope, policy rules, risk review.",
    color: "bg-[#4F7EF7]",
  },
  {
    title: "Configure",
    description: "Admin controls, permissions, retention.",
    color: "bg-[#6D5AE8]",
  },
  {
    title: "Use",
    description: "AI summaries, action items, assistive output.",
    color: "bg-[#18A887]",
  },
  {
    title: "Review",
    description: "Human checks, edit history, quality, feedback.",
    color: "bg-[#171C39]",
  },
  {
    title: "Improve",
    description: "Reports, audits, metrics, updates.",
    color: "bg-[#2FB965]",
  },
];

function StepCard({ title, description, color }: LifecycleStep) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-[#E6E8F2] bg-white p-6">
      <div className={`mb-5 h-11 w-11 rounded-full ${color}`} />

      <h3 className="text-[17px] font-extrabold text-[#111827]">{title}</h3>

      <p className="mt-2 text-[13px] text-[#6B7280]">{description}</p>
    </div>
  );
}

export default function GovernanceLifecycleSection() {
  return (
    <section className="bg-[#fbfafd] px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5B63F6]">
          Governance Lifecycle
        </p>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] lg:text-[32px]">
          Define, configure, use, review, improve.
        </h2>

        <div className="mt-12 flex flex-col lg:flex-row lg:items-center">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <StepCard {...step} />

              {index !== steps.length - 1 && (
                <div className="mx-3 hidden h-[2px] rounded-full bg-[#8B7CFF] lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/responsive-ai/presentation.png"
              alt="Governance Meeting"
              className="h-[340px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/responsive-ai/meeting.png"
              alt="Business Review"
              className="h-[340px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
