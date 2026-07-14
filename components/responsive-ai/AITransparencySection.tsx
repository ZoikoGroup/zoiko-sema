interface TransparencyCard {
  title: string;
  description: string;
}

const cards: TransparencyCard[] = [
  {
    title: "AI labels",
    description:
      "AI-generated summaries, decisions, tasks, or suggestions are clearly labeled where supported.",
  },
  {
    title: "Feature status",
    description:
      "Users see when AI features are active, unavailable, disabled, or restricted by admin policy.",
  },
  {
    title: "Source & context",
    description:
      "Where supported, output shows the meeting, transcript, thread, or workspace source behind it.",
  },
  {
    title: "Control visibility",
    description:
      "Users and admins know where to manage AI settings or request access changes.",
  },
  {
    title: "Participant awareness",
    description:
      "Meeting AI features may show participant-facing context where appropriate.",
  },
  {
    title: "Choice & reporting",
    description:
      "Users can give feedback, report errors, or raise concerns.",
  },
];

function TransparencyCard({
  title,
  description,
}: TransparencyCard) {
  return (
    <div className="rounded-xl border border-[#EEEBF6] bg-[#F8F6FD] p-5 transition-shadow duration-300 hover:shadow-md">
      <h3 className="text-[15px] font-extrabold text-[#111827]">
        {title}
      </h3>

      <p className="mt-3 text-[13px] leading-6 text-[#6B7280]">
        {description}
      </p>
    </div>
  );
}

export default function AITransparencySection() {
  return (
    <section className="bg-[#fbfafd] px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4F46E5]">
          Transparency & User Choice
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] lg:text-[32px]">
          Users see when AI is active.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <TransparencyCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}