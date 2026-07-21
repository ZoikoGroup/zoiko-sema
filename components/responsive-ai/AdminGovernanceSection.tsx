interface GovernanceCard {
  title: string;
  description: string;
  image: string;
}

const cards: GovernanceCard[] = [
  {
    title: "Agentic AI",
    description:
      "Configure AI agents with governance, permissions, and workspace controls.",
    image: "/responsive-ai/agentic.png",
  },
  {
    title: "Workspace Controls",
    description:
      "Protect sensitive content while enabling collaboration across teams.",
    image: "/responsive-ai/hand.png",
  },
];

export default function AdminGovernanceSection() {
  return (
    <section id="controls" className="bg-[#0B1033] px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#5868FF]">
          Admin Governance & Controls
        </p>

        <h2 className="max-w-4xl text-5xl font-bold text-white">
          Admins govern how AI is used.
        </h2>

        <p className="mt-5 max-w-5xl text-lg leading-8 text-[#B8BDD7]">
          Workspace owners and admins configure availability, permissions,
          sensitive spaces, retention, sharing, and audit visibility — where
          supported by plan and role.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-3xl bg-[#151C4A]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-[430px] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
