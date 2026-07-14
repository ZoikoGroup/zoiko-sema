interface TrustCard {
  title: string;
  description: string;
  action: string;
}

const cards: TrustCard[] = [
  {
    title: "Privacy Notice",
    description: "Data categories, privacy choices, and request routes.",
    action: "View Privacy & Data →",
  },
  {
    title: "Data Processing Addendum",
    description:
      "Supports enterprise privacy and legal review of customer data processing.",
    action: "View DPA →",
  },
  {
    title: "Security Policy",
    description:
      "Security safeguards, access controls, and enterprise security review.",
    action: "Visit Security Center →",
  },
  {
    title: "Subprocessors",
    description:
      "Approved subprocessors categories and the applicable service provider list.",
    action: "View Subprocessors →",
  },
  {
    title: "Compliance",
    description:
      "Compliance posture, assurance documents, and enterprise review path.",
    action: "View Compliance →",
  },
  {
    title: "AI Use Policy",
    description:
      "Responsible AI usage restrictions, outputs, sharing, and reporting.",
    action: "Read AI Use Policy →",
  },
];

function TrustCard({ title, description, action }: TrustCard) {
  return (
    <div className="rounded-xl border border-[#E6E7F2] bg-white p-5 transition-shadow duration-300 hover:shadow-md">
      <h3 className="text-[17px] font-bold text-[#111827]">{title}</h3>

      <p className="mt-3 text-[15px] max-w-75 leading-6 text-[#6B7280]">{description}</p>

      <button className="mt-5 text-[13px] font-bold text-[#4F46E5] transition-colors hover:text-[#4338CA]">
        {action}
      </button>
    </div>
  );
}

export default function TrustMaterialSection() {
  return (
    <section className="bg-[#fbfafd] px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5B63F6]">
          Data, Privacy & Security
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#14162B] md:text-[32px]">
          AI use connects to approved trust material.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 bg-white lg:grid-cols-3">
          {cards.map((card) => (
            <TrustCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src="/responsive-ai/governance.png"
            alt="AI Governance"
            className="h-[360px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
