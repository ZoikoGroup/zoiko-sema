interface Boundary {
  title: string;
  description: string;
  action: string;
}

const boundaries: Boundary[] = [
  {
    title: "Illegal, harmful, or deceptive use",
    description:
      "AI must not support activities that violate law, safety, platform rules, or user rights.",
    action: "AI / Acceptable Use Policy",
  },
  {
    title: "Unauthorized access or security misuse",
    description:
      "AI must not be used to bypass controls, extract credentials, or misuse systems.",
    action: "Security Policy / Report",
  },
  {
    title: "Sensitive decisions",
    description:
      "AI output should not be the sole basis for high-impact decisions.",
    action: "Limitation language",
  },
  {
    title: "Privacy misuse",
    description:
      "AI should not expose or infer sensitive or personal information outside permitted controls.",
    action: "Privacy & Data / Report",
  },
  {
    title: "Unreviewed external sharing",
    description:
      "AI summaries and follow-ups should not be shared outside permitted audiences without review.",
    action: "Admin controls",
  },
  {
    title: "Misleading representation",
    description:
      "Do not present AI output as verified, final, or officially approved unless reviewed and authorized.",
    action: "AI Use Policy",
  },
];

function BoundaryRow({
  title,
  description,
  action,
}: Boundary) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#E8EAF6] bg-white p-5 md:flex-row md:items-start md:justify-between">
      <div className="flex gap-3">
        <span className="mt-[9px] h-2 w-2 rounded-full bg-[#EF4444]" />

        <div>
          <h3 className="text-[15px] font-bold text-[#111827]">
            {title}
          </h3>

          <p className="mt-1 text-[13px] leading-6 text-[#6B7280]">
            {description}
          </p>
        </div>
      </div>

      <button className="shrink-0 text-left text-[13px] font-semibold text-[#4F46E5] hover:text-[#4338CA]">
        {action}
      </button>
    </div>
  );
}

export default function AIBoundariesSection() {
  return (
    <section className="bg-[#F7F8FC] px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF4444]">
          Safety Boundaries
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] lg:text-[32px]">
          Where AI should not be used.
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#6B7280]">
          Categories and routes below align with the AI Use Policy, Acceptable
          Use Policy, and Security Policy. Final restrictions live in those
          approved documents.
        </p>

        <div className="mt-12 space-y-3">
          {boundaries.map((item) => (
            <BoundaryRow key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}